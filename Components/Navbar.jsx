import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
        <div className='Logo'>Shivam</div>
        <ul className="flex bg-black">
            <li><a href="#"></a>about</li>
            <li><a href="#"></a>projects</li>
            <li><a href="#"></a>contact</li>
        </ul>
        <div className="btn">instagram</div>
    </nav>
  )
}

export default Navbar
