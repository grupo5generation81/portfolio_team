import { useState } from "react";
import { LuSunMoon, LuSunMedium } from "react-icons/lu";
import logo_javason_Light from "../assets/logo-javason-light.png"

export default function Navbar() {
  const [isOn, setIsOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mx-12 py-4 flex justify-between items-center border-b border-b-gray-700">
      <img src={logo_javason_Light} alt="logo da empresa" className="w-36" />
      <ul className="list-none flex gap-6">
        <li className="relative overflow-hidden group"><a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-white md:p-0" href="#">MAIN</a><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span></li>
        <li className="relative overflow-hidden group"><a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-white md:p-0" href="#">ORIGIN</a><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span></li>
        <li className="relative overflow-hidden group"><a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-white md:p-0" href="#">CASE STUDIES</a><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span></li>
        <li className="relative overflow-hidden group"><a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-white md:p-0" href="#">TEAM</a><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 transition-all duration-300 group-hover:w-full"></span></li>
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
  )
}
