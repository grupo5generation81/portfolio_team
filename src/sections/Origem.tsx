

function Origem() {
    return (
        <section className="flex flex-col items-center justify-center px-4 py-12 text-center">

            <div className="flex items-center justify-center gap-20  mb-12">

                <div className="h-4 w-40 bg-black"></div>

                <h2 className="text-7xl font-title font-bold whitespace-nowrap">
                    A ORIGEM DA JORNADA
                </h2>

                <div className="h-4 w-40 bg-black"></div>

            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
                <img src="https://ik.imagekit.io/lml7cc5ua/Logo_Grupo?updatedAt=1750194589314"
                    alt="Javason's Five"
                    className="h-16 hover:scale-105 transition-transform" />
                <img src="https://ik.imagekit.io/lml7cc5ua/Cora%C3%A7%C3%A3o?updatedAt=1750194624758"
                    alt="Coração"
                    className="h-40 hover:scale-105 transition-transform" />
                <img src="https://ik.imagekit.io/lml7cc5ua/Logo_Generation?updatedAt=1750194656869"
                    alt="Generation"
                    className="h-16 hover:scale-105 transition-transform" />
            </div>

            <p className="max-w-3xl text-lg justify-center leading-relaxed mt-4">
                Em um ambiente de aprendizado desafiador e repleto de oportunidades, seis mentes curiosas se encontraram com um propósito em comum: evoluir na programação e transformar ideias em soluções reais. Assim nasceu o Javason's Five, o grupo 5 da turma 81 do programa Generation Brasil.
                <br />
                <br />
                Somos estudantes apaixonados por tecnologia, unidos por valores como colaboração, resiliência e vontade de aprender. Cada um com sua bagagem única, mas todos com o mesmo objetivo: crescer juntos e deixar nossa marca no mundo da programação.
            </p>
        </section>
    );
}

export default Origem;