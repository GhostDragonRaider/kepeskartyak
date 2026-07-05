import { ScrollReveal } from './ScrollReveal'
import { scrollTo } from '../hooks/useTheme'

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__grid">
        <div>
          <ScrollReveal animation="fade-left" delay={100}>
            <h1 className="hero__title">
              Segítek, hogy gyermeked könnyebben megértse a világot.
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={300}>
            <p className="hero__subtitle">
              Egyedi képeskártyák autizmussal élő gyermekeknek, saját fotókkal és személyre szabva.
            </p>
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
              <span className="card-mockup__label">Reggeli rutin</span>
            </div>
            <div className="card-mockup">
              <span className="card-mockup__icon">🗣️</span>
              <span className="card-mockup__label">Szükséglet-kifejezés</span>
            </div>
            <div className="card-mockup">
              <span className="card-mockup__icon">🧠</span>
              <span className="card-mockup__label">Szükségletek</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
