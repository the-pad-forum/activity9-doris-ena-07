"use client"
import React from 'react'
import Albums from './components/Albums/Albums'
import { useState } from 'react'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <div className="container mx-auto  flex flex-col space-y-7 pt-2 mt-4]">
      <h2 className='text-white font-bold text-center text-[50px]'>Albums</h2>

      <Albums />
    </div>

    // <Footer/>
  )

  
}
