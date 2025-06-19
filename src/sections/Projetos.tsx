function Projetos() {
    return (
        <section id="CASE STUDIES" className="w-full px-8 py-12 flex flex-col items-center">

            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
                <div>
                    <h2 className="text-7xl font-title mb-4">
                        ONDE A MAGIA <br />
                        ACONTECE <br />
                    </h2>
                </div>
                <p className="max-w-md">
                    Cada projeto desenvolvido por nós representa um desafio superado e um aprendizado conquistado.
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap gap-8 w-full">

                <div className="max-w-70 flex flex-col items-start group">
                    <div className="w-70 h-70 border rounded mb-4 relative overflow-hidden">
                        <img src="https://ik.imagekit.io/lml7cc5ua/Logo_Karona?updatedAt=1750190514499"
                            alt="Imagem Normal"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                        />

                        <img src="https://ik.imagekit.io/lml7cc5ua/Karona.png?updatedAt=1750185402162"
                            alt="Imagem Hover"
                            className="aabsolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Karona</h3>
                    <p className="text-sm mb-4">03 Junho 2025</p>
                    <a href="https://github.com/grupo5-turma-java-81/grupo5-turma-java-81-Aplicativo_De_Caronas_Compartilhadas_frontend" target="_blank" className="bg-[#1e1e1e] text-white dark:bg-white dark:text-[#1e1e1e] py-2 px-4 rounded flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-400">
                        Acessar →
                    </a>
                </div>

                <div className="flex flex-col items-start group">

                    <div className="w-70 h-70 border rounded mb-4 relative overflow-hidden">
                        <img src="https://ik.imagekit.io/lml7cc5ua/Logo_Fit_Lab?updatedAt=1750192275578"
                            alt="Imagem Normal"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                        />
                        <img src="https://ik.imagekit.io/lml7cc5ua/Fit_Lab?updatedAt=1750185166530"
                            alt="Imagem Hover"
                            className="w-70 h-70 border object-cover rounded mb-4"
                        />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Fit Lab</h3>
                    <p className="text-sm mb-4">05 Junho 2025</p>
                    <a href="https://github.com/Aplicativo-Fitness-Personalizado/Aplicativo-Fitness-Personalizado-Frontend" target="_blank" className="bg-[#1e1e1e] text-white  dark:bg-white dark:text-[#1e1e1e] py-2 px-4 rounded flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-400">
                        Acessar →
                    </a>
                </div>

                <div className="flex flex-col items-start group">
                    <div className="w-70 h-70 border rounded mb-4 relative overflow-hidden">
                        <img src="https://ik.imagekit.io/lml7cc5ua/Logo_RH?updatedAt=1750191990087"
                            alt="Imagem Normal"
                            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                        />

                        <img src="https://ik.imagekit.io/lml7cc5ua/RH_Corp?updatedAt=1750183590197" alt="Foto Páginas do Site"
                            className="w-70 h-70 border object-cover rounded mb-4"
                        />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">RH Corp</h3>
                    <p className="text-sm mb-4">10 Junho 2025</p>
                    <a href="https://aplicativo-sistema-de-rh-aplicativo-iota.vercel.app/" target="_blank" className="bg-[#1e1e1e] text-white dark:bg-white dark:text-[#1e1e1e] py-2 px-4 rounded flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-400">
                        Acessar →
                    </a>
                </div>

            </div>
        </section >
    );
}

export default Projetos;
