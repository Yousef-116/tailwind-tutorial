import React from 'react'

type ButtonProps = {
    text: string,
    bgColor: string,
    textColor: string,
    handler: Function,

}

const Button = ({ text, bgColor, textColor, handler }: ButtonProps) => {
    return (
        <button className={`${textColor} ${bgColor}
        w-fit px-8 py-2 rounded-full text-sm
        hover:scale-105 duration-300 z-10`}>{text}</button>
    )
}

export default Button