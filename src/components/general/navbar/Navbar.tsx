"use client"
import Link from "next/link";
import { LuMenu, LuNotebookPen, LuSearch, LuX } from "react-icons/lu";
import { useState } from "react";


import Logo from "@/components/general/navbar/Logo";
import MobileView from '@/components/general/navbar/MobileView'

export const Navlinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "/articles",
    label: "Articles",
  },
  {
    url: "/about",
    label: "About",
  },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="h-18 backdrop-blur-md backdrop-saturate-50 fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center h-full w-[90%] mx-auto">
        <Logo />

        <ul className="flex items-center gap-4 md:gap-8 font-semibold text-gray-400">
          <li className="flex items-center gap-1 cursor-pointer">
            <LuSearch size={25} />
            <span className="hidden md:block ">Search</span>
          </li>
          <li >
            <Link href='/write' className="flex items-center gap-1 cursor-pointer"><LuNotebookPen size={20} />
            <span className="hidden md:block ">Write</span></Link>
          </li>
          {Navlinks.map((elem) => (
            <li key={elem.url} className="hidden md:block hover:text-gray-200">
              <Link href={elem.url}>{elem.label}</Link>
            </li>
          ))}
          <li className="bg-primary rounded-full cursor-pointer px-3 py-2 md:px-4 lg:px-5">
            Login
          </li>
          <li className="md:hidden cursor-pointer z-80" onClick={
            ()=>setMenuOpen(!menuOpen)
          }>
            {menuOpen? <LuX/> : <LuMenu/>}
          </li>
        </ul>
      </div>
      <MobileView menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </nav>
  );
};

export default Navbar;
