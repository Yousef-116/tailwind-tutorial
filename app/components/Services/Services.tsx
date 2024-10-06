import React from 'react'
import { FaCarSide } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";


const Services = () => {
    return (
        <div className='container py-16 grid 
    grid-cols-2 lg:grid-cols-4 gap-8' >
            <div className='flex items-center gap-4'>
                {/* service icon */}
                <div>
                    <FaCarSide className='text-primary w-12 h-12' />
                </div>
                {/* service text */}
                <div>
                    <h2 className='dark:text-white font-bold text-md'>Free Shipping</h2>
                    <p className='text-sm text-gray-400'>Free Shipping On All Order</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                {/* service icon */}
                <div>
                    <FaCheckCircle className='text-primary w-12 h-12' />
                </div>
                {/* service text */}
                <div>
                    <h2 className='dark:text-white font-bold text-md'>Safe Money</h2>
                    <p className='text-sm text-gray-400'>30 Days Money Back</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                {/* service icon */}
                <div>
                    <FaWallet className='text-primary w-12 h-12' />
                </div>
                {/* service text */}
                <div>
                    <h2 className='dark:text-white font-bold text-md'>Secure Payment</h2>
                    <p className='text-sm text-gray-400'>All Payment Secure</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                {/* service icon */}
                <div>
                    <FaHeadphonesSimple className='text-primary w-12 h-12' />
                </div>
                {/* service text */}
                <div>
                    <h2 className='dark:text-white font-bold text-md'>Online Support 24/7</h2>
                    <p className='text-sm text-gray-400'>Technical Support 24/7</p>
                </div>
            </div>

        </div>
    )
}

export default Services