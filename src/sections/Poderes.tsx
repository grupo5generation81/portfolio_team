import stick_Light from "../assets/stick-light.png"
import stick_Dark from "../assets/stick-dark.png"
import ListaPoderes from "../assets/powers.png";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


function Poderes() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div id="PODERES" className="bg-[#1e1e1e] dark:bg-white text-white py-6 px-8 flex flex-col md:flex-row justify-between items-center gap-6">

      <div className="flex flex-col flex-wrap items-start max-w-md">
        <div className="dark:text-[#1e1e1e]">
          <h2 className="text-8xl font-title">
            OS PODERES
          </h2>
          <div className="flex gap-8">
            <h2 className="text-8xl font-title">
              DO
            </h2>
            <img
              src={currentTheme === "light" ? stick_Light : stick_Dark}
              alt="logo do javasons"
              className="w-50"
            />
          </div>
        </div>
        <p className="mt-6 dark:text-[#1e1e1e]">
          Ao longo da nossa jornada na Generation, desenvolvemos habilidades
          técnicas e comportamentais essenciais:
        </p>
      </div>

      <img src={ListaPoderes} alt="Listagem de habilidades que os integrantes apresentam" className="w-[55%]" />
      {/* <div className="flex flex-col relative items-start w-[824px]">
        <div className="bg-rose-400 text-white ml-47 px-6 py-3 rounded-full cursor-pointer shadow-md hover:-translate-1 transition-transform duration-500">
          Java com orientação a objetos
        </div>
        <div className="bg-orange-400 text-white ml-37 px-6 py-3 rounded-full cursor-pointer shadow-md hover:-translate-1 transition-transform duration-500">
          Banco de dados com MySQL
        </div>
        <div className="bg-yellow-400 text-black ml-7 px-6 py-3 rounded-full cursor-pointer shadow-md hover:-translate-1 transition-transform duration-500">
          Desenvolvimento web com HTML, CSS e JavaScript
        </div>
        <div className="bg-blue-400 text-white px-6 py-3 ml-57 rounded-full cursor-pointer shadow-md hover:-translate-1 transition-transform duration-500">
          Git e GitHub para versionamento de código
        </div>
        <div className="bg-lime-400 text-black mr-6 px-6 py-3 rounded-full cursor-pointer shadow-md hover:-translate-1 transition-transform duration-500">
          Trabalho em equipe, comunicação assertiva e resolução de conflitos
        </div>
        <div className="bg-yellow-300 text-black px-6 py-3 rounded-full cursor-pointer shadow-md absolute right-6 bottom-10 rotate-[30deg] translate-x-10 hover:-translate-y-2 transition-transform duration-500">
          Metodologias ágeis (Scrum)
        </div>
      </div> */}
    </div>
  );
}

export default Poderes;
