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
          <h2 className="text-[70px] lg:text-8xl font-title leading-none">
            OS PODERES
          </h2>
          <div className="flex gap-8">
            <h2 className="text-[70px] lg:text-8xl font-title">
              DO
            </h2>
            <img
              src={currentTheme === "light" ? stick_Light : stick_Dark}
              alt="logo do javasons"
              className="h-25 lg:h-30"
            />
          </div>
        </div>
        <p className="mt-6 dark:text-[#1e1e1e]">
          Ao longo da nossa jornada na Generation, desenvolvemos habilidades
          técnicas e comportamentais essenciais:
        </p>
      </div>

      <img src={ListaPoderes} alt="Listagem de habilidades que os integrantes apresentam" className="w-[100%] sm:w-[55%] hidden lg:block" />
      <ul className="text-[10px] text-gray-900 flex flex-col gap-2 lg:hidden">
        <li className="px-4 py-2 rounded-full bg-[#F95F7E]">Java com orientação a objetos</li>
        <li className="px-4 py-1 rounded-full bg-[#FD7861]">Banco de dados com MySQL</li>
        <li className="px-4 py-1 rounded-full bg-[#FFAF5D]">Desenvolvimento web com HTML, CSS e JavaScript</li>
        <li className="px-4 py-1 rounded-full bg-[#FEE95E]">Metodologias ágeis (Scrum)</li>
        <li className="px-4 py-1 rounded-full bg-[#5DA7FB]">Git e GitHub para versionamento de código</li>
        <li className="px-4 py-1 rounded-full bg-[#A9FF60]">Trabalho em equipe, comunicação assertiva e resolução de conflitos</li>
      </ul>
    </div>
  );
}

export default Poderes;
