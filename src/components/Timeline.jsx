import './Timeline.css'

const milestones = [
  {
    date: 'October 2025',
    title: 'The First Reaction',
    description: 'Where it all began—our paths crossed and something sparked.',
  },
  {
    date: 'November 2025',
    title: 'Building Bonds',
    description: 'Every conversation felt like discovering a new compound together.',
  },
  {
    date: 'December 2025',
    title: 'Equilibrium',
    description: 'We found our balance—the kind that feels like home.',
  },
  {
    date: 'January 2026',
    title: 'Catalyst',
    description: 'You accelerate everything good in my life.',
  },
  {
    date: 'February 2026',
    title: 'Ongoing',
    description: 'The reaction continues. Here\'s to many more chapters.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <div className="timeline-inner">
        <h2 className="section-title">Our Timeline</h2>
        <p className="section-subtitle">Since October 2025</p>
        <div className="timeline-track">
          {milestones.map((milestone, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-date">{milestone.date}</span>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
