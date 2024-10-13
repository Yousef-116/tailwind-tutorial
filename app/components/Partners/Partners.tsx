import React from 'react'

const Partners = () => {
    return (
        <div

            className='hidden md:flex mb-12 h-28 bg-gray-200 w-full
        dark:bg-white/10'>
            <div data-aos="zoom-out" className='container grid grid-cols-5
            items-center justify-center h-full opacity-50'>
                <div
                    data-aos="fade-down-right"
                    data-aos-delay="400"
                    className=''>
                    <img className='w-20 mx-auto dark:invert'
                        src="assets\brand\br-1.png" alt="" />
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-delay="400"
                    className=''>
                    <img className='w-20 mx-auto dark:invert'
                        src="assets\brand\br-2.png" alt="" />
                </div>
                <div
                    data-aos="zoom-out"
                    data-aos-delay="400"
                    className=''>
                    <img className='w-20 mx-auto dark:invert'
                        src="assets\brand\br-3.png" alt="" />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-delay="400"
                    className=''>
                    <img className='w-20 mx-auto dark:invert'
                        src="assets\brand\br-4.png" alt="" />
                </div>
                <div
                    data-aos="fade-down-left"
                    data-aos-delay="400"
                    className=''>
                    <img className='w-20 mx-auto dark:invert'
                        src="assets\brand\br-5.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partners