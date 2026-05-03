import Link from 'next/link';
import React from 'react';

const AboutNav = () => {
    return (
        <div>
            <nav className='flex justify-start content-center gap-4 py-4 '>
                <Link href={'/about/contact'}>Contact</Link>
                <Link href={'/about/teams'}>Meet with our Team</Link>
            </nav>
        </div>
    );
};

export default AboutNav;