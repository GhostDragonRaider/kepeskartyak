import { sampleCategories } from '../data/samples'
import { ScrollReveal } from './ScrollReveal'

export function Samples() {
  return (
    <section id="referenciak" className="section section--alt">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Referenciák</h2>
          <p className="samples-intro">
            Így néznek ki a kész kártyák – minden csomag egyedi fotókkal készül,
            a minták csak illusztrációk.
          </p>
        </ScrollReveal>

        <div className="samples-list">
          {sampleCategories.map((category, i) => (
            <ScrollReveal key={category.id} delay={i * 100}>
              <article className="samples-block">
                <h3 className="samples-block__title">{category.label}</h3>
                <p className="samples-category-desc">{category.description}</p>
                <div className="samples-sheet">
                  <img
                    src={category.sheetImage}
                    alt={`${category.label} mintakártyák`}
                    loading="lazy"
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
