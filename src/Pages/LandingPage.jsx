import React from 'react'
import Navbar from '../Components/Navbar'
import Readourblog from '../Components/Readourblog'
import Bloglist from '../Components/Bloglist'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'


const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Readourblog/>
      <Bloglist/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default LandingPage
