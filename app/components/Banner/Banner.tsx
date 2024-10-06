import React from 'react'
import Button from '../Shared/Button'

const Banner = () => {

    function clickBtn() {
        console.log('clicked')
    }
    return (
        <div className='container'>
            <div className='rounded-3xl bg-gradient-to-r 
                    from-primary to-primary/90
                     p-8
                     md:h-[340px] 
                     w-full 
                     grid md:grid-cols-4 
                     items-center 
                     relative
                     '>
                {/* discount Section */}
                <div className='items-center
                         text-white  '>
                    <p className='text-sm font-medium'>30% OFF</p>
                    <h1 className='text-4xl font-bold'>FINE SMILE</h1>
                    <p className='text-sm font-medium'>10 Jan to 28 Jan</p>
                </div>

                {/* Image Section */}
                <div className='col-span-2 mx-auto'>
                    {/* <img src='https://via.placeholder.com/400x300' alt='Smile' /> */}
                    <img src='assets/hero/headphone.png'
                        className='drop-shadow-4xl 
                        h-[320px] w-[320px] md:h-[270px] md:w-[270px] 
                        lg:h-[450px] lg:w-[450px] md:absolute
                        md:transform md:-translate-x-1/2 md:-translate-y-1/2'
                        alt='' />

                </div>


                {/* Discreption Section */}
                <div className='gap-4 grid'>
                    <h1 className='text-xl text-white font-bold'>Air Solo Bass</h1>
                    <h2 className='text-3xl md:text-5xl text-white font-bold'>Winter Sale</h2>
                    <p className='text-sm text-white font-medium'>Smile experience with our Fine Smile headphones.</p>
                    <Button
                        textColor={`text-primary`}
                        bgColor={`bg-white`}
                        text='Shop Now'
                        handler={clickBtn}
                    />
                </div>


            </div>
        </div>
    )
}

export default Banner