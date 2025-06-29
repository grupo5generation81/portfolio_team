import RH1 from "../assets/rhcorp-1.png"
import RH2 from "../assets/rhcorp-2.png"
import RH3 from "../assets/rhcorp-3.png"
import FitLab1 from "../assets/fitlab-1.png"
import FitLab2 from "../assets/fitlab-2.png"
import FitLab3 from "../assets/fitlab-3.png"
import Karona1 from "../assets/karona-1.png"
import Karona2 from "../assets/karona-2.png"
import Karona3 from "../assets/karona-3.png"

export default function Main() {

  return (
    <div className="
      w-full 
      max-w-[1440px] 
      min-h-11/12
      pt-8
      flex
      items-center 
      gap-16 
      pl-12
      overflow-hidden
      max-xs-l:items-start
      max-xs-l:p-6
      max-lg:flex-col
      max-lg:pl-2
      max-lg:items-start
      max-lg:pt-8
      ">
      <div>
        <h2 className="
          font-title 
          text-8xl 
          tracking-[-4px] 
          text-nowrap 
          max-xs-l:text-6xl
        ">
          PROGRAMAÇÃO <br />
          COM PROPÓSITO, <br />
          PROJETOS <br />
          COM IMPACTO.
        </h2>
        <p className="
          mt-3 
          text-md 
          text-base/8
          text-gray-700
          dark:text-gray-400
          font-body 
          max-w-lg 
          w-[542px]
          max-xs-l:w-full
          max-xs-l:text-justify
        ">
          Seis mentes criativas que se uniram para transformar desafios em soluções reais. Do Java ao front-end, somos um time que combina código limpo, boas práticas e muita vontade de fazer a diferença.
        </p>
      </div>
      <div id="image-grid" className="
        w-full 
        flex 
        flex-col 
        gap-4
        max-xs-l:hidden
      ">
        <div className="flex gap-4">
          <img src={RH1} className="ml-16 w-60 h-36 rounded-xl bg-gray-500 object-cover max-lg:ml-0" />
          <img src={RH2} className="w-60 h-36 rounded-xl bg-gray-500 object-cover" />
          <img src={RH3} className="w-60 h-36 rounded-xl bg-gray-500 object-cover" />
        </div>
        <div className="flex gap-4 max-lg:hidden">
          <img src={FitLab1} className="w-60 h-36 rounded-xl bg-gray-500 object-cover" />
          <img src={FitLab2} className="w-60 h-36 rounded-xl bg-gray-500 object-cover" />
          <img src={FitLab3} className="w-60 h-36 rounded-xl bg-gray-500 object-cover" />
        </div>
        <div className="flex gap-4 max-lg:hidden">
          <img src={Karona1} className="ml-16 w-60 h-36 rounded-xl bg-gray-500 object-cover" />
          <img src={Karona2} className="w-60 h-36 rounded-xl bg-gray-500 object-cover" />
          <img src={Karona3} className="w-60 h-36 rounded-xl bg-gray-500 object-cover" />
        </div>

      </div>
    </div>
  )
}
