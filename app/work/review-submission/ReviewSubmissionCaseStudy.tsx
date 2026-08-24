const legacyFields=["Rating","Recommendation","Review title","Manual pros","Manual cons","Review text","Media"];

const benchmarkSlides=[
  {name:"Klarna",src:"/case-studies/review-submission/benchmarks/klarna.webp"},
  {name:"Shop",src:"/case-studies/review-submission/benchmarks/shop.webp"},
  {name:"DoorDash",src:"/case-studies/review-submission/benchmarks/doordash.webp"},
  {name:"Grab",src:"/case-studies/review-submission/benchmarks/grab.webp"},
];

const entryPointResults=[
  {name:"PSAT",single:"+25.77%",twoStep:"+26.39%"},
  {name:"My Review",single:"+3.95%",twoStep:"+3.99%"},
  {name:"Order Details",single:"+11.42%",twoStep:"+8.03%"},
  {name:"PDP",single:"+15.51%",twoStep:"+12.76%"},
];

const experimentVariants=[
  {number:"A",name:"Control",description:"The existing multi-field form.",metrics:["Baseline experience"]},
  {number:"B",name:"Single-step",description:"All simplified review elements in one view.",metrics:["+17.27% form conversion","+20.50% daily reviews","+16.27% daily reviewers","+3.63% reviews per user"]},
  {number:"C",name:"Two-step",description:"Rating first, then optional review detail.",metrics:["+16.44% form conversion","+24.56% daily reviews","+17.43% daily reviewers","+6.10% reviews per user"],winner:true},
];

export default function ReviewSubmissionCaseStudy(){return <main className="case-study review-submission-case">
  <nav className="case-nav shell"><a href="/">HZ.</a><span>Review Submission Form</span><a href="/">Close ×</a></nav>

  <header className="case-hero shell review-submission-hero">
    <p className="case-kicker">Growth &amp; UGC · Digikala</p>
    <h1>The winning form wasn&apos;t the one with the best conversion.</h1>
    <div className="case-intro review-submission-intro">
      <p>I simplified a long, fragmented review form and tested single-step and rating-first two-step experiences. The rollout decision was based on meaningful UGC output—not only the metric closest to the interface.</p>
      <div><span>Role</span><strong>Sole Product Designer</strong><small>Flow redesign · Content logic · A/B/C test · Handoff &amp; QC</small></div>
    </div>
    <figure className="review-hero-visual"><img src="/case-studies/review-submission/overview.png" alt="Legacy, rating-first two-step, and simplified single-step review submission designs"/><figcaption>Control · Two-step · Single-step</figcaption></figure>
  </header>

  <section className="review-outcome">
    <div className="shell">
      <span className="review-section-label">Outcome / 01</span>
      <h2>More people contributed.<br/>More reviews entered the ecosystem.</h2>
      <div className="review-outcome-grid">
        <article><strong>+24.56%</strong><span>Daily reviews</span><p>Approximately 6,975 additional reviews per day.</p></article>
        <article><strong>+17.43%</strong><span>Daily reviewers</span><p>Approximately 1,523 additional contributors per day.</p></article>
        <article><strong>+16.44%</strong><span>Form conversion</span><p>Lift from the selected two-step experience.</p></article>
      </div>
    </div>
  </section>

  <section className="review-problem shell">
    <div className="review-heading-row"><span className="review-section-label">Problem / 02</span><div><h2>One contribution asked customers to make too many decisions.</h2><p>The legacy experience exposed rating, recommendation, title, manually separated pros and cons, review text, and media in one long form. Several fields repeated information or organized it for the system rather than the customer.</p></div></div>
    <div className="review-field-map">
      <div className="review-field-group review-field-old"><span>Legacy form</span>{legacyFields.map(field=><i key={field}>{field}</i>)}</div>
      <b aria-hidden="true">→</b>
      <div className="review-field-group review-field-new"><span>Simplified model</span><i>Rating</i><i>Natural-language review</i><i>Optional media</i></div>
    </div>
  </section>

  <section className="review-benchmarks">
    <div className="shell">
      <div className="review-heading-row"><span className="review-section-label">Benchmarking / 03</span><div><h2>Four products pointed to the same lighter pattern.</h2><p>I reviewed Klarna, Shop, DoorDash, and Grab. Across them, the recurring pattern was to capture a rating first, then ask for optional detail, media, or structured prompts.</p></div></div>
      <div className="review-benchmark-grid">{benchmarkSlides.map(benchmark=><figure key={benchmark.name}><img src={benchmark.src} alt={`${benchmark.name} review submission benchmark flow`}/><figcaption>{benchmark.name}</figcaption></figure>)}</div>
    </div>
  </section>

  <section className="review-principle">
    <div className="shell">
      <span className="review-section-label">System insight / 04</span>
      <h2>Let customers speak naturally.<br/><em>Let AI structure the feedback afterward.</em></h2>
      <div className="review-principle-grid"><strong>Cross-project reuse</strong><p>AI Review Summary had shown that recurring pros and cons could be derived from natural-language reviews. That insight let me remove manual pros and cons instead of asking customers to structure feedback for the platform.</p></div>
    </div>
  </section>

  <section className="review-entry shell">
    <div className="review-heading-row"><span className="review-section-label">Entry points / 05</span><div><h2>Capture the smallest useful commitment first.</h2><p>The rating-first flow saved a customer&apos;s rating before asking for detailed feedback. When a rating had already been submitted from an order surface, the flow could move directly to review details.</p></div></div>
    <figure className="review-wide-figure"><img src="/case-studies/review-submission/entry-points.png" alt="Review entry points showing rating capture before opening review details"/><figcaption>Entry logic · Start with rating, continue with review detail</figcaption></figure>
  </section>

  <section className="review-hypothesis">
    <div className="shell review-hypothesis-grid">
      <div><span className="review-section-label">Hypothesis / 06</span><h2>Would one easy action make the form feel less intimidating?</h2><p>I believed a rating-first pattern could improve contribution, but treated it as a hypothesis. Single-step, two-step, and the existing control were tested at the same time.</p></div>
      <div className="review-hypothesis-visuals">
        <figure><img src="/case-studies/review-submission/rating-empty.png" alt="Rating-first review step before selecting a rating"/><figcaption>Before rating · Continue stays disabled</figcaption></figure>
        <figure><img src="/case-studies/review-submission/rating-selected.png" alt="Rating-first review step after selecting four stars"/><figcaption>Rating selected · Continue becomes available</figcaption></figure>
      </div>
    </div>
  </section>

  <section className="review-flows shell">
    <div className="review-heading-row"><span className="review-section-label">Final designs / 07</span><div><h2>Two simplified paths entered the experiment.</h2><p>Both variations removed redundant fields, centered free-form feedback, used category-specific writing prompts as optional inspiration, clarified privacy, and encouraged media contribution.</p></div></div>
    <figure className="review-flow-figure"><div><span>Two-step</span><strong>Rating first, detail second</strong></div><img src="/case-studies/review-submission/two-step-flow.png" alt="Complete rating-first two-step review submission flow"/></figure>
    <figure className="review-flow-figure"><div><span>Single-step</span><strong>One continuous simplified form</strong></div><img src="/case-studies/review-submission/single-step-flow.png" alt="Complete simplified single-step review submission flow"/></figure>
  </section>

  <section className="review-experiment">
    <div className="shell">
      <span className="review-section-label">Experiment / 08</span>
      <h2>Three variants.<br/>One product decision.</h2>
      <p className="review-experiment-lead">The A/B/C test ran from 9–28 Mehr 1403 and compared 40% control, 30% single-step, and 30% two-step. Data analysis was produced by the Data team; I reviewed the results with Product and participated in selecting the rollout variant.</p>
      <div className="review-variant-grid">{experimentVariants.map(variant=><article className={variant.winner?"winner":""} key={variant.number}><div><span>{variant.number}</span>{variant.winner&&<b>Selected</b>}</div><h3>{variant.name}</h3><p>{variant.description}</p><ul>{variant.metrics.map(metric=><li key={metric}>{metric}</li>)}</ul></article>)}</div>
      <div className="review-entrypoint-results">
        <div><span>Context check</span><h3>Conversion lift changed by entry point.</h3><p>Two-step performed slightly better on PSAT and My Review, while single-step was stronger on Order Details and PDP. The rollout decision therefore used total UGC output rather than assuming one flow won every context.</p></div>
        <div className="review-entrypoint-table"><header><span>Entry point</span><span>Single-step</span><span>Two-step</span></header>{entryPointResults.map(result=><article key={result.name}><strong>{result.name}</strong><span>{result.single}</span><span>{result.twoStep}</span></article>)}<footer><strong>Overall</strong><span>+17.27%</span><span>+16.44%</span></footer></div>
      </div>
      <div className="review-decision"><span>Decision principle</span><h3>Do not optimize the closest metric when the product outcome lives one level higher.</h3><p>Single-step produced slightly higher form conversion. Two-step produced more daily reviews, more reviewers, and more reviews per user—so it became the rollout choice.</p></div>
    </div>
  </section>

  <section className="review-tradeoff">
    <div className="shell">
      <span className="review-section-label">Trade-off / 09</span>
      <h2>Participation grew.<br/>Average depth declined.</h2>
      <div className="review-tradeoff-grid">
        <article><strong>−12.85%</strong><span>Average review length</span></article>
        <article><strong>−5.74%</strong><span>Review like ratio</span></article>
        <article><strong>≈ −16–17%</strong><span>Share of reviews with media · relative</span></article>
      </div>
      <p>The redesign successfully expanded participation, but quantity did not automatically create richer reviews. A broader mix of newer or less experienced contributors may have lowered average depth; that is a plausible interpretation, not a separately proven causal result.<small>Like ratio was calculated as (likes − dislikes) / reviews for reviews submitted during the first test week, after at least two weeks to accumulate feedback.</small></p>
    </div>
  </section>

  <section className="review-followup shell">
    <div className="review-heading-row"><span className="review-section-label">Next problem / 10</span><div><h2>How do we make low-friction contributions more useful?</h2><p>The result turned quality into the next product problem instead of hiding it behind the volume gain.</p></div></div>
    <div className="review-followup-grid"><article><span>01</span><strong>Research media drop-off</strong><p>Understand why photo and video contribution did not scale with review volume.</p></article><article><span>02</span><strong>Add targeted touchpoints</strong><p>Request reviews from relevant surfaces such as PDP or the Homepage.</p></article><article><span>03</span><strong>Guide richer writing</strong><p>Explore progressive guidance such as character-based progress cues.</p></article><article><span>04</span><strong>Improve prompt relevance</strong><p>Use category questions that customers have not already answered.</p></article></div>
  </section>

  <section className="reflection shell review-reflection"><span>Reflection / 11</span><h2>What I took forward.</h2><div><article><strong>Choose the product outcome.</strong><p>The winning variant should reflect the goal hierarchy, not simply the highest metric nearest the UI.</p></article><article><strong>Remove work instead of relocating it.</strong><p>Cross-project AI learning eliminated manual structure that customers did not need to provide.</p></article><article><strong>Own the imperfect success.</strong><p>A meaningful volume gain can coexist with a quality decline—and both belong in the product decision.</p></article></div></section>

  <a className="next-project" href="/work/autocomplete"><span>Next case study</span><strong>Autocomplete Redesign ↗</strong></a>
</main>}
