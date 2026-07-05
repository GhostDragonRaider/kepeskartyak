import { useEffect, useState } from 'react'
import type { Theme } from '../data/packages'

const STORAGE_KEY = 'webshop-theme'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
    return saved ?? 'autism'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return { theme, setTheme }
}

export function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const headerOffset = 70
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}
