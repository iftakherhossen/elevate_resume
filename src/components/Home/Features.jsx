import React from 'react';
import { documentation_data } from '../../assets/index';

const Features = () => {
    return (
        <section className="bg-[#EFF2F9] h-full">
            <div className="container mx-auto w-full md:w-[60%] py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:my-2 px-7 md:px-0">
                    {
                        documentation_data.features.map(({ icon, title, desc }) => <div key={title}>
                            <img src={icon} alt={title} className="w-20 h-20 object-fit" draggable={false} />
                            <h2 className="text-lg font-semibold mt-4 mb-2 text-[#1A1C6A]">{title}</h2>
                            <p className="text-[#323945]">{desc}</p>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;