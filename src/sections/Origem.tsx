import { useContext } from "react";
import logo_javason_Light from "../assets/logo-javason-light.png";
import logo_javason_Dark from "../assets/logo-javason-dark.png";
import logo_generation_Light from "../assets/logo-generation-light.png";
import logo_generation_Dark from "../assets/logo-generation-dark.png";
import img_origin_Light from "../assets/img-origin-light.png";
import img_origin_Dark from "../assets/img-origin-dark.png";
import ThemeContext from "../context/ThemeContext";

function Origem() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <section
      id="ORIGEM"
      className="w-full flex flex-col items-center justify-center py-12 text-center"
    >
      <div className="w-full flex items-center justify-center gap-20 mb-12">
        <div className="h-4 flex-1 bg-[#1e1e1e] dark:bg-white"></div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title whitespace-nowrap text-center">
          A ORIGEM DA JORNADA
        </h2>

        <div className="h-4 flex-1 bg-[#1e1e1e] dark:bg-white"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src={currentTheme === "dark" ? logo_javason_Light : logo_javason_Dark}
          alt="Javason's Five"
          className="h-8 lg:h-16 hover:scale-105 transition-transform"
        />
        <img
          src={currentTheme === "dark" ? img_origin_Dark : img_origin_Light}
          alt="Coração"
          className="h-16 lg:h-36"
        />
        <img
          src={
            currentTheme === "dark"
              ? logo_generation_Dark
              : logo_generation_Light
          }
          alt="Generation"
          className="h-8 lg:h-16 hover:scale-105 transition-transform"
        />
      </div>

      <p className="px-6 max-w-[740px] w-full justify-center text-base/8 mt-8">
        Em um ambiente de aprendizado desafiador e repleto de oportunidades,
        seis mentes curiosas se encontraram com um propósito em comum: evoluir
        na programação e transformar ideias em soluções reais. Assim nasceu o
        Javason's Five, o grupo 5 da turma 81 do programa Generation Brasil.
      </p>
      <p className="px-6 max-w-[740px] w-full justify-center text-base/8">
        Somos estudantes apaixonados por tecnologia, unidos por valores como
        colaboração, resiliência e vontade de aprender. Cada um com sua bagagem
        única, mas todos com o mesmo objetivo: crescer juntos e deixar nossa
        marca no mundo da programação.
      </p>
    </section>
  );
}

export default Origem;
