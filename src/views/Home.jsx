import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../index.css'

function Home() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-blue-300 flex justify-center">
        <h1 className="pt-6 text-3xl font-bold">
          Welcome to VeggieHub
        </h1>
      </div>

      <Footer />
    </div>
  )
}

export default Home
