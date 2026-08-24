"use client";

import { Fragment, useEffect, useRef } from "react";

const SHOW_WORK_IN_PROGRESS_CASE_STUDIES = false;

function useInView(){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{const node=ref.current;if(!node)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting)node.dataset.visible="true"},{threshold:.16});observer.observe(node);return()=>observer.disconnect()},[]);
  return ref;
}

function Reveal({children,className=""}:{children:React.ReactNode;className?:string}){
  const ref=useInView(); return <div className={`reveal ${className}`} ref={ref}>{children}</div>;
}

type CaseHighlight={value:string;label:string};

function CaseStudyCard({client,title,tags,highlights,href,cover,compactTitle=false}:{client:string;title:React.ReactNode;tags:string[];highlights:CaseHighlight[];href?:string;cover:React.ReactNode;compactTitle?:boolean}){
  const card=<>
    <div className="case-study-card-copy">
      <div>
        <p className="case-client">{client}</p>
        <h3 className={compactTitle?"compact-title":""}>{title}</h3>
      </div>
      <div className="case-card-bottom">
        <div className="case-card-tags">{tags.map((tag,index)=><Fragment key={tag}><span>{tag}</span>{index<tags.length-1&&<i aria-hidden="true">·</i>}</Fragment>)}</div>
        <div className="case-card-divider"/>
        <div className="case-card-impact">{highlights.map(item=><div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
        <span className="case-card-cta portfolio-cta">{href?"View Case Study":"Case Study Next"} <b>↗</b></span>
      </div>
    </div>
    <div className="case-study-card-media">
      <div className="case-cover">{cover}</div>
    </div>
  </>;
  return href?<a className="case-study-card" href={href} aria-label="View case study">{card}</a>:<article className="case-study-card case-study-card-upcoming">{card}</article>;
}

function AutocompleteCover(){
  return <div className="cover-image autocomplete-cover" role="img" aria-label="Autocomplete redesign across desktop, tablet, and mobile"/>;
}

function SellerCover(){
  return <div className="project-cover seller-cover" role="img" aria-label="Seller Page Revamp across storefront, products, videos, and reviews">
    <img className="seller-cover-image" src="/case-studies/seller/seller-cover.png" alt="Seller Page Revamp storefront, products, videos, and reviews"/>
  </div>;
}

function AIReviewCover(){
  return <div className="cover-image ai-review-cover" role="img" aria-label="AI Review Summary across the Digikala product detail and review experience"/>;
}

function ReviewSubmissionCover(){
  return <div className="cover-image review-submission-cover" role="img" aria-label="Review Submission Form two-step design flow"/>;
}

function NearbyCover(){
  return <div className="cover-image nearby-cover" role="img" aria-label="Address-aware Nearby and three-hour delivery discovery flow"/>;
}

function PorsOJooCover(){
  return <div className="project-cover pors-cover" role="img" aria-label="Pors-o-Joo community shopping feed, community, and question detail screens">
    <span className="pors-cover-label">Community shopping · 0→1</span>
    <img className="pors-cover-screen pors-cover-feed" src="/case-studies/pors-o-joo/feed.png" alt="Pors-o-Joo discovery feed"/>
    <img className="pors-cover-screen pors-cover-community" src="/case-studies/pors-o-joo/community.png" alt="Pors-o-Joo community page"/>
    <img className="pors-cover-screen pors-cover-question" src="/case-studies/pors-o-joo/question-detail.png" alt="Pors-o-Joo question and answer detail"/>
  </div>;
}

function DiaSupportCover(){
  return <div className="cover-image dia-support-cover" role="img" aria-label="Digikala Shopping Assistant and Support Chatbot experiences"/>;
}

function FooterWave(){
  const handRef=useRef<HTMLImageElement>(null);
  const copyrightRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    let frame=0,current=0,target=0;
    const clamp=(value:number)=>Math.max(0,Math.min(1,value));
    const ease=(value:number)=>value<.5?4*value*value*value:1-Math.pow(-2*value+2,3)/2;
    const pose=(progress:number)=>{
      const hand=handRef.current;if(!hand)return;
      let rotation=0,x=0;
      if(progress<1/3){const p=ease(progress*3);rotation=46*p;x=-10*p}
      else if(progress<2/3){const p=ease((progress-1/3)*3);rotation=46+(-70*p);x=-10+(20*p)}
      else{const p=ease((progress-2/3)*3);rotation=-24+(24*p);x=10-(10*p)}
      hand.style.transform=`translateX(${x}px) rotate(${rotation}deg)`;
    };
    const animate=()=>{current+=(target-current)*.08;pose(current);if(Math.abs(target-current)>.001)frame=requestAnimationFrame(animate)};
    const update=()=>{const node=copyrightRef.current;if(!node)return;target=clamp((window.innerHeight-node.getBoundingClientRect().top)/50);cancelAnimationFrame(frame);frame=requestAnimationFrame(animate)};
    update();window.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);
    return()=>{cancelAnimationFrame(frame);window.removeEventListener("scroll",update);window.removeEventListener("resize",update)};
  },[]);
  return <footer className="jenn-footer" id="contact">
    <div className="jenn-footer-inner">
      <div className="jenn-footer-main">
        <div className="jenn-footer-left">
          <h2>Open to new opportunities or side hustles, feel free to drop me a line <a href="mailto:mhziaee@gmail.com"><strong>mhziaee<wbr/>@gmail.com</strong></a></h2>
          <div className="jenn-footer-links">
            <div><a href="/Resume_Mohammad_Hossein_Ziaee_EN.pdf" target="_blank" rel="noreferrer">View CV</a></div>
            <div className="jenn-footer-social"><a href="https://www.linkedin.com/in/mhziaee/" target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
        </div>
        <div className="jenn-footer-art"><img ref={handRef} src="/footer-wave.svg" alt="Hand waving hello"/></div>
      </div>
      <div className="jenn-footer-copyright" ref={copyrightRef}>© 2026 Hossein Ziaee - Based in Tehran, Iran</div>
    </div>
  </footer>;
}

export default function Home(){
  return <main>
    <nav className="nav shell"><a className="brand" href="#top" aria-label="Hossein Ziaee, home">HZ.</a><div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div></nav>
    <section className="hero home-hero shell" id="top">
      <img className="hero-hand" src="/hero-hand-pen.png" alt="A hand holding a pen"/>
      <h1>
        <span className="hero-line"><strong>Hossein Ziaee</strong> is a product designer</span>{" "}
        <span className="hero-line">who is currently working at</span>{" "}
        <span className="hero-line"><span className="digikala-word">Digikala</span>.</span>
      </h1>
    </section>
    <section className="work shell" id="work"><div className="selected-work-intro"><h2><strong>Selected Work</strong></h2><p>Projects where I&apos;ve helped move the needle — turning ideas into<br className="selected-work-break"/> user wins and measurable successes</p><img src="/selected-work-emphasis.svg" alt="Line emphasizing Selected Work"/></div>
      <Reveal className="project case-project"><CaseStudyCard client="Digikala" title={<>Autocomplete<br/>Redesign</>} tags={["Search","Discovery","A/B Testing"]} highlights={[{value:"+28.7%",label:"Relative CTR lift"},{value:"1.17M+",label:"Units tested · 100% chance to win"},{value:"+5.5%",label:"Hit Rate · low-value rows removed"}]} href="/work/autocomplete" cover={<AutocompleteCover/>}/></Reveal>
      <Reveal className="project case-project"><CaseStudyCard client="Digikala" title={<>Seller Page<br/>Revamp</>} tags={["Seller Trust","Mobile + desktop","Proactively self-initiated"]} highlights={[{value:"Trust",label:"Clear seller identity"},{value:"Inventory",label:"Designed for changing availability"},{value:"Modules",label:"Flexible storefront content"}]} href="/work/seller-revamp" cover={<SellerCover/>}/></Reveal>
      <Reveal className="project case-project"><CaseStudyCard client="Digikala" title={<>AI Review<br/>Summary</>} tags={["AI","UGC","Experimentation"]} highlights={[{value:"+3%",label:"PDP → Add-to-Cart conversion · relative"},{value:"2×",label:"CTR · in-carousel vs. banner entry"},{value:"167K+",label:"Eligible products at rollout"}]} href="/work/ai-review-summary" cover={<AIReviewCover/>}/></Reveal>
      <Reveal className="project case-project"><CaseStudyCard client="Digikala" title={<>Review Submission<br/>Form</>} tags={["Sole Product Designer","A/B/C test","Cross-project reuse"]} highlights={[{value:"+24.6%",label:"Daily reviews · ~7K/day added"},{value:"+17.4%",label:"Daily reviewers"},{value:"+16.4%",label:"Form conversion"}]} href="/work/review-submission" cover={<ReviewSubmissionCover/>} compactTitle/></Reveal>
      {SHOW_WORK_IN_PROGRESS_CASE_STUDIES&&<>
        <Reveal className="project case-project"><CaseStudyCard client="Digikala" title={<>Nearby / 3-Hour<br/>Delivery Discovery</>} tags={["Sole Discovery Designer","App, Web, Desktop","Cross-squad rollout"]} highlights={[{value:"15%",label:"Eligible-product cart closures via carousel · 30 days"},{value:"+10%",label:"CTR · branded vs. white"},{value:"~10 days",label:"Design to production · 3 platforms"}]} href="/work/nearby-delivery" cover={<NearbyCover/>} compactTitle/></Reveal>
        <Reveal className="project case-project"><CaseStudyCard client="Digikala" title={<>Pors-o-Joo —<br/>Community Shopping</>} tags={["Sole Product Designer","App + Mobile Web","0→1 launch"]} highlights={[{value:"202,590",label:"Engaged users"},{value:"60,204",label:"Questions asked"},{value:"173,516",label:"Answers given"}]} href="/work/pors-o-joo" cover={<PorsOJooCover/>} compactTitle/></Reveal>
      </>}
      <Reveal className="project case-project"><CaseStudyCard client="Digikala" title={<>Shopping Assistant +<br/>Support Chatbot</>} tags={["Sole Product Designer","2-week sprint","App, Web, Desktop"]} highlights={[{value:"<1%\u00a0→\u00a03.7%",label:"DIA entry share of active users · observed"},{value:"Stable",label:"Support chatbot usage"},{value:"6",label:"Navigation concepts explored"}]} href="/work/shopping-assistant-support" cover={<DiaSupportCover/>} compactTitle/></Reveal>
    </section>
    <FooterWave/>
  </main>;
}
