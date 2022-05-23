import { SucessContainer } from "./styles";
import Link from "next/link";

export default function Sucess() {
  return (
    <SucessContainer>
      <h1>Pedido feito com sucesso!</h1>
      <div className="info">
        <span>Filme e sessão</span>
        <span className="text">Enola Holmes</span>
        <span className="text">24/06/2021 15:00</span>
      </div>
      <div className="info">
        <span>Filme e sessão</span>
        <span className="text">Enola Holmes</span>
        <span className="text">24/06/2021 15:00</span>
      </div>
      <div className="info">
        <span>Filme e sessão</span>
        <span className="text">Enola Holmes</span>
        <span className="text">24/06/2021 15:00</span>
      </div>

      <Link href={"/"}>
        <button>Voltar pra Home</button>
      </Link>
    </SucessContainer>
  );
}
