import React from 'react'

type ButtonProps = {
    text: string,
    bgColor: string,
    textColor: string,
    handler: () => void;

}

const Button: React.FC<ButtonProps> = ({ text, bgColor, textColor, handler }) => {
    return (
        <button onClick={handler} className={`${textColor} ${bgColor}
        w-fit px-8 py-2 rounded-full text-sm
        hover:scale-105 duration-300 z-10`}>{text}</button>
    )
}

export default Button