import { MESSENGER_URL } from '../data/packages'
import { ScrollReveal } from './ScrollReveal'

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Kapcsolat</h2>
          <p>
            A rendelésekkel és kérdésekkel kapcsolatban Messengeren tudunk egyeztetni.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="contact-actions">
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--messenger"
            >
              💬 Írj Messengeren
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '480px' }}>
              Minden rendelést egyedileg beszélünk át, hogy a lehető legjobban
              a gyermek igényeihez igazodjon.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2026 Egyedi vizuális kártyák</p>
        <p>Készítve szeretettel ❤️</p>
      </div>
    </footer>
  )
}

export function FloatingMessenger() {
  return (
    <button
      className="floating-messenger"
      onClick={() => window.open(MESSENGER_URL, '_blank')}
      aria-label="Írj Messengeren"
    >
      💬 Messenger
    </button>
  )
}
