import styled from "styled-components";

export const Container = styled.div`  
    width: 99%;
    height: 95%;
    background: #F4F6F5;
    border-radius: 39.4737px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;

    @media (max-width: 611px) {
        display: flex;
        flex-direction: column;
    }
`

export const Left = styled.div`
    background-position: center;
    background-size:cover;
    width: 70%;
    height: 100%;
    border-top-left-radius: 39.4737px;
    border-bottom-left-radius: 39.4737px;

    @media (max-width: 611px) {
        width: 100%;
        height: 100%;
        border-top-left-radius: 39.4737px;
        border-top-right-radius: 39.4737px;
        border-bottom-left-radius: 0px;
    }
`

export const Rigth = styled.div`
    width: 30%;
    height: 100%;
    border-top-right-radius: 39.4737px;
    border-bottom-right-radius: 39.4737px;
    font-family: 'Poppins';
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 611px) {
        width: 100%;
        height: 100%;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: none;
        border-bottom-right-radius: none;
    }
`


export const Bora = styled.p`
    background-color: #FFF;
    font-size: 40px;
 

    @media (max-width: 611px) {
        font-size: 30px;
    }
`
export const Chance = styled.p`
    background-color: #EBD96B;
    font-size: 20px;
 
    text-align: right;

    p{
        background-color: #fff;
    }

    @media (max-width: 611px) {
        font-size: 15px;
    }
`

export const Sentido = styled.p`
    background-color: #fff;
    font-size: 25px;
 
    
    p{
        background-color: #EBD96B ;
    }


    @media (max-width: 611px) {
        font-size: 17.5px;
    }
`