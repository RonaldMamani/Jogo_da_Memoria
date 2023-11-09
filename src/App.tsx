import { Container, GridArea, Info, InfoArea, LogoLink } from "./App.styles"
import logo from './assets/devmemory_logo.png'
import RestartIcon from './svgs/restart.svg'
import { Button } from "./components/Button"
import { InfoItem } from "./components/InfoItem"

function App() {

  const resetAndCreateGrid = () => {

  }

  return (
    <Container>
      <Info>
        <LogoLink>
          <img src={logo} alt="Logo" width={200} />
        </LogoLink>

        <InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </InfoArea>
        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid} />
      </Info>
      <GridArea>
        ...
      </GridArea>
    </Container>
  )
}

export default App
