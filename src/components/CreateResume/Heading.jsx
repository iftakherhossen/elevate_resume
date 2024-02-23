import React from 'react';

const Heading = ({ heading, hide, setHide }) => {
    return (
        <div className="bg-[#094C41] w-full flex justify-between items-center px-4 py-2.5 mb-4 cursor-pointer" onClick={() => setHide(!hide)}>            
            <div>
                <h2 className="text-xl text-white uppercase font-semibold tracking-wide">{heading}</h2>
            </div>
            <div>
                <i className={`text-xl text-white ${hide ? "ri-arrow-up-line" : "ri-arrow-down-line"}`}></i>
            </div>
        </div>
    );
};

export default Heading;