import { notFound } from "next/navigation";

import Home, { Locale } from "./Home";
import enContent from "@/content/en.json";
import csContent from "@/content/cs.json";

const CONTENT_MAP: Record<Locale, typeof enContent> = {
  en: enContent,
  cs: csContent,
};

const isLocale = (value: string): value is Locale => value === "en" || value === "cs";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "cs" }];
}

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;

  if (!localeParam || !isLocale(localeParam) || !(localeParam in CONTENT_MAP)) {
    notFound();
  }

  const content = CONTENT_MAP[localeParam];

  return <Home locale={localeParam} content={content} />;
}
