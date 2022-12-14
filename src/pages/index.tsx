import Image from "next/image";
import { styled } from "../styles";
import { HomeContainer, Product } from "../styles/pages/home.style";
import tShirt1 from "../assets/1.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tShirt1} width={520} height={400} alt="Camisa 1" />
        <footer>
          <strong>Camisa Beyond</strong>
          <span>R$ 03,00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
