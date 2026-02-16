import React from 'react';
import { SiFlutter, SiDart, SiFirebase, SiReact, SiJavascript, SiHtml5, SiCss3, SiGithub } from 'react-icons/si';
import { motion } from 'framer-motion';

const SkillsExperience = () => {
    // List of Technical Skills with Icons and Branding Colors
    const skills = [
        { name: 'Flutter', icon: <SiFlutter size={32} className="text-sky-400" /> },
        { name: 'Dart', icon: <SiDart size={32} className="text-blue-500" /> },
        { name: 'React', icon: <SiReact size={32} className="text-cyan-400" /> },
        { name: 'Firebase', icon: <SiFirebase size={32} className="text-yellow-400" /> },
        { name: 'JavaScript', icon: <SiJavascript size={32} className="text-yellow-300" /> },
        { name: 'GitHub', icon: <SiGithub size={32} className="text-white" /> },
    ];

    // Professional Experience Data
    const experiences = [
        {
            year: '2024 - Present',
            role: 'Freelance Mobile Developer',
            company: 'Self-Employed',
            desc: 'Built a Fullstack Ecommerce Application designed for a modern online shopping experience, featuring dynamic product catalog, interactive shopping cart and Paystack integration for seamless payment.'
        },
        {
            year: '2022 - 2024',
            role: 'Freelance Web Developer',
            company: 'Kings Dave IT Solutions',
            desc: 'Developed responsive and accessible web interfaces for firms and small businesses, with attention to SEO best practices. Built and maintained custom business websites using HTML, CSS, and JavaScript. Consulted with small business owners to digitalize operations.'
        }
    ];

    return (
        <div id="skills" className="w-full bg-[#020617] py-20 lg:py-32 text-slate-200">
            <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Column: Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-2">Expertise</p>
                    <h2 className="text-4xl font-bold text-slate-100 mb-8">Tech Stack</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }} // Staggered Animation
                                viewport={{ once: true }}
                                className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center gap-4 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-300 group"
                            >
                                {/* Icon Scale on Hover */}
                                <div className="group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <span className="font-semibold text-slate-300">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Experience Timeline */}
                <motion.div
                    id="experience"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-2">Career</p>
                    <h2 className="text-4xl font-bold text-slate-100 mb-8">Experience</h2>

                    {/* Timeline Container with Border Line */}
                    <div className="relative border-l border-slate-800 ml-3 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Timeline Dot */}
                                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-sky-500 ring-4 ring-[#020617]"></span>

                                <span className="block text-sm text-sky-400 font-mono mb-1">{exp.year}</span>
                                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                <p className="text-slate-500 font-medium mb-4">{exp.company}</p>
                                <p className="text-slate-400 leading-relaxed max-w-md">
                                    {exp.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default SkillsExperience;
