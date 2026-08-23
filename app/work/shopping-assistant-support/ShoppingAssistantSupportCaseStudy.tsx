const concepts=[
  {number:"01",title:"Select first",copy:"Maximum clarity, but a mandatory choice delayed every session."},
  {number:"02",title:"Toggle",copy:"Fast switching, but too visually quiet for two fundamentally different services."},
  {number:"03",title:"Capability hub",copy:"Explained both products, but crowded the entry and forced backtracking."},
  {number:"04",title:"Assistant navigation",copy:"Persistent access, but conflicted with Digikala's existing bottom navigation."},
  {number:"05",title:"Context only",copy:"Intelligent routing, but unpredictable without a visible override."},
  {number:"06",title:"Segmented control",copy:"The clearest balance of visibility, control, compactness, and independence.",selected:true},
];

export default function ShoppingAssistantSupportCaseStudy(){return <main className="case-study dia-case">
  <nav className="case-nav shell"><a href="/">HZ.</a><span>Shopping Assistant + Support Chatbot</span><a href="/">Close ×</a></nav>

  <header className="case-hero shell dia-hero">
    <p className="case-kicker">Systems &amp; AI · Digikala</p>
    <h1>One assistant identity. Two services that stay distinctly useful.</h1>
    <div className="case-intro dia-intro">
      <p>Digikala&apos;s AI shopping assistant and structured support chatbot shared a touchpoint, but not a mental model. I designed a context-aware entry and switching layer that made both services understandable without forcing their conversations into one system.</p>
      <div><span>Role</span><strong>Sole Product Designer</strong><small>Framing · IA · Interaction design · Design system · QA/QC</small></div>
    </div>
    <figure className="dia-hero-visual">
      <img className="dia-hero-shopping" src="/case-studies/dia-support/shopping.webp" alt="Shopping assistant conversation"/>
      <img className="dia-hero-home" src="/case-studies/dia-support/home.webp" alt="Unified assistant entry"/>
      <img className="dia-hero-support" src="/case-studies/dia-support/support.webp" alt="Structured support chatbot"/>
    </figure>
  </header>

  <section className="dia-outcome"><div className="shell">
    <span className="dia-section-label">Observed outcome / 01</span>
    <h2>AI discovery grew.<br/>Support access held steady.</h2>
    <div className="dia-metrics">
      <article><strong>&lt;1% → ~1.5%</strong><span>DIA entry after rollout</span><p>Share of active users entering the shopping assistant.</p></article>
      <article><strong>~3.7%</strong><span>DIA entry by year-end</span><p>A supported adoption outcome—not isolated design causality.</p></article>
      <article><strong>Stable</strong><span>Support usage</span><p>No observable reduction in use of the existing support chatbot.</p></article>
    </div>
    <p className="dia-attribution">The rollout had no dedicated control group. Strategic promotion, broader exposure, product maturity, seasonality, and other changes may also have contributed, so these metrics are presented as observational outcomes.</p>
  </div></section>

  <section className="dia-context shell">
    <div className="dia-heading-row"><span className="dia-section-label">Problem / 02</span><div><h2>A shared touchpoint hid two very different promises.</h2><p>DIA handled open-ended product discovery and shopping guidance. Support handled structured menus, order context, transactional flows, and ticket creation. Combining them into one input would blur intent and constrain two independently owned systems.</p></div></div>
    <div className="dia-context-grid"><article><span>Shopping assistant</span><strong>Generative and open-ended</strong><p>Help customers articulate needs, compare choices, and discover products.</p></article><article><span>Support chatbot</span><strong>Structured and transactional</strong><p>Resolve post-purchase needs through known scenarios and order context.</p></article><article><span>Design challenge</span><strong>Shared identity, clear boundaries</strong><p>Make both visible and easy to switch without pretending they are the same product.</p></article></div>
  </section>

  <section className="dia-constraints"><div className="shell">
    <span className="dia-section-label">Constraints / 03</span><h2>The navigation layer had to unite the experience—without destabilizing what already worked.</h2>
    <div className="dia-constraint-grid"><article><strong>2 weeks</strong><p>From exploration through handoff.</p></article><article><strong>2 providers</strong><p>Independent architectures and ownership.</p></article><article><strong>3 platforms</strong><p>App, mobile web, and desktop.</p></article><article><strong>1 host product</strong><p>Digikala&apos;s main navigation could not be displaced.</p></article></div>
  </div></section>

  <section className="dia-exploration shell">
    <div className="dia-heading-row"><span className="dia-section-label">Exploration / 04</span><div><h2>Six ways to answer one question: when should the user choose?</h2><p>I tested how early the decision should happen, how visible both destinations should remain, and how much extra navigation a shared assistant container could carry.</p></div></div>
    <div className="dia-concepts">{concepts.map(concept=><article className={concept.selected?"selected":""} key={concept.number}><span>{concept.number}</span><strong>{concept.title}</strong><p>{concept.copy}</p></article>)}</div>
    <figure className="dia-exploration-board"><img src="/case-studies/dia-support/navigation-explorations.png" alt="Real exploration board comparing six navigation concepts"/><figcaption>Source exploration board · First-step selection, toggle, hub, bottom navigation, contextual entry, and segmented control</figcaption></figure>
  </section>

  <section className="dia-decision"><div className="shell">
    <span className="dia-section-label">Decision / 05</span><h2>Unify the entry point.<br/><em>Not the conversation.</em></h2>
    <div className="dia-decision-grid"><article><span>Persistent selector</span><strong>Both services stay visible.</strong><p>The active destination is explicit and switching never requires returning to a hub.</p></article><article><span>Context-aware default</span><strong>Start with the most likely intent.</strong><p>Shopping Assistant opens in general shopping contexts; Support opens from Profile and Order Tracking.</p></article><article><span>User override</span><strong>Context suggests. The user decides.</strong><p>The segmented control remains available, immediate, and understandable at every step.</p></article></div>
  </div></section>

  <section className="dia-system shell">
    <div className="dia-heading-row"><span className="dia-section-label">System / 06</span><div><h2>A shared shell preserved two independent products.</h2><p>The segmented control became a navigation boundary rather than a content filter. Each service retained its existing internal logic, provider ownership, and familiar task model behind the shared assistant identity.</p></div></div>
    <div className="dia-system-map"><div><span>Entry context</span><strong>Homepage · PLP · PDP</strong><strong>Profile · Order tracking</strong></div><b>→</b><div><span>Contextual default</span><strong>Shopping Assistant</strong><strong>Support</strong></div><b>→</b><div><span>Independent service</span><strong>Open-ended conversation</strong><strong>Structured support flow</strong></div></div>
    <figure className="dia-flow-board"><img src="/case-studies/dia-support/end-to-end-flow.png" alt="Real end-to-end design flow for Shopping Assistant and Support Chatbot"/><figcaption>Source design flow · Entry, switching, conversations, support scenarios, and cross-platform states</figcaption></figure>
  </section>

  <section className="dia-final"><div className="shell dia-final-grid">
    <div><span className="dia-section-label">Final experience / 07</span><h2>Clear mode switching without losing orientation.</h2><p>A prominent segmented control shows the active service. DIA keeps its prompt suggestions, text input, and product responses; Support keeps its scenario menu and transactional pathways.</p><ul><li>Animated AI identity and improved icebreaker prompts</li><li>Immediate switching without backtracking</li><li>Existing marketplace navigation remains intact</li><li>Reusable design-system state, not a one-off control</li></ul></div>
    <div className="dia-final-screens"><img src="/case-studies/dia-support/shopping.webp" alt="Final Shopping Assistant experience"/><img src="/case-studies/dia-support/support.webp" alt="Final Support Chatbot experience"/></div>
  </div></section>

  <section className="dia-rollout"><div className="shell">
    <span className="dia-section-label">Rollout / 08</span><h2>Validate the routing first. Expand exposure second.</h2>
    <div className="dia-rollout-grid"><article><span>01</span><strong>In-house validation</strong><p>Checked integration, defaults, switching, functional behavior, and visual fidelity.</p></article><article><span>02</span><strong>Gradual release</strong><p>Expanded from a small audience to 100% while monitoring DIA entry and support usage.</p></article><article><span>03</span><strong>Cross-platform sequence</strong><p>Application first, followed by mobile web and desktop.</p></article></div>
  </div></section>

  <section className="reflection shell dia-reflection"><span>Reflection / 09</span><h2>What I took forward.</h2><div><article><strong>Shared identity does not require shared logic.</strong><p>Clear boundaries can make an ecosystem feel more coherent.</p></article><article><strong>Context works best with an override.</strong><p>A sensible default reduces effort; visible control preserves trust.</p></article><article><strong>Navigation belongs to its host.</strong><p>A local feature model cannot ignore the marketplace&apos;s spatial memory.</p></article><article><strong>Observational metrics need honest language.</strong><p>Separate measured outcomes from causal claims when the rollout lacks a control group.</p></article></div></section>

  <a className="next-project" href="/work/nearby-delivery"><span>Next case study</span><strong>Nearby / 3-Hour Delivery Discovery ↗</strong></a>
</main>}
