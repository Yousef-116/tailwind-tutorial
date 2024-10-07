import React from 'react'
import Button from '../Shared/Button'


const ProductsData = [
    {
        id: 1,
        title: 'Product 1',
        image: 'assets/product/p-1.jpg',
        price: 100
    },
    {
        id: 2,
        title: 'Product 2',
        image: 'assets/product/p-2.jpg',
        price: 150
    },
    {
        id: 3,
        title: 'Product 3',
        image: 'assets/product/p-3.jpg',
        price: 200
    },
    {
        id: 4,
        title: 'Product 4',
        image: 'assets/product/p-4.jpg',
        price: 250
    },
    {
        id: 5,
        title: 'Product 5',
        image: 'assets/product/p-5.jpg',
        price: 300
    },
    {
        id: 6,
        title: 'Product 6',
        image: 'assets/product/p-7.jpg',
        price: 350
    },
    {
        id: 7,
        title: 'Product 7',
        image: 'assets/product/p-9.jpg',
        price: 400
    },
    {
        id: 8,
        title: 'Product 8',
        image: 'assets/product/p-5.jpg',
        price: 450
    }
]


const Products = () => {


    function clickBtn() {
        console.log('clicked')
    }

    return (
        <div className='container'>
            <div className='container text-center w-full pt-24 pb-10'>
                <h1 className=' font-bold text-3xl dark:text-white'>Our Products</h1>
                <p className='text-sm text-gray-400 '>Explore Our Products</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5'>
                {ProductsData.map((data) => (
                    <div key={data.id} className='
                        flex flex-col 
                        items-center 
                        '>
                        {/* Card Image */}
                        <div className='relative group'>
                            <img src={data.image} alt={data.title}
                                className='object-cover h-[200px] rounded-xl 
                                group-hover:blur-sm transition-all duration-1000' />
                            {/* Card Button */}
                            <div className='absolute inset-0 flex 
                            items-center justify-center 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-1000'>
                                <Button
                                    textColor='text-white'
                                    bgColor='bg-primary'
                                    text='Shop Now'
                                    handler={clickBtn}
                                />
                            </div>
                        </div>
                        <h2 className='text-md font-semibold dark:text-white'>
                            {data.title}</h2>
                        <p className='text-md font-bold dark:text-white'>
                            ${data.price}</p>
                    </div>
                ))}

            </div>



        </div>
    )
}

export default Products