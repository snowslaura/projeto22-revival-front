import { Item } from "../Item/styles";

export function LatestItem({item}){
    return(
        <Item style={{backgroundImage: `url(${item.imageUrl})`}}/>
    )
}