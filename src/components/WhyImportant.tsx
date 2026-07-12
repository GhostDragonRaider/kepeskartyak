import { whyChooseUs } from '../data/content'
import { ScrollReveal } from './ScrollReveal'

export function WhyImportant() {
  return (
    <section id="why" className="section section--alt">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Miért minket válassz?</h2>
        </ScrollReveal>
        <div className="why-choose-grid">
          {whyChooseUs.map((item, i) => (
            <ScrollReveal key={item.text} animation="fade-up" delay={i * 90}>
              <div className="why-choose-item">
                <span className="why-choose-item__icon" aria-hidden="true">{item.icon}</span>
                <p>{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
