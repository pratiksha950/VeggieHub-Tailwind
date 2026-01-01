import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../index.css'
import FeatureSection from '../components/FeatureSection'
import imgMainHeader from '../assets/main-header.png'
import Button from '../components/btn.jsx'
import { useNavigate } from 'react-router'



function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
                <div className=" bg-green-200">
        <div className='flex flex-col md:flex-row items-center '>
        <img src={imgMainHeader} alt="Main Header" className="h-[200px] md:h-[500px] w-auto object-contain"/>
        <div>
        <h1 className="pt-0 text-3xl! md:text-6xl! font-normal! text-green-900">
          From farm to your doorstep,
          we deliver freshness you can trust.
        </h1>

        <div className='flex gap-4 flex-row mt-6 items-center justify-center'>
          <Button title="Call Us" variant="secondary" size='medium'/>
        <Button title="Explore Now" onClick={() => navigate("/Vegitable")} variant="primary" size='small'/>
        </div>
        
        </div>
    </div>

    <h1 className="pt-0 text-2xl! md:text-4xl! font-bold! text-black-900 pb-8 text-center">
      Taaza sabzi har din,
      healthy zindagi ke liye.
    </h1>

     <FeatureSection />

      </div>

      <Footer />
    </div>
  )
}

export default Home
