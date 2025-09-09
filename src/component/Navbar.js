import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="text-blue-500 py-4 px-6 flex justify-between items-center ">
      <h1 className="text-2xl font-bold">Puns n’ Noodles</h1>
      <ul className="flex space-x-4">
        <li className="cursor-pointer hover:text-red-200">
          <Link href="#">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-red-200">About</li>
        <li className="cursor-pointer hover:text-red-200">Contact</li>
      </ul>
      <div className="space-x-2">
        <button className="font-semibold cursor-pointer hover:text-red-200">
          Login
        </button>
        <button className="font-semibold cursor-pointer hover:text-red-200">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
