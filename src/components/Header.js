import React from "react";

export default function Header() {
  return (
    <div className="bg-yellow-50 flex flex-col items-center justify-center h-48">
        <img alt="logo" className="h-4/5" src={"/images/logo.png"}></img>
        <p className="font-serif text-2xl tracking-widest relative bottom-10 left-2">Little Loft</p>
    </div>
  );
}
