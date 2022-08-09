import {Content, FirstElement, Header,Footer,LogoRevival,Option} from "./styles"
import { HiUserCircle } from "react-icons/hi";
import Carousel from "../../components/Carousel/Carousel"

function HomePage(){
 
    return(
        <Content>
            <FirstElement>
                <Header>
                    <LogoRevival>revival</LogoRevival>                  
                    <HiUserCircle/>
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
        </Content>
    )
}

export default HomePage;