import { Container, GridArea, Info, InfoArea, LogoLink } from "./App.styles"
import logo from './assets/devmemory_logo.png'

function App() {

  return (
    <Container>
      <Info>
        <LogoLink>
          <img src={logo} alt="Logo" width={200} />
        </LogoLink>

        <InfoArea>
          ...
        </InfoArea>
        <button>Reiniciar</button>
      </Info>
      <GridArea>
        ...
      </GridArea>
    </Container>
  )
}

export default App
