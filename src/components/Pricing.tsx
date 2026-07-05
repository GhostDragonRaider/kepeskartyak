import { packages, extras } from '../data/packages'
import { ScrollReveal } from './ScrollReveal'

const pricingItems = [
  ...packages.map((p) => ({
    label: `${p.emoji} ${p.name}`,
    price: p.price,
  })),
  ...extras.map((e) => ({
    label: `${e.emoji} ${e.name}`,
    price: e.price,
  })),
  { label: '📦 Posta', price: 'külön' },
]

export function Pricing() {
  return (
    <section id="pricing" className="section section--alt">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Árak</h2>
        </ScrollReveal>

        <ScrollReveal animation="scale-in">
          <div className="pricing-box">
            <h3>💰 Árak (irányárak)</h3>
            <p>
              A kártyák egyedileg készülnek, az ár a darabszámtól és igényektől függ.
              Az alábbiak tájékoztató árak:
            </p>
            <ul className="pricing-list">
              {pricingItems.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <span className="price">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="pricing-info">
              <p>⏱️ Elkészítési idő: 2–5 nap</p>
              <p>📦 Átvétel: digitálisan (PDF) vagy postai úton, nyomtatva és laminálva</p>
            </div>
            <p className="pricing-note">Pontos árat egyeztetés után adok meg.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
