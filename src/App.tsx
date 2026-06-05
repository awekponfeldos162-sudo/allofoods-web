import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import RestaurantsSection from './components/RestaurantsSection'
import WhySection from './components/WhySection'
import AppDownload from './components/AppDownload'
import DriversSection from './components/DriversSection'
import RestaurantPartner from './components/RestaurantPartner'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'
import CookiesPage from './pages/CookiesPage'

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <RestaurantsSection />
      <WhySection />
      <AppDownload />
      <DriversSection />
      <RestaurantPartner />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions-utilisation" element={<TermsPage />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
    </BrowserRouter>
  )
}
