import React from 'react'
import Image from "next/image"

const Partners = () => {
    return (
        <div

            className='hidden md:flex mb-12 h-28 bg-gray-200 w-full dark:bg-white/10'>
            <div 
            //data-aos="zoom-out" 
            className='container grid grid-cols-5 items-center
                        justify-center h-full opacity-50'>
                <div
                    data-aos="fade-down-left"
                    //data-aos="zoom-out"
                    data-aos-delay="400"
                    className=''>
                    <Image width={1000} height={1000} className='w-20 mx-auto dark:invert'
                        src="/assets/brand/br-1.png" alt="" />
                </div>
                <div
                    data-aos="fade-left"
                    //data-aos="zoom-out"
                    data-aos-delay="400"
                    className=''>
                    <Image width={1000} height={1000} className='w-20 mx-auto dark:invert'
                        src="/assets/brand/br-2.png" alt="" />
                </div>
                <div
                    data-aos="zoom-out"
                    data-aos-delay="400"
                    className=''>
                    <Image width={1000} height={1000} className='w-20 mx-auto dark:invert'
                        src="/assets/brand/br-3.png" alt="" />
                </div>
                <div
                    data-aos="fade-right"
                    //data-aos="zoom-out"
                    data-aos-delay="400"
                    className=''>
                    <Image width={1000} height={1000} className='w-20 mx-auto dark:invert'
                        src="/assets/brand/br-4.png" alt="" />
                </div>
                <div
                    data-aos="fade-down-right"
                    //data-aos="zoom-out"
                    data-aos-delay="400"
                    className=''>
                    <Image width={1000} height={1000} className='w-20 mx-auto dark:invert'
                        src="/assets/brand/br-5.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partners