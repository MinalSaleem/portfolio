import React from 'react'
import { Button } from '@/components/ui/button'

function Contactform() {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-5 text-white">
        Contact Me
      </h2>

      <div className="mb-3">
        <input type="text" placeholder="Your name" name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-blue-900 border-0 rounded shadow"/>
      </div>

      <div className="mb-3">
        <input type="email" placeholder="Email" name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-blue-900 border-0 rounded shadow"/>
      </div>

      <div className="mb-3">
        <input placeholder="Your message" name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-blue-900 border-0 rounded shadow"/>
      </div>

      <Button className="bg-blue-900 hover:bg-blue-800 text-gray-400 px-6 mb-10 py-3 font-bold border-0 rounded shadow">
        SEND
      </Button>
      
    </form>
  )
}

export default Contactform;