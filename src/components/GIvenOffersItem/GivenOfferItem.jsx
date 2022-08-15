import { Item } from "../Item/styles";

export function GivenOfferItem({item}){
    return(
        <Item style={{backgroundImage: `url(${item.itemOffer.imageUrl})`}}/>
    )
}