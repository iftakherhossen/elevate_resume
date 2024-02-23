import React, { useState } from 'react';
import Heading from './Heading';
import TextField from './TextField';
import { data_model } from '../../assets/index';

const Skills = ({ setSkills }) => {
    const [hide, setHide] = useState(true);

    return (
        <section>
            <Heading heading={"Skills"} hide={hide} setHide={setHide} />
            {
                hide === true && <div className="bg-[#EFF2F9] border px-8 pt-7 pb-8">
                    <div className="grid grid-cols-1 gap-y-4">
                        {
                            data_model.skills.map(data => <TextField key={data.label} data={data} setInputData={setSkills} skills={true} />)
                        }
                    </div>
                    <p className="text-slate-400 text-base font-medium px-4 pt-4">N.B. Use Comma (,) to separate the skills.</p>
                </div>
            }
        </section>
    );
};

export default Skills;