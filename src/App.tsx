import { ThemeProvider } from "./context/ThemeContext"
import Main from "./sections/Main"
import Navbar from "./sections/Navbar"

function App() {

  return (
    <ThemeProvider>
      {/* aqui vai ficar cada camada da pagina */}
      <Navbar />
      <Main />
    </ThemeProvider>
  )
}

export default App
