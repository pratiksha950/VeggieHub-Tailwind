import React from 'react'
import IconFresh from '../assets/fresh.png'
import IconQuality from '../assets/high-quality.png'
import IconSatisfaction from '../assets/satisfaction.png'



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


function FeatureCard({ title, description, img }) {
  return (
        <div
      
      className="flex flex-col items-center justify-evenly p-6 bg-green-100 border border-gray-300 rounded-lg shadow-md h-80"
    >
      <img
        src={img}
        alt={title}
        className="h-26 w-26 mr-4"
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="ml-4 text-gray-700">{description}</div>
    </div>

  )
}


function FeatureSection() {
  return (
    <>

  <div className="flex justify-around bg-green-200 py-8 gap-9 flex-col md:flex-row">
    {FEATURES_CONFIG.map((feature) => {
  const { title, description, img } = feature;

  return (
    <>
      <FeatureCard title={title} description={description} img={img} />
    </>
  );
})}

    
  
    </div>      

</>  )}

export default FeatureSection

