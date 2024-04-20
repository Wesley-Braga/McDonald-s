import * as S from "./header_styled.js"
import logo from "../../assets/logo.png"
import app from "../../assets/app1.png"
import celapp from "../../assets/app.png"

export default function Header() {
  return (
    <S.Header>
        <img src={logo} alt="" />
        <S.BtnApp>
            <div>
            <img src={app} alt="" />
            <p>Baixe o App</p>
            </div>
            <div className="mac1">
            <p>Peça seu Méqui</p>
            <img src={celapp} alt="" />
            </div>
        </S.BtnApp>
    </S.Header>
  )
}