import Image from 'next/image'
import React from 'react'

function project() {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url(form.png)" }} >

      <div className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white text-neutral-50    p-5" style={{ backgroundImage: "url(bg.jpg)" }}>

        <h2 className="text-2xl font-bold mb-5 text-center text-white">
          Project
        </h2>

        <div className='flex justify-around'>

          <div className='flex flex-col items-center'> 
            <Image src="/download.png" alt='html,css&tsproject' height={500} width={200}/>
            <a href="https://github.com/MinalSaleem/Hackathon" target="_blank" rel="noopener noreferrer">
            <p className= "text-blue-500 hover:underline">Html,Css,Ts</p>
            </a>
          </div>

          <div className='flex flex-col items-center'>
            <Image src="/tss.jpg" alt='typescriptproject' height={100} width={200}/>
            <a href="https://github.com/MinalSaleem/Typescript-45-Exercise" target="_blank" rel="noopener noreferrer">
            <p className= "text-blue-500 hover:underline">Typescript</p>
            </a>
          </div>

          <div className='flex flex-col items-center'>
            <Image src="/nextjss.jpeg" alt='nextjsproject' height={100} width={200}/>
            <a href="https://github.com/MinalSaleem/nextjs-class-assignment" target="_blank" rel="noopener noreferrer">
            <p className= "text-blue-500 hover:underline">Nextjs</p>
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default project;