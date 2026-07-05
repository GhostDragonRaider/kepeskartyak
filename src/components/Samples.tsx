import { useState } from 'react'
import { sampleCategories, sampleItems } from '../data/samples'
import type { SampleCategoryId } from '../data/samples'
import { ScrollReveal } from './ScrollReveal'

export function Samples() {
  const [active, setActive] = useState<SampleCategoryId>('napi-rutin')
  const [preview, setPreview] = useState<string | null>(null)

  const category = sampleCategories.find((c) => c.id === active)!
  const items = sampleItems.filter((item) => item.category === active)

  return (
    <section id="mintak" className="section section--alt">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Minták</h2>
          <p className="samples-intro">
            Így néznek ki a kész kártyák – minden csomag egyedi fotókkal készül,
            a minták csak illusztrációk.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="samples-tabs" role="tablist" aria-label="Minta kategóriák">
            {sampleCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active === cat.id}
                className={`samples-tab ${active === cat.id ? 'is-active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="samples-category-desc">{category.description}</p>
          <div className="samples-sheet">
            <img src={category.sheetImage} alt={`${category.label} mintakártyák összesítve`} loading="lazy" />
          </div>
        </ScrollReveal>

        <div className="samples-grid">
          {items.map((item, i) => (
            <ScrollReveal key={item.id} animation="scale-in" delay={i * 50}>
              <button
                type="button"
                className="sample-card"
                onClick={() => setPreview(item.image)}
                aria-label={`${item.label} mintakártya megtekintése`}
              >
                <img src={item.image} alt={item.label} loading="lazy" />
                <span className="sample-card__label">{item.label}</span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {preview && (
        <div className="sample-lightbox" onClick={() => setPreview(null)} role="dialog" aria-modal="true">
          <button type="button" className="sample-lightbox__close" aria-label="Bezárás" onClick={() => setPreview(null)}>
            ×
          </button>
          <img src={preview} alt="Minta nagyítva" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
