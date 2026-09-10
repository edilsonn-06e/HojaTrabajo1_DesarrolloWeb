import Header from './components/Header.jsx'
import Description from './components/Description.jsx'
import Gallery from './components/Gallery.jsx'
import Itinerary from './components/Itinerary.jsx'
import ActivityFilter from './components/ActivityFilter.jsx'
import QuoteCalculator from './components/QuoteCalculator.jsx'
import ReservationForm from './components/ReservationForm.jsx'
import Testimonials from './components/Testimonials.jsx'
import Recommendations from './components/Recommendations.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />

      <main>
        <Description />
        <Gallery />
        <Itinerary />
        <ActivityFilter />
        <QuoteCalculator />
        <ReservationForm />
        <Testimonials />
        <Recommendations />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
