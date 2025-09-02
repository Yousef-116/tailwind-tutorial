import React from 'react'
import Button from '../Shared/Button'
import { IoIosSend } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    function clickBtn() {
        console.log('clicked')
    }
    return (
        <div className='container pb-36 mt-20'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10' >
                {/* col 1 */}
                <div className='col-span-2 sm:col-span-3 md:col-span-2 grid gap-4 text-gray-600'>
                    <div>
                        <a href="#" className='text-primary font-semibold 
                        tracking-widest 
                        text-2xl uppercase md:text-3xl pr-7'>Eshop</a>
                    </div>
                    <p className='dark:text-white'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum
                    </p>
                    <p>
                        Made with 💖 by The Yousef Mostafa mohamed
                    </p>
                    <Button
                        textColor='text-white'
                        bgColor='bg-primary'
                        text='Visit our YouTubee Channel'
                        handler={clickBtn}
                    />
                </div>
                {/* col 2 */}
                <div className='flex flex-col gap-3 dark:text-white'>
                    <h3 className='font-extrabold text-lg'>
                        Important Links</h3>
                    <p className='text-gray-500 transition-all
                    duration-200 dark:hover:text-white
                    hover:text-black'>Home</p>
                    <p className='text-gray-500 transition-all
                    duration-200 dark:hover:text-white
                    hover:text-black'>About</p>
                    <p className='text-gray-500 transition-all
                    duration-200   hover:text-black dark:hover:text-white'>Contact</p>
                    <p className='text-gray-500 transition-all
                    duration-200   hover:text-black dark:hover:text-white'>Blog</p>
                </div>

                {/* col 3 */}
                <div className='flex flex-col gap-3 '>
                    <h3 className='font-extrabold text-lg dark:text-white'>
                        Quick Links</h3>
                    <p className='text-gray-500 transition-all
                    duration-200  dark:hover:text-white
                    hover:text-black'>Home</p>
                    <p className='text-gray-500 transition-all
                    duration-200 dark:hover:text-white
                    hover:text-black'>About</p>
                    <p className='text-gray-500 transition-all
                    duration-200   hover:text-black dark:hover:text-white'>Contact</p>
                    <p className='text-gray-500 transition-all
                    duration-200   hover:text-black
                    dark:hover:text-white'>Blog</p>
                </div>

                {/* col 4 */}
                <div className='flex flex-col sm:col-span-1 col-span-2  gap-3'>
                    <h3 className='font-extrabold text-lg dark:text-white'>
                        Address</h3>
                    <div className='flex items-center w-full gap-2 text-white'>
                        <IoIosSend className='w-1/3 max-h-4 max-w-4 ' />
                        <p>Egypt , Elqalupia-Elkhanka</p>
                    </div>

                    <div className='flex items-center w-full gap-2 text-white'>
                        <CiMobile1 className='w-1/3 max-h-4 max-w-4 ' />
                        <p>+02 1153610783</p>
                    </div>

                    <div className='flex  gap-4'>
                        <FaInstagram className='w-7 h-7 dark:text-white
                        hover:text-primary dark:hover:text-primary duration-500 transition-all' />
                        <FaFacebook className='w-7 h-7 dark:text-white
                         hover:text-primary dark:hover:text-primary duration-500 transition-all' />
                        <FaLinkedin className='w-7 h-7 dark:text-white
                         hover:text-primary dark:hover:text-primary duration-500 transition-all' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer