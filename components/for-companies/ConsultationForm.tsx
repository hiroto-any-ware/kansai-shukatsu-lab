"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

const CONSULTATION_TYPES = ["取材について", "イベントについて", "その他"] as const;
type ConsultationType = (typeof CONSULTATION_TYPES)[number];

interface FormState {
  consultationType: ConsultationType;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  consultationType: "取材について",
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ConsultationForm({
  defaultType = "取材について",
}: {
  defaultType?: ConsultationType;
}) {
  const formId = useId();
  const [form, setForm] = useState<FormState>({
    ...INITIAL_STATE,
    consultationType: defaultType,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.companyName.trim()) next.companyName = "企業名をご入力ください。";
    if (!form.contactName.trim()) next.contactName = "ご担当者名をご入力ください。";
    if (!form.email.trim()) {
      next.email = "メールアドレスをご入力ください。";
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      next.email = "メールアドレスの形式をご確認ください。";
    }
    if (!form.message.trim()) next.message = "ご相談内容をご入力ください。";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send_failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-navy-900/8 bg-sky-50/60 p-8 text-center md:p-12"
        >
          <CheckCircle2 className="mx-auto text-accent-600" size={32} />
          <p className="font-display mt-4 text-lg font-bold text-navy-900">
            お問い合わせありがとうございます。
          </p>
          <p className="mt-2 text-sm leading-7 text-navy-500">
            内容を確認のうえ、担当より順次ご連絡いたします。今しばらくお待ちください。
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-2xl border border-navy-900/8 bg-white p-6 text-left shadow-[0_1px_2px_rgba(10,23,48,0.06)] md:p-10"
        >
          <div className="mb-6">
            <span className="mb-2 block text-xs font-semibold text-navy-600">
              ご相談の種類
            </span>
            <div className="flex flex-wrap gap-2">
              {CONSULTATION_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => update("consultationType", t)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 active:scale-95 ${
                    form.consultationType === t
                      ? "border-navy-900 bg-navy-900 text-white"
                      : "border-navy-900/15 text-navy-700 hover:border-navy-900/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              id={`${formId}-companyName`}
              label="企業名"
              required
              value={form.companyName}
              onChange={(v) => update("companyName", v)}
              error={errors.companyName}
              autoComplete="organization"
            />
            <Field
              id={`${formId}-contactName`}
              label="ご担当者名"
              required
              value={form.contactName}
              onChange={(v) => update("contactName", v)}
              error={errors.contactName}
              autoComplete="name"
            />
            <Field
              id={`${formId}-email`}
              label="メールアドレス"
              required
              type="email"
              value={form.email}
              onChange={(v) => update("email", v)}
              error={errors.email}
              autoComplete="email"
            />
            <Field
              id={`${formId}-phone`}
              label="電話番号（任意）"
              value={form.phone}
              onChange={(v) => update("phone", v)}
              autoComplete="tel"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor={`${formId}-message`}
              className="mb-1.5 block text-xs font-semibold text-navy-600"
            >
              ご相談内容 <span className="text-accent-600">*</span>
            </label>
            <textarea
              id={`${formId}-message`}
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="取材のご希望内容、イベントのご相談内容などをご自由にご記入ください。"
              className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 ${
                errors.message ? "border-red-400" : "border-navy-900/15"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
            )}
          </div>

          {status === "error" && (
            <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-xs leading-6 text-red-700">
              送信に失敗しました。お手数ですが時間を置いて再度お試しいただくか、
              <a
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
              >
                公式LINE
              </a>
              からご連絡ください。
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
          >
            {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
            {status === "submitting" ? "送信中..." : "この内容で相談する"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-navy-600">
        {label} {required && <span className="text-accent-600">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 ${
          error ? "border-red-400" : "border-navy-900/15"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
