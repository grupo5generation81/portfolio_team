import { ThemeProvider } from "./context/ThemeContext"
import Navbar from "./sections/Navbar"

function App() {

  return (
    <ThemeProvider>
      {/* aqui vai ficar cada camada da pagina */}
      <Navbar />
    </ThemeProvider>
  )
}

export default App
