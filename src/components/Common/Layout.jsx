import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children, resume }) => {
    return (
        <div>
            <Navigation resume={resume} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;