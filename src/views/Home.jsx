import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../index.css'
import imgMainHeader from '../assets/main-header.png'
import IconFresh from '../assets/fresh.png'
import IconQuality from '../assets/high-quality.png'
import IconSatisfaction from '../assets/satisfaction.png'
import FeatureCard from '../components/FeatureCard'

const FEATURES_CONFIG=[
  {
    title:"Freshness Guaranteed",
    description:"We source our vegetables directly from trusted local farms to ensure the highest quality and freshness.",
    img:IconFresh
  },
  {
    title:"Quality Assurance",
    description:"Our vegetables are carefully selected and inspected to meet the highest quality standards.",
     img:IconQuality
  },
  {
    title:"Customer Satisfaction",
    description:"We are committed to providing excellent customer service and ensuring your satisfaction with every order.",
     img:IconSatisfaction
  },
]

function Home() {
  return (
    <div>
      <Navbar />

      <div className=" bg-green-200">
        <div className='flex items-center'>
        <img src={imgMainHeader} alt="Main Header" className="h-[500px] w-auto object-contain"/>
        <div>
        <h1 className="pt-0 text-6xl! font-normal! text-green-900">
          From farm to your doorstep,
          we deliver freshness you can trust.
        </h1>
        </div>
    </div>

    <h1 className="pt-0 text-4xl! font-bold! text-black-900 pb-8 text-center">
      Taaza sabzi har din,
      healthy zindagi ke liye.
    </h1>

      </div>

  <div className="flex justify-around bg-green-200 py-8 gap-9">
    {FEATURES_CONFIG.map((feature) => {
  const { title, description, img } = feature;

  return (
    <>
      <FeatureCard title={title} description={description} img={img} />
    </>
  );
})}

    
  
    </div>      
      <Footer />
    </div>
  )
}

export default Home
