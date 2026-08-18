const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const pricing = [
  {
    name: 'Starter',
    price: '£499',
    note: 'A sharp one-page presence for smaller businesses, launches and simple ideas.',
    detail: 'One-page website',
  },
  {
    name: 'Business',
    price: '£795',
    note: 'A polished multi-page website built around your business, brand and customers.',
    detail: 'Typically 4–6 pages',
    featured: true,
  },
  {
    name: 'Custom',
    price: '£1,250',
    note: 'For more ambitious builds with custom interactions, animation and advanced functionality.',
    detail: 'Bespoke scope',
  },
  {
    name: 'E-commerce',
    price: '£1,500',
    note: 'Online stores designed to make products look good and the buying journey feel simple.',
    detail: 'Store builds',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="gridTexture" />
        <header className="siteHeader shell">
          <a className="brand" href="#top" aria-label="Sussex Site Co. home"><span className="brandMark">S</span><span className="brandText">Sussex Site Co.</span></a>
          <nav className="desktopNav" aria-label="Primary navigation"><a href="#about">About</a><a href="#prices">Prices</a><a href="#contact">Contact</a></nav>
          <a className="headerCta" href="#contact">Start a project<ArrowUpRight /></a>
        </header>
        <div className="heroInner shell">
          <div className="heroCopy">
            <div className="eyebrow"><span className="pulseDot" />Independent web studio · Sussex</div>
            <h1>Websites that<span> refuse to blend in.</span></h1>
            <p className="heroLead">Modern, high-impact websites for businesses that want to look as good online as they are in real life.</p>
            <div className="heroActions"><a className="primaryButton" href="#contact">Build something great<ArrowUpRight /></a><a className="textButton" href="#about">Explore the studio</a></div>
            <div className="heroMeta"><div><span className="metaLabel">Based in</span><strong>West Sussex, UK</strong></div><span className="metaDivider" /><div><span className="metaLabel">Focus</span><strong>Design + Development</strong></div></div>
          </div>
          <div className="robotStage" aria-label="Interactive 3D robot">
            <div className="robotHalo" />
            <div className="splineWrap">
              <iframe
                src="https://my.spline.design/nexbotrobotcharacterconcept-LYLVIDAOw4pCqxfsUfIVBWUo/"
                title="Interactive Nexbot robot"
                allow="autoplay; fullscreen"
                style={{ width: '100%', height: '100%', border: 0, display: 'block', background: 'transparent' }}
              />
            </div>
            <div className="stageBadge stageBadgeTop"><span>Interactive</span><strong>3D experiences</strong></div>
            <div className="stageBadge stageBadgeBottom"><span className="statusDot" />Built for the modern web</div>
          </div>
        </div>
        <div className="heroFooter shell"><span>SCROLL TO EXPLORE</span><div className="scrollLine"><span /></div><span className="heroFooterRight">SUSSEXSITECO.CO.UK</span></div>
      </section>

      <section className="statementSection" id="about">
        <div className="shell statementGrid"><span className="sectionIndex">01 / STUDIO</span><div><p className="statementKicker">Built with intent.</p><h2>Your website should do more than just exist.</h2><p className="statementCopy">Sussex Site Co. is being built around one idea: make the web feel exciting again. Clean foundations, considered design and interactive details that people actually remember.</p></div></div>
      </section>

      <section className="placeholderSection">
        <div className="shell placeholderGrid">
          <article className="placeholderCard largeCard projectsCard">
            <div className="projectsParticle" aria-hidden="true">
              <iframe
                src="https://my.spline.design/particles-aG1DnvAZVUlyLTdDX3tVXUTb/"
                title="Interactive particle field"
                allow="autoplay; fullscreen"
              />
            </div>
            <div className="projectsShade" />
            <span className="cardNumber projectsContent">01</span>
            <div className="projectsContent"><span className="cardEyebrow">Selected work</span><h3>Projects will live here.</h3><p>Case studies, experiments and client builds — ready for us to plug in once the core brand is locked.</p></div>
          </article>
          <article className="placeholderCard"><span className="cardNumber">02</span><div><span className="cardEyebrow">The studio</span><h3>Small studio. Big ideas.</h3><p>Local, flexible and focused on building sites that feel considered rather than copied.</p></div></article>
          <article className="placeholderCard accentCard"><span className="cardNumber">03</span><div><span className="cardEyebrow">Built differently</span><h3>Design that earns attention.</h3><p>Clean foundations with room for interactive details, animation and ideas that make a business memorable.</p></div></article>
        </div>
      </section>

      <section className="pricingSection" id="prices">
        <div className="shell">
          <div className="pricingIntro">
            <span className="sectionIndex">02 / PRICES</span>
            <div><p className="statementKicker">Simple starting points.</p><h2>Good websites don’t need agency-sized budgets.</h2><p>Every project is different, so these are starting prices rather than rigid packages. We also run launch offers and limited promotions throughout the year.</p></div>
          </div>
          <div className="pricingGrid">
            {pricing.map((item) => (
              <article className={`priceCard${item.featured ? ' featuredPrice' : ''}`} key={item.name}>
                <div className="priceCardTop"><span>{item.name}</span>{item.featured && <span className="popularTag">Popular</span>}</div>
                <div className="priceAmount"><small>from</small><strong>{item.price}</strong></div>
                <p>{item.note}</p>
                <div className="priceFooter"><span>{item.detail}</span><a href="#contact" aria-label={`Enquire about ${item.name}`}>Enquire <ArrowUpRight /></a></div>
              </article>
            ))}
          </div>
          <div className="promoStrip"><span className="pulseDot" /><strong>Offers happen.</strong><span>Keep an eye on our socials or get in touch — we’ll regularly run introductory and local-business promotions.</span></div>
        </div>
      </section>

      <section className="contactSection" id="contact"><div className="shell contactInner"><span className="sectionIndex">03 / CONTACT</span><div className="contactCopy"><p className="statementKicker">Have something in mind?</p><h2>Let's build something worth looking at.</h2></div><a className="contactButton" href="mailto:hello@sussexsiteco.co.uk"><span>hello@sussexsiteco.co.uk</span><ArrowUpRight /></a></div></section>
      <footer className="siteFooter"><div className="shell footerInner"><a className="brand" href="#top"><span className="brandMark">S</span><span className="brandText">Sussex Site Co.</span></a><p>Independent web studio in Sussex.</p><span>© 2026 Sussex Site Co.</span></div></footer>
    </main>
  );
}
