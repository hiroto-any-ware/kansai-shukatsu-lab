import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies, getCompanyBySlug } from "@/data/companies";
import { siteConfig } from "@/lib/site";
import { ArticleHero } from "@/components/company/ArticleHero";
import { CompanyProfile } from "@/components/company/CompanyProfile";
import { BusinessSummary } from "@/components/company/BusinessSummary";
import { ArticleBody } from "@/components/company/ArticleBody";
import { PullQuote } from "@/components/ui/PullQuote";
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

  const description = company.lead[0];

  return {
    title: company.title,
    description,
    openGraph: {
      type: "article",
      title: company.title,
      description,
      url: `${siteConfig.url}/companies/${company.slug}`,
      images: [{ url: company.photo }],
      publishedTime: company.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: company.title,
      description,
      images: [company.photo],
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
    description: company.lead[0],
    image: [company.photo],
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
      address: company.address,
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
      <ArticleBody company={company} />
      {company.featuredQuote && (
        <PullQuote
          quote={company.featuredQuote}
          attribution={`${company.interviewee.name} / ${company.interviewee.role}`}
        />
      )}
      <ArticleCTA company={company} />
      <RelatedCompanies current={company} />
    </div>
  );
}
