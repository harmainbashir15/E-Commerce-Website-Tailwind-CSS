import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
<header className="bg-white h-100vh">
<div className="container mx-auto flex justify-between p-2 flex-col md:flex-row items-center">
  <div className="flex items-center text-black ml-1 mb-2 md:mb-0">
    <Image src="/logo1.JPG" alt="logo" width={40} height={40} className=" bg-amber-200 rounded-full p-0 m-0" />
    <span className="ml-1 text-4xl text-black font-extrabold font-serif">The Cake Palette</span>
  </div>
  <div style={{position:"relative"}}>
<input className="rounded-2xl py-3 px-3 outline-none  ml-3 text-xs w-[200px] pr-10 hidden md:block" placeholder="Search for item" />
<FaSearch className="text-yellow-600 w-5 h-5 absolute right-5 top-2 hidden md:block" />
 </div>
  <nav className="md:ml-auto flex flex-wrap items-center text-black font-bold font-serif text-xl justify-center">
    <Link className="mr-5 hover:text-yellow-600" href="/">Home</Link>
    <Link className="mr-5 hover:text-yellow-600" href="/about">About Us</Link>
    <Link className="mr-5 hover:text-yellow-600" href="/product">Product</Link>
    <Link className="mr-5 hover:text-yellow-600" href="/contact">Contact</Link>
  </nav>
  <button className="inline-flex items-center bg-black border-0 py-1 px-3 font-serif focus:outline-none hover:bg-yellow-600 rounded text-white mt-4 md:mt-0">Add Cart
  </button>
</div>
</header>

  );
}

export default Header;