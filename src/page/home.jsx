
/**
 * Home.jsx
 *
 * Página principal del sitio (Landing Page)
 * Utiliza el layout general con Hero, Filosofía y Programas
 */

import Hero from '../components/hero'
import Filosofia from '../components/filosofia'
import Programas from '../components/programas'
import NewsletterForm from '../components/newsletterForm'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Filosofia />
      <Programas />
      <NewsletterForm />
    </Layout>
  )
}
