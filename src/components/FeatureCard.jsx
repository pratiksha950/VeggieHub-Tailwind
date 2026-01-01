import React from 'react'

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

export default FeatureCard