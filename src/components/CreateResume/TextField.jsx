import React, { useState } from 'react';
import data_model from '../../assets/data_model';

const TextField = ({ data, setInputData, skills, language }) => {
    let skillsArray;
    const { name, label, type, placeholder, optional, required } = data;
    const customInput = "w-full bg-white focus:border-[#094C41] outline-none focus:outline-none text-base text-[#094C41] font-semibold tracking-wide placeholder:font-medium placeholder:normal-case disabled:bg-slate-300 disabled:border-slate-400";
    const [selectedLevel, setSelectedLevel] = useState('0');
    const [status, setStatus] = useState(true);

    const handleSkillsArray = (data) => {
        const elements = data.split(',');
        const trimmedArray = elements.map(element => element.trim());
        return trimmedArray;
    };

    const handleOnBlur = (e) => {
        setStatus(e.target.checked);
        if(skills)
        {
            skillsArray = handleSkillsArray(e.target.value);
            const newObj = { [e.target.name] : skillsArray };
            setInputData(prevObj => ({ ...prevObj, ...newObj }));
        }            
        else if(language)
        {
            const newObj = { [e.target.name] : e.target.value, level : selectedLevel };
            setInputData(prevObj => ({ ...prevObj, ...newObj }));
        }            
        else
        {
            const newObj = e.target.type === "checkbox" ? { [e.target.name]: e.target.checked } : { [e.target.name]: e.target.value };
            setInputData(prevObj => ({ ...prevObj, ...newObj }));             
        }  
    }

    return (
        <div>
            <label className="form-control w-full">
                <div className="label px-2">
                    <span className="label-text text-black text-base font-semibold tracking-wide capitalize">{label}</span>
                    <span className="label-text-alt text-slate-500 text-sm font-medium capitalize">
                        {optional === true && "Optional"}
                        <span className="text-red-500">{required === true && "Required"}</span>
                    </span>
                </div>
                {
                    (type === "text" || type === "tel" || type === "email" || type === "url") && <input                         
                        type={type}
                        name={name}
                        placeholder={placeholder} 
                        className={`input input-bordered ${(type === "url" || type === "email") ? "normal-case" : "capitalize"} ${customInput}`}
                        required={required}
                        onBlur={handleOnBlur}
                    />
                }
                {
                    type === "date" && <input 
                        type={type} 
                        name={name}
                        placeholder={placeholder} 
                        className={`input input-bordered appearance-auto text-[#094C41] accent-[#094C41] ${customInput}`}
                        required={required}
                        onBlur={handleOnBlur}
                    />
                }
                {
                    type === "textarea" && <textarea 
                        name={name}
                        className={`textarea textarea-bordered first-letter:uppercase h-36 resize-none ${customInput}`}
                        placeholder={placeholder}
                        required={required}
                        onChange={handleOnBlur}
                    ></textarea>
                }
                {
                    type === "select" && <div className="join">
                        <div className="w-3/5">
                            <input 
                                name={name} 
                                className={`input input-bordered join-item ${customInput}`} 
                                placeholder={placeholder} 
                                onBlur={handleOnBlur} 
                                disabled={selectedLevel === '0'} 
                            />
                        </div>
                        <select 
                            name="level" 
                            className={`select select-bordered join-item w-2/5 ${customInput}`} 
                            value={selectedLevel} 
                            onChange={(e) => setSelectedLevel(e.target.value)}
                        >
                            <option disabled value="0" defaultValue={"0"}>Choose Level</option>
                            {
                                data_model.options.map(({ label, value }) => <option key={label} className="font-medium" value={value}>{label}</option>)
                            }
                        </select>
                    </div>
                }
                {
                    type === "checkbox" && <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-base text-slate-500 font-semibold">{status ? "Running" : "Graduated"}</span> 
                            <input name={status} type="checkbox" checked={status} className="checkbox" onChange={handleOnBlur} />
                        </label>
                    </div>
                }
            </label>
        </div>
    );
};

export default TextField;