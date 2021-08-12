import React from "react";

export default function MainContext() {
  return (
    <div clasName="overscroll-none ">
      <div className="bg-yellow-50 grid grid-cols-2  m-auto relative bottom-10">
        <div className="flex flex-col relative sm:left-5 md:left-32 md:top-48">
          <h1 className="font-semibold sm:text-xl md:text-4xl lg:text-5xl">Find new joy in</h1>
          <h1 className="font-semibold sm:text-xl md:text-4xl lg:text-5xl">second-hand toys</h1>
          <p className="sm:mt-5 md:text-l lg:text-xl mt-10">
            High-quality items at a fraction of the price and you'll be
          </p>
          <p className="sm:text-m lg:text-xl">helping to save our planet Earth by reducing landfill.</p>
          <div className="flex flex-row items-center relative sm:bottom-5 mt-8">
            <a
              href={"https://www.apple.com/uk/app-store/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="apple-app-store" className="sm:w-3/5 md:w-4/5" src={"/images/apple-button.png"} />
            </a>
            <a
              href={"https://play.google.com/store"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="google-app-store" className="sm:w-3/5 md:w-4/5" src={("/images/google-play-badge.png")} />
            </a>
          </div>
        </div>
        <div className="h-full w-full relative sm:left-5 sm:top-">
          <img
            className="overflow-x-visible h-5/6 w-5/6 object-contain lg:object-scale-down"
            alt="phone"
            src={"/images/Dual-iphone.png"}
          />
        </div>
      </div>
      <div className="flex flex-row grid-cols-2 mt-48 pt-10 relative sm:left-5 md:left-0 justify-center items-center">
        <div className="relative lg:left-36 ">
          <img
            className="overflow-x-visible sm:h-3/5 sm:w-3/5 md:h-2/3 md:w-2/3 object-contain lg:object-scale-down"
            alt="phone"
            src={"/images/Share-together.png"}
          />
        </div>
        <div className="flex flex-col relative sm:w-screen sm:right-20 md:right-0 md:w-1/2 justify-center items-start ">
          <h1 className="font-semibold sm:text-l md:text-4xl lg:text-5xl">Share together</h1>
          <p className="font-semibold sm:text-sm md:text-2xl my-6">Sign up to our community of like-minded parents</p>
          <p className="sm:text-sm md:text-l md:w-3/5 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
      </div>
      <div className="flex flex-row grid-cols-2 md:mt-48 pt-10 relative justify-center items-start">
        <div className="flex flex-col sm:w-screen md:w-1/3 relative sm:left-16 top-20 md:top-48">
          <h1 className="font-semibold sm:text-l md:text-4xl lg:text-5xl">Hidden treasures</h1>
          <p className="font-semibold sm:text-sm md:text-xl my-6">Buy from local sellers on our marketplace to help protect the planet</p>
          <p className="md:w-4/5 sm:text-sm md:text-l lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className="relative sm:left-24 sm:top-16">
          <img
            className="overflow-x-visible sm:h-3/5 sm:w-3/5 md:h-2/3 md:w-2/3 object-contain lg:object-scale-down"
            alt="phone"
            src={"/images/Hidden-treasures.png"}
          />
        </div>
      </div>
      <div className="flex flex-row grid-cols-2 mt-48  pt-10 relative sm:left-5 md:left-0 justify-center items-center">
        <div className="relative lg:left-36 ">
          <img
            className="overflow-x-visible sm:h-3/5 sm:w-3/5 md:h-2/3 md:w-2/3 object-contain lg:object-scale-down"
            alt="phone"
            src={"/images/Store-the-money.png"}
          />
        </div>
        <div className="flex flex-col relative sm:w-screen sm:right-20 md:right-0 md:w-1/2 justify-center items-start ">
          <h1 className="font-semibold sm:text-l md:text-4xl lg:text-5xl">Store the money</h1>
          <p className="font-semibold sm:text-sm md:text-2xl my-6">Feel safe and secure paying for items through our built-in wallet platform</p>
          <p className="sm:text-sm md:text-l md:w-3/5 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
      </div>
      <div className="flex flex-row grid-cols-2 sm:mb-48 md:my-48 pt-10 relative justify-center items-start">
        <div className="flex flex-col sm:w-screen md:w-1/3 relative sm:left-16 top-20 md:top-48">
          <h1 className="font-semibold sm:text-l md:text-4xl lg:text-5xl">Our planet</h1>
          <p className="font-semibold sm:text-sm md:text-xl my-6">Buy from local sellers on our marketplace to help protect the planet</p>
          <p className="md:w-4/5 sm:text-sm md:text-l lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className="relative sm:left-24 sm:top-16">
          <img
            className="overflow-x-visible sm:h-3/5 sm:w-3/5 md:h-2/3 md:w-2/3 object-contain lg:object-scale-down"
            alt="phone"
            src={"/images/Our-planet.png"}
          />
        </div>
      </div>
    </div>
  );
}
