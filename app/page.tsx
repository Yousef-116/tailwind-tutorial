import Image from "next/image";
import React from 'react'
import Navebar from "./components/Navebar/Navebar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";

export default function Home() {
  const BannerData = [{
    frombgColor: "bg-primary",
    toBgColor: "bg-primary/90",
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: "assets/hero/headphone.png",
    alt: "Fine Smile Banner",
    btntextColor: "text-primary",
  },
  {
    frombgColor: "bg-brandGreen",
    toBgColor: "bg-brandGreen/90",
    discount: "25% OFF",
    title: "HAPPY HOURS",
    date: "15 Jan to 31 Jan",
    image: "assets/category/smartwatch2-removebg-preview.png",
    alt: "Beats Solo Banner",
    btntextColor: "text-brandGreen",
  }
  ]


  return (

    <div className="bg:white dark:bg-gray-900">
      <Navebar />
      <Hero />
      <Category />
      <Services />
      <Banner propdata={BannerData[0]} />
      <Products />
      <Banner propdata={BannerData[1]} />
      <Blogs />
      <Partners />
      <Footer />

    </div>

    // <div className="grid grid-flow-dense grid-cols-6 gap-4 text-center">
    //   <div className="p-3 bg-black text-white">01</div>
    //   <div className="p-3 row-span-2 bg-black text-white ">02</div>
    //   <div className="p-3 bg-black text-white">03</div>
    //   <div className="p-3 col-span-2 bg-black text-white">04</div>
    //   <div className="p-3 bg-black text-white">05</div>
    //   <div className="p-3 bg-black text-white">06</div>
    //   <div className="p-3 bg-black text-white">07</div>
    //   <div className="p-3 bg-black text-white">08</div>
    //   <div className="p-3 bg-black text-white">09</div>

    // </div>
    // <div className="container grid grid-cols-4  divide-x-[10px] divide-slate-500">
    //   <div className="text-center">
    //     <header className="text-lg font-bold" >Hello</header>
    //     <p className="">this is the content</p>
    //     <button className="blur-sm bg-blue-300 p-1 rounded-md shadow-lg text-white">say hello</button>
    //   </div>
    // </div>

    // <div className="">
    /* <h1 className="text-3xl bg-red-500 text-white pt-4 px-5">Titel 1</h1>
    <h2 className="text-2xl ">Titel 2</h2>
    <h3 className="text-xl ">Titel 3</h3>

    <p className="text-base ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, ad.</p>
    <p className="text-sm ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, ad.</p>
    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing.</p> */
    // <div className="">
    //  <div className="w-1/3 h-11  bg-red-400"></div>
    //   <div className="w-2/3 h-11  bg-blue-400"></div>
    //   <div className="w-1/2 h-16 bg-green-400"></div>
    //   <div className="Header">Header</div>
    //   <div className="flex justify-around space-x-4">
    //   <p>hello</p>
    //   <p>Yousef Mostafa</p>

    //   </div>


  );
}
