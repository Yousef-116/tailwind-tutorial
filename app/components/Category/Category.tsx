import React from 'react'
import Button from '../Shared/Button'
import Image from 'next/image'

const CategoryData = [
    {
        id: 1,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'Earphone',
        image: "./assets/category/earphone.png",
        imageWidth: "w-[320px]",
        ImageWidth: 320,
        bgColorFrom: "from-black/90",
        bgColorTo: "to-black/70",
        cols: "",
        btnbgColor: "bg-primary",
        btnTextColor: "text-white",
        imgPosition: "top-0"

    },
    {
        id: 2,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'Gadget',
        image: './assets/category/watch.png',
        imageWidth: "w-[320px]",
        ImageWidth: 320,
        bgColorFrom: "from-brandYellow",
        bgColorTo: "to-brandYellow/85",
        bgColor: "bg-[#fdca3d]",
        cols: "",
        btnbgColor: "bg-white",
        btnTextColor: "text-[#fdca3d]",
        imgPosition: "top-0"
    },
    {
        id: 3,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'Laptop',
        image: './assets/category/macbook.png',
        imageWidth: "w-[350px]",
        ImageWidth: 350,
        bgColorFrom: "from-primary",
        bgColorTo: "to-primary/80",
        bgColor: "primary",
        cols: "col-span-2",
        btnbgColor: "bg-white",
        btnTextColor: "text-primary",
        imgPosition: "top-0"

    }
    , {
        id: 4,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'PS4',
        image: "./assets/category/gaming.png",
        imageWidth: "w-[320px]",
        ImageWidth: 320,
        bgColorFrom: "from-gray-400",
        bgColorTo: "to-gray-100",
        bgColor: "gray-300/80",
        cols: "col-span-2",
        btnbgColor: "bg-primary",
        btnTextColor: "text-white",
        imgPosition: "top-0"

    },
    {
        id: 5,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'VR',
        //image: 'assets/category/smartwatch2-removebg-preview.png',
        image: './assets/category/vr.png',
        imageWidth: "w-[310px]",
        ImageWidth: 310,
        bgColorFrom: "from-brandGreen",
        bgColorTo: "to-brandGreen/90",
        bgColor: "green-900",
        cols: "",
        btnbgColor: "bg-white",
        btnTextColor: "text-green-500",
        //imgPosition:"button-0"
        imgPosition: "sm:-translate-y-1/2 button-0"
    },
    {
        id: 6,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'Gadget',
        image: './assets/category/speaker.png',
        imageWidth: "w-[300px]",
        ImageWidth: 300,
        bgColorFrom: "from-brandBlue",
        bgColorTo: "to-brandBlue/90",
        bgColor: "blue-900",
        cols: "",
        btnbgColor: "bg-white",
        btnTextColor: "text-blue-500",
        imgPosition: "bottom-0 right-0"

    }
]
const Category = () => {
    function clickBtn() {
        console.log('clicked')
    }
    return (


        <div className='grid grid-cols-2 lg:grid-cols-4 container gap-5'>
            {CategoryData.map((data) => (
                <div className={`
                    w-full bg-gradient-to-r 
                    ${data.cols}
                    ${data.bgColorFrom}
                    ${data.bgColorTo}
                        rounded-3xl  
                        relative
                        flex
                        overflow-hidden

                        `} key={data.id}>
                    <div className='
                    w-full grid grid-cols-1 
                            sm:grid-cols-2  min-h-[320px]
                            justify-center items-center
                            pd-2 sm:pd-0
                            '>
                        {/* text section */}
                        <div className='flex flex-col pl-2
                                gap-3 sm:pl-5 pt-2 sm:pt-0 
                                text-left order-2 
                                sm:order-1 relative z-10
                                '>
                            <h1 className=' text-white
                                    text-lg 
                                    '>{data.subtitles}</h1>
                            <h1 className='font-bold text-white
                                    text-xl sm:text-2xl lg:text-3xl'
                            >{data.title}</h1>
                            <h1 className='font-bold uppercase
                                    text-4xl text-white/20 
                                    sm-text-3xl
                                    md:text-2xl 
                                    xl:text-5xl
                                     z-10'>{data.title2}</h1>
                            <div><Button
                                textColor={`${data.btnTextColor}`}
                                bgColor={`${data.btnbgColor}`}
                                text='Browse'
                                handler={clickBtn} />
                            </div>

                        </div>

                        {/* img section */}
                        <div className='order-1  
                                '><Image width={data.ImageWidth} height={400} src={data.image} alt=""
                                className={`
                                   ${data.imgPosition}
                                   right-0
                                   
                                drop-shadow-md
                                absolute `} /></div>
                    </div>
                </div>
            ))}
        </div>


    )
}

export default Category