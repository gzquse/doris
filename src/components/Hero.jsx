import './Hero.css'

export default function Hero({ onScrollToSection }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="molecule molecule-1" aria-hidden="true" />
        <div className="molecule molecule-2" aria-hidden="true" />
        <div className="molecule molecule-3" aria-hidden="true" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          You&apos;re the Element I Was Missing
        </h1>
        <p className="hero-tagline">A reaction that changed everything</p>
        <button
          className="hero-cta"
          onClick={() => onScrollToSection?.('love-letter')}
          aria-label="Scroll to love letter"
        >
          Read my letter
        </button>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span className="scroll-indicator" />
      </div>
    </section>
  )
}
