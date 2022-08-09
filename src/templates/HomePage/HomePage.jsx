import {Content, FirstElement, Header,Footer,LogoRevival,Option,NewItems, Item, NewItemsGeneral, NewItemsContainer, AllItems, ItemGeneral} from "./styles"
import { HiUserCircle } from "react-icons/hi";
import Carousel from "../../components/Carousel/Carousel"
import bike from  "../../assets/img/bike.jpg"

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
            <NewItems>
                <p>NOVOS CHEGADOS</p>
                <NewItemsContainer>
                    <Item style={{backgroundImage: `url(${bike})`}}></Item>
                    <Item style={{backgroundImage: `url(${bike})`}}></Item>
                    <Item style={{backgroundImage: `url(${bike})`}}></Item>
                </NewItemsContainer>              
            </NewItems>
            <NewItemsGeneral>
                    <div>
                        <p>só coisa bacana</p>
                    </div>
                    <AllItems>
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>   
                        <ItemGeneral style={{backgroundImage: `url(${bike})`}}></ItemGeneral>
                    </AllItems>
                   
            </NewItemsGeneral>
        </Content>
    )
}

export default HomePage;