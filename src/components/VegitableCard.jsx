import React from 'react'
import Button from '../components/btn'
import {useState} from 'react'
import { CirclePlus,CircleMinus } from 'lucide-react';
import toast, {Toaster} from 'react-hot-toast';

 

function VegitableCard({id,name,price,image,description,unit,category,addToCart}) {
  const [quantity,setQuantity]=useState(1);
   

  return (
    <div className='border p-4 rounded-lg shadow-lg w-80 flex flex-col items-center justify-center border-green-500 bg-green-300 m-4 h-auto'>
        <h1>information:{id}</h1>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className='font-bold'>Price: ₹ {price} {unit}</p>
        <p>Category: {category}</p>
        <img src={image} alt={name} className='w-60 h-50 object-cover'/>

        <div className='flex mt-4 px-4 items-center justify-center text-2xl font-bold '>

          <CircleMinus className='cursor-pointer m-2 ' onClick={() => {
             if(quantity > 1) {
               setQuantity(quantity - 1) } else{
                  toast.error("Quantity cannot be less than 1")
               }
               }}/>

            <label>{quantity}</label>

            <CirclePlus className='cursor-pointer m-2  ' onClick={() => setQuantity(quantity + 1)}/>
            
        </div>

        <Button title="Add to Cart" variant="primary" size="small" onClick={() => addToCart({id, name, price, unit, quantity, totalAmount: price * quantity})}/>

       <Toaster />
    </div>
  )
}

export default VegitableCard