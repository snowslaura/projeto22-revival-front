import {Content, FirstElement, Header,Footer,LogoRevival,Option,NewItems, NewItemsGeneral, NewItemsContainer, AllItems} from "./styles"
import { HiUserCircle } from "react-icons/hi";
import Carousel from "../../components/Carousel/Carousel"
import { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { ItemGeneral } from "../../components/Item/Item";
import { LatestItem } from "../../components/LatestItem/LatestItem"
import { AuthModal } from "../../components/AuthModal/AuthModal"

import isSignOutOpenContext from "../../contexts/isSignUpOpenContext";

function HomePage(){

    const [items, setItems] = useState([])
    const [latestItems, setlatestItems] = useState([])
    const [ismodalOpen, setIsmodalOpen] = useState(false)
    const {setIsSignOutOpen} = useContext(isSignOutOpenContext)

   
    useEffect( ()=>{
        fetchItems();
        fetchLatestItems();
        verifyLocalStorage();
    },[])

  


    function verifyLocalStorage(){
        const userDataLocalStorage = localStorage.getItem("userData")
        const unserializedData = JSON.parse(userDataLocalStorage)
        const userId = unserializedData?.userId

        if(userId!== undefined){
            setIsmodalOpen(false) 
            setIsSignOutOpen(true)
        }      
    }
    
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
                        <Option>Eletr??nicos</Option>
                        <Option>Utens??lios Dom??sticos</Option>
                        <Option>Acess??rios e Beleza</Option>
                        <Option>Vestu??rio e cal??ados</Option>
                        <Option>Mobili??rio</Option>
                    </Footer>
                </FirstElement>
                <NewItems>
                    <p>NOVOS CHEGADOS</p>
                    <NewItemsContainer>
                        {latestItems.map((item, index)=>{
                            return(
                                <LatestItem  key={index} item={item}/>
                            )
                        })}
                    </NewItemsContainer>              
                </NewItems>
                <NewItemsGeneral>
                        <div>
                            <p>s?? coisa bacana</p>
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