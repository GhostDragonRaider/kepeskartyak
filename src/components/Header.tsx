import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { scrollTo } from '../hooks/useTheme'
import { ThemeSwitcher } from './ThemeSwitcher'
import type { Theme } from '../data/packages'

const navItems = [
  { label: 'Főoldal', id: 'hero' },
  { label: 'Rólam', id: 'about' },
  { label: 'Csomagok', id: 'packages' },
  { label: 'Rendelés', id: 'order' },
  { label: 'Árak', id: 'pricing' },
  { label: 'Kapcsolat', id: 'contact' },
]

interface HeaderProps {
  theme: Theme
  onThemeChange: (theme: Theme) => void
}

export function Header({ theme, onThemeChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const handleNav = (id: string) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  const mobileMenu = menuOpen
    ? createPortal(
        <>
          <button
            type="button"
            className="mobile-menu__overlay"
            aria-label="Menü bezárása"
            onClick={() => setMenuOpen(false)}
          />
          <nav id="mobile-nav" className="mobile-menu" aria-label="Mobil menü">
            <p className="mobile-menu__title">Menü</p>
            <ul className="mobile-menu__list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNav(item.id)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-menu__footer">
              <p className="mobile-menu__label">Témaváltás</p>
              <ThemeSwitcher theme={theme} onChange={onThemeChange} />
            </div>
          </nav>
        </>,
        document.body
      )
    : null

  return (
    <header className={`header ${menuOpen ? 'header--open' : ''}`}>
      <div className="container header__bar">
        <a
          href="#hero"
          className="header__logo"
          onClick={(e) => { e.preventDefault(); handleNav('hero') }}
        >
          <span className="header__logo-icon" aria-hidden="true">🧩</span>
          <span className="header__logo-text">Egyedi képeskártyák</span>
        </a>

        <nav className="header__nav header__nav--desktop" aria-label="Főmenü">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleNav(item.id) }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <div className="header__themes-desktop">
            <ThemeSwitcher theme={theme} onChange={onThemeChange} />
          </div>
          <button
            type="button"
            className={`header__burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileMenu}
    </header>
  )
}
