import { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Content, FirstElement, Footer, Header, LogoRevival, NewItems, NewItemsContainer, Option } from "./style";
import { AuthModal } from "../../components/AuthModal/AuthModal";
import { LatestItem } from "../../components/LatestItem/LatestItem";
import userContext from "../../contexts/userContext";
import isSignOutOpenContext from "../../contexts/isSignUpOpenContext";

function ProfilePage(){

    const [ismodalOpen, setIsmodalOpen] = useState(false)
    const [option,setOption] = useState("")
    const [items, setItems] = useState([])
    // const [isSignOutOpen,setIsSignOutOpen] = useState(true)

    const{setIsSignOutOpen} = useContext(isSignOutOpenContext)

    const{userData} = useContext(userContext)
    
    
    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const {userId,token} = unserializedData
    
    useEffect(()=>{
        verifyLocalStorage()
    },[])

    function verifyLocalStorage(){

        if(userId!== undefined){
            setIsmodalOpen(false) 
            setIsSignOutOpen(false)
        }

        if(userId !== userData.userId){
            setIsmodalOpen(true)
        }
    }

    const navigate = useNavigate()

    function goToHomePage(){
        navigate('/')
    }

    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    function showMyItems(){
        setOption("MEUS ITENS")
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/userItems/${userId}`, config)
        promise.then(({data})=>{
            setItems(data)
        })
        promise.catch((e)=>{
            console.error(e)
        })
    }

    function showMyDeals(){
        setOption("MINHAS NEGOCIAÇÕES")
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/userItems/${userId}`, config)
        promise.then(({data})=>{
            setItems(data)
        })
        promise.catch((e)=>{
            console.error(e)
        })
    }
    
    return(
        <>
        {ismodalOpen?<AuthModal setIsmodalOpen={setIsmodalOpen} setIsSignOutOpen={setIsSignOutOpen}/>:null}
        <Content>
                <FirstElement>
                    <Header>
                        <LogoRevival onClick={goToHomePage}>revival</LogoRevival>                  
                        <HiUserCircle onClick={()=> setIsmodalOpen(!ismodalOpen)}/>
                    </Header>          
                    <Footer>
                        <Option onClick={showMyItems}>Meus itens</Option>
                        <Option onClick={showMyDeals}>Minhas negociações</Option>
                        <Option onClick={()=> setOption("POSTAR ITEM")}>Postar item</Option>                 
                    </Footer>
                </FirstElement>
              {option===""?null:
              <NewItems>
                    <p>{option}</p>
                    <NewItemsContainer>
                        {items.map((item, index)=>{
                            return(
                                <LatestItem key={index} item={item}/>                   
                            )
                        })}
                    </NewItemsContainer>              
                </NewItems>}
        </Content>
        </>
    )
}

export default ProfilePage;