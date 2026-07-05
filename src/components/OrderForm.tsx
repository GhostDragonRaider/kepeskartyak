import { useState, type FormEvent, type DragEvent } from 'react'
import { packageOptions, MESSENGER_URL } from '../data/packages'
import { ScrollReveal } from './ScrollReveal'

interface FormData {
  name: string
  contact: string
  childAge: string
  packageChoice: string
  description: string
  extras: string[]
}

const extraOptions = [
  'Nyakba akasztó',
  'Laminálás + vágás',
]

export function OrderForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    contact: '',
    childAge: '',
    packageChoice: '',
    description: '',
    extras: [],
  })
  const [files, setFiles] = useState<File[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const handleExtra = (extra: string) => {
    setForm((prev) => ({
      ...prev,
      extras: prev.extras.includes(extra)
        ? prev.extras.filter((e) => e !== extra)
        : [...prev.extras, extra],
    }))
  }

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return
    const arr = Array.from(newFiles).filter(
      (f) => f.type.startsWith('image/') && files.length + 1 <= 10
    )
    setFiles((prev) => [...prev, ...arr].slice(0, 10))
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    handleFiles(e.dataTransfer.files)
  }

  const buildMessage = () => {
    const lines = [
      'Új rendelés:',
      `Név: ${form.name}`,
      `Elérhetőség: ${form.contact}`,
      `Gyermek kora: ${form.childAge}`,
      `Csomag: ${form.packageChoice}`,
      form.extras.length ? `Extrák: ${form.extras.join(', ')}` : '',
      `Igények: ${form.description}`,
      files.length ? `Csatolt képek: ${files.length} db` : '',
    ].filter(Boolean)
    return encodeURIComponent(lines.join('\n'))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const openMessenger = () => {
    window.open(`${MESSENGER_URL}?text=${buildMessage()}`, '_blank')
  }

  const sendEmail = () => {
    const subject = encodeURIComponent('Egyedi kártya rendelés')
    const body = buildMessage()
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  return (
    <section id="order" className="section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Egyedi rendelés</h2>
        </ScrollReveal>

        <div className="order-grid">
          <ScrollReveal animation="fade-left" className="order-info">
            <p>
              Minden kártya egyedileg készül a gyermekedről készült fotók alapján.
              Így a kártyák sokkal érthetőbbek és könnyebben elfogadottak lesznek számára.
            </p>
            <p style={{ fontSize: '0.9rem' }}>
              Nincs kártyás fizetés – a rendelés kapcsolatfelvétel és egyeztetés.
              Pontos árat egyeztetés után adok meg.
            </p>
            <button className="btn btn--messenger" onClick={() => window.open(MESSENGER_URL, '_blank')}>
              💬 Írj Messengeren
            </button>
          </ScrollReveal>

          <ScrollReveal animation="fade-right">
            {submitted ? (
              <div className="order-form">
                <div className="form-success">
                  Köszönöm! A rendelés adatai elkészültek.
                </div>
                <div className="form-actions">
                  <button className="btn btn--messenger" onClick={openMessenger}>
                    💬 Küldés Messengeren
                  </button>
                  <button className="btn btn--outline" onClick={sendEmail}>
                    📧 Küldés emailben
                  </button>
                  <button className="btn btn--outline" onClick={() => setSubmitted(false)}>
                    Új rendelés
                  </button>
                </div>
              </div>
            ) : (
              <form className="order-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Név (szülő neve)</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact">Email vagy telefon</label>
                  <input
                    id="contact"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="childAge">Gyermek kora</label>
                  <input
                    id="childAge"
                    required
                    value={form.childAge}
                    onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="package">Csomag választás</label>
                  <select
                    id="package"
                    required
                    value={form.packageChoice}
                    onChange={(e) => setForm({ ...form, packageChoice: e.target.value })}
                  >
                    <option value="">Válassz...</option>
                    {packageOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Kép feltöltés (max 10 db, JPG/PNG)</label>
                  <div
                    className={`file-drop ${dragOver ? 'dragover' : ''}`}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-input')?.click()}
                  >
                    <input
                      id="file-input"
                      type="file"
                      accept="image/jpeg,image/png"
                      multiple
                      onChange={(e) => handleFiles(e.target.files)}
                    />
                    <p>📷 Húzd ide a képeket vagy kattints a feltöltéshez</p>
                    {files.length > 0 && (
                      <div className="file-list">
                        {files.map((f) => f.name).join(', ')}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Igények leírása</label>
                  <textarea
                    id="description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Írd le, mire van szükségetek..."
                  />
                </div>

                <div className="form-group">
                  <label>Extrák</label>
                  <div className="form-checkboxes">
                    {extraOptions.map((extra) => (
                      <label key={extra}>
                        <input
                          type="checkbox"
                          checked={form.extras.includes(extra)}
                          onChange={() => handleExtra(extra)}
                        />
                        {extra}
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                  Rendelés elküldése
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
