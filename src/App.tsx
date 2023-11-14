import { Container, Grid, GridArea, Info, InfoArea, LogoLink } from "./App.styles"
import logo from './assets/devmemory_logo.png'
import RestartIcon from './svgs/restart.svg'
import { Button } from "./components/Button"
import { InfoItem } from "./components/InfoItem"
import { useEffect, useState } from "react"
import { GridItem } from "./types/GridItem"
import { items } from "./data/items"
import { GridItems } from "./components/GridItem"
import { formatTimeElapsed } from "./helpers/formatTimeElapsed"

function App() {

  const [playing, setPlaying] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [moveCount, setMoveCount] = useState(0)
  const [shownCount, setShownCount] = useState(0)
  const [gridItems, setGridItems] = useState<GridItem[]>([])

  useEffect(() => {
    resetAndCreateGrid()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if(playing) {
        setTimeElapsed(timeElapsed + 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [playing, timeElapsed])

  const resetAndCreateGrid = () => {
    //restar o jogo
    setTimeElapsed(0)
    setMoveCount(0)
    setShownCount(0)

    //Criando Grid

    //criar grid vazio
    let tmpGrid: GridItem[] = []
    for(let i = 0; i < (items.length * 2); i++){
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      })
    }

    //preencher grid
    for(let w = 0; w < 2; w++){
      for(let i = 0; i < items.length; i++){
        let pos = -1
        while(pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2))
        }
        
        tmpGrid[pos].item = i;
      }
    }

    //Jogar no State
    setGridItems(tmpGrid)

    //começando o jogo
    setPlaying(true)
  }

  const handleItemClick = (index: number) => {
    if(playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems]

      if(tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true
        setShownCount(shownCount + 1)
      }

      setGridItems(tmpGrid)
    }
  }

  return (
    <Container>
      <Info>
        <LogoLink>
          <img src={logo} alt="Logo" width={200} />
        </LogoLink>

        <InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value="0" />
        </InfoArea>
        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid} />
      </Info>
      <GridArea>
        <Grid>
          {gridItems.map((item, index) => (
            <GridItems 
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </Grid>
      </GridArea>
    </Container>
  )
}

export default App
