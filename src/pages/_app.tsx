import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { GiShoppingBag } from "react-icons/gi";
import { Container, Header } from "../styles/pages/app.style";

globalStyles(); // Para aplicar os estilos globais

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <GiShoppingBag color="#1b9e77" size={60} />
        <h1>Shop</h1>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
