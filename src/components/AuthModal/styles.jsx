import styled from "styled-components"

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center; 
    z-index:1;
`

export const ModalContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px;   
    width: 384px;
    min-height: 200px;
    background-color: #FFF;
    border-radius: 20px; 
   
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    svg{
        cursor: pointer;
        font-size: 20px;
    }
`

export const Logo = styled.p`
    font-family: 'Poppins';
    font-size:40px;

`
export const SignUp = styled.form`
    display: flex;
    flex-direction: column; 
    align-items:center;
    margin-top: 10px;

`

export const Input = styled.input`
    background: ${props => props.disabled?"#F6F2EC":"#EEDA7D"};
    border-radius: 100px;
    width: 310px;
    height: 40px;
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

export const SignOut = styled.div`
    cursor: pointer;
    margin:15px;
    display: flex;


    svg{
        margin-left: 20px;
    }
`
export const MyAccount = styled.div`
    cursor: pointer;
    margin:15px;
    display: flex;


    svg{
        margin-left: 20px;
    }
`


export const SignUpButton = styled.p`
    cursor: pointer;
    margin:15px;
    display: flex;

    svg{
        margin-left: 20px;
    }
`
export const SignInButton = styled.p`
    cursor: pointer;
    margin:15px;
    display: flex;

    svg{
        margin-left: 20px;
    }       
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;  
    flex: 10%;  
`

