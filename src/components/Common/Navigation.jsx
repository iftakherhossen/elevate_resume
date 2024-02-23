import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ resume }) => {
    return (
        <nav className="navbar sticky top-0 bg-[#094C41] h-[4.5rem] z-30">
            <div className="container mx-auto flex justify-between">
                <div>
                    <Link to="/">
                        <h2 className="text-3xl font-extrabold text-white">ElevateResume</h2>
                    </Link>
                </div>
                {
                    !resume && <div>
                        <Link to="/create-resume">
                            <button className="btn btn-sm h-10 rounded text-[1.01rem] font-bold uppercase bg-white hover:bg-white px-6 tracking-wide text-[#094C41] border-[#094C41] border-none">Create My Resume</button>
                        </Link>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Navigation;