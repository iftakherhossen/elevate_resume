import React, { useEffect, useState } from 'react';
import AboutSection from './AboutSection';
import Contacts from './Contacts';
import Experience from './Experience';
import Achievements from './Achievements';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Languages from './Languages';
import { useNavigate } from 'react-router-dom';
import useFunctions from '../../hooks/useFunctions';

const SectionWrapper = () => {
    const navigate = useNavigate();
    const [aboutData, setAboutData] = useState([]);
    const [contactData, setContactData] = useState([]);
    const [experienceData, setExperienceData] = useState([[]]);
    const [skills, setSkills] = useState([]);
    const [projectsData, setProjectsData] = useState([[]]);
    const [educationData, setEducationData] = useState([[]]);
    const [achievements, setAchievements] = useState([[]]);
    const [languageSkills, setLanguageSkills] = useState([]);    
    const filledRatio = (aboutData.length + contactData.length + skills.length + educationData.length + languageSkills.length) / 5 || 0; 
    const resume = { aboutData, contactData, ...(experienceData.length && experienceData), skills, ...(projectsData.length && projectsData), educationData, ...(achievements.length && achievements), languageSkills };
    const { handleSaveData } = useFunctions();
    
    useEffect(() => {
        handleSaveData('resumeInfo', resume);
    }, [aboutData, contactData, experienceData, skills, projectsData, educationData, achievements, languageSkills]); 

    return (
        <section className="relative">
            {/* Create Resume Section */}
            <div className="container mx-auto py-8 md:py-16 flex flex-col gap-y-5">
                <AboutSection aboutData={aboutData} setAboutData={setAboutData} />
                <Contacts setContactData={setContactData} />
                <Experience setExperienceData={setExperienceData} />
                <Skills setSkills={setSkills} />
                <Projects setProjectsData={setProjectsData} />
                <Education setEducationData={setEducationData} />
                <Achievements setAchievements={setAchievements} />
                <Languages setLanguageSkills={setLanguageSkills} />                
            </div>

            {/* Preview Button */}
            <div className="fixed bottom-4 right-8 bg-transparent z-30 h-20 flex justify-end items-center">
                <button className="btn rounded text-[1.01rem] font-bold uppercase px-6 tracking-wide bg-[#094C41] hover:bg-[#094C41] text-white border-none" onClick={() => navigate("/preview")} disabled={filledRatio < 1}>Preview</button>
            </div>
        </section>
    );
};

export default SectionWrapper;