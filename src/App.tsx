import { Container, Grid, GridArea, Info, InfoArea, LogoLink } from "./App.styles"
import logo from './assets/devmemory_logo.png'
import RestartIcon from './svgs/restart.svg'
import { Button } from "./components/Button"
import { InfoItem } from "./components/InfoItem"
import { useEffect, useState } from "react"
import { GridItem } from "./types/GridItem"

function App() {

  const [playing, setPlaying] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [moveCount, setMoveCount] = useState(0)
  const [shownCount, setShownCount] = useState(0)
  const [gridItems, setGridItems] = useState<GridItem[]>([])

  useEffect(() => {
    resetAndCreateGrid()
  }, [])

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
        <Grid>

        </Grid>
      </GridArea>
    </Container>
  )
}

export default App
