import React from 'react';
import TextField from './TextField';

const Box = ({ data, boxes, setBoxes, remove, setInputData }) => {
    const handleRemoveBox = () => {
        const updatedBoxes = [...boxes];
        updatedBoxes.slice(1);
        setBoxes(updatedBoxes);
    }

    return (
       <div className="bg-[#EFF2F9] border mb-4 relative">
            {
                remove && <div className="absolute top-2 right-2">
                    <button className="bg-red-600 px-1 py-0 rounded-full" onClick={handleRemoveBox}>
                        <i className="ri-subtract-line text-xl font-semibold text-white"></i>
                    </button>
                </div>
            }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-8 pt-7">
                {
                    data.map(data => data.type !== "textarea" && <TextField key={data.label} data={data} setInputData={setInputData} />)
                }
            </div>
            <div className="grid grid-cols-1 gap-5 px-8 mt-4 pb-8">
                {
                    data.map(data => data.type === "textarea" && <TextField key={data.label} data={data} setInputData={setInputData} />)
                }
            </div>
        </div>
    );
};

export default Box;