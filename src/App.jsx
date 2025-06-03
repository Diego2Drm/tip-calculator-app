import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme, Titulo } from "./GlobalStyle"
import { Hero } from "./components/Hero"
import Calculadora from "./Calculadora"
import { Calculator } from "./components/calculator"

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Hero>
        <Calculator />
      </Hero>
    </ThemeProvider>
  )
}

export default App
