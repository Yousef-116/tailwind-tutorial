import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

export const Navebar = () => {
    return (
        <div className='bg-white dark:bg-gray-900
         dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className="container flex
                justify-between items-center">
                    {/* logo link */}
                    <div className="flex items-center">
                        <div>
                            <a href="#" className='text-primary font-semibold 
                        tracking-widest 
                        text-2xl uppercase md:text-3xl pr-7'>Eshop</a>
                        </div>
                        {/* Menu Items */}
                        <div className=' hidden lg:flex gap-10 
                    text-gray-500 font-semibold text-md '>
                            <a className='duration-200 hover:text-black dark:hover:text-white' href="#">Home</a>
                            <a className='duration-200 hover:text-black dark:hover:text-white' href="#">Shop</a>
                            <a className='duration-200 hover:text-black dark:hover:text-white' href="#">About</a>
                            <a className='duration-200 hover:text-black dark:hover:text-white' href="#">Blogs</a>
                        </div>
                    </div>
                    {/* nav right */}
                    <div className='flex items-center'>
                        <div className='hidden sm:flex relative group items-center'>
                            <input type="text" placeholder='Search'
                                className='search-bar focus:border-1 dark:border-gray-800' />
                            <CiSearch className='text-2xl text-gray-600 
                             dark:text-gray-300 absolute top-1/2 -translate-y-1/2 right-3
                             duration-200 cursor-pointer hover:text-primary dark:hover:text-primary' />
                        </div>

                        <div className='relative mt-1'>
                            <button>
                                <CiShoppingCart className='cursor-pointer
                                 text-2xl text-gray-600 dark:text-gray-300' />
                                <div className='bg-red-500 p-0 w-4 h-4
                            absolute top-0 right-0 -m-1
                            rounded-full text-[10px] text-white '> 4</div>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navebar;