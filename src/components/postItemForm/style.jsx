import styled from "styled-components"

export const PostItem = styled.form`
    display: flex;
    flex-direction: column; 
    align-items:center;
    justify-content: center;
    margin-top: 10px;
    word-wrap: break-word;

    @media (max-width:600px) {
        font-size:8px;
    }

`
export const Label = styled.label`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.06em;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
`

export const Select = styled.select`
    background: ${props => props.disabled?"#F6F2EC":"#EEDA7D"}; 
    display: flex;
    text-align: center;
    border-radius: 100px;    
    border:none;
    margin-bottom: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.06em;

`

export const Input = styled.input`
    background: ${props => props.disabled?"#F6F2EC":"#EEDA7D"}; 
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    border:none;
    margin-bottom: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.06em;
    text-align: center;
    width: 200px;
`

export const Button = styled.button`
    width: 104.97px;
    height: 38.95px;
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