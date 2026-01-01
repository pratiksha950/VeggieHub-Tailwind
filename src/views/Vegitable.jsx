import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import vegitable_data from '../data.json'
import VegitableCard from '../components/VegitableCard'
import {useState} from 'react'
import toast,{Toaster} from 'react-hot-toast'

function Vegitable() {
  const [refreshCart,setRefreshCart]=useState(false);
  function addToCart(items){

    const existingCart=JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex=existingCart.findIndex((item) => item.id === items.id);

    if(itemIndex !== -1){
      existingCart[itemIndex]=items;
    }else{
      existingCart.push(items);
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    setTimeout(() => {
      setRefreshCart(!refreshCart);
      toast.success("Item added to cart successfully!");
    }, 1000);
  }
  return (
    <div>
      <Navbar refreshCart={refreshCart}/>
     

      <div className='flex items-center justify-center flex-wrap gap-4 '>
        {vegitable_data.map((item) => {
          return <VegitableCard key={item.id} {...item} addToCart={addToCart}/>
        })}
      </div>
      
      <Footer />
      </div>
  )
}

export default Vegitable