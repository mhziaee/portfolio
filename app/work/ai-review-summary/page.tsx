import type {Metadata} from "next";
import AIReviewSummaryCaseStudy from "./AIReviewSummaryCaseStudy";

const title="AI Review Summary — Hossein Ziaee";
const description="A Digikala product design case study about structuring AI-generated review summaries, testing banner and in-carousel entry points, and lifting PDP-to-Add-to-Cart conversion.";
const cover="https://hossein-ziaee-portfolio.mhziaee-design.chatgpt.site/case-studies/ai-review/ai-review-cover.png";

export const metadata:Metadata={
  title,
  description,
  openGraph:{title,description,images:[{url:cover}]},
  twitter:{title,description,images:[cover]},
};

export default function Page(){return <AIReviewSummaryCaseStudy/>}
