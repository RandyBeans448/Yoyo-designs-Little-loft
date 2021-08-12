import React from "react";

export default function Download() {
  return (
    <div className="bg-black">
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="text-white tracking-wider font-semibold sm:text-xl md:text-4xl lg:text-5xl">
          Get it for free
        </h1>
        <div className="flex flex-row justify-center items-center relative left-6 top-10">
        <a
          href={"https://www.apple.com/uk/app-store/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="apple-app-store"
            className="w-4/5"
            src={"/images/apple-button.png"}
          />
        </a>
        <a
          href={"https://play.google.com/store"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="google-app-store"
            className="w-4/5"
            src={"/images/google-play-badge.png"}
          />
        </a>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row  justify-center items-center py-20">
        <p className="text-white">© Little Loft 2021. All Rights Reserved.</p>
        <div className="flex flex-row justify-center items-center">
            <img alt="facebook" className="h-12 w-12 m-5" src={"/images/Facebook.png"} />
            <img alt="twitter" className="h-12 w-12 m-5" src={"/images/Twitter.png"} />
            <img alt="insta" className="h-12 w-12 m-5" src={"/images/Instagram.png"} />
          </div>
      </div>
    </div>
  );
}