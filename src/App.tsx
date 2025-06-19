import { ThemeProvider } from "./context/ThemeContext"
import Footer from "./sections/Footer"
import Main from "./sections/Main"
import Navbar from "./sections/Navbar"
import Origem from "./sections/Origem"
import Poderes from "./sections/Poderes"
import Projetos from "./sections/Projetos"
import SobreNos from "./sections/SobreNos"

function App() {

  return (
    <div className="max-w-[1440px] mx-auto">
      <ThemeProvider>
        {/* aqui vai ficar cada camada da pagina */}
        <Navbar />
        <Main />
        <Origem />
        <SobreNos />
        <Poderes />
        <Projetos />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
