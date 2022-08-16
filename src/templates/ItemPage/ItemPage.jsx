import { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Button, Content, Data, FirstElement, Footer,Form, Header, Information, InformationContent, Input, Item, ItemBox, ItemInformations, LogoRevival,  Question,  Questions } from "./style";
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
                    <h3>{itemName}</h3>  
                    <ItemInformations>
                        <Item style={{backgroundImage: `url(${itemImageUrl})`}}/>
                        <InformationContent>
                            <Information>
                                <Data>
                                    <p>Dados do item</p>
                                    <p>Decrição:</p>
                                    <p>Faixa de valor:</p>
                                </Data>
                            </Information>
                            <Information>
                                <Data>
                                    <p>Dados do proprietário</p>
                                    <p>Nome:</p>
                                    <p>Endereço:</p>
                                </Data>
                            </Information>
                        </InformationContent>
                    </ItemInformations>                  
                    <Questions>
                        <p>Perguntas</p>
                        <h6>Gostaria de fazer uma pergunta?</h6>
                        <Form>
                            <Input placeholder="Escreva aqui sua pergunta"></Input>
                            <Button>Enviar</Button>
                        </Form>
                        <Question>
                            <p>Quanto tempo de uso tem esse objeto?</p>
                            <h6>Aproximadamente 3 anos</h6>
                        </Question>
                        <Question>
                            <p>Quanto tempo de uso tem esse objeto?</p>
                            <h6>Aproximadamente 3 anos</h6>
                        </Question>
                        <Question>
                            <p>Quanto tempo de uso tem esse objeto?</p>
                            <h6>Aproximadamente 3 anos</h6>
                        </Question>
                        <Question>
                            <p>Quanto tempo de uso tem esse objeto?</p>
                            <h6>Aproximadamente 3 anos</h6>
                        </Question>
                    </Questions>
                </ItemBox>
                
        </Content>
        </> 
    )
}

export default ItemPage;