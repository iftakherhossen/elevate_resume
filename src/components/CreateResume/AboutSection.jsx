import React, { useState } from 'react';
import Heading from './Heading';
import TextField from './TextField';
import { data_model } from '../../assets/index';

const AboutSection = ({ aboutData, setAboutData }) => {
    const [hide, setHide] = useState(true);

    const countLetters = () => {
        const data = aboutData.about;
        if (aboutData && data) {
            const letters = data.match(/[a-zA-Z]/g) ?? [];
            return letters.length;
        } 
        else
            return 0;
    }
    const length = countLetters();

    return (
        <section>
            <Heading heading={"About Myself"} hide={hide} setHide={setHide} />           
            {
                hide === true && <div className="bg-[#EFF2F9] border px-8 py-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {
                            data_model.aboutMyself.map(data => data.type !== "textarea" && <TextField 
                                key={data.label} 
                                data={data} 
                                setInputData={setAboutData} 
                            />)
                        }
                    </div>                    
                    <div className="grid grid-cols-1 mt-4 mb-2">
                        {
                            data_model.aboutMyself.map(data => data.type === "textarea" && <TextField 
                                key={data.label} 
                                data={data} 
                                setInputData={setAboutData} 
                            />)
                        }
                    </div>
                    <div className="flex justify-end mx-3">
                        <p className="text-sm text-slate-500 font-medium">{length}/250</p>
                    </div>
                </div>
            }
        </section>
    );
};

export default AboutSection;