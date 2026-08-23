import type {Metadata} from "next";
import ReviewSubmissionCaseStudy from "./ReviewSubmissionCaseStudy";

const title="Review Submission Form — Hossein Ziaee";
const description="A Digikala product design case study about simplifying review submission, testing one-step and rating-first flows, and choosing the winner by ecosystem-level UGC output.";
const cover="https://hossein-ziaee-portfolio.mhziaee-design.chatgpt.site/case-studies/review-submission/overview.png";

export const metadata:Metadata={
  title,
  description,
  openGraph:{title,description,images:[{url:cover}]},
  twitter:{title,description,images:[cover]},
};

export default function Page(){return <ReviewSubmissionCaseStudy/>}
