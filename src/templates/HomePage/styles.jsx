import styled from "styled-components"
import backgroundImage from "../../assets/img/background.jpg"


export const Content = styled.div`
    width: 100%;
    min-height: 100vh;   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.8;
`

export const FirstElement = styled.div`
    width: 95%;
    height: 30vh; 
    background: #FFFFFF;
    border-radius: 20px 20px 0px 0px;
    margin-top: 50px;
    box-shadow: 0px 4px 10px #FAB396;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    svg{
        font-size: 25px;
        color:#FF5F49;
    }
`

export const LogoRevival = styled.p`
    font-family: 'Poppins';
    font-size:20px;
`
export const Option = styled.p`
    font-family: 'Poppins';
    font-size:15px;
    word-break: normal;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    @media (max-width:600px) {
        font-size:8px;
    }
`

export const Footer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #EBD96B;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:10px;
`
