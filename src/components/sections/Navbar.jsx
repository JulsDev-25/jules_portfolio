import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuVisible, setMenuVisible] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        });
      },
      { threshold: 0.5}
    );

    sections.forEach((section) => observer.observe(section))

  }, [])

  const navLinks = [
    {name: "Projects", href: "#projects"},
    {name: "Compétences", href: "#skills"},
    {name: "Blog", href: "#blog"}
  ]
  return (
    <div className='flex justify-between items-center m-0 py-4 md:py-6 px-6 lg:px-8 xl:px-8 2xl:px-16 fixed top-0 left-0 w-full z-50 bg-transparent text-gray-200 backdrop-blur-sm'>
      <img className='md:w-25 w-20' src="./src/assets/img/logo.png" alt="logo" />
      <div className='flex items-center gap-8'>
        <ul className={`absolute md:relative flex gap-8 justify-start items-center flex-col bg-gray-500/30 md:bg-transparent backdrop-blur-md pt-10 pl-0 md:p-0 w-[320px] top-0 right-0 md:w-auto h-[100vh] z-99 md:h-auto  md:flex-row transform md:translate-x-0 ${menuVisible ? 'translate-x-0':'translate-x-full'} transition-transform duration-300`}>
          <X onClick={()=> setMenuVisible(false)} className='md:hidden absolute left-6 top-6 cursor-pointer hover:scale-110'/>
          <li className='md:hidden text-white text-2xl font-bold size-30'></li>
          {navLinks.map((link, index) => (
            <li key={index}><a className={`bg-clip-text hover:text-cyan-200 bg-linear-to-r from-indigo-500 to-purple-500 ${activeSection === link.href.slice(1) ? 'text-transparent' : 'text-auto'}`} href={link.href}>{link.name} </a></li>
          ))}

          <div className='md:hidden absolute bottom-10 w-full flex justify-center items-center'>
            <a href='#' className='p-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full text-white mx-2'><Github /></a>
            <a href='#' className='p-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full text-white mx-2'><Linkedin /></a>
            <a href='#' className='p-2 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full text-white mx-2'><Mail /></a>
          </div>
        </ul>
        <button 
          className='border-1 hidden md:block hover:bg-linear-to-r from-indigo-500 to-purple-500 px-4 py-2 transition'
          style={{borderImage: 'linear-gradient(to right, #3b82f6, #8b5cf6) 1'}}
        >
          Me contacter
        </button>
        <Menu onClick={()=> setMenuVisible(true)} className='md:hidden size-7'/>

      </div>
    </div>
  )
}

export default Navbar