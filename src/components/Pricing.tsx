import { ScrollReveal } from './ScrollReveal'

const pricingItems = [
  { label: '🧩 Egyedi kártya', price: '1 200 – 2 000 Ft / db' },
  { label: '🌅 Reggeli rutin csomag (5–6 db)', price: '9 990 Ft' },
  { label: '🏫 Óvodai csomag', price: '12 990 Ft' },
  { label: '🌙 Esti rutin csomag', price: '9 990 Ft' },
  { label: '🧠 Alap szükségletek', price: '8 990 Ft' },
  { label: '⭐ Teljes nap csomag', price: '17 990 – 19 990 Ft' },
  { label: '🗣️ Szükséglet-kifejező csomag', price: '10 990 Ft' },
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
