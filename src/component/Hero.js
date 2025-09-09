import React from 'react'

function Hero() {
  return (
    <div className="text-center bg-blue-500 h-[350px] flex flex-col justify-center items-center space-y-4">
      <h1 className="text-red-200 font-semibold text-4xl">
        Welcome to Our Puns n’ Noodles
      </h1>
      <p className='text-red-200 text-2xl'>Authentic Nigerian cuisine in the heart of the city</p>
      <div className='pt-4 space-x-4 '>
        <button className='border border-white px-4 py-2 cursor-pointer rounded-full font-semibold hover:text-red-200 bg-white text-blue-500 transition'>
          View Menu  
        </button>
        <button className='border border-white px-4 py-2 cursor-pointer hover:text-red-200  rounded-full font-semibold text-white transition'>
          Make Reservation
        </button>
      </div>
      
    </div>
  );
}

export default Hero
