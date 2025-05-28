import { ThemeProvider } from "styled-components"
import { GlobalStyle, Theme, Titulo } from "./GlobalStyle"

function App() {

  return (
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
      <Titulo>Tip Calculator App</Titulo>
    </ThemeProvider>
  )
}

export default App
