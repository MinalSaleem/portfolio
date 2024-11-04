'use client'
import React from 'react'
import { Button } from '../../components/ui/button'
import { useRouter } from 'next/navigation'


export default function Navbar() {
    const route = useRouter()
  return (
    <div className='bg-gradient-to-b from-[#13283f] to-[#413875] text-end h-19'>
        <Button onClick={()=>route.push('/')} className='text-xl font-b bg-transparent text-purple-500 hover:text-purple-400 hover:bg-transparent'> Home </Button>

        <Button onClick={()=>route.push('/about')} className='text-xl font-b bg-transparent text-purple-500 hover:text-purple-400 hover:bg-transparent'>About</Button>

        <Button onClick={()=>route.push('/project')} className='text-xl font-b bg-transparent text-purple-500 hover:text-purple-400 hover:bg-transparent'>Project</Button>

        <Button onClick={()=>route.push('/contact')} className='text-xl font-b bg-transparent text-purple-500 hover:text-purple-400 hover:bg-transparent'>Contact</Button>
    </div>
  )
};