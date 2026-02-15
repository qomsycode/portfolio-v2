import React from 'react';

const Footer = () => {
    return (
        <div className='w-full py-8 text-center bg-[#020617] text-slate-500 border-t border-slate-900 text-sm'>
            <p>&copy; {new Date().getFullYear()} Abdullateef Qoyum (Qomzyy). Built with React & Tailwind.</p>
        </div>
    );
};

export default Footer;
