import Image from "next/image";
import { useRouter } from "next/router";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product.style";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>{/* <Image/> */}</ImageContainer>
      <ProductDetails>
        <h1>Camiseta</h1>
        <span>R$ 50,00</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
          repellendus, architecto reiciendis veritatis modi id, dolore earum
          iusto, voluptates possimus harum soluta veniam voluptatibus non sint
          assumenda nisi commodi voluptas.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
