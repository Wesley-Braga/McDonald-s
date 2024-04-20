import styled, { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Promocao = styled.section`
  background-color: #feb706;
  height: 60vh;
  ${center}
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    color: white;
  }
`;

export const Centro = styled.div`
  ${center}
  justify-content: space-evenly;
  width: 70vw;
`;
export const Card = styled.div`
  height: 40vh;
  background-color: white;
  border-radius: 12px;
  text-align: center;

  p {
    font-weight: bold;
    height: 10vh;
    ${center}
  }
  button {
    background-color: #ffbc0d;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    font-weight: bold;
  }
`;

export const Section = styled.section`
  height: 40vh;
  background-color: yellow;
  ${center}
  justify-content: space-around;
`;

export const Itens = styled.div`
  background-color: yellow;
  
  height: 20vh;
  width: 100%;
  ${center}
  
`;

export const ImageBigMac = styled.img`
  width: 5%;
  height: 40%;
  margin-right: 15px;
  &:hover{
    cursor: pointer;    
  }
  
`;

export const ImageFries = styled.img`
  width: 6%;
  height: 50%;

`;

export const ImageBigG = styled.img`
  width: 10%;
  height: 20vh;
  
`;
export const ImageIceCream = styled.img`
width: 5%;
height: 10vh;


`