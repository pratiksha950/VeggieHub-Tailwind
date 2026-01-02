import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {useState} from 'react'
import CartVegitableItem from '../components/CartVegitableItem';


function MyCart() {
  const [cartItems,setCartItems]=useState([]);

  useEffect(()=>{
    const existingCart =
    JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(existingCart);
  },[])

  return (
    <div>
      <Navbar />


    <div className='min-h-screen flex flex-row flex-wrap gap-4 justify-center bg-green-200 p-4 '>
      <div className='max-h-[400px ] bg-green-300 '>
      {
        cartItems.map((item)=>{
            console.log(item);
          return(<CartVegitableItem key={item.id} description={item.description} {...item} >
            
          </CartVegitableItem>) 
        })
      }
      </div>

    </div>





      <Footer />
    </div>
  )
}

export default MyCart