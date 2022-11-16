import React from "react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className="">
      <div className="max-w-[1400px] mx-auto md:px-8 items-center flex justify-between h-24">
        <div className="font-bold uppercase text-2xl text tracking-wide">
          React + Esbuild
        </div>
        <nav className="flex">
          <Link to="/" className="px-4 font-semibold">
            Home
          </Link>
          <Link to="/profile" className="px-4 font-semibold">
            Profile
          </Link>
          <Link to="/about" className="px-4 font-semibold">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
