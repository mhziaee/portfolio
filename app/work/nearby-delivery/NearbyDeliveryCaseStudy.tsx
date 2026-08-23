const addressStates=[
  {number:"01",title:"No precise address",copy:"Do not imply availability. Ask the customer to select an address, then refresh eligibility."},
  {number:"02",title:"Supported + inventory",copy:"Enable categories and show qualifying products with a consistent three-hour signal."},
  {number:"03",title:"Supported + empty category",copy:"Explain that no products are available in that category and keep navigation recoverable."},
  {number:"04",title:"Unsupported address",copy:"Disable exploration, explain coverage, and offer a clear Change address action."},
  {number:"05",title:"Address changed",copy:"Recalculate the carousel, badges, and downstream delivery promise."},
  {number:"06",title:"Transient failure",copy:"Fail safely—avoid a false promise and preserve a standard shopping path."},
];

export default function NearbyDeliveryCaseStudy(){return <main className="case-study nearby-case">
  <nav className="case-nav shell"><a href="/">HZ.</a><span>Nearby / 3-Hour Delivery Discovery</span><a href="/">Close ×</a></nav>

  <header className="case-hero shell nearby-hero">
    <p className="case-kicker">Fulfillment &amp; Discovery · Digikala</p>
    <h1>A filter made three-hour delivery accessible. A carousel made it discoverable.</h1>
    <div className="case-intro nearby-intro">
      <p>I led Discovery design for an address-dependent fulfillment capability—first making it usable inside Product Listing Pages, then turning it into a proactive Homepage journey across app, mobile web, and desktop.</p>
      <div><span>Role</span><strong>Sole Discovery Designer</strong><small>Problem framing · State model · PLP &amp; Homepage · Experiment · Design QA/QC</small></div>
    </div>
    <figure className="nearby-hero-visual"><img src="/case-studies/nearby/address-qualification-flow.webp" alt="Address qualification flow for Nearby three-hour delivery"/><figcaption>Real project flow · No address, supported address, and unsupported address</figcaption></figure>
  </header>

  <section className="nearby-outcome"><div className="shell">
    <span className="nearby-section-label">Outcome / 01</span>
    <h2>A fulfillment capability became a measurable discovery path.</h2>
    <div className="nearby-metrics">
      <article><strong>15%</strong><span>of eligible-product cart_closed_count</span><p>Generated through the Homepage carousel during its first 30 days.</p></article>
      <article><strong>+10%</strong><span>Carousel CTR</span><p>Branded-color treatment compared with the white treatment.</p></article>
      <article><strong>~10 days</strong><span>Design to production</span><p>Cross-squad rollout across app, mobile web, and desktop.</p></article>
    </div>
    <p className="nearby-metric-note">The 15% figure is a share of cart closures for products eligible for three-hour delivery—not revenue, GMV, total orders, or a platform-wide conversion lift.</p>
  </div></section>

  <section className="nearby-problem shell">
    <div className="nearby-heading-row"><span className="nearby-section-label">Context / 02</span><div><h2>Three-hour delivery existed. Customers still had to know to look for it.</h2><p>Customers mostly encountered the capability through filters and delivery badges after entering a shopping context. That made the feature reactive: useful for an existing intention, but weak at creating awareness of a new way to shop.</p></div></div>
    <div className="nearby-context-grid"><article><span>Capability</span><strong>Eligible products could arrive in under three hours.</strong></article><article><span>Dependency</span><strong>Eligibility changed with product inventory and the selected precise address.</strong></article><article><span>Opportunity</span><strong>Make speed a reason to begin exploring—not merely a checkout detail.</strong></article></div>
  </section>

  <section className="nearby-phase-one">
    <div className="shell nearby-heading-row"><span className="nearby-section-label">Phase one / 03</span><div><h2>First, make the promise filterable.</h2><p>I designed the PLP filter with precise-address dependency, an animated quick-filter chip, an in-feed educational banner that applied the filter, and product-card badges that preserved the promise while browsing.</p></div></div>
    <figure className="nearby-board-frame"><img src="/case-studies/nearby/plp-filter-board.webp" alt="Complete real design board for the Nearby filter and PLP states"/><figcaption>Source design board · PLP filter, entry points, and mobile/desktop states</figcaption></figure>
    <div className="shell nearby-learning"><span>What launch taught us</span><h3>Filter usage did not change meaningfully.</h3><p>The filter improved access, but still waited for customers to enter a PLP, notice it, understand the value, and choose it.</p></div>
  </section>

  <section className="nearby-pivot"><div className="shell"><span className="nearby-section-label">Reframe / 04</span><h2>Access is not discovery.</h2><div><strong>A filter serves intent;<br/>it rarely creates it.</strong><p>Instead of asking how to make the filter louder, we asked where customers could encounter three-hour delivery before forming a narrow search intent. The Homepage was the highest-leverage surface.</p></div></div></section>

  <section className="nearby-phase-two shell">
    <div className="nearby-heading-row"><span className="nearby-section-label">Phase two / 05</span><div><h2>Turn delivery speed into a Homepage discovery proposition.</h2><p>The new carousel surfaced eligible inventory early, organized it into fixed categories, and placed address recovery actions exactly where the eligibility decision occurred.</p></div></div>
    <div className="nearby-principles"><article><span>01</span><strong>Address-aware</strong><p>Qualify every promise against a precise address and current coverage.</p></article><article><span>02</span><strong>Proactive</strong><p>Introduce the benefit before search rather than behind a filter.</p></article><article><span>03</span><strong>Recoverable</strong><p>Explain missing coverage or inventory and offer the correct next action.</p></article><article><span>04</span><strong>Fast to validate</strong><p>Use fixed categories for a stable model and a reliable first release.</p></article></div>
    <figure className="nearby-wide-figure"><img src="/case-studies/nearby/carousel-states.webp" alt="Real Nearby Homepage carousel states"/><figcaption>Homepage carousel states · Address prompt, eligible inventory, and empty behavior</figcaption></figure>
  </section>

  <section className="nearby-state-system"><div className="shell">
    <span className="nearby-section-label">State system / 06</span><h2>Never make the promise more prominent than its accuracy.</h2>
    <div className="nearby-state-grid">{addressStates.map(state=><article key={state.number}><span>{state.number}</span><strong>{state.title}</strong><p>{state.copy}</p></article>)}</div>
    <figure className="nearby-flow-figure"><img src="/case-studies/nearby/address-qualification-flow.webp" alt="Detailed address and eligibility decision flow"/><figcaption>Eligibility logic · The same truth had to carry from Homepage through product cards, cart, and shipment</figcaption></figure>
  </div></section>

  <section className="nearby-board-section shell">
    <div className="nearby-heading-row"><span className="nearby-section-label">Production system / 07</span><div><h2>A connected system—not a standalone carousel.</h2><p>The final design covered tooltip onboarding below search, fixed-category tabs, disabled and empty states, select/change-address actions, PLP filtering and badges, plus responsive behavior across major platforms.</p></div></div>
    <figure className="nearby-board-frame nearby-carousel-board"><img src="/case-studies/nearby/homepage-carousel-board.webp" alt="Complete real design board for the Nearby Homepage carousel"/><figcaption>Source design board · Homepage carousel behavior and responsive production states</figcaption></figure>
  </section>

  <section className="nearby-experiment"><div className="shell">
    <span className="nearby-section-label">Experiment / 08</span><h2>Prominence was a hypothesis—not a styling preference.</h2>
    <div className="nearby-test-grid"><article><span>Variant A</span><strong>White</strong><p>Visually integrated with standard Homepage modules.</p></article><b>vs.</b><article className="selected"><span>Variant B · Selected</span><strong>Branded color</strong><p>Stronger identity and salience for the fulfillment proposition.</p></article></div>
    <div className="nearby-test-result"><strong>+10%</strong><span>Carousel CTR · branded vs. white</span><p>Overall Homepage CTR did not decline, so the module added a useful path without measured harm to its host surface.</p></div>
  </div></section>

  <section className="reflection shell nearby-reflection"><span>Reflection / 09</span><h2>What I took forward.</h2><div><article><strong>Availability is not a discovery strategy.</strong><p>Infrastructure can support intent without creating awareness or demand.</p></article><article><strong>Address is part of the product promise.</strong><p>Location capture, coverage feedback, and recovery actions belong in the core experience.</p></article><article><strong>Counter metrics protect the ecosystem.</strong><p>A local CTR win is incomplete if the host surface loses value.</p></article><article><strong>Speed still requires complete states.</strong><p>The 10-day timeline worked because the state model and cross-squad decisions were bounded and explicit.</p></article></div></section>

  <a className="next-project" href="/work/review-submission"><span>Next case study</span><strong>Review Submission Form ↗</strong></a>
</main>}
