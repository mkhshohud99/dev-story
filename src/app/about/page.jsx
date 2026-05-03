import AboutNav from '@/component/AboutNav';
import Title from '@/component/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title>Welcome to About</Title>
            <AboutNav></AboutNav>           
        </div>
    );
};

export default About;