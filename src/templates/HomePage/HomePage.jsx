import {Content, FirstElement, Header,Footer,LogoRevival,Option} from "./styles"
import { HiUserCircle } from "react-icons/hi";
import { Slide } from '@mui/material'

function HomePage(){
 
    return(
        <Content>
            <FirstElement>
                <Header>
                    <LogoRevival>revival</LogoRevival>                  
                     <HiUserCircle/>
                </Header>
                
                <Footer>
                    <Option>Eletrônicos</Option>
                    <Option>Utensílios Domésticos</Option>
                    <Option>Acessórios e Beleza</Option>
                    <Option>Vestuário e calçados</Option>
                    <Option>Mobiliário</Option>
                </Footer>
            </FirstElement>
        </Content>
    )
}

export default HomePage;