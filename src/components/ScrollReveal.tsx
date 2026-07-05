import { useEffect, useRef, useState, type ReactNode } from 'react'

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in'

interface ScrollRevealProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
}

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${animation} ${visible ? 'scroll-reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
