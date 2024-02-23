import React, { useState } from 'react';
import Heading from './Heading';
import TextField from './TextField';
import { data_model } from '../../assets';

const Languages = ({ setLanguageSkills }) => {
    const [hide, setHide] = useState(true);
    const [fields, setFields] = useState(data_model.languages);
    
    const handleAddNew = (e) => {
        e.preventDefault();
        const newData = { label: "Language", placeholder: "e.g. German", type: "select", optional: true, required: false };
        setFields([...fields, newData]);
    }

    return (
        <section>
            <Heading heading={"Languages"} hide={hide} setHide={setHide} />
            {
                hide === true && <div>
                    <div className="bg-[#EFF2F9] border px-8 pt-7 pb-8 mb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                            {
                                fields.map((data, idx) => <TextField key={100+idx} data={data} language={true} setInputData={setLanguageSkills} />)
                            }
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#094C41] px-1 py-0 rounded-full ml-1 disabled:bg-slate-300 disabled:color-slate-400" onClick={handleAddNew}>
                            <i className="ri-add-line text-2xl font-semibold text-white"></i>
                        </button>
                    </div>
                </div>
            }
        </section>
    );
};

export default Languages;