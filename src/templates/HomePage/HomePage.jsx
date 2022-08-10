import {Content, FirstElement, Header,Footer,LogoRevival,Option,NewItems, NewItemsGeneral, NewItemsContainer, AllItems} from "./styles"
import { HiUserCircle } from "react-icons/hi";
import Carousel from "../../components/Carousel/Carousel"
import { useState, useEffect} from "react";
import axios from "axios"
import { ItemGeneral } from "../../components/Item/Item";
import { LatestItem } from "../../components/LatestItem/LatestItem"
import {AuthModal} from "../../components/AuthModal/AuthModal"

function HomePage(){

    const [items, setItems] = useState([])
    const [latestItems, setlatestItems] = useState([])
    const [ismodalOpen, setIsmodalOpen] = useState(false)

    useEffect( ()=>{
        fetchItems();
        fetchLatestItems();
    },[])
    
    function fetchItems(){
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/items`)
        promise.then(({data})=>{
            setItems(data)
        })
        promise.catch((e)=>{
            console.error(e)
        })       
    }

    function fetchLatestItems(){
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/latestitems`)
        promise.then(({data})=>{
            setlatestItems(data)            
        })
        promise.catch((e)=>{
            console.error(e)
        })
    }


 
    return(
        <>
            {ismodalOpen?<AuthModal setIsmodalOpen={setIsmodalOpen}/>:null}
            <Content>
                <FirstElement>
                    <Header>
                        <LogoRevival>revival</LogoRevival>                  
                        <HiUserCircle onClick={()=> setIsmodalOpen(!ismodalOpen)}/>
                    </Header>          
                    <Carousel></Carousel>
                    <Footer>
                        <Option>Eletrônicos</Option>
                        <Option>Utensílios Domésticos</Option>
                        <Option>Acessórios e Beleza</Option>
                        <Option>Vestuário e calçados</Option>
                        <Option>Mobiliário</Option>
                    </Footer>
                </FirstElement>
                <NewItems>
                    <p>NOVOS CHEGADOS</p>
                    <NewItemsContainer>
                        {latestItems.map((item, index)=>{
                            return(
                                <LatestItem key={index} item={item}/>                   
                            )
                        })}
                    </NewItemsContainer>              
                </NewItems>
                <NewItemsGeneral>
                        <div>
                            <p>só coisa bacana</p>
                        </div>
                        <AllItems>
                            {items.map(((item, index) =>{                            
                                return(
                                    <ItemGeneral key={index} item={item}/>
                                )
                            }))
                            }
                        </AllItems>                   
                </NewItemsGeneral>
            </Content>
        </>
    )
}

export default HomePage;