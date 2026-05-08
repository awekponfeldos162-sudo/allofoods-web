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

export default function App() {
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
