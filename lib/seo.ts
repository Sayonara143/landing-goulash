import type { Metadata } from "next";
import { profile } from "./data";

export const siteUrl = profile.url;

// JSON-LD: schema.org Person для богатого сниппета в поиске.
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Екатеринбург",
      addressCountry: "RU",
    },
    sameAs: [profile.telegram, profile.github, profile.resume],
    knowsAbout: [
      "Backend Development",
      "API Integration",
      "Event-driven Architecture",
      "AI Automation",
      "Data Pipelines",
    ],
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "AI Automation",
    "AI Generalist",
    "Backend",
    "Python",
    "Golang",
    "интеграции API",
    "event-driven",
    "Александр Быков",
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "ru_RU",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};
