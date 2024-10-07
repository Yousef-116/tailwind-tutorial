"use client";

import React from 'react'
import Slider from 'react-slick'
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        subtitles: "Beats Solo",
        title: 'Wireless',
        title2: 'HEADPHONE',
        image: "assets/hero/headphone.png",
        description: 'This is the first slide',
    },
    {
        id: 2,
        subtitles: "Beats Solo",
        title: 'Wireless',
        title2: 'virtual',
        image: 'assets/category/vr.png',
        description: 'This is the second slide',
    },
    {
        id: 3,
        subtitles: "Beats Solo",
        title: 'Lenovo',
        title2: 'Laptops',
        image: 'assets/category/macbook.png',
        description: 'This is the third slide',
    }
]



const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        //slidesToShow: 1,

        slidesToScroll: 1,

        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    function clickBtn() {
        console.log('clicked')
    }
    return (
        <div>
            <div className='w-full container pb-10'>
                {/* Hero Section */}
                <Slider {...settings}>
                    {HeroData.map((data) => (
                        <div className='w-full bg-gradient-to-r
                         from-gray-300/80 
                        to-gray-100  rounded-3xl  container
                        dark:from-gray-900 dark:to-gray-800' key={data.id}>
                            <div className='w-full grid grid-cols-1 
                            sm:grid-cols-2  min-h-[550px]
                            sm:min-[650] justify-center items-center
                            pd-8 sm:pd-0
                            '>
                                {/* text section */}
                                <div className='flex flex-col justify-center
                                gap-5 sm:pl-3 pt-12 sm:pt-0 text-center 
                                sm:text-left order-2 
                                sm:order-1 relative z-10'>
                                    <h1 className='font-bold 
                                    text-2xl sm:text-6xl lg:text-2xl
                                    dark:text-white
                                    '>{data.subtitles}</h1>
                                    <h1 className='font-bold 
                                    dark:text-white
                                    text-5xl sm:text-6xl lg:text-7xl'
                                    >{data.title}</h1>
                                    <h1 className='font-bold uppercase
                                    text-4xl text-white 
                                    dark:text-white/10 sm-text[80px]
                                    md:text-[100px] xl:text-[150px]
                                     z-10 py-3'>{data.title2}</h1>
                                    <div><Button
                                        textColor='text-white'
                                        bgColor='bg-primary'
                                        text='Shop Now'
                                        handler={clickBtn} />
                                    </div>
                                </div>
                                {/* img section */}
                                <div className='order-1  
                                sm:order-2'><img src={data.image} alt=""
                                        className='w-[300px] sm:w-[450] 
                                h-[300px] sm:h-[450] sm:scale-105 lg:scale-150
                                object-contain mx-auto drop-shadow-4xl
                                relative z-50' /></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero