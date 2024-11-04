import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className='w-screen h-screen relative'>

      <div className='flex items-center w-full h-full bg-cover bg-center' 
        style={{ backgroundImage: "url('/form.png')"}}>
              
        <div className='flex flex-col ml-11'>    
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500 text-5xl font-bold'>
            Minal Saleem
          </h1>

          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500 text-4xl mt-2'>
            Welcome to my Protfolio
          </h2>
          <p className='text-purple-400 mt-2'>Feel free to explore my projects and reach out if you have any questions or collaboration ideas!
          </p>
        </div>
        
        <div className="flex flex-grow justify-center ml-auto">
        <Image 
          src="/profile.jpg" 
          alt="picture" 
          height={300} 
          width={300} 
          className="object-cover rounded-full h-80 w-80"/>
        </div>

      </div>

    </div>
  )
}