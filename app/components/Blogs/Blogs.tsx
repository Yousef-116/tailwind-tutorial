import React from 'react'
import Image from 'next/image'

const Blogs = () => {
    const blogsData = [
        {
            id: 1,
            title: 'How to choose perfect smartwatch',
            delay: 200,
            image: '/assets/blogs/blog-1.jpg',
            date: '12 May, 2022 by John Doe',
            author: ' by John Doe',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero id velit consectetur, vel finibus mauris. Nulla facilisi.'
        },
        {
            id: 2,
            title: 'How to choose perfect gadget',
            delay: 300,
            image: '/assets/blogs/blog-2.jpg',
            date: '25 May, 2022 by Jane Doe',
            author: ' by Jane Doe',
            content: 'Nullam ultricies massa in dui posuere, sed blandit neque lobortis. Sed sed justo vel odio pretium finibus.'
        },
        {
            id: 3,
            title: 'How to choose perfect VR headset',
            delay: 400,
            image: '/assets/blogs/blog-3.jpg',
            date: '30 May, 2022 by Michael Doe',
            author: ' by Michael Doe',
            content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec condimentum.'
        }
    ]
    return (
        <div className='container mb-24'>
            <div className='container text-center
             w-full pt-24 pb-10'>
                <h1 className='font-bold text-3xl
                 dark:text-white'>Recent News</h1>
                <p className='text-sm text-gray-400 '>
                    Explore Our Blogs</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 
            md:grid-cols-3 gap-7'>
                {blogsData.map((blog) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={blog.delay}
                        data-aos-duration="700"
                        key={blog.id} className='
                        flex flex-col 
                        
                        overflow-hidden
                        relative 
                        '>
                        <div className='overflow-clip rounded-xl'>
                            <Image width={2000} height={2000} className='w-full h-56 object-cover 
                            transition-all duration-500
                            hover:scale-105 overflow-clip'
                                src={blog.image} alt={blog.title} />
                        </div>
                        <div className='flex py-2 text-[12px] 
                        font-medium text-gray-400'>
                            <div>{blog.date}</div>
                        </div>
                        <div className='text-md font-bold line-clamp-1
                        dark:text-white'>
                            <p>{blog.title}</p>
                        </div>

                        <div className='pt-2 font-semibold 
                        text-xs line-clamp-2 text-gray-400'>
                            {blog.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs