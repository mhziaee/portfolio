"use client";
import { useEffect, useRef, useState } from "react";

const routes=["Query","Query in category","Brand","Seller","Campaign","Product"];
const trendingSearches=["لوازم تحریر","قمقمه","پاور بانک","laptop","خودکار"];
const goldResults=[
  {label:"انگشتر طلا",context:"در انگشتر طلا زنانه",type:"category"},
  {label:"انگشتر طلا مردانه",type:"query"},
  {label:"انگشتر طلا کم اجرت",type:"query"},
  {label:"انگشتر طلا زنانه",context:"در انگشتر طلا زنانه",type:"category"},
  {label:"انگشتر طلا بدون اجرت",type:"query"},
  {label:"انگشتر طلای کم اجرت",type:"query"},
  {label:"انگشتر طلای مردانه",context:"در انگشتر طلا مردانه",type:"category"},
  {label:"انگشتر طلا کم اجرت زنانه",type:"query"},
  {label:"انگشتر طلا مینیمال",type:"query"},
];

function resultsFor(query:string){
  const value=query.trim();
  if(!value)return [];
  if(value.includes("انگشتر")||value.includes("طلا"))return goldResults;
  return [
    {label:value,context:`در دسته‌بندی ${value}`,type:"category"},
    {label:`${value} اصل`,type:"query"},
    {label:`${value} ارزان`,type:"query"},
    {label:`خرید ${value}`,type:"query"},
    {label:`بهترین ${value}`,type:"query"},
  ];
}

export default function AutocompleteCaseStudy(){
  const [open,setOpen]=useState(false);
  const [query,setQuery]=useState("انگشتر طلا");
  const [selected,setSelected]=useState(-1);
  const inputRef=useRef<HTMLInputElement>(null);
  const demoResults=resultsFor(query);
  const openSearch=()=>{setQuery("انگشتر طلا");setSelected(-1);setOpen(true)};
  useEffect(()=>{if(!open)return;const frame=window.requestAnimationFrame(()=>inputRef.current?.focus());const previous=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{window.cancelAnimationFrame(frame);document.body.style.overflow=previous}},[open]);
  useEffect(()=>{setSelected(-1)},[query]);
  useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openSearch();return}if(!open)return;if(e.key==="Escape")setOpen(false);else if(e.key==="ArrowDown"&&demoResults.length){e.preventDefault();setSelected(v=>(v+1)%demoResults.length)}else if(e.key==="ArrowUp"&&demoResults.length){e.preventDefault();setSelected(v=>v<0?demoResults.length-1:(v-1+demoResults.length)%demoResults.length)}else if(e.key==="Enter"&&selected>=0){e.preventDefault();setOpen(false)}};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[open,demoResults.length,selected]);
  return <main className="case-study">
    <nav className="case-nav shell"><a href="/">HZ.</a><span>Autocomplete Redesign</span><a href="/">Close ×</a></nav>
    <header className="case-hero shell"><p className="case-kicker">Search & Discovery · Digikala</p><h1>Autocomplete became<br/>a routing system.</h1><div className="case-intro"><p>Helping shoppers move from intent to the right product, category, brand, seller, or campaign—by making every destination easier to recognize and navigate.</p><div><span>Impact</span><strong>+28.7%</strong><small>Autocomplete CTR · Design-only A/B test</small></div></div><div className="hero-product"><img src="/case-studies/autocomplete/hero-overview.png" alt="Final autocomplete experience across desktop and mobile"/></div></header>

    <section className="case-impact"><div className="shell"><span>Outcome / 01</span><strong>+28.7%</strong><h2>Autocomplete CTR</h2><p>The first experiment kept the API and ranking logic unchanged. The uplift isolated the effect of the redesigned interface.</p></div></section>

    <section className="case-section shell"><div className="case-copy"><span>Problem / 02</span><h2>The old autocomplete only supported queries and categories.</h2><p>Products, brands, sellers, and campaigns were not searchable destinations in the previous experience. Supporting them required a new result structure—not simply a visual refresh of the old list.</p></div><div className="annotated-visual"><img src="/case-studies/autocomplete/desktop-old.png" alt="Old Digikala desktop autocomplete with query and category suggestions"/><span className="annotation-pin pin-query" aria-hidden="true">1</span><span className="annotation-pin pin-category" aria-hidden="true">2</span><span className="annotation-pin pin-density" aria-hidden="true">3</span></div><ol className="annotation-notes"><li><span>01</span><strong>Query suggestions</strong><p>Below the divider, autocomplete returns plain text-query suggestions.</p></li><li><span>02</span><strong>Categories only</strong><p>Categories were the only navigable destination type in the previous experience.</p></li><li><span>03</span><strong>Limited result density</strong><p>Tall rows allow fewer suggestions to remain visible at once.</p></li></ol></section>

    <section className="reframe"><div className="shell"><span>Insight / 03</span><h2>Autocomplete wasn’t a list anymore.<br/><em>It was a routing layer.</em></h2><div className="route-map"><strong>One search intent</strong><div>{routes.map(route=><span key={route}>{route}</span>)}</div></div><p>One intent could lead to fundamentally different destinations. The interface needed to make each type recognizable without depending on a fixed result order.</p></div></section>

    <section className="case-section shell"><div className="case-copy split-copy"><span>Exploration / 04</span><h2>Before typing, how much discovery is too much?</h2><p>I explored different ways to make the pre-search state useful—from familiar shortcuts and recent activity to richer discovery modules. These explorations helped define what should appear before a query and what should wait until the user’s intent became clearer.</p></div><div className="wide-asset"><img src="/case-studies/autocomplete/ideation.png" alt="Selected pre-search explorations from the project Figma file"/></div><div className="decision"><span>Decision</span><h3>Do less, better.</h3><p>Keep Search History and Trending Searches rather than turning search into another crowded discovery surface.</p></div></section>

    <section className="case-section shell many-intents"><div className="case-copy"><span>System / 05</span><h2>Different destinations.<br/>One coherent system.</h2><p>Each result type received enough identity to be recognized while staying part of the same autocomplete model.</p></div><div className="phone-pair"><figure><img src="/case-studies/autocomplete/mobile-presearch.png" alt="Final mobile pre-search design"/><figcaption>Pre-search · History and trending</figcaption></figure><figure><img src="/case-studies/autocomplete/mobile-results.png" alt="Final mobile autocomplete results design"/><figcaption>Results · Multiple destination types</figcaption></figure></div></section>

    <section className="ranking"><div className="shell"><span>Constraint / 06</span><h2>The UI couldn’t depend on where a result appeared.</h2><div className="ranking-visual"><img src="/case-studies/autocomplete/ranking-order.png" alt="The same autocomplete entity types shown in two different ranking orders"/></div><p>Ranking was controlled by Search and Big Data. I designed every entity type to remain understandable in any position, including newer types with limited historical signals.</p></div></section>

    <section className="case-section shell"><div className="case-copy"><span>Before / After · 07</span><h2>Less noise.<br/>More routes.</h2></div><div className="comparison"><figure><img src="/case-studies/autocomplete/desktop-old.png" alt="Old autocomplete interface"/><figcaption>Before · Text-heavy, repetitive suggestions</figcaption></figure><figure><img src="/case-studies/autocomplete/desktop-results.png" alt="Final autocomplete interface"/><figcaption>After · Clear, position-independent destinations</figcaption></figure></div></section>

    <section className="keyboard-section"><div className="shell"><div className="case-copy"><span>Interaction / 08</span><h2>Search without reaching for the mouse.</h2><p>The desktop experience extends beyond visual design. Press Cmd/Ctrl+K now, then use ↑ ↓, Enter, and Esc.</p><button className="portfolio-cta portfolio-cta-light" onClick={openSearch}>Try keyboard search <kbd>⌘ K</kbd></button></div><img src="/case-studies/autocomplete/desktop-empty.png" alt="Final desktop search open state"/></div></section>

    <section className="experiment shell"><div className="case-copy"><span>Evidence / 09</span><h2>Proving the interface before changing the algorithm.</h2><p>To isolate the impact of the redesigned interface, we tested it using the existing API and ranking model.</p></div><div className="test-grid"><div><span>Control</span><p>Old API</p><p>Old ranking</p><strong>Old UI</strong></div><b>vs.</b><div><span>Variation</span><p>Old API</p><p>Old ranking</p><strong>New UI</strong></div></div><div className="experiment-result"><strong>+28.7%</strong><span>Autocomplete CTR</span></div></section>

    <section className="less"><div className="shell"><span>Trade-off / 10</span><h2>Less performed better.</h2><div className="less-grid"><div><strong>+5.3%</strong><p>Hit Rate</p><span>Removing low-value category entries</span></div><div><strong>+1.3%</strong><p>Hit Rate</p><span>Removing repeated suggestions</span></div><div><strong>+5.5%</strong><p>Hit Rate</p><span>Removing both</span></div></div><p>Improving autocomplete wasn’t only about richer destinations. Removing weak and repetitive results mattered just as much.</p></div></section>

    <section className="reflection shell"><span>Reflection / 11</span><h2>What I took forward.</h2><div><article><strong>Less can improve discovery.</strong><p>Removing low-value and repetitive results made the experience clearer—and improved performance.</p></article><article><strong>Isolate the impact of design.</strong><p>Keeping the API and ranking model unchanged allowed us to measure the redesigned interface independently.</p></article><article><strong>Make every destination recognizable—regardless of order.</strong><p>Each result type needed to remain clear and identifiable even when its position changed dynamically.</p></article></div></section>
    <a className="next-project" href="/work/seller-revamp"><span>Next case study</span><strong>Seller Page Revamp ↗</strong></a>

    {open&&<div className="dk-search-overlay" onMouseDown={()=>setOpen(false)}><section className="dk-search-modal" dir="rtl" role="dialog" aria-modal="true" aria-label="Digikala autocomplete demo" onMouseDown={e=>e.stopPropagation()}><div className="dk-search-field"><img className="dk-search-glass" src="/case-studies/autocomplete/search-icons/search.svg" alt=""/><input ref={inputRef} value={query} onChange={e=>setQuery(e.target.value)} placeholder="جستجو در همه کالاها" aria-label="جستجو در همه کالاها" aria-activedescendant={query&&selected>=0?`dk-result-${selected}`:undefined}/>{query&&<button className="dk-search-clear" onClick={()=>setQuery("")} aria-label="پاک کردن جستجو"><img src="/case-studies/autocomplete/search-icons/nav-close.svg" alt=""/></button>}</div>{query?<div className="dk-search-results" role="listbox">{demoResults.map((result,i)=><button id={`dk-result-${i}`} role="option" aria-selected={i===selected} className={`dk-search-result ${i===selected?"selected":""}`} key={`${result.label}-${i}`} onMouseEnter={()=>setSelected(i)} onClick={()=>setOpen(false)}><img className={`dk-result-icon ${result.type}`} src={result.type==="category"?"/case-studies/autocomplete/search-icons/cat-all.svg":"/case-studies/autocomplete/search-icons/search.svg"} alt=""/><strong>{result.label}</strong>{result.context&&<small>{result.context}</small>}</button>)}</div>:<div className="dk-presearch"><h3>جستجوهای پرطرفدار</h3><div>{trendingSearches.map(item=><button key={item} onClick={()=>setQuery(item)}><span aria-hidden="true">↗</span>{item}</button>)}</div></div>}</section></div>}
  </main>
}
