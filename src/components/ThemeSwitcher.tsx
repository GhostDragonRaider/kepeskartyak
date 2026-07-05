import type { Theme } from '../data/packages'

interface ThemeSwitcherProps {
  theme: Theme
  onChange: (theme: Theme) => void
}

const themes: { id: Theme; label: string; icon: string }[] = [
  { id: 'autism', label: 'Autizmus', icon: '🧩' },
  { id: 'light', label: 'Világos', icon: '☀️' },
  { id: 'dark', label: 'Sötét', icon: '🌙' },
]

export function ThemeSwitcher({ theme, onChange }: ThemeSwitcherProps) {
  return (
    <div className="theme-switcher" title="Témaváltás">
      {themes.map((t) => (
        <button
          key={t.id}
          className={theme === t.id ? 'active' : ''}
          onClick={() => onChange(t.id)}
          aria-label={t.label}
          title={t.label}
        >
          {t.icon}
        </button>
      ))}
    </div>
  )
}
