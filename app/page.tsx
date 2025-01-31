'use client'
import React from 'react'
import Productdetails from './Components/Productdetails'
import Header1 from './Components/Header/page'
import HeroSection1 from './Components/Herosection/page'
import Footerpage from './Components/Footer/page'
import Ourservices from './Components/Services/page'

const page = () => {
  return (
    <div>
      <Header1 />
      <HeroSection1 />
      {/* Assign an id to the Product Section */}
      <section id="Productdisplay">
        <Productdetails />
      </section>
      <Ourservices/>
      <Footerpage />
    </div>
  )
}

export default page
