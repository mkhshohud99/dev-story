import Link from 'next/link';
import React, { Children } from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 gap-5 min-h-screen'>
            <div className='col-span-3 border-r-2'>
                <h2 className='text-3xl font-bold text-center py-5'>Navigation Menu</h2>
                <div className='flex flex-col mt-10 gap-5 ml-15'>
                    <Link className='py-2 px-4 w-full bg-gray-600' href={"/dashboard/add-story"}>Add Story</Link>
                    <Link className='py-2 px-4 w-full bg-gray-600' href={"/dashboard/my-profile"}>My Profile</Link>
                    <Link className='py-2 px-4 w-full bg-gray-600' href={"settings"}>Settings</Link>
                </div>
            </div>
            <div className='col-span-9 py-5'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;