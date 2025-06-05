import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme } from "./GlobalStyle"
import { Hero } from "./components/Hero"
import Calculadora from "./Calculadora"
import { Calculator } from "./components/calculator"
import { MyContextProvider } from "./context/MyContext"

function App() {

  return (
    <MyContextProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Hero>
          <Calculator />
        </Hero>
      </ThemeProvider>
    </MyContextProvider>
    // <Calculadora />
  )
}

export default App
