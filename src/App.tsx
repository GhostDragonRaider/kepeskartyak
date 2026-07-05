import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhyImportant } from './components/WhyImportant'
import { Packages } from './components/Packages'
import { About } from './components/About'
import { HowToOrder } from './components/HowToOrder'
import { OrderForm } from './components/OrderForm'
import { Pricing } from './components/Pricing'
import { Contact, Footer, FloatingMessenger } from './components/Contact'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Header theme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
        <WhyImportant />
        <Packages />
        <About />
        <HowToOrder />
        <OrderForm />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingMessenger />
    </>
  )
}
