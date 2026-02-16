import React from 'react';

const About = () => {
    return (
        // About Section with Deep Slate Background
        <div id='about' className='w-full py-20 lg:py-32 bg-[#020617] relative overflow-hidden'>
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className='max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10'>
                {/* Text Content */}
                <div className='col-span-2 text-center md:text-left'>
                    <p className='text-sky-400 font-bold uppercase tracking-widest text-sm mb-4'>About Me</p>
                    <h2 className='text-4xl md:text-5xl font-bold text-slate-100 mb-8'>The Logic Behind the UI</h2>

                    <div className='space-y-6 text-slate-400 text-lg leading-relaxed'>
                        <p>
                            I am <span className='text-sky-400 font-bold'>Abdullateef Qoyum</span>, a results-driven Mobile App (Flutter/Dart) and Frontend Developer with a strong logical and analytical foundation rooted in a Second Class Upper B.Sc. in Mathematics.
                        </p>
                        <p>
                            My academic background allows me to approach coding with a unique algorithmic perspective, ensuring that every interface I build is as efficient as it is beautiful. I have a proven ability to translate complex business requirements into scalable, user-centric digital solutions.
                        </p>
                        <p>
                            I am passionate about building high-performance cross-platform applications that balance clean architecture, efficient state management, and premium UI/UX.
                        </p>
                    </div>

                    <div className='mt-10'>
                        <a href='#portfolio' className='inline-block px-8 py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:-translate-y-1 shadow-lg'>
                            Check out my latest projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
