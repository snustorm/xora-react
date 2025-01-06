import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Testimonials from './sections/Testimonials'
import Download from './sections/Download'
import Footer from './sections/Footer'
import './App.css'

function App() {

  return (
    
    <main className='overflow_hidden'>
        <Header></Header>
        <Hero></Hero>
        <Features />
        <Pricing />
        <Faq/>
        <Testimonials />
        <Download/>
        <Footer/>
    </main>
    )
}

export default App
