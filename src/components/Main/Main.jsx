import Card from "./Card";
import * as S from "./main_styled";
import sofa from "../../assets/sofa.png";
import restaurantes from "../../assets/restaurantes.png";
import banner from "../../assets/bannermedidas.png";
import bigG from "../../assets/bigmac.png";
import bigmac from "../../assets/bigmac.png";
import sorvetes from "../../assets/sorvete.png";
import batata from "../../assets/batata.png";
import { useState } from "react";
export default function Main() {
  const [images, setImages] = useState();

  const changeImage = (image) => {
    setImages(image)
  };

  return (
    <main>
      <S.Section>
        <S.ImageBigG src={images} />
        <h2>Bateu Aquela #Fome De Méqui?</h2>
      </S.Section>
      <S.Itens>
        <S.ImageBigMac src={bigmac} onClick={() => changeImage(bigmac)} />
        <S.ImageFries src={batata}  onClick={() => changeImage(batata)} />
        <S.ImageIceCream src={sorvetes}  onClick={() => changeImage(sorvetes)} />
      </S.Itens>

      <S.Promocao>
        <h2>Promoção</h2>
        <S.Centro>
          <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} />
          <Card
            imagem={restaurantes}
            texto={"venha conhecer nossa nova loja?"}
          />
          <Card
            imagem={banner}
            texto={"Confira as medidas que o Mequi adotou"}
          />
        </S.Centro>
      </S.Promocao>
    </main>
  );
}
