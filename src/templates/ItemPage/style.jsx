import styled from "styled-components"


export const Content = styled.div`
    width: 100%;
    height:50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    opacity: 0.8;
`

export const FirstElement = styled.div`
    width: 95%;
    height: 40vh; 
    background: #FFFFFF;
    border-radius: 20px 20px 0px 0px;
    margin-top: 50px;
    box-shadow: 0px 4px 10px #FAB396;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1200px) {
        width: 80%;
        height: 60vh; 
    }


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
        cursor: pointer;
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
    justify-content: space-evenly;
    align-items: center;
    word-wrap: break-word;
    text-overflow: ellipsis;
    min-width: 20%;
    cursor: pointer;
    

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

export const ItemBox = styled.div`
    width: 95%;
    background-color: #FFF;
    margin-top: 50px;
    box-shadow: 0px 4px 10px #FAB396;
    padding: 15px;
    margin-bottom: 50px;

    h3{
        font-family: 'Poppins';
        font-weight: 900;
        font-size: 20px;
        letter-spacing:-1px;
        font-style:oblique;
        padding: 15px;


        @media (max-width: 611px) {
        font-size: 30px;
        }
    }

    @media (min-width: 1200px) {
        width: 80%;
        
    }

    /* @media (max-width: 611px) {
        height: 200px; 
    } */
`

export const ItemInformations = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #F6F3ED;
    border-radius: 20px;

    @media (max-width: 611px) {
        flex-direction: column;
    }

`

export const Information = styled.div`
    width: 45%;
    height: 100%;
    background-color: #FFF;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 611px) {
        width: 100%;
    }
    
`

export const InformationContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:  space-evenly;
    width: 70%;
    max-height: 100%;
    margin: 2%;

    @media (max-width: 611px) {
        flex-direction: column;  
    }

`

export const Data = styled.div`    
    padding: 15px;
    

    p{
        font-size: 10px;
        font-family: 'Poppins';
        font-size:15px;
        word-break: normal;   
        word-wrap: break-word;
        text-overflow: ellipsis;
        min-width: 20%;
    }
`

export const Item = styled.div`
    width: 150px;
    height: 200px; 
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14));
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    margin: 2%;

    @media (max-width: 611px) {
        height: 200px; 
        width: 200px;
    }
`

export const Questions = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Poppins';
    word-break: normal;   
    word-wrap: break-word;
    text-overflow: ellipsis;
    padding: 15px;
  
    cursor: pointer;    

        p{
            font-size:20px;
            padding: 5px;
        }

        h6{
            font-size:15px;
            padding: 5px;
        }

    @media (max-width:600px) {
        font-size:8px;
    }
`
export const Question = styled.div`
    display: flex;
    flex-direction: column;
`
export const Form = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;
`
export const Input = styled.input`
    background: ${props => props.disabled?"#F6F2EC":"#EEDA7D"};
    border-radius: 100px;
    width: 70%;
    height: 30px;
    border:none;
    margin-bottom: 10px;
    padding: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.06em;
    ::placeholder{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: 0.06em;
        color: rgba(0, 0, 0, 0.6);
    }
`


export const Button = styled.button`
    width: 104.97px;
    height: 38.95px;
    margin-left: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background: #000000;
    border-radius: 4.75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 16.15px;
    border:none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14.25px;
    line-height: 21px;
    letter-spacing: -0.05em;
    color: #FFFFFF;
    
`

