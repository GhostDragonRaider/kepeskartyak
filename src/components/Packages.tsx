import { useState } from 'react'
import { packages, extras } from '../data/packages'
import type { Package } from '../data/packages'
import { ScrollReveal } from './ScrollReveal'
import { PackageModal } from './PackageModal'

export function Packages() {
  const [selected, setSelected] = useState<Package | null>(null)

  return (
    <section id="packages" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Csomagok</h2>
        </ScrollReveal>

        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.id} animation="scale-in" delay={i * 100}>
              <div className="package-card">
                {pkg.bestseller && (
                  <span className="package-card__badge">BESTSELLER</span>
                )}
                <div className="package-card__emoji">{pkg.emoji}</div>
                <h3 className="package-card__name">{pkg.name}</h3>
                <p className="package-card__desc">{pkg.description}</p>
                <p className="package-card__price">{pkg.price}</p>
                {!pkg.isCommunication && (
                  <p className="package-card__extra">
                    + kérhető: 📒 füzet, 📎 nyakba akasztó
                  </p>
                )}
                <button className="btn btn--outline" onClick={() => setSelected(pkg)}>
                  Tovább
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <h3 className="section-title section-title--sub">Extrák</h3>
          <div className="extras-grid">
            {extras.map((extra) => (
              <div key={extra.name} className="extra-card">
                <div className="extra-card__emoji">{extra.emoji}</div>
                <div className="extra-card__name">{extra.name}</div>
                <div className="extra-card__price">{extra.price}</div>
              </div>
            ))}
          </div>
          <p className="extras-note">Sokan csak ezt kérik majd!</p>
        </ScrollReveal>
      </div>

      <PackageModal pkg={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
