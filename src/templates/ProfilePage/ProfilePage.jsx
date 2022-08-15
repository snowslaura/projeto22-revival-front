import { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Content, FirstElement, Footer, Header, LogoRevival, NewItems, NewItemsContainer, Option } from "./style";
import { AuthModal } from "../../components/AuthModal/AuthModal";
import { LatestItem } from "../../components/LatestItem/LatestItem";
import { GivenOfferItem } from "../../components/GIvenOffersItem/GivenOfferItem";
import { PostItemForm } from "../../components/postItemForm/postItemForm";
import userContext from "../../contexts/userContext";
import isSignOutOpenContext from "../../contexts/isSignUpOpenContext";

function ProfilePage(){

    const [ismodalOpen, setIsmodalOpen] = useState(false)
    const [option,setOption] = useState("")
    const [items, setItems] = useState([])
    const [receivedOffers, setReceivedOffers] = useState(false)
    const [postItem, setPostItem] = useState(false)
    const [givenOffers, setGivenOffers] = useState(false)
    // const [isSignOutOpen,setIsSignOutOpen] = useState(true)

    const{setIsSignOutOpen} = useContext(isSignOutOpenContext)

    const{userData} = useContext(userContext)
    
    
    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const {userId,token} = unserializedData
    
    useEffect(()=>{
        verifyLocalStorage()
    },[])
    //console.log(userData)

    function verifyLocalStorage(){        
        
        if(userId === undefined){
            setIsSignOutOpen(false)
            setIsmodalOpen(true) 
        }
        //pq o userData aqui está undefined se ele é um contexto e ele está aparecendo quando eu faço console.log na linha 31
        if(userId !== userData.userId){ 
            // console.log("entrei nesse caraio");
            // console.log(userId);
            // console.log(userData);
            setIsSignOutOpen(false)
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
        setPostItem(false)
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/userItems/${userId}`, config)
        promise.then(({data})=>{
            setItems(data)
            
        })
        promise.catch((e)=>{
            console.error(e)
        })
    }

    function showMyReceivedOffers(){
        setOption("MEUS ITENS EM DISPUTA")
        setPostItem(false)
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/receivedOffers/${userId}`, config)
        promise.then(({data})=>{
            setReceivedOffers(true)
            setGivenOffers(false)
            setItems(data)
        })
        promise.catch((e)=>{
            console.error(e)
        })
    }

    function showMyGivenOffers(){
        setOption("ITENS QUE QUERO DISPUTAR")
        setPostItem(false)
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/givenOffers/${userId}`, config)
        promise.then(({data})=>{
            setReceivedOffers(false)
            setGivenOffers(true)
            setItems(data)
        })
        promise.catch((e)=>{
            console.error(e)
        })
    }

    function postItems(){
        setOption("POSTAR ITEM")
        setItems([])
        setReceivedOffers(false)
        setGivenOffers(false)
        setPostItem(true)
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
                        <Option onClick={showMyReceivedOffers}>Meus itens em disputa</Option>
                        <Option onClick={showMyGivenOffers}>Itens que quero disputar</Option>
                        <Option onClick={postItems}>Postar item</Option>                 
                    </Footer>
                </FirstElement>
                {option===""?null:
                <NewItems>
                    <p>{option}</p>
                    <>  
                        {postItem?<PostItemForm />:""}
                        {givenOffers===true?
                        <NewItemsContainer>
                            {items.map((item, index)=>{
                            return(
                                <GivenOfferItem key={index} item={item}/>                   
                            )
                            })}
                        </NewItemsContainer>: 
                        <NewItemsContainer>
                            
                            {items.map((item, index)=>{
                                return(
                                    <LatestItem key={index} item={item}/>                   
                                )
                            })}
                        </NewItemsContainer>} 
                       
                    </>
                </NewItems>}
        </Content>
        </> 
    )
}

export default ProfilePage;