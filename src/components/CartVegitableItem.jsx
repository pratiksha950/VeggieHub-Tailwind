import React from 'react'
import Button from './btn'

const removeFromCart=(id)=>{
 console.log(`  Remove from cart : ${id}`);
 const cartItems=JSON.parse(localStorage.getItem("cartItems")) || [];
 const updatedCartItems=cartItems.filter(item=>item.id !== id);
 localStorage.setItem("cartItems",JSON.stringify(updatedCartItems));
  window.location.reload();
}

function CartVegitableItem({
  id,
    name,
    price,
    quantity,
    imageUrl,

}) {
  return (
    
    <div className=' flex flex-row items-center justify-center border border-green-500 rounded-lg shadow-lg m-4 p-4 bg-green-100 md:flex-row w-96 '>
        <div >
            <img src={imageUrl} alt={name} className="h-32 w-32 object-contain bg-gray-400"/>
        </div>
        <div className='ml-6 flex flex-col gap-2'>
        <p className='text-md'>ItemName: {name}</p>
       
        <p>Price: ₹ {price} per Unit</p>
        <p>Quantity: {quantity}</p>
        <p className=' font-bold'>Total: ₹ {price * quantity}</p>

       <Button title="Remove from Cart" variant="forth" size="small" onClick={() => removeFromCart(id)}/>
       
        </div>
    </div>
  )
}

export default CartVegitableItem