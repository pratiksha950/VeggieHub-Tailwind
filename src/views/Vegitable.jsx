import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import vegitable_data from '../data.json'
import VegitableCard from '../components/VegitableCard'

function Vegitable() {
  return (
    <div>
      <Navbar />
     

      <div className='flex items-center justify-center flex-wrap gap-4 '>
        {vegitable_data.map((item) => {
          return <VegitableCard key={item.id} {...item}/>
        })}
      </div>
      
      <Footer />
      </div>
  )
}

export default Vegitable