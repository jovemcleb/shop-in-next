import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home.style";
import tShirt1 from "../assets/1.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tShirt1} width={520} height={480} alt="Camisa 1" />
        <footer>
          <strong>Camisa Beyond</strong>
          <span>R$ 03,00</span>
        </footer>
      </Product>

      <Product>
        <Image src={tShirt1} width={520} height={480} alt="Camisa 1" />
        <footer>
          <strong>Camisa Beyond</strong>
          <span>R$ 03,00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
