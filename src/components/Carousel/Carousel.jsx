import { useState } from "react"
import { Container, Left, Rigth, Bora, Chance, Sentido} from "./styles"
import bike from  "../../assets/img/bike.jpg"
import car from "../../assets/img/car.jpg"
import phone from  "../../assets/img/phone.jpg"
import phone2 from  "../../assets/img/phone2.jpg"
import table from "../../assets/img/table.jpg"
import telephone from  "../../assets/img/telephone.jpg"
import { useEffect } from "react"


export default function Carousel(){
    const [index, setIndex] = useState(0)

    
    const images = [
        bike,
        car,
        phone,
        phone2,
        table,
        telephone
    ]
    useEffect (IndexImage, [])

    function IndexImage(){
        const min = 0;
        const max = images.length-1
        let index = Math.floor(Math.random() * (max - min + 1) + min)
        setIndex(index)
    }
    
    setInterval(()=> IndexImage, 1500)

    return(
        <Container >            
            <Left  style={{backgroundImage: `url(${images[index]})`}}></Left>
            <Rigth>                
                <Bora>BORA TROCAR?</Bora>
                <Chance>DÊ UMA NOVA <p>OPORTUNIDADE</p> PARA SEUS PERTENCES</Chance>
                <Sentido>TROQUE POR ALGO QUE FAÇA MAIS <p>SENTIDO PARA VOCÊ !</p></Sentido>
            </Rigth>
        </Container>
    )
}
