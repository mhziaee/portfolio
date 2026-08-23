import type {Metadata} from "next";
import PorsOJooCaseStudy from "./PorsOJooCaseStudy";

const title="Pors-o-Joo — Community Shopping, Zero to Launch — Hossein Ziaee";
const description="A Digikala 0-to-1 product design case study about building a community shopping experience, integrating it with Magnet, and launching on App and Mobile Web.";
const cover="https://hossein-ziaee-portfolio.mhziaee-design.chatgpt.site/case-studies/pors-o-joo/community.png";

export const metadata:Metadata={
  title,
  description,
  openGraph:{title,description,images:[{url:cover}]},
  twitter:{title,description,images:[cover]},
};

export default function Page(){return <PorsOJooCaseStudy/>}
