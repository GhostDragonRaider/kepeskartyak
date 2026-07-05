import { whyImportant } from '../data/content'
import { ScrollReveal } from './ScrollReveal'

export function WhyImportant() {
  return (
    <section id="why" className="section section--alt">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Miért fontos?</h2>
        </ScrollReveal>
        <div className="why-grid">
          {whyImportant.map((item, i) => (
            <ScrollReveal key={item.title} animation="fade-up" delay={i * 150}>
              <div className="why-card">
                <div className="why-card__icon">{item.icon}</div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__text">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
