import { ScrollReveal } from './ScrollReveal'
import { scrollTo } from '../hooks/useTheme'
import { heroSpecialPoints } from '../data/content'

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        <div>
          <ScrollReveal animation="fade-left" delay={100}>
            <h1 className="hero__title">
              Mert a saját képeit minden gyermek könnyebben felismeri.
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={300}>
            <p className="hero__subtitle">
              Személyre szabott vizuális kártyák a gyermek saját fotóival és kedvenc tárgyaival – hogy
              könnyebbé váljon a kommunikáció és a mindennapok.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={420}>
            <div className="hero__highlight">
              <h2 className="hero__highlight-title">🏆 Miért különleges?</h2>
              <ul className="hero__highlight-list">
                {heroSpecialPoints.map((point) => (
                  <li key={point}>✔ {point}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={500}>
            <div className="hero__buttons">
              <button className="btn btn--primary" onClick={() => scrollTo('packages')}>
                Csomagok megtekintése
              </button>
              <button className="btn btn--outline" onClick={() => scrollTo('order')}>
                Egyedi rendelés
              </button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-right" delay={400}>
          <div className="hero__cards">
            <div className="card-mockup">
              <span className="card-mockup__icon">🌅</span>
              <span className="card-mockup__label">Napi rutin</span>
            </div>
            <div className="card-mockup">
              <span className="card-mockup__icon">🏫</span>
              <span className="card-mockup__label">Óvodai csomag</span>
            </div>
            <div className="card-mockup">
              <span className="card-mockup__icon">🗣️</span>
              <span className="card-mockup__label">Szükséglet-kifejezés</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
