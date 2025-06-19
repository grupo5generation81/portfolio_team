import Estrelas from "../assets/img/Estrelas.png"

function SobreNos() {
  const Integrantes = [
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
    },
    {
      nome: "Rodrigo",
      img: "https://github.com/RodrigoHenrikeH.png",
      github: "https://github.com/RodrigoHenrikeH",
      linkedin: "https://www.linkedin.com/in/rodrigohenrikeh/",
    },
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
      nome: "Giulia",
      img: "https://github.com/Giulia-L-Ferreira.png",
      github: "https://github.com/Giulia-L-Ferreira",
      linkedin: "https://www.linkedin.com/in/giulia-l-ferreira/",
    },
  ];

  return (
    <>
      <div className="flex justify-center pt-3">
        <img src={Estrelas} alt="Logo das estrelas" />
      </div>
      <div className="text-black py-10 px-5">
        <h2 className="text-center text-6xl font-bold mb-10">
          NOSSO <span className="text-outline">TIME</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {Integrantes.map((pessoa, index) => (
            <div key={index} className="">
              <div className="bg-white px-3 py-3 rounded shadow-lg shadow-gray-400 overflow-hidden text-black text-center p-4">
                <img
                  src={pessoa.img}
                  alt={pessoa.nome}
                  className="w-full h-64 object-cover object-[35%_50%]"
                />
                <h3 className="font-nameMember text-3xl">{pessoa.nome}</h3>
              </div>
              <div className="flex gap-4 mt-2">
                <a
                  href={pessoa.linkedin}
                  className="text-black hover:text-blue-700 duration-500 hover:-translate-0.5"
                >
                  <i className="fab fa-linkedin text-3xl"></i>
                </a>
                <a
                  href={pessoa.github}
                  className="text-black hover:text-purple-700 duration-500 hover:-translate-0.5"
                >
                  <i className="fab fa-github text-3xl h-4"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SobreNos;
