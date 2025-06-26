import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import diamond_Light from "../assets/diamond-light.png"
import diamond_Dark from "../assets/diamond-dark.png"

function SobreNos() {

  const { currentTheme } = useContext(ThemeContext);

  const Integrantes = [
    {
      nome: "Elisa",
      img: "https://github.com/eblopes23.png",
      github: "https://github.com/eblopes23",
      linkedin: "https://www.linkedin.com/in/elisa-bicudo-lopes/",
    },
    {
      nome: "Ruan",
      img: "https://github.com/BarretoRuan.png",
      github: "https://github.com/BarretoRuan",
      linkedin: "https://www.linkedin.com/in/ruan-barreto/",
    },
    {
      nome: "Rodrigo",
      img: "https://github.com/RodrigoHenrikeH.png",
      github: "https://github.com/RodrigoHenrikeH",
      linkedin: "https://www.linkedin.com/in/rodrigohenrikeh/",
    },
    {
      nome: "Giulia",
      img: "https://github.com/Giulia-L-Ferreira.png",
      github: "https://github.com/Giulia-L-Ferreira",
      linkedin: "https://www.linkedin.com/in/giulia-l-ferreira/",
    },
    {
      nome: "Weslley",
      img: "https://github.com/wdwf.png",
      github: "https://github.com/wdwf",
      linkedin: "https://www.linkedin.com/in/weslleyferreira/",
    },
    {
      nome: "Larissa",
      img: "https://github.com/LarissaSoaresSilva.png",
      github: "https://github.com/LarissaSoaresSilva",
      linkedin: "https://www.linkedin.com/in/larissa-soares-da-silva/",
    }
  ];

  return (
    <div id="TIME">
      <img src={currentTheme === "dark" ? diamond_Dark : diamond_Light} alt="Logo das estrelas" className="w-16 h-16 mx-auto" />
      <div className="py-10 px-5">
        <h2 className="text-center text-6xl font-title mb-10">
          NOSSO <span className="font-title text-outline">TIME</span>
        </h2>

        <div className="flex flex-wrap justify-around gap-10 pb-8">
          {Integrantes.map((pessoa, index) => (
            <div key={index} className="">
              <div className="w-[300px] h-[300px] bg-white rounded shadow-md overflow-hidden text-center pl-4 pt-4 pr-4 ">
                <img
                  src={pessoa.img}
                  alt={pessoa.nome}
                  className="w-[270px] h-[250px] object-cover object-[35%_50%]"
                />
                <h3 className="font-nameMember text-lg py-1.5">{pessoa.nome}</h3>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href={pessoa.linkedin}
                  className="hover:text-gray-500 duration-500"
                  target="_blank"
                >
                  <FaLinkedin className="w-7 h-7" />
                </a>
                <a
                  href={pessoa.github}
                  className="hover:text-gray-500 duration-500"
                  target="_blank"
                >
                  <FaGithub className="w-7 h-7" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
