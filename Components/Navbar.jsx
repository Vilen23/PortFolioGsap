import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar flex items-center justify-between px-[3rem] py-[1rem] fixed top-0 w-[100vw] z-[100]'>
      <span className='h-[2px] w-[50px] absolute bottom-0'></span>
        <div className='Logo capitalize text-[30px] cursor-pointer'>Shivam</div>
        <ul className="menu flex gap-[5rem] uppercase font-light">
            <li><a href="#">about</a></li>
            <li><a href="#">projects</a></li>
            <li><a href="#">contact</a></li>
        </ul>
        <div className="btn font-bold uppercase">instagram</div>
    </nav>
  )
}

export default Navbar
