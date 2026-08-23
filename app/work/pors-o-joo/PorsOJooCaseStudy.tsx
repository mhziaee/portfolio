const coreObjects=[
  {number:"01",title:"Community",copy:"The topical layer for relevance, belonging, feed structure, and moderation."},
  {number:"02",title:"Question",copy:"A shopping need, comparison, or request for first-hand experience."},
  {number:"03",title:"Answer",copy:"Advice and recommendations that can carry product evidence back into commerce."},
  {number:"04",title:"Product attachment",copy:"An optional bridge to the catalog—not a prerequisite for starting a conversation."},
  {number:"05",title:"Profile",copy:"A shared social identity that makes asking and answering visible contributions."},
];

export default function PorsOJooCaseStudy(){return <main className="case-study pors-case">
  <nav className="case-nav shell"><a href="/">HZ.</a><span>Pors-o-Joo — Community Shopping</span><a href="/">Close ×</a></nav>

  <header className="case-hero shell pors-hero">
    <p className="case-kicker">0 → 1 · Social Commerce · Digikala</p>
    <h1>The hardest design problem wasn&apos;t the new product. It was where to put it.</h1>
    <div className="case-intro pors-intro">
      <p>I designed Pors-o-Joo from zero: a community-led shopping experience for people who had a need or a question before they knew exactly what to buy.</p>
      <div><span>Role</span><strong>Sole Product Designer</strong><small>Architecture · Discovery · Ask &amp; Answer · Product attachment · Search · Profiles · Handoff · QC</small></div>
    </div>
    <div className="pors-hero-visual" aria-label="Real Pors-o-Joo product screens">
      <span>Real project UI · App + Mobile Web</span>
      <img className="pors-hero-feed" src="/case-studies/pors-o-joo/feed.png" alt="Pors-o-Joo feed with shopping questions and attached products"/>
      <img className="pors-hero-community" src="/case-studies/pors-o-joo/community.png" alt="Pors-o-Joo community page"/>
      <img className="pors-hero-detail" src="/case-studies/pors-o-joo/question-detail.png" alt="Pors-o-Joo question detail with product recommendations"/>
    </div>
  </header>

  <section className="pors-outcome"><div className="shell">
    <span className="pors-section-label">Measured impact / 01</span>
    <h2>From a blank page to a working community marketplace.</h2>
    <div className="pors-primary-metrics">
      <article><strong>202,590</strong><span>Engaged users</span><p>Users who took action in the product—not a traffic target from the PRD.</p></article>
      <article><strong>60,204</strong><span>Questions asked</span><p>Shopping needs, comparisons, and requests for real experience.</p></article>
      <article><strong>173,516</strong><span>Answers given</span><p>Approximately 2.88 answers for every question in aggregate.</p></article>
    </div>
    <div className="pors-secondary-metrics">
      <article><strong>29.36%</strong><span>Answered within 24 hours</span><p>9.36 percentage points above the PRD&apos;s 20% target.</p></article>
      <article><strong>121,724</strong><span>Product attachments</span><p>Across 47,980 unique products in the dashboard Overview.</p></article>
      <article><strong>~2 months</strong><span>Zero to launch</span><p>Released on Digikala App and Mobile Web.</p></article>
    </div>
  </div></section>

  <section className="pors-context shell">
    <div className="pors-heading-row"><span className="pors-section-label">Context / 02</span><div><h2>Digikala&apos;s UGC helped after a product was chosen. Pors-o-Joo moved it earlier.</h2><p>Reviews and PDP questions are powerful when a shopper already has a candidate. The new opportunity was less structured: help people decide what to buy, compare alternatives, and learn from shoppers with relevant interests or first-hand experience.</p></div></div>
    <div className="pors-context-grid"><article><span>Existing behavior</span><strong>A product was the starting point.</strong><p>Reviews and Q&amp;A lived inside individual PDPs.</p></article><article><span>Opportunity</span><strong>A user need could be the starting point.</strong><p>Conversation could begin before a product attachment existed.</p></article><article><span>Product question</span><strong>How might community knowledge support early shopping decisions?</strong><p>Without detaching the conversation from Digikala&apos;s catalog.</p></article></div>
  </section>

  <section className="pors-architecture"><div className="shell">
    <span className="pors-section-label">Architecture / 03</span>
    <h2>A new social product had no obvious home.</h2>
    <p className="pors-architecture-lead">Digikala&apos;s fourth app tab already belonged to Magnet. Adding another primary destination would fragment the social proposition; forcing Pors-o-Joo into Magnet&apos;s interaction model would blur two fundamentally different behaviors.</p>
    <div className="pors-architecture-map">
      <div className="pors-architecture-source"><small>Fourth bottom-nav destination</small><strong>Social</strong></div>
      <div className="pors-architecture-branch"><article><span>Explore · گشت‌وگذار</span><strong>Passive, video-first discovery</strong><p>A focused evolution of Magnet for continuous browsing and entertainment-led product discovery.</p></article><article><span>Pors-o-Joo · پرس‌وجو</span><strong>Purposeful shopping conversation</strong><p>Communities, questions, answers, recommendations, comparisons, and search.</p></article></div>
    </div>
    <p className="pors-architecture-principle"><span>Architecture principle</span><strong>Unify the destination and identity. Preserve the distinct behavior of each social mode.</strong></p>
  </div></section>

  <section className="pors-system shell">
    <div className="pors-heading-row"><span className="pors-section-label">System / 04</span><div><h2>Five connected objects made the MVP work as a product—not a feature.</h2><p>Community context organized the marketplace. Questions and answers created supply and demand. Optional product attachments connected the conversation to commerce, while profiles made participation part of a broader social identity.</p></div></div>
    <div className="pors-object-grid">{coreObjects.map(item=><article key={item.number}><span>{item.number}</span><strong>{item.title}</strong><p>{item.copy}</p></article>)}</div>
    <div className="pors-screen-pair"><figure><img src="/case-studies/pors-o-joo/groups.png" alt="Pors-o-Joo group discovery experience"/><figcaption>Discover and join communities</figcaption></figure><figure><img src="/case-studies/pors-o-joo/community.png" alt="Pors-o-Joo community detail experience"/><figcaption>A community as context for questions and answers</figcaption></figure></div>
  </section>

  <section className="pors-conversation"><div className="shell">
    <span className="pors-section-label">Interaction model / 05</span>
    <h2>Conversation stayed open-ended. Commerce stayed close.</h2>
    <p className="pors-conversation-lead">Product attachment was optional. Someone could ask, “What noise-cancelling headphones should I buy under 10 million tomans?” without naming a product. A responder could then attach a concrete recommendation based on first-hand experience.</p>
    <div className="pors-flow-grid"><figure><span>Ask</span><img src="/case-studies/pors-o-joo/ask-flow.png" alt="Ask a new Pors-o-Joo question and optionally add products"/><figcaption>Recently viewed products reduced effort when a candidate already existed.</figcaption></figure><figure><span>Question detail</span><img src="/case-studies/pors-o-joo/question-detail.png" alt="Question detail with multiple attached products and answers"/><figcaption>The discussion and catalog stayed connected in one surface.</figcaption></figure><figure><span>Answer</span><img src="/case-studies/pors-o-joo/answer-flow.png" alt="Answer composer with optional product attachment"/><figcaption>Purchased products could make first-hand recommendations easier to surface.</figcaption></figure></div>
  </div></section>

  <section className="pors-delivery"><div className="shell">
    <span className="pors-section-label">Delivery / 06</span>
    <h2>One week to align. Continuous slices to ship.</h2>
    <div className="pors-delivery-grid"><article><strong>1 week</strong><span>Cross-functional War Room</span><p>Benchmarking, architecture, wireframes, and decisions moved through one shared cadence.</p></article><article><strong>Rolling</strong><span>Handoff model</span><p>Each approved slice moved to engineering while I continued designing the remaining system.</p></article><article><strong>Immediate</strong><span>Design QA / QC</span><p>I reviewed implemented work as it was built instead of waiting for a final release candidate.</p></article></div>
    <div className="pors-delivery-line"><span>Benchmark</span><i>→</i><span>Brainstorm</span><i>→</i><span>Wireframe</span><i>→</i><span>Review</span><i>→</i><span>Detailed design</span><i>→</i><span>Prototype</span><i>→</i><span>Handoff</span><i>→</i><span>QC</span></div>
  </div></section>

  <section className="pors-tradeoff shell">
    <div className="pors-heading-row"><span className="pors-section-label">Product trade-off / 07</span><div><h2>Should joining a Community be required before asking?</h2><p>I challenged the mandatory Join step because it interrupted a high-intent contribution moment. Product leadership prioritized belonging and growth of the community graph for the MVP. I documented the risk, designed the constraint clearly, and supported the agreed direction.</p></div></div>
    <div className="pors-tradeoff-grid"><article><span>User-advocacy view</span><strong>Let people express the question first.</strong><p>Reduce pre-posting friction and ask for only the context necessary to publish.</p></article><article><span>MVP decision</span><strong>Require membership before posting.</strong><p>Every question belonged to a Community, and the asker joined that Community before publishing.</p></article><article><span>What to measure next</span><strong>Abandonment versus downstream value.</strong><p>Compare Join and Community-selection drop-off with participation and retention after posting.</p></article></div>
  </section>

  <section className="pors-health"><div className="shell">
    <span className="pors-section-label">Community health / 08</span>
    <h2>Strong aggregate supply hid an uneven marketplace of attention.</h2>
    <div className="pors-health-grid"><figure><img src="/case-studies/pors-o-joo/dashboard-overview.png" alt="DigiQ dashboard Overview with engagement, question, answer, and product attachment metrics"/><figcaption>Dashboard Overview · Source of record for the reported KPIs</figcaption></figure><div><strong>37.55%</strong><span>Questions with zero answers</span><p>Average supply looked healthy at roughly 2.88 answers per question, yet more than a third of individual questions remained unmatched. The next design problem was routing: community density, notifications, question quality, timing, and moderation—not simply creating more content.</p></div></div>
    <figure className="pors-distribution"><img src="/case-studies/pors-o-joo/answer-distribution.png" alt="Distribution of answer counts across Pors-o-Joo questions"/><figcaption>Distribution of answers · 37.55% zero-answer rate shown separately from overall volume</figcaption></figure>
  </div></section>

  <section className="reflection shell pors-reflection"><span>Reflection / 09</span><h2>What I took forward.</h2><div><article><strong>A community is an interaction system.</strong><p>Architecture, identity, supply, moderation, and matchmaking have to evolve together.</p></article><article><strong>One destination can hold different modes.</strong><p>A shared identity does not require one shared interaction model.</p></article><article><strong>Commerce links should support conversation.</strong><p>Optional product attachment preserved open-ended questions while creating a measurable catalog connection.</p></article><article><strong>Aggregate volume can hide unmet demand.</strong><p>Community health must be understood at the individual-question level.</p></article><article><strong>Cold start is product work.</strong><p>Authentic seed questions and answers were part of launch operations, not decorative placeholders.</p></article></div></section>

  <a className="next-project" href="/work/autocomplete"><span>Next case study</span><strong>Autocomplete Redesign ↗</strong></a>
</main>}
