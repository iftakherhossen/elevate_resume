import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 h-20 bg-[#EFF2F9]">
            <aside>
                <p className="text-base tracking-wider font-semibold text-slate-500">© Copyright 2022. All Rights Reserved - <Link to="/" className="hover:text-[#094C41]">ElevateResume</Link></p>
            </aside>
        </footer>
    );
};

export default Footer;