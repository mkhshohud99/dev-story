import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="px-10 py-4 border-b-2 border-gray-500 flex justify-between content-center flex-wrap">
          <Link href={"/"} className="text-lg font-semibold"> 🐋 Dev-Story</Link>

          <nav className='flex justify-between content-center gap-4'>
            <Link href={"/"}>Home</Link>
            <Link href={"/stories"}>Stories</Link>
            <Link href={"/tutorials"}>Tutorials</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Registration</Link>
          </nav>
        </header>
        
    );
};

export default Header;