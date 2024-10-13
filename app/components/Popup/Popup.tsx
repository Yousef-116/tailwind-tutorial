"use client";

import React from 'react';
import { IoIosClose } from "react-icons/io";
import Button from '../Shared/Button';

interface PopupProps {
    isVisible: boolean;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    function clickBtn() {
        console.log('clicked');
    }
    return (
        <div
            className='fixed inset-0 bg-black bg-opacity-50 
            backdrop-blur-sm flex justify-center items-center z-50'
            onClick={onClose}
        >
            <div
                className='bg-white rounded-xl p-6
                dark:bg-gray-900
                relative shadow-lg max-w-sm w-full'
                onClick={e => e.stopPropagation()}
            >
                <button
                    className='absolute top-2 right-5
                     text-gray-500 hover:text-black'
                    onClick={onClose}
                >
                    <IoIosClose className='w-7 h-7' />
                </button>
                <p className='dark:text-white'>Order Now</p>

                <input className='border-2 rounded-full 
                py-1 px-2 w-full mt-4 dark:bg-gray-800
                 dark:border-gray-600'
                    type="text" placeholder='Name' />
                <input className='border-2 rounded-full 
                py-1 px-2 w-full mt-4 dark:bg-gray-800
                 dark:border-gray-600'
                    type="text" placeholder='Email' />
                <input className='border-2 rounded-full 
                py-1 px-2 w-full mt-4 dark:bg-gray-800
                 dark:border-gray-600'
                    type="text" placeholder='Address' />
                <div className='mt-4 text-center'><Button
                    textColor={`text-white`}
                    bgColor={`bg-primary`}
                    text='Order Now'
                    handler={clickBtn}
                /></div>
            </div>
        </div>
    );
};

export default Popup;
