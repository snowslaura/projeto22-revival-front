import styled from "styled-components";

export const Item = styled.div`
    width: 30%;
    height: 200px;  
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14));
    background-size: cover;
    background-position: center;
    border-radius: 20px;

    @media (max-width: 611px) {
        height: 100px; 
        width: 100px;
    }
`