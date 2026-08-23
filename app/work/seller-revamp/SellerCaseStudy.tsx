"use client";

import {useState} from "react";

const views=[
  {label:"Storefront",src:"/case-studies/seller/final-overview.png",alt:"Seller storefront showing identity, trust signals, collections, and products",caption:"Identity, proof, content, and commerce in a seller-curated storefront"},
  {label:"Products",src:"/case-studies/seller/final-products.png",alt:"Seller storefront products tab with filters, sorting, and product cards",caption:"A focused catalog that keeps the seller context visible"},
  {label:"Video",src:"/case-studies/seller/final-video.png",alt:"Seller storefront video tab with a grid of seller-created videos",caption:"A dedicated surface for visual storytelling and video-led discovery"},
  {label:"Reviews",src:"/case-studies/seller/final-reviews.png",alt:"Seller storefront reviews tab with rating distribution and customer feedback",caption:"Seller feedback made part of the shopping decision"},
];

const principles=[
  {number:"01",title:"Identity",copy:"Give sellers a recognizable presence without fragmenting the marketplace experience."},
  {number:"02",title:"Ownership",copy:"Let each seller build up content, reputation, and merchandising value over time."},
  {number:"03",title:"Boundaries",copy:"Keep the system consistent while giving sellers meaningful control inside it."},
];

export default function SellerCaseStudy(){
  const [active,setActive]=useState(0);
  const view=views[active];
  return <main className="case-study seller-case">
    <nav className="case-nav shell"><a href="/">HZ.</a><span>Seller Page Revamp</span><a href="/">Close ×</a></nav>

    <header className="case-hero shell seller-case-hero">
      <p className="case-kicker">Seller Trust · Digikala</p>
      <h1>Turning seller profiles into<br/>shoppable destinations.</h1>
      <div className="case-intro seller-case-intro">
        <p>A proactively self-initiated redesign for mobile and desktop, turning a generic listing into a branded, searchable storefront that sellers can shape over time.</p>
        <div><span>Scope</span><strong>Mobile + desktop</strong><small>Seller trust · Controlled customization · Modular storefront</small></div>
      </div>
      <div className="seller-hero-visual" aria-label="Seller Page Revamp screens">
        <img className="seller-hero-screen seller-hero-screen-left" src="/case-studies/seller/hero-products.png" alt="Seller products tab"/>
        <img className="seller-hero-screen seller-hero-screen-center" src="/case-studies/seller/hero-storefront.png" alt="Seller storefront tab"/>
        <img className="seller-hero-screen seller-hero-screen-video" src="/case-studies/seller/hero-video.png" alt="Seller video tab"/>
        <img className="seller-hero-screen seller-hero-screen-right" src="/case-studies/seller/hero-reviews.png" alt="Seller reviews tab"/>
      </div>
    </header>

    <section className="seller-context">
      <div className="shell">
        <span className="seller-section-label">Context / 01</span>
        <h2>More seller-led traffic would only expose a weak destination.</h2>
        <p>Digikala was creating more journeys around sellers, yet those journeys still landed on a generic product list with no dedicated search, limited seller identity, and little room for merchandising or storytelling.</p>
        <div className="seller-context-grid">
          <div><span>Discovery</span><strong>No seller-level search or clear product organization.</strong></div>
          <div><span>Ownership</span><strong>Too little room for identity, story, and merchandising.</strong></div>
          <div><span>Retention</span><strong>Little accumulated value made leaving easier than improving.</strong></div>
        </div>
        <div className="seller-switching-cost">
          <span>Switching cost</span>
          <strong>The goal was not lock-in. It was accumulated value.</strong>
          <p>When a seller invests in their logo, storefront structure, content, reputation, and merchandising, the presence becomes worth improving—and more meaningful to lose by abandoning it.</p>
        </div>
      </div>
    </section>

    <section className="seller-principles shell">
      <div className="seller-heading-row"><span className="seller-section-label">Principles / 02</span><h2>Three concerns shaped the system.</h2></div>
      <div className="seller-principles-grid">{principles.map(item=><article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
    </section>

    <section className="seller-feature seller-feature-identity">
      <div className="shell seller-feature-grid">
        <div className="seller-feature-copy">
          <span className="seller-section-label">Controlled personalization / 03</span>
          <h2>A customizable header—not an ungoverned canvas.</h2>
          <p>The seller chooses a header color from an approved palette. A low-opacity outline pattern changes with the seller&apos;s product category, while the logo, biography, performance, and trust signals complete the identity layer.</p>
          <ul><li>Seller-selected header color</li><li>Category-aware visual pattern</li><li>Consistent marketplace trust hierarchy</li></ul>
        </div>
        <figure className="seller-phone-frame"><img src="/case-studies/seller/overview.webp" alt="Seller storefront with a category-patterned header, seller identity, and trust information"/><figcaption>Header · Seller-selected color, category pattern, identity, and proof</figcaption></figure>
      </div>
    </section>

    <section className="seller-sections shell">
      <div className="seller-heading-row"><span className="seller-section-label">Structure / 04</span><div><h2>One seller.<br/>Multiple reasons to stay.</h2><p>Dedicated views separate the seller-curated Storefront, complete product catalog, video content, and reviews while keeping seller context consistent.</p></div></div>
      <div className="seller-screen-pair">
        <figure><img src="/case-studies/seller/products.webp" alt="Seller products tab"/><figcaption><strong>Products</strong><span>Browse, filter, and sort the seller&apos;s assortment.</span></figcaption></figure>
        <figure><img src="/case-studies/seller/video.webp" alt="Seller video tab"/><figcaption><strong>Video</strong><span>Discover seller stories and products through a dedicated visual feed.</span></figcaption></figure>
        <figure><img src="/case-studies/seller/reviews.png" alt="Seller reviews tab"/><figcaption><strong>Reviews</strong><span>Use seller feedback as part of the purchase decision.</span></figcaption></figure>
      </div>
    </section>

    <section className="seller-storefront">
      <div className="shell">
        <div className="seller-heading-row">
          <span className="seller-section-label">Storefront system / 05</span>
          <div><h2>Sellers choose what appears—and in what order.</h2><p>The Storefront is not a fixed template. Digikala defines the component library and interaction patterns; each seller selects and orders the widgets through Seller Panel.</p></div>
        </div>
      </div>
    </section>

    <section className="seller-inventory">
      <div className="shell">
        <span className="seller-section-label">Dynamic navigation / 06</span>
        <h2>No empty tabs.<br/>No dead ends.</h2>
        <p>The navigation adapts to what each seller actually has, so optional content never creates an empty destination.</p>
        <div className="seller-state-grid">
          <article><span>01</span><strong>Storefront available</strong><p>The curated Storefront is the seller&apos;s first destination.</p></article>
          <article><span>02</span><strong>No Storefront</strong><p>Products becomes the first tab instead of showing an empty surface.</p></article>
          <article><span>03</span><strong>Optional content absent</strong><p>Video and future Reviews tabs appear only when relevant content exists.</p></article>
        </div>
      </div>
    </section>

    <section className="seller-demo shell">
      <div className="seller-demo-copy">
        <span className="seller-section-label">Final experience / 07</span>
        <h2>A storefront,<br/>not a profile.</h2>
        <p>Move through the real project screens to see how seller identity stays present across different shopping tasks.</p>
        <div className="seller-demo-tabs" role="tablist" aria-label="Seller page screens">{views.map((item,index)=><button key={item.label} type="button" role="tab" aria-selected={active===index} onClick={()=>setActive(index)}><span>0{index+1}</span>{item.label}</button>)}</div>
      </div>
      <figure className="seller-demo-stage" aria-live="polite"><img key={view.src} src={view.src} alt={view.alt}/><figcaption>{view.caption}</figcaption></figure>
    </section>

    <section className="reflection shell seller-reflection">
      <span>Reflection / 08</span><h2>What the system needed to hold.</h2>
      <div>
        <article><strong>A destination earns traffic.</strong><p>New seller-led entry points only create value when the page they reach supports discovery, trust, and conversion.</p></article>
        <article><strong>Ownership should compound.</strong><p>Identity, content, reputation, and merchandising give sellers a presence worth continuing to improve.</p></article>
        <article><strong>Freedom needs boundaries.</strong><p>Meaningful customization can coexist with platform consistency, moderation quality, and shopper trust.</p></article>
      </div>
    </section>

          <a className="next-project" href="/work/ai-review-summary"><span>Next case study</span><strong>AI Review Summary ↗</strong></a>
  </main>;
}
