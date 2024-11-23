import React, { useEffect, useRef, useState, useTransition } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import { FaSearch } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import gsap from "gsap";

const Header = () => {
  const languages = ["az", "en"];

  const logo = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.6 } });

  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    tl.fromTo(
      logo.current,
      { opacity: 0, x: -80,   scale: 0.7 },
      { opacity: 1, x: 0, scale: 1 }
    );
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
    <div className="w-full  dark:bg-black py-7 container flex justify-between items-center  relative ">
      <div className=" flex gap-10 items-center">
        <a
          href="#"
          className="dark:text-gray-200 tracking-wider text-5xl font-bold"
          ref={logo}
        >
          GEGA
        </a>
        <nav className="ml-auto flex space-x-4">
          {navLinks[i18n.language].map((item, index) => {
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
          <input
            type="text"
            className="opacity-0  dark:text-white transition-all duration-200 outline-none bg-transparent border-transparent border-b group-hover:border-red-800 group-hover:opacity-100 "
          />
          <FaSearch className="dark:text-white ml-2 cursor-pointer " />
        </div>
        <MdLightMode
          className="dark:text-white text-2xl cursor-pointer"
          onClick={toggleMode}
        />
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-transparent outline-none uppercase dark:text-white  border-none text-sm p-1"
        >
          {languages.map((item) => {
            return (
              <option value={item} className="dark:text-white dark:bg-black  ">
                {item}
              </option>
            );
          })}
        </select>
        <NavLink to="/login" className="dark:text-white uppercase">
          {t("login")}
        </NavLink>
        <button className="text-white bg-red-800  rounded-xl px-5 py-3 uppercase">
          {t("signUp")}
        </button>
      </div>
    </div>
  );
};

export default Header;
