import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies, getCompanyBySlug } from "@/data/companies";
import { siteConfig } from "@/lib/site";
import { ArticleHero } from "@/components/company/ArticleHero";
import { CompanyProfile } from "@/components/company/CompanyProfile";
import { BusinessSummary } from "@/components/company/BusinessSummary";
import { Interview } from "@/components/company/Interview";
import { PullQuote } from "@/components/ui/PullQuote";
import { StudentQA } from "@/components/company/StudentQA";
import { EmployeeVoices } from "@/components/company/EmployeeVoices";
import { EditorialComment } from "@/components/company/EditorialComment";
import { RecruitmentInfo } from "@/components/company/RecruitmentInfo";
import { ArticleCTA } from "@/components/company/ArticleCTA";
import { RelatedCompanies } from "@/components/company/RelatedCompanies";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) return {};

  return {
    title: company.title,
    description: company.description,
    openGraph: {
      type: "article",
      title: company.title,
      description: company.description,
      url: `${siteConfig.url}/companies/${company.slug}`,
      images: [{ url: company.representativePhoto }],
      publishedTime: company.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: company.title,
      description: company.description,
      images: [company.representativePhoto],
    },
    alternates: {
      canonical: `/companies/${company.slug}`,
    },
  };
}

export default async function CompanyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = getCompanyBySlug(slug);
  if (!company) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: company.title,
    description: company.description,
    image: [company.representativePhoto],
    datePublished: company.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    about: {
      "@type": "Organization",
      name: company.companyName,
      address: company.location,
      foundingDate: company.foundedYear,
    },
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleHero company={company} />
      <CompanyProfile company={company} />
      <BusinessSummary company={company} />
      <Interview company={company} />
      <PullQuote
        quote={company.featuredQuote}
        attribution={`${company.representative.name} / ${company.representative.role}`}
      />
      <StudentQA company={company} />
      <EmployeeVoices company={company} />
      <EditorialComment company={company} />
      <RecruitmentInfo company={company} />
      <ArticleCTA company={company} />
      <RelatedCompanies current={company} />
    </div>
  );
}
