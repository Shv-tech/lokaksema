// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://your-domain.com";

  const routes = ["", "about", "speakers", "schedule", "sponsors", "contact"];

  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changefreq: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
