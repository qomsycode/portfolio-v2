import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { id: 1, name: 'Flutter', icon: <SiFlutter size={40} className="text-[#02569B]" /> },
        { id: 2, name: 'Dart', icon: <SiDart size={40} className="text-[#0175C2]" /> },
        { id: 3, name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" /> },
        { id: 4, name: 'JavaScript', icon: <FaJs size={40} className="text-[#F7DF1E]" /> },
        { id: 5, name: 'Firebase', icon: <SiFirebase size={40} className="text-[#FFCA28]" /> },
        { id: 6, name: 'HTML', icon: <FaHtml5 size={40} className="text-[#E34F26]" /> },
        { id: 7, name: 'CSS', icon: <FaCss3Alt size={40} className="text-[#1572B6]" /> },
        { id: 8, name: 'GitHub', icon: <FaGithub size={40} className="text-white" /> },
    ];

    return (
        <div id='skills' className='w-full lg:h-screen p-2 py-16 text-center'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-3xl tracking-widest uppercase text-[#ec9ddb] font-bold'>Skills</p>
                <h2 className='py-4 text-white text-xl'>What I Can Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {skills.map((skill) => (
                        <div key={skill.id} className='p-6 shadow-xl rounded-xl bg-[#323946] hover:scale-105 ease-in duration-300 cursor-pointer border border-transparent hover:border-[#ec9ddb]'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    {skill.icon}
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='font-bold text-lg text-white'>{skill.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
