import React from "react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return (
    <header className="border-b border-gray-400 border-solid dark:border-gray-200">
      <div className="max-w-[1400px] mx-auto py-4 md:px-8 items-center flex justify-between h-16">
        <div className="">logo</div>
        <nav className="flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
