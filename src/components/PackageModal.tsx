import type { Package } from '../data/packages'
import { MESSENGER_URL } from '../data/packages'
import { scrollTo } from '../hooks/useTheme'

interface PackageModalProps {
  pkg: Package | null
  onClose: () => void
}

export function PackageModal({ pkg, onClose }: PackageModalProps) {
  if (!pkg) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Bezárás">×</button>
        <div className="modal__emoji">{pkg.emoji}</div>
        <h3 className="modal__title">{pkg.name}</h3>
        <p className="modal__desc">{pkg.description}</p>
        <div className="modal__contents">
          <strong>Tartalom:</strong> {pkg.contents}
        </div>
        <p className="modal__price">{pkg.price}</p>
        {pkg.isNeedsPackage && (
          <p className="modal__note">Tartalmazza: kártyák + nyakba akasztható tartó</p>
        )}
        <div className="modal__actions">
          <button
            className="btn btn--primary"
            onClick={() => {
              onClose()
              scrollTo('order')
            }}
          >
            Rendelés
          </button>
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="messenger-cta modal__messenger"
          >
            💬 Írj Messengeren
          </a>
        </div>
      </div>
    </div>
  )
}
