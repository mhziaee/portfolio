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
// Vercel deployment retrigger
