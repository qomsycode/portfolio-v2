import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    // State to manage mobile menu visibility
    const [nav, setNav] = useState(false);

    // Toggle menu function
    const toggleNav = () => {
        setNav(!nav);
    };

    // Close menu when a link is clicked
    const closeNav = () => {
        setNav(false);
    };

    // Navigation Items Data
    const navItems = [
        { id: 1, text: 'About', link: '#about' },
        { id: 2, text: 'Skills', link: '#skills' },
        { id: 3, text: 'Projects', link: '#portfolio' },
        { id: 4, text: 'Contact', link: '#contact' },
    ];

    return (
        // Main Navbar Container: Fixed position, Glassmorphism effect
        <div className="fixed w-full flex justify-between p-4 items-center gap-6 glass z-50 top-0 left-0 bg-opacity-60 backdrop-blur-md border-b-[1px] border-white/10">
            {/* Logo Section */}
            <div className="text-2xl font-bold tracking-tighter text-white ml-4 md:ml-12 cursor-pointer">
                <a href="#home">
                    Qomzyy<span className="text-sky-400">.</span>
                </a>
            </div>

            {/* Desktop Menu - Hidden on small screens */}
            <ul className="hidden md:flex gap-8 mr-12 text-slate-300 font-medium">
                {navItems.map((item) => (
                    <li key={item.id} className="hover:text-white transition-colors duration-300 cursor-pointer relative group">
                        <a href={item.link}>{item.text}</a>
                        {/* Animated Underline Effect */}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Icon (Burger/Close) - Visible only on small screens */}
            <div onClick={toggleNav} className="block md:hidden text-slate-300 mr-4 cursor-pointer z-50">
                {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={
                    nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-full bg-[#020617] border-r border-slate-800 ease-in-out duration-500 z-40 flex flex-col p-8'
                        : 'fixed left-[-100%] top-0 h-full ease-in-out duration-500 z-40' // Slide interactions
                }
            >
                <h1 className="text-3xl font-bold text-white mb-8">
                    Qomzyy<span className="text-sky-400">.</span>
                </h1>
                <ul className="uppercase space-y-4">
                    <li className="p-4 border-b border-slate-800 text-slate-300 hover:text-white cursor-pointer hover:border-sky-400 decoration-sky-400 transition-all">
                        <a href="#home" onClick={closeNav}>Home</a>
                    </li>
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className="p-4 border-b border-slate-800 text-slate-300 hover:text-white cursor-pointer hover:border-sky-400 transition-all"
                        >
                            <a href={item.link} onClick={closeNav}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Backdrop for Mobile Menu - Closes menu when clicked */}
            {nav && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={closeNav}></div>}
        </div>
    );
};

export default Navbar;
