import { useState } from 'react'
import './ChemistrySection.css'

export default function ChemistrySection() {
  const [showUsMessage, setShowUsMessage] = useState(false)
  return (
    <section id="chemistry" className="chemistry-section">
      <div className="chemistry-inner">
        <h2 className="section-title">The Formula</h2>
        <div className="formula-block">
          <p className="formula-equation">Our Bond = C + L + U</p>
          <div className="formula-legend">
            <span><strong>C</strong>hemistry</span>
            <span><strong>L</strong>ove</span>
            <span><strong>U</strong> (you)</span>
          </div>
          <p className="formula-note">
            The reaction is spontaneous and irreversible.
          </p>
        </div>
        {showUsMessage && (
          <p className="us-message">You + Me = Us</p>
        )}
        <div className="periodic-mini">
          <div className="element-cell element-he">He</div>
          <div className="element-cell element-ne">Ne</div>
          <div className="element-cell element-ar">Ar</div>
          <button
            type="button"
            className="element-cell element-us"
            title="Easter egg"
            onClick={() => setShowUsMessage(!showUsMessage)}
          >
            Us
          </button>
          <div className="element-cell element-kr">Kr</div>
        </div>
      </div>
    </section>
  )
}
