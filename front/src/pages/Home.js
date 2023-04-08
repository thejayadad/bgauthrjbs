import React from 'react'
import Navbar from '../components/Navbar'
import Category from "../components/Category.js"
import Feature from '../components/Feature'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Feature />

      <Category />
<Footer />

    </div>
  )
}

export default Home