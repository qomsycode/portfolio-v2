import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineDownload, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Hero = () => {
    return (
        // Hero Section Container: Min-height screen to ensure it covers viewport
        <div id="home" className="min-h-screen w-full bg-[#020617] relative overflow-hidden flex items-center justify-center pt-28">

            {/* Background Aesthetic Glows - Positioned absolutely behind content */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px]" />

            <div className="max-w-6xl w-full px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Side: Text Content with Motion Animation */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }} // Start invisible and shifted left
                    animate={{ opacity: 1, x: 0 }}   // Animate to visible and original position
                    transition={{ duration: 1 }}     // Duration of 1 second
                >
                    <p className="text-sky-400 font-bold tracking-widest mb-4 uppercase text-sm">
                        Hello, my name is
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight mb-6 font-['Outfit']">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
                            Abdullateef Qoyum
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-slate-300 mb-8 font-light tracking-wide">
                        Mobile & Frontend Engineer
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10">
                        I leverage mathematical precision and logical problem-solving to build high-performance, scalable applications using Flutter, Dart, and Modern Web Technologies.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-6">
                        <a
                            href="#portfolio"
                            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            View Projects
                        </a>
                        <a
                            href="/resume.pdf" // Ensure resume.pdf is in the public folder
                            className="px-8 py-4 border border-slate-700 text-slate-300 font-bold rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center gap-2"
                        >
                            <AiOutlineDownload size={20} />
                            Resume
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-12 flex items-center gap-6 text-slate-500">
                        <a href="https://github.com/qomsycode" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <AiFillGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/qomzyy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <AiFillLinkedin size={30} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Side - Abstract Visual or Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden md:flex justify-center items-center relative"
                >
                    {/* Abstract Card Representation */}
                    <div className="relative w-[400px] h-[400px] bg-gradient-to-tr from-slate-800 to-slate-900 rounded-3xl rotate-6 border border-slate-700/50 shadow-2xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        <div className="text-slate-700 text-9xl font-bold opacity-10 select-none">
                            &lt;/&gt;
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute top-10 right-10 w-20 h-20 bg-sky-500/10 rounded-xl border border-sky-500/20 backdrop-blur-md animate-pulse"></div>
                        <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-500/10 rounded-full border border-indigo-500/20 backdrop-blur-md"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
