import { Fragment } from 'react'
import { orderSteps } from '../data/content'
import { ScrollReveal } from './ScrollReveal'

export function HowToOrder() {
  return (
    <section id="how-to-order" className="section section--alt">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Hogyan rendelj?</h2>
        </ScrollReveal>

        <div className="steps">
          {orderSteps.map((step, i) => (
            <Fragment key={step.title}>
              <ScrollReveal animation="fade-up" delay={i * 150} className="step">
                <div className="step__number">{i + 1}</div>
                <div className="step__icon">{step.icon}</div>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </ScrollReveal>
              {i < orderSteps.length - 1 && (
                <span className="step__arrow">→</span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
