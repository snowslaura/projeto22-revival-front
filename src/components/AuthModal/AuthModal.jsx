import { useState, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

import {ModalBackground,ModalContainer,Body,SignUp, Input, Logo, SignUpButton, SignInButton, Button, Header, SignOut, MyAccount} from "./styles"

import {AiOutlineClose} from "react-icons/ai"
import {BsFillCaretDownFill,BsFillCaretUpFill} from "react-icons/bs"
import {BiUserCircle} from "react-icons/bi"
import { Hearts } from "react-loader-spinner";
import {VscSignOut} from "react-icons/vsc"
import { useEffect } from "react";

import userContext from "../../contexts/userContext";
import isSignOutOpenContext from "../../contexts/isSignUpOpenContext";


export function AuthModal(props) {

    const navigate = useNavigate();

    const {setIsmodalOpen} = props

    const {userData, setUserData} = useContext(userContext)
    const {isSignOutOpen,setIsSignOutOpen} = useContext(isSignOutOpenContext)

    const [isLoading, setIsLoading] = useState(false)
    const [isSignUpOpen,setIsSignUpOpen] = useState(false)
    const [isSignInOpen,setIsSignInOpen] = useState(false)
    // const [isSignOutOpen,setIsSignOutOpen] = useState(false)

    useEffect(()=>{
         verifyLocalStorage()  
    } 
    ,[])

    function verifyLocalStorage(){
        const isUserLogged = localStorage.getItem("userData")         
        if(isUserLogged){
            const unserializedData = JSON.parse(isUserLogged)
            const {userId,token} = unserializedData
            setUserData({...userData, userId, token})
            setIsSignOutOpen(true)
        }
    }

    function handleSignUp(event){
        event.preventDefault()
        setIsLoading(true)

        const body = {
            name: userData.name,
            email: userData.email,
            password:userData.password
        }
        console.log(body);

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/signup`, body)
        promise.then(()=>{
            setIsLoading(false)
        })
        promise.catch((e)=>{
            setIsLoading(false)
            console.error(e)
        })
    }

    function handleSignIn(event){
        event.preventDefault()
        setIsLoading(true)

        const body = {
            email: userData.email,
            password:userData.password
        }

        const promise = axios.post(`${process.env.REACT_APP_API_URL}/signin`, body)
        promise.then(({data})=>{
            const serializedDataString = JSON.stringify({token: data.token, userId:data.userId})            
            localStorage.setItem("userData", serializedDataString)         
            setIsLoading(false)
            setUserData({...userData,token:data.token, userId:data.userId, password:""})
            setIsSignOutOpen(true)
            setIsmodalOpen(false)
            navigate("/");
        })

        promise.catch((e)=>{
            setIsLoading(false)
            console.error(e)
        })
    }

    function handleSignOut(){
        localStorage.clear()
        setIsSignOutOpen(false)
        setIsmodalOpen(false)
        navigate('/')
    }

    function goToProfilePage(){
        console.log("entrei");
        navigate(`/profile/${userData.userId}`)
    }

    return (
      <ModalBackground >
        <ModalContainer>
            <Body>
                <Header><AiOutlineClose onClick={()=> setIsmodalOpen(false)}/></Header>
                <Logo>revival</Logo>
                {isSignOutOpen?<><MyAccount onClick={goToProfilePage}>Minha conta<BiUserCircle/></MyAccount><SignOut onClick={handleSignOut}>Sair<VscSignOut style={{cursor:`pointer`}}/></SignOut></>:
                <>                
                    <SignUpButton onClick={()=> setIsSignUpOpen(!isSignUpOpen)}>cadastre-se ... {isSignUpOpen===true?<BsFillCaretUpFill/>:<BsFillCaretDownFill/>} </SignUpButton>
                    {isSignUpOpen?
                    <SignUp onSubmit={handleSignUp}>
                        <Input disabled={isLoading} type="name" placeholder="nome" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                        <Input disabled={isLoading} type="email" placeholder="e-mail" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        <Input disabled={isLoading} type="password" placeholder="senha" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        <Button>{isLoading?<Hearts color="#FFF" height={50} width={50} />:`registrar`}</Button>
                    </SignUp>:null}

                    <SignInButton onClick={() => setIsSignInOpen(!isSignInOpen)}>...  faça login {isSignInOpen===true?<BsFillCaretUpFill/>:<BsFillCaretDownFill/>} </SignInButton>
                    {isSignInOpen?
                    <SignUp onSubmit={handleSignIn}>
                        <Input disabled={isLoading} type="email" placeholder="e-mail" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        <Input disabled={isLoading} type="password" placeholder="senha" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        <Button>{isLoading?<Hearts color="#FFF" height={50} width={50} />:`entrar`}</Button>
                    </SignUp>:null}
                </>}
            </Body>       
        </ModalContainer>
      </ModalBackground>
    );
}