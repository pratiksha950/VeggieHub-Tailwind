import React from 'react'
import {Salad} from 'lucide-react'

function Navbar() {
  return (
    <div className='sticky top-0 w-full bg-green-500 h-20 flex items-center px-4'>
      <Salad className='mr-2 ' size={40}/>
      <h2 className='text-2xl font-bold'>VeggieHub</h2>
    </div>
  )
}

export default Navbar