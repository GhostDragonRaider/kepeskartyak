import { ScrollReveal } from './ScrollReveal'

const pricingItems = [
  { label: '🧩 Egyedi kártya', price: '800 – 1 200 Ft / db' },
  { label: '🌅 Reggeli rutin csomag (5–6 db)', price: '5 000 – 7 000 Ft' },
  { label: '🏫 Óvodai csomag', price: '6 000 – 8 000 Ft' },
  { label: '🌙 Esti rutin csomag', price: '5 000 – 7 000 Ft' },
  { label: '🧠 Alap szükségletek', price: '4 000 – 6 000 Ft' },
  { label: '⭐ Teljes nap csomag', price: '10 000 – 16 000 Ft' },
  { label: '🗣️ Kommunikációs csomag', price: '6 000 – 10 000 Ft' },
  { label: '📒 Tépőzáras füzet', price: '2 500 – 4 000 Ft' },
  { label: '📎 Nyakba akasztó', price: '1 000 – 1 500 Ft' },
  { label: '✂️ Laminálás + vágás', price: '2 000 – 3 000 Ft' },
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
