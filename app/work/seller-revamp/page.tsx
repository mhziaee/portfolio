import type { Metadata } from "next";
import SellerCaseStudy from "./SellerCaseStudy";

const title="Seller Page Revamp — Hossein Ziaee";
const description="A self-initiated product design case study about turning Digikala seller profiles into modular, shoppable destinations across mobile and desktop.";
const cover="https://hossein-ziaee-portfolio.mhziaee-design.chatgpt.site/case-studies/seller/overview.webp";

export const metadata:Metadata={
  title,
  description,
  openGraph:{title,description,images:[{url:cover}]},
  twitter:{title,description,images:[cover]},
};

export default function Page(){return <SellerCaseStudy/>}
