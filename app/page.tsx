import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
} 