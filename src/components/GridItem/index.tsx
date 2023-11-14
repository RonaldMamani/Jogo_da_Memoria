import { GridItem } from "../../types/GridItem"
import { Container, Icon } from "./styles"
import b7 from '../../svgs/b7.svg'
import {items} from '../../data/items'

type Props = {
    item: GridItem;
    onClick: () => void;
}

export const GridItems = ({item, onClick}: Props) => {
    return (
        <Container 
            showBackground={item.permanentShown || item.shown} 
            onClick={onClick}>
            {item.permanentShown === false && item.shown === false &&
                <Icon src={b7} alt="" opacity={.1} />
            }
            {item.permanentShown || item.shown && item.item !== null &&
                <Icon src={items[item.item].icon} alt="" />
            }
        </Container>
    )
}