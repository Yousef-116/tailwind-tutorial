"use client";
import React from 'react';
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import DarkMode from './DarkMode';

interface NavebarProps {
    openForm: () => void;
}

const Navbar: React.FC<NavebarProps> = ({ openForm }) => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 w-full'>
            <div className='py-5'>
                <div className="container flex justify-between items-center">
                    {/* logo link */}
                    <div className="flex items-center">
                        <div>
                            <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase md:text-3xl pr-7'>Eshop</a>
                        </div>
                        {/* Menu Items */}
                        <div className='hidden lg:flex gap-10 text-gray-500 font-semibold text-md items-center'>
                            <a className='duration-200 hover:text-black dark:hover:text-white' href="#">Home</a>
                            <a className='duration-200 hover:text-black dark:hover:text-white' href="#">Shop</a>
                            <a className='duration-200 hover:text-black dark:hover:text-white' href="#">About</a>
                            <a className='duration-200 hover:text-black dark:hover:text-white' href="#">Blogs</a>
                            {/* drop down list */}
                            <div className='relative group hidden xl:block'>
                                <a className='duration-200 hover:text-black dark:hover:text-white flex items-center gap-2'>
                                    Quick Links <span><FaAngleDown className='group-hover:rotate-180 transition-all' /></span>
                                </a>
                                <ul className='hidden absolute group-hover:flex flex-col p-2 w-60 bg-white shadow-lg rounded-md dark:bg-gray-800 dark:text-white duration-200 z-[9999]'>
                                    <a className='duration-200 transition-all hover:bg-primary/20 p-3 rounded-md' href="#">Trending Products</a>
                                    <a className='duration-200 transition-all hover:bg-primary/20 p-3 rounded-md' href="#">Best Selling</a>
                                    <a className='duration-200 transition-all hover:bg-primary/20 p-3 rounded-md' href="#">Top Rated</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* nav right */}
                    <div className='flex items-center gap-5'>
                        <div className='hidden sm:flex relative group items-center'>
                            <input type="text" placeholder='Search' className='search-bar focus:border-1 dark:border-gray-800' />
                            <CiSearch className='text-2xl text-gray-600 dark:text-gray-300 absolute top-1/2 -translate-y-1/2 right-3 duration-200 cursor-pointer hover:text-primary dark:hover:text-primary' />
                        </div>
                        <div className='relative mt-1'>
                            <button onClick={openForm}>
                                <CiShoppingCart className='cursor-pointer text-2xl text-gray-600 dark:text-gray-300 hover:text-primary' />
                                <div className='bg-red-500 p-0 w-4 h-4 absolute top-0 right-0 -m-1 rounded-full text-[10px] text-white'> 4</div>
                            </button>
                        </div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
