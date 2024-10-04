import React from 'react'
import Button from '../Shared/Button'


const CategoryData = [
    {
        id: 1,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'Earphone',
        image: "/assets/category/earphone.png",
        bgColorFrom: "from-black/90",
        bgColorTo: "to-black/80",
        cols: "",
        btnbgColor: "bg-primary",
        btnTextColor: "text-white",

    },
    {
        id: 2,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'Gadget',
        image: 'assets/category/watch.png',
        bgColorFrom: "from-[#fdca3d]",
        bgColorTo: "to-[#fdca3d]/90",
        bgColor: "bg-[#fdca3d]",
        cols: "",
        btnbgColor: "bg-white",
        btnTextColor: "text-[#fdca3d]",
    },
    {
        id: 3,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'Laptop',
        image: 'assets/category/macbook.png',
        bgColorFrom: "from-primary",
        bgColorTo: "to-primary/80",
        bgColor: "primary",
        cols: "col-span-2",
        btnbgColor: "bg-white",
        btnTextColor: "text-primary",

    }
    , {
        id: 4,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'PS4',
        image: "assets/category/gaming.png",
        bgColorFrom: "from-gray-400",
        bgColorTo: "to-gray-100",
        bgColor: "gray-300/80",
        cols: "col-span-2",
        btnbgColor: "bg-primary",
        btnTextColor: "text-white",

    },
    {
        id: 5,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'Earphone',
        image: 'assets/category/vr.png',
        bgColorFrom: "from-green-500",
        bgColorTo: "to-green-500/90",
        bgColor: "green-900",
        cols: "",
        btnbgColor: "bg-white",
        btnTextColor: "text-green-500",

    },
    {
        id: 6,
        subtitles: "Enjoy",
        title: 'With',
        title2: 'Gadget',
        image: 'assets/category/speaker.png',
        bgColorFrom: "from-blue-500",
        bgColorTo: "to-blue-500/90",
        bgColor: "blue-900",
        cols: "",
        btnbgColor: "bg-white",
        btnTextColor: "text-blue-500",

    }
]
//dark:from-gray-900 dark:to-gray-800
// from-gray-300/80 
// to-gray-100  
const Category = () => {
    function clickBtn() {
        console.log('clicked')
    }
    return (


        <div className='grid grid-cols-2 md:grid-cols-4 container gap-5'>
            {CategoryData.map((data) => (
                <div className={`
                    w-full bg-gradient-to-r 
                    ${data.cols}
                    ${data.bgColorFrom}
                    ${data.bgColorTo}
                        rounded-3xl  
                        relative
                        
                        `} key={data.id}>
                    <div className='
                    w-full grid grid-cols-1 
                            sm:grid-cols-2  min-h-[300px]
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
                                    text-7xl text-white/20 
                                    sm-text-7xl
                                    md:text-2xl xl:text-5xl
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
                                sm:order-2'><img src={data.image} alt=""
                                className='  h-fit
                                   top-0
                                   right-0
                                drop-shadow-2xl
                                absolute z-50' /></div>
                    </div>
                </div>
            ))}
        </div>


    )
}

export default Category