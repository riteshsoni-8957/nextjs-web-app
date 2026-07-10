"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";


function Header() {
    const [openNav, setOpenNav] = useState(false);

  return (
    <>
        <nav>
            <div className="container">
                <div className="logo-div">
                    <Link href="/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3W84WO6Pu_2HAnVkvqKfMOAmlSvkLkC59KI4_ujbpIs4uay1GreOi3uI&s=10" alt="image" />
                        
                        <h3 className="logo-title">
                            WEB PAGE
                        </h3>
                    </Link>
                </div>

                <div className={`navBar ${openNav ? "navBar-open": ""}`}>
                    <ul className="lists">
                        <Link href="/" onClick={() => setOpenNav(false)}>
                            <li>Home</li>
                        </Link>

                        <Link href="/about-us" onClick={() => setOpenNav(false)}>
                           <li>About Us</li> 
                        </Link>
                        
                        <Link href="/service" onClick={() => setOpenNav(false)}>
                            <li>Services</li>
                        </Link>
                        
                        <Link href="/products-server" onClick={() => setOpenNav(false)}>
                            <li>Products Server</li>
                        </Link>
                    </ul>
                </div>

                <div className="open-nav-logo" onClick={() => setOpenNav(!openNav)}>
                    {/* <IoMdMenu /> */}
                    {openNav ? <RiMenu2Fill className='icon'/> : <RiMenu3Fill className='icon'/>}
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header