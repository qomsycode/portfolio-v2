import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Freelance: Mobile Developer',
            company: 'Self-Employed',
            duration: '2024 - Present',
            description:
                'Built a Fullstack Ecommerce Application designed for a modern online shopping experience, featuring dynamic product catalog, interactive shopping cart and Paystack integration for seamless payment.'
        },
        {
            id: 2,
            role: 'Freelance: Web Developer',
            company: 'Kings Dave IT Solutions | Lagos, Nigeria',
            duration: '2022 - 2024',
            description:
                'Developed responsive and accessible web interfaces for firms and small businesses, with attention to SEO best practices. Built and maintained custom business websites using HTML, CSS, and JavaScript. Consulted with small business owners to digitalize operations.'
        }
    ];

    return (
        <div id='experience' className='w-full p-2 py-16 bg-[#2b2538]'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#ec9ddb] font-bold mb-4 text-center md:text-left'>Experience</p>
                <h2 className='py-4 text-white text-3xl font-bold text-center md:text-left'>Work History</h2>
                <div className='mt-8 flex flex-col gap-8'>
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative pl-8 sm:pl-32 py-6 group">
                            {/* Timeline Line */}
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#ec9ddb] after:border-4 after:box-content after:border-slate-50 after:rounded-full after:sm:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-[#ec9ddb] bg-[#323946] rounded-full">{exp.duration}</time>
                                <div className="text-xl font-bold text-white">{exp.role}</div>
                            </div>
                            {/* Content */}
                            <div className="text-slate-400">{exp.company}</div>
                            <p className="mt-2 text-slate-300">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
