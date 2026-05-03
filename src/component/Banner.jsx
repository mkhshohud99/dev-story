"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {

    const router = useRouter();

    const handleBtn =()=>{
        const password = prompt("Enter your password");
        if(password == "1234"){
            router.push("/dashboard")
        }
        else{
            alert("Your password is wrong")
        }
    }


    return (
        <div className='text-center space-y-15 bg-gradient-to-r to-sky-300 via-sky-100 from-sky-300 px-10 py-30'>
            <h2 className='text-4xl font-bold text-black'>Welcome to Dev-Story🐋</h2>
            <button className='px-4 py-2 bg-sky-500 text-white rounded cursor-pointer hover:bg-black duration-200' onClick={handleBtn}>Share-Story</button>
        </div>
    );
};

export default Banner;