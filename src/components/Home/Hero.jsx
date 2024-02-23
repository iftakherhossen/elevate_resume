import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="bg-[#EFF2F9] h-full flex flex-col justify-center items-center px-6 py-20 gap-y-6">
            <div className="container md:w-[40%] mx-auto flex flex-col justify-center items-center my-2">
                <div className="w-full text-center">
                    <h6 className="text-[0.9rem] mb-3 text-[#1A1C6A] font-bold tracking-wider">FREE ONLINE RESUME BUILDER</h6>
                    <h1 className="text-[2.40rem] text-black font-extrabold mb-5 leading-snug">Only 5% of resumes make it pass the first round. Be in the top 5%</h1>
                    <p className="text-[#1E2532] text-lg tracking-wide mb-5">Use professional field-tested resume templates that follow that exact 'resume rules' employers look for. Easy to use and done within minutes - try now for free!</p>
                    <Link to="/create-resume">
                        <button className="btn rounded uppercase bg-[#094C41] hover:bg-[#094C41] px-6 tracking-wide text-white border-none">Create My Resume</button>
                    </Link>
                </div>
                <div className="w-full text-center mt-8">
                    <img src="https://vanillaresume.netlify.app/assets/images/dublin-resume-templates.avif" alt="Templates" className="rounded-xl" draggable={false} />
                </div>
            </div>
        </section>
    );
};

export default Hero;