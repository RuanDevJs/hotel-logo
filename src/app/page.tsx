'use client'

import Gallery from './components/Home/Gallery'
import Main from './components/Home/Main'
import Booking from './components/Home/Booking'
import Offers from './components/Home/Offers'
import Footer from './components/Footer'

export default function Home() {


  return (
    <div>
      <Main />
      <Booking />
      <Gallery />
      <Offers />
      <Footer />
    </div>
  )
}
