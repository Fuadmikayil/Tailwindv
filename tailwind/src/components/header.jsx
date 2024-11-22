import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
          document.documentElement.classList.add("dark");
          setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove("dark");
          setIsDarkMode(false);
        }
      }, []);
      
      const toggleMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
        if (newMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };
      
  return (
    <div className="w-full  dark:bg-black  h-32 container flex justify-between items-center  ">
      <div className=" flex gap-10 items-center">
        <a href="#" className="dark:text-gray-200 tracking-wider text-5xl font-bold">
          GEGA 
        </a>
        <nav className="ml-auto flex space-x-4">
          {navLinks.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className="dark:text-gray-400 dark:hover:text-gray-200"
                activeClassName="text-white"
              >
                {item.title}
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div className="space-x-6 flex items-center">
        <div className="flex  items-center group  border-r-2  border-red-800 py-1 pr-4">
        <input type="text" className="opacity-0  dark:text-white transition-all duration-200 outline-none bg-transparent border-transparent border-b group-hover:border-red-800 group-hover:opacity-100 " />
        <FaSearch className="dark:text-white ml-2 cursor-pointer " />
        </div>
        <MdLightMode className="dark:text-white text-2xl cursor-pointer" onClick={toggleMode} />
        <button className="dark:text-white">LOGİN</button>
        <button className="dark:text-white bg-red-800 text-white rounded-xl px-5 py-3">SİNG UP</button>
      </div>
    </div>
  );
};

export default Header;
