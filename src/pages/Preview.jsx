import React from 'react';
import { Layout } from '../components';
import useFunctions from '../hooks/useFunctions';

const Preview = () => {
    const { resumeData } = useFunctions();
    console.log(resumeData);
    
    return (
        <Layout>
            <h2>Preview</h2>
        </Layout>
    );
};

export default Preview;