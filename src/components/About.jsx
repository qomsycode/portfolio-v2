import React from 'react';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 bg-[#2b2538]'>
            <div className='max-w-[1240px] m-auto md:grid md:grid-cols-2 gap-8'>
                <div className='col-span-2 text-center md:text-left'>
                    <p className='uppercase text-xl tracking-widest text-[#ec9ddb]'>About Me</p>
                    <h2 className='py-4 text-white text-3xl font-bold'>The Logic Behind the UI</h2>
                    <p className='py-2 text-gray-300 text-lg leading-relaxed'>
                        I am <span className='text-[#ec9ddb] font-bold'>Abdullateef Qoyum</span>, a results-driven Mobile App (Flutter/Dart) and Frontend Developer with a strong logical and analytical foundation rooted in a Second Class Upper B.Sc. in Mathematics.
                    </p>
                    <p className='py-2 text-gray-300 text-lg leading-relaxed'>
                        My academic background allows me to approach coding with a unique algorithmic perspective, ensuring that every interface I build is as efficient as it is beautiful. I have a proven ability to translate complex business requirements into scalable, user-centric digital solutions.
                    </p>
                    <p className='py-2 text-gray-300 text-lg leading-relaxed'>
                        I am passionate about building high-performance cross-platform applications that balance clean architecture, efficient state management, and premium UI/UX.
                    </p>
                    <div className='mt-8'>
                        <a href='#portfolio' className='py-3 px-6 rounded-lg bg-gray-800 text-white font-bold cursor-pointer hover:bg-gray-700 transition-colors'>
                            Check out my latest projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
