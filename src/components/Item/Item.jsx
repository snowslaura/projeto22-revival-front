import { Item } from "./styles";

export function ItemGeneral({item}){
    return(
        <Item style={{backgroundImage: `url(${item.imageUrl})`}}/>
    )
}

