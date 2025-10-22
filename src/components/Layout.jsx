import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'

function Layout({}) {
  return (
    <div className='relative w-full'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Layout