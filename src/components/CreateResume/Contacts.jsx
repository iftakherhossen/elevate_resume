import React, { useState } from 'react';
import Heading from './Heading';
import { data_model } from '../../assets/index';
import TextField from './TextField';

const Contacts = ({ setContactData }) => {
    const [hide, setHide] = useState(true);
    
    return (
        <section>
            <Heading heading={"Contacts"} hide={hide} setHide={setHide} />         
            {
                hide === true && <div className="bg-[#EFF2F9] border px-8 pt-7 pb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                        {
                            data_model.contacts.map(data => data.type !== "textarea" && <TextField 
                                key={data.label} 
                                data={data} 
                                setInputData={setContactData} 
                            />)
                        }
                    </div>
                </div>
            }
        </section>
    );
};

export default Contacts;