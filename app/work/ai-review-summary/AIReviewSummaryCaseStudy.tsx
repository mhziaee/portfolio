const outputLayers=[
  {number:"01",title:"Overall synthesis",copy:"A concise reading of the recurring themes across eligible customer reviews."},
  {number:"02",title:"Positive themes",copy:"Repeated strengths are grouped into scannable signals instead of isolated quotes."},
  {number:"03",title:"Negative themes",copy:"Recurring concerns remain visible so compression does not turn into promotion."},
];

const concepts=[
  {number:"01",title:"First carousel card",copy:"Appears inside the review stream and opens the full summary in a bottom sheet.",status:"Tested"},
  {number:"02",title:"Inline above reviews",copy:"Maximizes visibility, but risks adding density and displacing the source reviews.",status:"Explored"},
  {number:"03",title:"Dedicated banner",copy:"Creates a clear entry point, but can feel more promotional than contextual.",status:"Tested"},
];

const cohorts=[
  {name:"Banner",share:"30%",detail:"A dedicated entry above the review content."},
  {name:"Carousel",share:"30%",detail:"The summary becomes the first card in the review carousel.",winner:true},
  {name:"Control",share:"40%",detail:"The existing PDP without an AI Summary entry point."},
];

export default function AIReviewSummaryCaseStudy(){return <main className="case-study ai-review-case">
  <nav className="case-nav shell"><a href="/">HZ.</a><span>AI Review Summary</span><a href="/">Close ×</a></nav>

  <header className="case-hero shell ai-review-hero">
    <p className="case-kicker">AI · UGC · Experimentation · Digikala</p>
    <h1>Turning thousands of reviews into a trustworthy decision aid.</h1>
    <div className="case-intro ai-review-intro">
      <p>I designed the experience end to end—from the structure of the model&apos;s output to its entry point on the PDP—and used a controlled experiment to decide how the summary should be discovered.</p>
      <div><span>Role</span><strong>Product Designer</strong><small>Prompt collaboration · Interaction design · A/B test · Handoff &amp; QC</small></div>
    </div>
    <figure className="ai-review-hero-visual"><img src="/case-studies/ai-review/ai-review-cover.png" alt="AI Review Summary across the Digikala product detail and review experience"/><figcaption>Product detail page · Review carousel · Full AI summary</figcaption></figure>
  </header>

  <section className="ai-review-outcome">
    <div className="shell">
      <span className="ai-review-section-label">Outcome / 01</span>
      <h2>A contextual entry point moved both discovery and purchase behavior.</h2>
      <div className="ai-review-metrics">
        <article><strong>+3%</strong><span>PDP → Add-to-Cart</span><p>Relative conversion lift for exposed users versus control.</p></article>
        <article><strong>≈2×</strong><span>Entry-point CTR</span><p>In-carousel placement compared with the dedicated banner.</p></article>
        <article><strong>167K+</strong><span>Eligible products</span><p>Expanded rollout for products with more than 20 reviews.</p></article>
      </div>
      <p className="ai-review-outcome-note">The feature remains in production. Original reviews stayed accessible throughout the experience and their engagement was monitored as a health guardrail.</p>
    </div>
  </section>

  <section className="ai-review-problem shell">
    <div className="ai-review-heading-row"><span className="ai-review-section-label">Problem / 02</span><div><h2>The reviews contained the answer. Finding it was the work.</h2><p>Customers often needed to scan many individual reviews to understand recurring strengths, weaknesses, and lived experience. The design challenge was to compress that evidence without presenting the AI output as a replacement for the underlying social proof.</p></div></div>
    <div className="ai-review-problem-grid">
      <article><span>Scale</span><strong>High-review PDPs demanded too much scanning.</strong><p>A useful signal was distributed across many separate customer contributions.</p></article>
      <article><span>Trust</span><strong>The synthesis had to show both sides.</strong><p>Positive and negative themes needed equal structural weight.</p></article>
      <article><span>Continuity</span><strong>Source reviews could not disappear.</strong><p>Customers still needed a direct path to photos, ratings, and full review text.</p></article>
    </div>
  </section>

  <section className="ai-review-output">
    <div className="shell">
      <span className="ai-review-section-label">Output design / 03</span>
      <h2>Designing the model&apos;s output was part of designing the product.</h2>
      <p className="ai-review-output-lead">Alongside Product and Engineering, I iterated on prompts, models, and review sets. The final response moved from a broad synthesis into positive and negative themes, so customers could scan quickly without losing the tensions inside the source material.</p>
      <div className="ai-review-output-grid"><div>{outputLayers.map(layer=><article key={layer.number}><span>{layer.number}</span><div><strong>{layer.title}</strong><p>{layer.copy}</p></div></article>)}</div><figure><img src="/case-studies/ai-review/summary.webp" alt="AI Review Summary bottom sheet showing synthesis, positive themes, negative themes, and helpfulness feedback"/><figcaption>Full summary · Bottom sheet · Helpful / not helpful feedback</figcaption></figure></div>
    </div>
  </section>

  <section className="ai-review-exploration shell">
    <div className="ai-review-heading-row"><span className="ai-review-section-label">Exploration / 04</span><div><h2>Where should a generated summary enter a human conversation?</h2><p>I explored three placements. The choice was not just about visibility: each option changed whether the feature felt native to the review experience, promotional, or disruptive to the source content.</p></div></div>
    <figure className="ai-review-wide-figure"><img src="/case-studies/ai-review/doc-assets/entry-explorations.png" alt="Explorations for AI Review Summary entry points on the Digikala product detail page"/><figcaption>Actual entry-point explorations from the design process</figcaption></figure>
    <div className="ai-review-concept-grid">{concepts.map(concept=><article key={concept.number}><div><span>{concept.number}</span><i>{concept.status}</i></div><strong>{concept.title}</strong><p>{concept.copy}</p></article>)}</div>
  </section>

  <section className="ai-review-experiment">
    <div className="shell">
      <span className="ai-review-section-label">A/B test / 05</span>
      <h2>Two placements entered the test.<br/>A holdout kept the result honest.</h2>
      <p className="ai-review-experiment-lead">The staged experiment compared a banner and an in-carousel card against the existing PDP. The primary placement question was measured through entry CTR, while downstream PDP-to-Add-to-Cart conversion was compared with control. Review interaction remained a guardrail.</p>
      <div className="ai-review-cohorts">{cohorts.map(cohort=><article className={cohort.winner?"selected":""} key={cohort.name}><div><span>{cohort.name}</span>{cohort.winner&&<b>Selected</b>}</div><strong>{cohort.share}</strong><p>{cohort.detail}</p></article>)}</div>
      <div className="ai-review-test-result"><div><span>Placement result</span><strong>≈2×</strong><p>The carousel entry achieved roughly twice the click-through rate of the banner. Its position inside the review stream likely made the feature feel more contextual; that explanation is a design inference, not a separately tested causal claim.</p></div><div><span>Product result</span><strong>+3%</strong><p>Exposed users showed a 3% relative lift in PDP-to-Add-to-Cart conversion versus control, supporting expansion beyond the first experiment cohort.</p></div></div>
    </div>
  </section>

  <section className="ai-review-final shell">
    <div className="ai-review-heading-row"><span className="ai-review-section-label">Final experience / 06</span><div><h2>Fast to scan. Honest about how it was made.</h2><p>The chosen carousel card opens a bottom sheet with an overall synthesis, theme chips, and feedback controls. A progressive word-by-word reveal communicates an AI-generated result, while the content itself is pre-generated in the backend—not written live in front of the customer.</p></div></div>
    <div className="ai-review-final-grid">
      <figure className="ai-review-pdp"><img src="/case-studies/ai-review/pdp.webp" alt="Full Digikala product detail page showing the AI Review Summary entry in context"/><figcaption>Entry point in the live PDP context</figcaption></figure>
      <figure className="ai-review-sheet"><img src="/case-studies/ai-review/summary.webp" alt="Expanded AI Review Summary experience"/><figcaption>Expanded summary with balanced themes and feedback</figcaption></figure>
    </div>
  </section>

  <section className="ai-review-rollout">
    <div className="shell">
      <span className="ai-review-section-label">Rollout &amp; health / 07</span>
      <h2>Scale only after the entry point proved itself.</h2>
      <div className="ai-review-rollout-grid">
        <article><strong>14 : 1</strong><span>Helpful ratio</span><p>Approximately fourteen positive feedback actions for every negative one.</p></article>
        <article><strong>≈20s</strong><span>Typical time</span><p>Most customers spent around twenty seconds with the full summary.</p></article>
        <article><strong>4%</strong><span>Under three seconds</span><p>Only a small share left the full summary almost immediately.</p></article>
      </div>
      <figure className="ai-review-rollout-figure"><img src="/case-studies/ai-review/doc-assets/final-entry-and-sheet.png" alt="Final AI Review Summary carousel entry and expanded bottom sheet"/><figcaption>Final entry and expanded experience from the project design documentation</figcaption></figure>
    </div>
  </section>

  <section className="reflection shell ai-review-reflection"><span>Reflection / 08</span><h2>What I took forward.</h2><div><article><strong>Design the output, not only its container.</strong><p>AI product quality depends on the hierarchy, balance, and language of the generated response as much as the surrounding interface.</p></article><article><strong>Experiment when preference is not enough.</strong><p>Both placements were defensible. A controlled comparison showed which one customers actually discovered and used.</p></article><article><strong>Keep the source within reach.</strong><p>A summary should reduce scanning work without removing the customer evidence that makes it credible.</p></article></div></section>

  <a className="next-project" href="/work/review-submission"><span>Next case study</span><strong>Review Submission Form ↗</strong></a>
</main>}
