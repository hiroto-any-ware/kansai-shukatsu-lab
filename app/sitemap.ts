import type { MetadataRoute } from "next";
import { companies } from "@/data/companies";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/companies",
    "/interviews",
    "/events",
    "/knowhow",
    "/about",
    "/for-companies",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const companyPages = companies.map((c) => ({
    url: `${siteConfig.url}/companies/${c.slug}`,
    lastModified: c.publishedAt,
  }));

  return [...staticPages, ...companyPages];
}
