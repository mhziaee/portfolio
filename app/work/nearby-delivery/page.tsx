import type {Metadata} from "next";
import NearbyDeliveryCaseStudy from "./NearbyDeliveryCaseStudy";

const title="Nearby / 3-Hour Delivery Discovery — Hossein Ziaee";
const description="A Digikala product design case study about moving three-hour delivery from a reactive PLP filter into proactive, address-aware Homepage discovery.";
const cover="https://hossein-ziaee-portfolio.mhziaee-design.chatgpt.site/case-studies/nearby/nearby-cover.webp";

export const metadata:Metadata={
  title,
  description,
  openGraph:{title,description,images:[{url:cover}]},
  twitter:{title,description,images:[cover]},
};

export default function Page(){return <NearbyDeliveryCaseStudy/>}
