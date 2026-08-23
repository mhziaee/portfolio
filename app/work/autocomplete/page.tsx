import type { Metadata } from "next";
import AutocompleteCaseStudy from "./AutocompleteCaseStudy";

export const metadata: Metadata = {
  title: "Autocomplete Redesign — Hossein Ziaee",
  description: "Turning Digikala autocomplete into a scalable search-routing system, with a 28.7% CTR uplift in a design-only A/B test.",
  openGraph: { title: "Autocomplete Redesign — Hossein Ziaee", description: "A product design case study about search routing, dynamic ranking, and measurable impact.", images: [] },
  twitter: { title: "Autocomplete Redesign — Hossein Ziaee", description: "A product design case study about search routing, dynamic ranking, and measurable impact.", images: [] },
};

export default function Page(){ return <AutocompleteCaseStudy/>; }
