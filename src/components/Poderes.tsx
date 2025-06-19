import React from "react";
import Javasons from "../assets/img/Javasons Logo.png";
import ListaPoderes from "../assets/img/Poderes.png";

function Poderes() {
  return (
<>
  <div className="bg-black text-white py-16 px-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-10">
   
    <div className="relative flex flex-col items-start max-w-md">
      <h1 className="text-6xl font-extrabold leading-tight">
        OS PODERES <br /> <span className="text-6xl">DO</span>
      </h1>
      <img
        src={Javasons}
        alt="logo do javasons"
        className="absolute top-20 left-32 w-70" 
      />
      <p className="mt-32 text-base">
        Ao longo da nossa jornada na Generation, desenvolvemos habilidades
        técnicas e comportamentais essenciais:
      </p>
    </div>

    
    <div className="flex flex-col relative items-start w-[824px]">
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
      <div className="bg-yellow-300 text-black px-6 py-3 rounded-full cursor-pointer shadow-md absolute right-6 bottom-0 rotate-[30deg] translate-x-10 hover:translate-y-2 transition-transform duration-500">
        Metodologias ágeis (Scrum)
      </div>
    </div>
  </div>
</div>

</>
 );
}

export default Poderes;
