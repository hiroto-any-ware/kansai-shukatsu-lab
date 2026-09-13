"use client";

import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companies } from "@/data/companies";

const ORBIT_ORDER = [
  "yamagata-harness",
  "shoei-seiki",
  "nagata-reiki",
  "chuo-denko",
  "hatta-keiami",
  "s-pack",
  "inoue-ribbon",
  "osaka-meiban",
  "maru-taka",
];

/**
 * ドラッグでの手動回転・自動回転（65秒/周）・ホバー/フォーカスでの一時停止を
 * 直接DOM操作で行う。Reactの状態更新だと毎フレームの再レンダーが重くなるため、
 * ref経由でCSS変数を書き換える方式にしている。
 */
function attachOrbitControls(root: HTMLDivElement) {
  const stage = root.querySelector<HTMLDivElement>(".lab-orbit-stage");
  const toggle = root.querySelector<HTMLInputElement>(".lab-rotation-toggle");
  if (!stage || !toggle) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let angle = 0;
  let frame = 0;
  let previous = 0;
  let hover = false;
  let suppressClickUntil = 0;
  let resumeAt = 0;
  let gesture: {
    id: number;
    x: number;
    y: number;
    angle: number;
    direction: "pending" | "horizontal" | "vertical";
  } | null = null;
  const controller = new AbortController();
  const options = { signal: controller.signal };

  const paint = () => root.style.setProperty("--orbit-turn", `${angle}deg`);

  const tick = (now: number) => {
    const elapsed = previous ? Math.min(now - previous, 50) : 0;
    previous = now;
    if (
      !reduced.matches &&
      !document.hidden &&
      toggle.checked &&
      !gesture &&
      !hover &&
      now > resumeAt &&
      !stage.querySelector(":focus-visible")
    ) {
      angle = (angle + (elapsed * 360) / 65000) % 360;
      paint();
    }
    frame = requestAnimationFrame(tick);
  };

  const down = (event: PointerEvent) => {
    if (!event.isPrimary || event.button !== 0 || gesture) return;
    suppressClickUntil = 0;
    gesture = { id: event.pointerId, x: event.clientX, y: event.clientY, angle, direction: "pending" };
  };

  const move = (event: PointerEvent) => {
    if (!gesture || event.pointerId !== gesture.id) return;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (gesture.direction === "pending") {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 8) return;
      gesture.direction = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
      if (gesture.direction === "horizontal") {
        stage.setPointerCapture(event.pointerId);
        root.dataset.dragging = "true";
      }
    }
    if (gesture.direction !== "horizontal") return;
    event.preventDefault();
    angle = gesture.angle + dx * (window.innerWidth < 761 ? 0.38 : 0.24);
    paint();
  };

  const finish = (event: PointerEvent) => {
    if (!gesture || event.pointerId !== gesture.id) return;
    if (gesture.direction === "horizontal") suppressClickUntil = performance.now() + 500;
    gesture = null;
    resumeAt = performance.now() + 1400;
    delete root.dataset.dragging;
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
  };

  stage.addEventListener("pointerdown", down, options);
  stage.addEventListener("pointermove", move, options);
  window.addEventListener("pointerup", finish, options);
  window.addEventListener("pointercancel", finish, options);
  stage.addEventListener("lostpointercapture", finish, options);
  stage.addEventListener(
    "click",
    (event) => {
      if (performance.now() < suppressClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    { ...options, capture: true }
  );
  stage.addEventListener("dragstart", (event) => event.preventDefault(), options);
  stage.addEventListener(
    "pointerenter",
    (event) => {
      if (event.pointerType === "mouse") hover = true;
    },
    options
  );
  stage.addEventListener(
    "pointerleave",
    (event) => {
      if (event.pointerType === "mouse") hover = false;
    },
    options
  );

  root.dataset.orbitInteractive = "true";
  paint();
  frame = requestAnimationFrame(tick);

  return () => {
    controller.abort();
    cancelAnimationFrame(frame);
    delete root.dataset.orbitInteractive;
    delete root.dataset.dragging;
    root.style.removeProperty("--orbit-turn");
  };
}

export function InterviewOrbit() {
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleId = useId();
  const ordered = ORBIT_ORDER.map((slug) => companies.find((c) => c.slug === slug)!);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return attachOrbitControls(root);
  }, []);

  return (
    <section id="stories" className="lab-section lab-interview-orbit">
      <div className="lab-section-head">
        <div>
          <p className="lab-label">INTERVIEWS</p>
          <h2>働く人から、知っていく。</h2>
        </div>
        <Link href="/interviews">
          すべての記事 <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>

      <div ref={rootRef} className="lab-carousel" role="region" aria-label="企業インタビューの回転ギャラリー">
        <input type="checkbox" id={toggleId} className="lab-rotation-toggle" defaultChecked />
        <label htmlFor={toggleId} className="lab-rotation-label">
          自動回転
        </label>
        <div className="lab-orbit-stage">
          <div className="lab-orbit-floor" aria-hidden="true" />
          <div className="lab-orbit-halo" aria-hidden="true" />
          <span className="lab-orbit-backdrop" aria-hidden="true">
            NEXT / PERSPECTIVE
          </span>
          <div className="lab-carousel-ring">
            {ordered.map((c, i) => (
              <article key={c.slug} className="lab-orbit-card" style={{ "--card-angle": `${i * 40}deg` } as React.CSSProperties}>
                <Link className="lab-orbit-face" href={`/companies/${c.slug}`}>
                  <div className="lab-orbit-photo">
                    <Image
                      src={c.photo}
                      alt={c.photoAlt}
                      fill
                      sizes="(max-width: 760px) 180px, 320px"
                      className="object-cover"
                      style={{ objectPosition: `50% ${c.photoFocusY ?? 30}%` }}
                    />
                  </div>
                  <div className="lab-orbit-caption">
                    <p>
                      {c.prefecture} ／ {c.category}
                    </p>
                    <h3>{c.companyName}</h3>
                    <span>
                      インタビューを読む <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
      <p className="lab-carousel-hint">左右にスワイプで回転 ・ タップで記事へ</p>
    </section>
  );
}
