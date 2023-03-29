import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra realizada com sucesso!</h1>
      <ImageContainer></ImageContainer>
      <p>
        Uhuul <strong>User</strong>, sua <strong>Product</strong> já está a
        caminho da sua casa.
      </p>
      <Link href="/">Voltar ao Catálogo</Link>
    </SuccessContainer>
  );
}
