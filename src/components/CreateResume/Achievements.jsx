import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import { data_model } from '../../assets';
import Box from './box';

const Achievements = ({ setAchievements }) => {
    let i = 30;
    const [hide, setHide] = useState(true);
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        setBoxes([<Box data={data_model.achievements} boxes={boxes} setBoxes={setBoxes} key={i++} setInputData={setAchievements} />]);
    }, []);
    
    const handleAddNewBox = (e) => {
        e.preventDefault();
        const newBox = <Box data={data_model.achievements} boxes={boxes} setBoxes={setBoxes} key={i++} remove={true} setInputData={setAchievements} />
        setBoxes(prevBoxes => [...prevBoxes, newBox]);
    }

    return (
        <section>
            <Heading heading={"Achievements"} hide={hide} setHide={setHide} />
            {
                hide === true && <div>
                    {
                        boxes.map(box => box)
                    }        
                    <div>
                        <button className="bg-[#094C41] px-1 py-0 rounded-full ml-1 disabled:bg-slate-300 disabled:color-slate-400" onClick={handleAddNewBox}>
                            <i className="ri-add-line text-2xl font-semibold text-white"></i>
                        </button>
                    </div>
                </div>
            }          
        </section>
    );
};

export default Achievements;