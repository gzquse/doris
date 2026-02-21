import { useState } from 'react'
import './InteractiveElements.css'

export default function InteractiveElements() {
  const [clickCount, setClickCount] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const handleEasterEggClick = () => {
    const next = clickCount + 1
    setClickCount(next)
    if (next >= 3) {
      setShowEasterEgg(true)
    }
  }

  const puns = [
    'I think we have great chemistry.',
    'You\'re the catalyst to my happiness.',
    'Our bond is unbreakable.',
    'You complete my valence.',
  ]

  const [punIndex, setPunIndex] = useState(0)

  return (
    <section id="interactive" className="interactive-section">
      <div className="interactive-inner">
        <h2 className="section-title">For You</h2>

        <div className="pun-display">
          <p className="pun-text">{puns[punIndex]}</p>
          <button
            className="pun-btn"
            onClick={() => setPunIndex((i) => (i + 1) % puns.length)}
          >
            Another one
          </button>
        </div>

        <div className="beaker-area">
          <button
            className="beaker"
            onClick={handleEasterEggClick}
            aria-label="Click the beaker"
          >
            <span className="beaker-icon">B</span>
          </button>
          {showEasterEgg && (
            <p className="easter-egg">
              You found it. I love you.
            </p>
          )}
        </div>

        <footer className="site-footer">
          <p>Made with love for you</p>
          <p className="footer-date">Since October 2025</p>
        </footer>
      </div>
    </section>
  )
}
