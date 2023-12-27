"use client"
import Posts from './components/Posts/Posts'
import Albums from './components/Albums/Albums'
import Users from './components/Users/Users'
import Navbar from './components/Navbar'
import { useState } from 'react'

export default function Home() {
  const [view,setView]=useState<string>('Users')
  return (
    <div className="container mx-auto flex flex-col space-y-10 min-h-screen p-5">
      <Navbar
      view = {view}
      setView= {setView}
      />

      <div className='pt-10'>
      {view ==='Users' &&
      <div> 
        <h2 className='text-indigo-900 text-2xl font-bold mb-4 text-center text-[40px] fixed z-20 top-4 left-4'>Users</h2>
        <Users 
        view = {view}
        setView= {setView}
        />
      </div>
      }
      {view === 'Posts' &&
      <div>

        <h2 className='text-indigo-900 text-2xl font-bold mb-4 text-center text-[40px]  fixed z-20 top-4 left-4'>Posts</h2>
        <Posts 
        view = {view}
        setView= {setView}
        />
      </div>
    }

    {view === 'Albums' && 
      <div>
        <h2 className='text-indigo-900 text-2xl font-bold mb-4 text-center text-[40px]  fixed z-20 top-4 left-4'>Albums</h2>
        <Albums
        view = {view}
        setView= {setView}
        />
      </div>
      }
      </div>
    </div>
  )
}
