"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const DarkMode = () => {
    const light_img = "./assets/website/light-mode-button.png"; // Ensure this path is correct
    const dark_img = "./assets/website/dark-mode-button.png";   // Ensure this path is correct

    const [theme, setTheme] = useState<string>(
        typeof window !== 'undefined' && localStorage.getItem("theme")
            ? localStorage.getItem("theme") ?? light_img
            : light_img
    );

    const [isFading, setIsFading] = useState(false);
    const ele = typeof document !== 'undefined' ? document.documentElement : null;

    useEffect(() => {
        if (theme && ele) {
            localStorage.setItem("theme", theme);
            if (theme === dark_img) {
                ele.classList.add("dark");
            } else {
                ele.classList.remove("dark");
            }
        }
    }, [theme, ele, dark_img]);

    const toggleTheme = () => {
        setIsFading(true);
        setTimeout(() => {
            setTheme(prevTheme => prevTheme === light_img ? dark_img : light_img);
            setIsFading(false);
        }, 100);
    };

    return (
        <div>
            <Image
                src={theme}
                onClick={toggleTheme}
                width={1000}
                height={1000}
                className={`w-12 cursor-pointer transition-all duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
                alt="Theme Toggle"
            />
        </div>
    );
};

export default DarkMode;
