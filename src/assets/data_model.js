const data_model = {
    aboutMyself: [
        { label: "First Name", name: "firstName", placeholder: "e.g. John", type: "text", required: true },
        { label: "Middle Name", name: "middleName", placeholder: "e.g. Herbert", type: "text", optional: true, required: false },
        { label: "Last Name", name: "lastName", placeholder: "e.g. Doe", type: "text", required: true },
        { label: "Add Your Image", name: "image", placeholder: "e.g. Your professional photo link", type: "url", required: true },
        { label: "Designation", name: "designation", placeholder: "e.g. Sr. Accountant", type: "text", required: true },
        { label: "Date of Birth", name: "dob", type: "date", required: true },
        { label: "About Myself", name: "about", placeholder: "e.g. Write about yourself, your works and experiences.", type: "textarea", required: true }
    ],
    contacts: [
        { label: "Phone Number", name: "phone", placeholder: "e.g. +8801234567890", type: "tel", required: true },
        { label: "Email Address", name: "email", placeholder: "e.g. johndoe@bdmail.bd", type: "email", required: true },
        { label: "Address", name: "address", placeholder: "e.g. Mirpur, Dhaka, Bangladesh", type: "text", required: true },        
        { label: "Facebook", name: "facebook", placeholder: "e.g. www.facebook.com/johndoe", type: "url", required: false },
        { label: "Twitter", name: "twitter", placeholder: "e.g. www.twitter.com/johndoe", type: "url", required: false },
        { label: "Instagram", name: "instagram", placeholder: "e.g. www.instagram.com/johndoe", type: "url", required: false },        
        { label: "Github", name: "github", placeholder: "e.g. www.github.com/johndoe", type: "url", required: false },
        { label: "LinkedIn", name: "linkedin", placeholder: "e.g. www.linkedin.com/johndoe", type: "url", required: true },
        { label: "Portfolio", name: "portfolio", placeholder: "e.g. www.johndoe.com", type: "url", required: false },        
    ],
    experience: [
        { label: "Designation", name: "designation", placeholder: "e.g. Full-stack Developer", type: "text", required: false },
        { label: "Company/Organization", name: "company", placeholder: "e.g. Radiant Academy", type: "text", required: false },
        { label: "Location", name: "location", placeholder: "e.g. Dhaka, Bangladesh", type: "text", required: false },
        { label: "Start Date", name: "expStartDate", type: "date", required: false },
        { label: "End Date", name: "expEndDate", type: "date", required: false },
    ],
    skills: [
        { label: "Add Technical Skills", name: "techSkills", placeholder: "e.g. HTML, CSS, SASS...", type: "text", required: true },
        { label: "Add Soft Skills", name: "softSkills", placeholder: "e.g. Leadership, Innovative, Creative...", type: "text", required: true },
    ],
    projects: [
        { label: "Project Name", name: "projectName", placeholder: "e.g. Jane Travels", type: "text", required: false },
        { label: "Start Date", name: "projectStartDate", placeholder: "e.g. ", type: "date", required: false },
        { label: "End Date", name: "projectEndDate", placeholder: "e.g. ", type: "date", required: false },
        { label: "Your Role", name: "role", placeholder: "e.g. Frontend Developer", type: "text", required: false },
        { label: "Live Link", name: "liveLink", placeholder: "e.g. www.jane-travels.com", type: "url", required: false },
        { label: "Code Link", name: "codeLink", placeholder: "e.g. www.github.com/johndoe/jane_travels", type: "url", required: false },        
        { label: "Summary", name: "summary", placeholder: "e.g. Write about the project.", type: "textarea", required: false },
    ],
    education: [       
        { label: "Institution Name", name: "institute", placeholder: "e.g. Oxford University", type: "text", required: true },
        { label: "Degree", name: "degree", placeholder: "e.g. Bachelor", type: "text", required: true },        
        { label: "Location", name: "eduLocation", placeholder: "e.g. Oxford, England", type: "text", required: true },
        { label: "Major of Study", name: "major", placeholder: "e.g. Computer Science", type: "text", required: false },
        { label: "Grade", name: "grade", placeholder: "e.g. 3.95", type: "text", required: false },       
        { label: "Graduation Year", name: "graduationYear", placeholder: "e.g. 2023", type: "text", required: true },
        { label: "Status", name: "status", type: "checkbox", required: true },
    ],
    achievements: [
        { label: "Title", name: "title", placeholder: "e.g. Project Excellence Award", type: "text", required: false },
        { label: "Date", name: "date", type: "date", required: false },
        { label: "Description", name: "description", placeholder: "e.g. Why you receive the award", type: "text", required: false },
    ],
    languages: [
        { id: 101, label: "First Language", name: "firstLanguage", placeholder: "e.g. English", type: "select", required: true },
        { id: 102, label: "Second Language", name: "secondLanguage", placeholder: "e.g. Bangla", type: "select", required: false },
        { id: 103, label: "Third Language", name: "secondLanguage", placeholder: "e.g. Bangla", type: "select", required: false },
    ],
    options: [
        { label: "Beginner - 1", value: 1 },
        { label: "Elementary - 2", value: 2 },
        { label: "Intermediate - 3", value: 3 },
        { label: "Advanced - 4", value: 4 },
        { label: "Fluent/Native - 5", value: 5 },
    ],
}

export default data_model;