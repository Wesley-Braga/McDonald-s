import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`

const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Header = styled.header`

${center}
justify-content: space-between;
height: 15vh;
padding-left: 60px;

`
export const BtnApp = styled.div`

width: 30vw;
${center}
div{
    width: 10vw;
    
    ${center}
    height: 45px;
    font-size: 0.8rem;
    justify-content: space-evenly;
}
.mac1{

    background-color: white;
    border-radius: 8px;
    font-weight: bold;
    font-size: 0.8rem;
    justify-content: space-evenly;
}
`