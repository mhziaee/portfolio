import type {Metadata} from "next";
import ShoppingAssistantSupportCaseStudy from "./ShoppingAssistantSupportCaseStudy";

const title="Shopping Assistant + Support Chatbot — Hossein Ziaee";
const description="A Digikala product design case study about unifying an AI shopping assistant and structured support chatbot through a context-aware, user-controlled entry experience.";
const cover="https://hossein-ziaee-portfolio.mhziaee-design.chatgpt.site/case-studies/dia-support/dia-support-home-cover.png";

export const metadata:Metadata={
  title,
  description,
  openGraph:{title,description,images:[{url:cover}]},
  twitter:{title,description,images:[cover]},
};

export default function Page(){return <ShoppingAssistantSupportCaseStudy/>}
