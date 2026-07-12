import express from 'express'
import multer from 'multer'
import nodemailer from 'nodemailer'

const app = express()
const port = Number(process.env.API_PORT || 8787)
const receiverEmail = process.env.ORDER_RECEIVER_EMAIL || 'm.szilvia33333@gmail.com'

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 10,
  },
})

function createTransporter() {
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER || process.env.GMAIL_USER
  const pass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    throw new Error(
      'Hiányzó SMTP hitelesítés. Állítsd be az SMTP_USER és SMTP_PASS (vagy GMAIL_USER + GMAIL_APP_PASSWORD) környezeti változókat.'
    )
  }

  if (host) {
    return nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false') === 'true',
      auth: { user, pass },
    })
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  })
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/order', upload.array('files', 10), async (req, res) => {
  try {
    const { name, contact, childAge, packageChoice, description } = req.body
    const extrasRaw = req.body.extras || ''

    if (!name || !contact || !childAge || !packageChoice) {
      return res.status(400).json({
        ok: false,
        error: 'Hiányzó kötelező mezők.',
      })
    }

    const extras = String(extrasRaw)
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)

    const files = Array.isArray(req.files) ? req.files : []

    const text = [
      'Új rendelés érkezett a weboldal űrlapjáról.',
      '',
      `Név: ${name}`,
      `Elérhetőség: ${contact}`,
      `Gyermek kora: ${childAge}`,
      `Csomag választás: ${packageChoice}`,
      extras.length ? `Extrák: ${extras.join(', ')}` : 'Extrák: nincs',
      description ? `Igények leírása: ${description}` : 'Igények leírása: nincs megadva',
      `Csatolt képek: ${files.length} db`,
    ].join('\n')

    const html = `
      <h2>Új rendelés érkezett</h2>
      <ul>
        <li><strong>Név:</strong> ${String(name)}</li>
        <li><strong>Elérhetőség:</strong> ${String(contact)}</li>
        <li><strong>Gyermek kora:</strong> ${String(childAge)}</li>
        <li><strong>Csomag választás:</strong> ${String(packageChoice)}</li>
        <li><strong>Extrák:</strong> ${extras.length ? extras.join(', ') : 'nincs'}</li>
      </ul>
      <p><strong>Igények leírása:</strong></p>
      <p>${String(description || 'nincs megadva').replace(/\n/g, '<br/>')}</p>
      <p><strong>Csatolt képek:</strong> ${files.length} db</p>
    `

    const transporter = createTransporter()
    const sender = process.env.SMTP_FROM || process.env.SMTP_USER || process.env.GMAIL_USER

    if (!sender) {
      throw new Error('Hiányzó feladó email cím (SMTP_FROM vagy SMTP_USER).')
    }

    await transporter.sendMail({
      from: sender,
      to: receiverEmail,
      subject: `Új rendelés - ${name}`,
      text,
      html,
      attachments: files.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      })),
    })

    return res.json({ ok: true })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : 'Ismeretlen hiba történt.',
    })
  }
})

app.listen(port, () => {
  console.log(`Order API listening on http://localhost:${port}`)
})
