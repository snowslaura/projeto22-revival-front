import { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Content, FirstElement, Footer, Header, Item, ItemBox, LogoRevival } from "./style";
import { AuthModal } from "../../components/AuthModal/AuthModal";
import userContext from "../../contexts/userContext";
import isSignOutOpenContext from "../../contexts/isSignUpOpenContext";



function ItemPage(){

    const { itemId } = useParams();    

    const [ismodalOpen, setIsmodalOpen] = useState(false)
    const [option,setOption] = useState("")
    const [itemName, setItemName] = useState("")
    const [itemImageUrl,setItemImageUrl] = useState("")

    const{setIsSignOutOpen} = useContext(isSignOutOpenContext)

    const{userData} = useContext(userContext)
    
    
    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const {userId,token} = unserializedData
    
    useEffect(()=>{
        verifyLocalStorage();
        getItemData()

    },[])

    function verifyLocalStorage(){        
        
        if(userId === undefined){
            setIsSignOutOpen(false)
            setIsmodalOpen(true) 
        }
        //pq o userData aqui está undefined se ele é um contexto e ele está aparecendo quando eu faço console.log na linha 31
        // if(userId !== userData.userId){ 
        //     // console.log("entrei nesse caraio");
        //     // console.log(userId);
        //     // console.log(userData);
        //     setIsSignOutOpen(false)
        //     setIsmodalOpen(true)
        // }
    }

    const navigate = useNavigate()

    function goToHomePage(){
        navigate('/')
    }

    function getItemData(){
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/item/${itemId}`)
        promise.then(({data})=>{
            setItemImageUrl(data.imageUrl)
            setItemName(data.name)
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
                        {/* <Option >Meus itens</Option> 
                        <Option >Meus itens em disputa</Option>
                        <Option >Itens que quero disputar</Option>
                        <Option >Postar item</Option>                  */}
                    </Footer>
                </FirstElement>
                <ItemBox>
                    <p>{itemName    }</p>
                    <Item style={{backgroundImage: `url(${itemImageUrl})`}}/>
                </ItemBox>
        </Content>
        </> 
    )
}

export default ItemPage;