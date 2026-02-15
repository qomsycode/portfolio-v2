import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div id="contact" className="w-full bg-[#020617] py-20 lg:py-32 relative overflow-hidden">

            {/* Background Glow Effect - Centered huge subtle blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Animated Container with Pop-up Effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-6 relative z-10 text-center"
            >
                <p className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Let's Work Together</h2>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                {/* Primary CTA Button */}
                <div className="flex justify-center gap-6 mb-16">
                    <a href="mailto:abdullateefqoyum02@gmail.com" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-sky-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-white/10">
                        Say Hello
                    </a>
                </div>

                {/* Social Media Icons Row */}
                <div className="flex justify-center gap-8 flex-wrap">
                    <SocialLink href="https://github.com/qomsycode" icon={<FaGithub size={24} />} />
                    <SocialLink href="https://www.linkedin.com/in/qomzyy" icon={<FaLinkedinIn size={24} />} />
                    <SocialLink href="mailto:abdullateefqoyum02@gmail.com" icon={<AiOutlineMail size={24} />} />
                    <SocialLink href="http://twitter.com/qomzyy" icon={<FaTwitter size={24} />} />
                    <SocialLink href="https://www.facebook.com/abdullateef.koyum" icon={<FaFacebook size={24} />} />
                </div>
            </motion.div>
        </div>
    );
};

// Reusable Social Link Component
const SocialLink = ({ href, icon }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-sky-400 hover:border-sky-400 hover:bg-slate-800 transition-all duration-300"
        >
            {icon}
        </a>
    )
}

export default Contact;
