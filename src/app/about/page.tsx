import React from 'react'
import Image from 'next/image';

function About() {
  return (
    <div className='w-screen h-screen relative'>

      <div className='flex items-center w-full h-full bg-cover bg-center' style={{ backgroundImage: "url('/form.png')"}}>

        <div className='ml-11'>
          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500 text-5xl font-bold'>
            About Me</h2><br/>

          <p className='text-purple-400'>I am deeply passionate about technology, with a focus on AI and web development. I love building websites using HTML, CSS, TypeScript, and JavaScript. Currently, I am learning Next.js to make my projects more interactive and engaging. Problem-solving excites me, and I enjoy crafting websites that are easy to use and visually appealing.</p>
        </div>

        <div className='w-full flex justify-center'>
          <Image 
            src="/profile.jpg" 
            alt="pic" 
            width={300} 
            height={300}
            className='object-cover rounded-full h-80 w-80'/>
        </div>

      </div>
    </div>
  )
}

export default About;