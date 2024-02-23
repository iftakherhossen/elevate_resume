import React from 'react';

const Tutorials = () => {
    return (
        <section className="bg-white h-full md:h-[40rem] flex items-center">
            <div className="container mx-auto w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 px-6 py-20 gap-10">
                <div className="">
                    <img src="https://vanillaresume.netlify.app/assets/images/visual-0c7080adf17f1f207276f613447c924f667dab34b7ac415cd7ef653172defd0b.svg" alt="Tutorials" className="object-fit" draggable={false} />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-black leading-snug">Use the best resume maker as your guide!</h2>
                    <p className="my-4 text-base font-medium text-slate-500">Getting that dream job can seem like an impossible task. We're here to change that. Give yourself a real advantage with the best online resume maker: created by experts, improved by data, trusted by millions of professionals.</p>
                    <div className="w-full flex flex-col sm:flex-row gap-3">
                        <button className="btn uppercase px-5 text-sm tracking-wider rounded bg-[#094C41] hover:bg-white text-white hover:text-[#094C41]">Read Instructions</button>
                        <button className="btn uppercase px-5 text-sm tracking-wider rounded bg-white hover:bg-[#094C41] text-[#094C41] hover:text-white border-[#094C41]">Watch Videos</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tutorials;