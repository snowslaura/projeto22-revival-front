import { useNavigate } from "react-router-dom";
import { Item } from "./styles";

export function ItemGeneral({item}){

    const navigate = useNavigate()

    function goToItemPage(itemId){
        navigate(`/item/${itemId}`)
    }


    return(
        <Item onClick={() => goToItemPage(item.id)} style={{backgroundImage: `url(${item.imageUrl})`}}/>
    )
}

