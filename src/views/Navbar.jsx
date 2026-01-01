import React, { useEffect } from 'react'
import {Salad,ShoppingCart} from 'lucide-react'
import {useState} from 'react'

function Navbar({refreshCart}) {
  const [cartItems,setCartItems]=useState([]);

useEffect(() => {
  const existingCart =
  JSON.parse(localStorage.getItem("cartItems")) || [];
  setCartItems(existingCart);
}, [refreshCart]);

  return (
    <div className='sticky top-0 w-full bg-green-500 h-20 flex items-center px-4'>
      <Salad className='mr-2 ' size={40}/>
      <h2 className='text-2xl font-bold'>VeggieHub</h2>

    <div className='ml-auto relative '>
    <span className='absolute top-[-13px] right-1  font-bold'>{cartItems.length}</span>
    <ShoppingCart className='ml-auto ' size={35}/>
    </div>
    </div>
  )
}

export default Navbar