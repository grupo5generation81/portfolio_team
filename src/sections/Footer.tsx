function Footer() {
    return (
        <div className="bg-[#1e1e1e] text-white dark:text-[#1e1e1e] dark:bg-white border-t border-gray-600 py-6 w-full px-4 flex flex-col items-center text-center">
            <p className="mb-2 text-sm">Desenvolvido com muita garra pelo eterno grupo 5 🤍</p>
            <p className="text-sm ">© {new Date().getFullYear()} Javason's Five. Todos os direitos reservados.</p>
        </div>
    );
};

export default Footer;
