import { aboutSections } from '../data/content'
import { ScrollReveal } from './ScrollReveal'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Rólam</h2>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal animation="fade-left">
            <div className="about-photo" aria-hidden="true">
              <span className="about-infinity">∞</span>
            </div>
          </ScrollReveal>

          <div className="about-blocks">
            {aboutSections.map((section, i) => (
              <ScrollReveal
                key={section.id}
                animation={i % 2 === 0 ? 'fade-left' : 'fade-right'}
                delay={i * 80}
              >
                <div className={`about-block ${section.highlight ? 'about-block--highlight' : ''}`}>
                  <p>{section.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
