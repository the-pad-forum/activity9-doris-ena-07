"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className="bg-white opacity-2 shadow-md flex flex-row justify-between items-center gap-x-3 fixed h-[80px] w-full left-0 top-0 z-10 px-6">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" height={100} width={100} alt="logo"/>
        <p className="text-indigo-900 text-[25px]">Fetch API Project</p> 
      </div>

      <div className="flex flex-row items-center gap-x-3">
        <Link href="/" className={`nav-item ${pathname === '/' && 'active'}`}>Albums</Link>

        <Link href="/users" className={`nav-item ${pathname === '/users' && 'active'}`}>Users</Link>

        <Link href="/posts" className={`nav-item ${pathname === '/posts' && 'active'}`}>Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;