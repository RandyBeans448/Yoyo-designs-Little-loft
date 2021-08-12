import React from 'react'

export default function LetsStayInTouch() {
    return (
        <div className="bg-yellow-100 grid grid-cols-2 m-auto justify-center items-center mt-20 py-20">
        <div className="flex w-3/5 justify-end relative sm:bottom-10 md:bottom-0 lg:left-60">
            <img alt="logo" className="flex justify-end" src={"/images/Little-loft-logo.png"}/>
        </div>
        <div className="flex flex-col justify-center items-start relative sm:right-5 lg:bottom-13">
        <h1 className="font-semibold sm:text-base md:text-5xl items-left lg:my-5">Let's stay in touch</h1>
        <p className="sm:text-sm lg:w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-2 mt-8 relative sm:right-24 md:right-0 sm:w-full md:w-4/5">
          <input className="shadow appearance-none border rounded-full relative sm:right-10 md:right-0 sm:w-48 md:w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
          <button className="bg-black sm:w-24 sm:text-xs sm:ml-24 md:w-2/5 md:ml-8 text-white font-bold py-2 px-4 rounded-full">Subscribe</button>
          </div>
        </div>
        </div>
    )
}
