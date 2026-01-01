    // {
    //     "id": 17,
    //     "name": "Brussels Sprouts",
    //     "price": 27,
    //     "image": "https://picsum.photos/seed/picssumsssssssssssss/200/300",
    //     "description": "Nutty and flavorful Brussels sprouts, perfect for roasting and sautéing.",
    //     "unit": "per kg",
    //     "category": "cruciferous vegetable"
    // },


import React from 'react'

function VegitableCard({id,name,price,image,description,unit,category}) {
  return (
    <div className='border p-0 rounded-lg shadow-lg w-80 flex flex-col items-center justify-center border-green-500 bg-green-300 m-4 h-120'>
        <h1>information:{id}</h1>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className='font-bold'>Price: ₹ {price} {unit}</p>
        <p>Category: {category}</p>
        <img src={image} alt={name} className='w-60 h-50 object-cover'/>
    </div>
  )
}

export default VegitableCard