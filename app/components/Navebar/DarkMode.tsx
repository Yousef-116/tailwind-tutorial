"use client";

import React, { useState } from 'react'

const DarkMode = () => {
    const light_img = "assets/website/light-mode-button.png";
    const dark_img = "assets/website/dark-mode-button.png";

    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") ?? light_img
    );
    const [isFading, setIsFading] = useState(false);

    const ele = document.documentElement;

    React.useEffect(() => {
        localStorage.setItem("theme", theme); // Save the theme in local storage
        if (theme === dark_img) {
            ele.classList.add("dark")
        }
        else { ele.classList.remove("dark") }


    })


    const toggleTheme = () => {
        setIsFading(true); // Trigger fade out
        setTimeout(() => {
            setTheme(theme === light_img ? dark_img : light_img); // Switch the image
            setIsFading(false); // Trigger fade in
        }, 100); // The duration should match the fade-out transition duration
    };

    return (
        <div>

            <img
                src={theme}
                onClick={toggleTheme}
                className={`
                        w-12 cursor-pointer 
                        transition-all duration-300 ease-in-out
                        ${isFading ? 'opacity-0' : 'opacity-100'}
                    `}
                alt="Theme Toggle"
            />

        </div>
    );
}

export default DarkMode;
