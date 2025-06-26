import { useContext, useState } from "react";
import { LuSunMoon, LuSunMedium, LuMenu, LuX } from "react-icons/lu";
import logo_javason_Light from "../assets/logo-javason-light.png"
import logo_javason_Dark from "../assets/logo-javason-dark.png"
import ThemeContext from "../context/ThemeContext";

export default function Navbar() {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const isOn = currentTheme === "dark";

  const navItems = ["ORIGEM", "TIME", "PODERES", "PROJETOS"];

  return (
    <div className="mx-4 md:mx-12 py-4 flex justify-between border-b-2 border-b-gray-700 relative">
      <img src={currentTheme === "light" ? logo_javason_Dark : logo_javason_Light} alt="logo da empresa" className="w-36" />
      <div className="hidden md:flex md:w-[785px] md:justify-between lg:justify-between md:ml-6">
        <ul className="flex list-none gap-6 items-center">
          {navItems.map((item) => (
            <li key={item} className="relative overflow-hidden group">
              <a
                href={`#${item}`}
                className="block py-2 px-3 rounded-sm"
              >
                {item}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <label className="flex items-center justify-between gap-2 cursor-pointer select-none w-19">
          <span>{isOn ? <LuSunMoon className="w-6 h-6" /> : <LuSunMedium className="w-6 h-6" />}</span>
          <button
            className={`w-10 h-5 flex items-center bg-gray-300 rounded-full border border-gray-500 p-1 transition duration-300 ${isOn ? "bg-gray-700" : "bg-gray-300"
              }`}
            onClick={() => changeCurrentTheme(currentTheme === "light" ? "dark" : "light")}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full border border-gray-500 shadow-md transform transition duration-300 ${isOn ? "translate-x-[18px]" : "translate-x-0"
                }`}
            />
          </button>
        </label>
      </div>

      <div className="hidden max-md:flex items-center gap-4">
      
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white dark:bg-neutral-900 shadow-md flex flex-col items-start gap-4 px-6 py-4 md:hidden z-50">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="block">
                {item}
              </a>
            </li>
          ))}
          <label className="flex items-center justify-between gap-2 cursor-pointer select-none w-19">
            <span>{isOn ? <LuSunMoon className="w-6 h-6" /> : <LuSunMedium className="w-6 h-6" />}</span>
            <button
              className={`w-10 h-5 flex items-center bg-gray-300 rounded-full border border-gray-500 p-1 transition duration-300 ${isOn ? "bg-gray-700" : "bg-gray-300"
                }`}
              onClick={() => changeCurrentTheme(currentTheme === "light" ? "dark" : "light")}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full border border-gray-500 shadow-md transform transition duration-300 ${isOn ? "translate-x-[18px]" : "translate-x-0"
                  }`}
              />
            </button>
          </label>
        </ul>
      )}
    </div>
  )
}
