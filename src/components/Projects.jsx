import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    // Project Data: Each object represents a portfolio project
    const projects = [
        {
            id: 1,
            title: 'Mathematics Quiz App',
            description: 'A timed challenge app testing speed and accuracy. Built with pure JS logic and local data structures.',
            tech: ['JavaScript', 'CSS3', 'HTML5'],
            github: 'https://github.com/qomsycode/quiz-website',
            live: 'https://qomsycode.github.io/quiz-website/',
            gradient: 'from-pink-500 to-rose-500' // Custom gradient for hover effect
        },
        {
            id: 2,
            title: 'Adeeva E-commerce',
            description: 'Full-stack platform with dynamic inventory, cart management, and admin dashboard.',
            tech: ['Flutter', 'Firebase', 'State Management'],
            github: '#',
            live: '#',
            gradient: 'from-violet-500 to-purple-500'
        },
        {
            id: 3,
            title: 'World Clock',
            description: 'Real-time global time tracking utility consuming external Time APIs for precision.',
            tech: ['Flutter', 'REST API'],
            github: '#',
            live: '#',
            gradient: 'from-blue-400 to-cyan-300'
        },
        {
            id: 4,
            title: 'Quadrant Networking',
            description: 'Professional networking tool connecting developers through smart profiles and messaging.',
            tech: ['Dart', 'Flutter', 'NoSQL'],
            github: '#',
            live: '#',
            gradient: 'from-emerald-400 to-teal-500'
        }
    ];

    // Animation Variants for Staggered Entrance
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div id="portfolio" className="py-20 lg:py-32 w-full bg-[#0f172a] relative">
            {/* Top Border Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="mb-16">
                    <p className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-2">My Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100">Featured Projects</h2>
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }} // Animate only once when scrolled into view
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger delay based on index
                            className="group relative rounded-2xl overflow-hidden glass hover:border-slate-600 transition-all duration-300"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            {/* Card Content */}
                            <div className="p-8 relative z-10 flex flex-col h-full">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed flex-grow">{project.description}</p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Buttons */}
                                <div className="flex gap-4 mt-auto">
                                    <a href={project.github} className="flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors">
                                        <FaGithub size={18} /> Code
                                    </a>
                                    <a href={project.live} className="flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors">
                                        <FaExternalLinkAlt size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
