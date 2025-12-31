import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../index.css'
import imgMainHeader from '../assets/main-header.png'

function Home() {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-blue-300">
        <div className='flex items-center'>
        <img src={imgMainHeader} alt="Main Header" className="h-[500px]"/>
        <div>
        <h1 className="pt-0 text-6xl! font-normal! text-green-900">
          From farm to your doorstep,
          we deliver freshness you can trust.
        </h1>
        </div>
    </div>

    <h1 className="pt-0 text-4xl! font-bold! text-black-900">
      Taaza sabzi har din,
      healthy zindagi ke liye.
    </h1>

      </div>
      <Footer />
    </div>
  )
}

export default Home
