import React from 'react'

const buttton_Varients={
    primary:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-4",
    secondary:"bg-white hover:bg-gray-200 text-green-700 font-bold py-2 px-4 cursor-pointer mt-4 border border-green-500 rounded-2xl",
    tertiary:"bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded cursor-pointer mt-4"

}

const button_sizes={
    small:"text-sm text-xl",
    medium:"text-md text-2xl",
    large:"text-lg text-3xl"
}

function btn({ title, variant = "primary" , onClick={}, size="medium" }) {
  return (
    <div>
        <button className={`${buttton_Varients[variant]} ${button_sizes[size]}`} onClick={onClick}>
           {title}
        </button>
    </div>
  )
}

export default btn