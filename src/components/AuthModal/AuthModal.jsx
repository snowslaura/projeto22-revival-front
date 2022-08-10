import { useState } from "react";
import {ModalBackground,ModalContainer,Body,Footer, SignUp, Input, Logo, SignUpButton, SignInButton, Button, Header} from "./styles"
import {AiOutlineClose} from "react-icons/ai"

export function AuthModal(props) {

    const {setIsmodalOpen} = props

    const [userData, setUserData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isSignUpOpen,setIsSignUpOpen] = useState(false)
    const [isSignInOpen,setIsSignInOpen] = useState(false)

    function handleSignUp(){
        setIsLoading(true)
    }

    function handleSignIn(){
        setIsLoading(true)
    }


    return (
      <ModalBackground >
        <ModalContainer>
            <Body>
                <Header><AiOutlineClose onClick={()=> setIsmodalOpen(false)}/></Header>
                <Logo>revival</Logo>

                <SignUpButton onClick={()=> setIsSignUpOpen(!isSignUpOpen)}>cadastre-se ...</SignUpButton>
                {isSignUpOpen?
                <SignUp onSubmit={e=> handleSignUp}>
                    <Input disabled={isLoading} type="name" placeholder="nome" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                    <Input disabled={isLoading} type="email" placeholder="e-mail" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    <Input disabled={isLoading} type="password" placeholder="senha" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    <Button> registrar</Button>
                </SignUp>:null}

                <SignInButton onClick={()=> setIsSignInOpen(!isSignInOpen)}>... ou faça login</SignInButton>
                {isSignInOpen?
                <SignUp onSubmit={e=> handleSignIn}>
                    <Input disabled={isLoading} type="email" placeholder="e-mail" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    <Input disabled={isLoading} type="password" placeholder="senha" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    <Button>entrar</Button>
                </SignUp>:null}
            </Body>       
        </ModalContainer>
      </ModalBackground>
    );
}