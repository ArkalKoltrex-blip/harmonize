import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Quiz from './components/Quiz.jsx'
import About from './components/About.jsx'
import Showcase from './components/Showcase.jsx'
import Suppliers from './components/Suppliers.jsx'
import Footer from './components/Footer.jsx'
import './components/components.css'

export default function App() {
  return (
    <>
      <div className="site-bg" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Quiz />
        <About />
        <Showcase />
        <Suppliers />
      </main>
      <Footer />
    </>
  )
}
