import React from 'react';
import { FAQ, Features, Hero, Layout, Tutorials } from '../components';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Tutorials />
            <Features />
            <FAQ />
        </Layout>
    );
};

export default Home;