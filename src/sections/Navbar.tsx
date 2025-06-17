import { useState } from "react";
import { LuSunMoon, LuSunMedium, LuMenu, LuX } from "react-icons/lu";
import logo_javason_Light from "../assets/logo-javason-light.png"

export default function Navbar() {
  const [isOn, setIsOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["MAIN", "ORIGIN", "CASE STUDIES", "TEAM"];

  return (
    <div className="mx-4 md:mx-12 py-4 flex justify-between border-b border-b-gray-700 relative">
      <img src={logo_javason_Light} alt="logo da empresa" className="w-36" />
      <div className="hidden md:flex md:w-[785px] md:justify-between lg:justify-between md:ml-6">
        <ul className="flex list-none gap-6 items-center">
          {navItems.map((item) => (
            <li key={item} className="relative overflow-hidden group">
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-white"
              >
                {item}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <label className="flex items-center justify-between gap-2 cursor-pointer select-none w-19">
          <span>{isOn ? <LuSunMoon className="w-6 h-6" /> : <LuSunMedium className="w-6 h-6" />}</span>
          <div
            className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition duration-300 ${isOn ? "bg-gray-700" : "bg-gray-300"
              }`}
            onClick={() => setIsOn(!isOn)}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ${isOn ? "translate-x-[18px]" : "translate-x-0"
                }`}
            />
          </div>
        </label>
      </div>


      <div className="hidden max-md:flex items-center gap-4">
        {/* Menu button (mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start gap-4 px-6 py-4 md:hidden z-50">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="block text-gray-900">
                {item}
              </a>
            </li>
          ))}
          <label className="flex items-center justify-between gap-2 cursor-pointer select-none w-19">
            <span>{isOn ? <LuSunMoon className="w-6 h-6" /> : <LuSunMedium className="w-6 h-6" />}</span>
            <div
              className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition duration-300 ${isOn ? "bg-gray-700" : "bg-gray-300"
                }`}
              onClick={() => setIsOn(!isOn)}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ${isOn ? "translate-x-[18px]" : "translate-x-0"
                  }`}
              />
            </div>
          </label>
        </ul>
      )}
    </div>
  )
}
