import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll"

const Navbar = () => {
    
    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Projects"
        },
        {
            id: 4,
            link: 'Technologies'
        },
        {
            id: 5,
            link: "Certification"
        },
        {
            id: 6,
            link: "Contact"
        }
    ]

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            if (scrollTop > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`hidden md:flex fixed top-0 justify-between items-center h-20 px-8 md:px-16 lg:px-24 w-full z-30 transition-all duration-700 liquid-navbar ${isScrolled ? 'liquid-glow' : ''}`}>
            {/* Logo Section - Icon Only */}
            <div className='flex items-center group relative liquid-logo'>
                <div className='relative p-4 rounded-full bg-gradient-to-r from-primary-color/10 to-purple-600/10 border border-primary-color/20 group-hover:border-primary-color/40 transition-all duration-500'>
                    <i className='bx bx-code-curly text-2xl text-primary-color group-hover:text-purple-300 transition-all duration-500 group-hover:scale-110'></i>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className='flex items-center space-x-2'>
                {links.map(({ id, link }) => (
                    <div key={id} className='relative group'>
                        <Link 
                            to={link} 
                            smooth 
                            duration={450}
                            className='relative text-gray-300 hover:text-white transition-all duration-500 font-medium text-sm px-4 py-3 rounded-xl liquid-underline navbar-link cursor-pointer'
                        >
                            <span className='relative z-10'>{link}</span>
                        </Link>
                    </div>
                ))}
            </nav>

            {/* CTA Button */}
            <div className='flex items-center'>
                <button className='relative px-6 py-3 bg-gradient-to-r from-primary-color via-purple-600 to-primary-color text-black font-semibold rounded-xl hover:from-purple-600 hover:via-primary-color hover:to-purple-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 liquid-button'>
                    <span className='relative z-10'>Get In Touch</span>
                </button>
            </div>
        </header>
    )
}

export default Navbar
