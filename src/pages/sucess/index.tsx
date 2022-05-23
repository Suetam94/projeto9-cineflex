import Head from "next/head";
import Link from "next/link";

import { SucessContainer } from "./styles";

export default function Sucess() {
  const isMovieInfoStoraged = localStorage.getItem("movieInfo");
  const isSessionInfoStoraged = localStorage.getItem("sessionInfo");
  const isSeatsInfoStoraged = localStorage.getItem("seats");

  const generalInfo: any = {};
  if (isMovieInfoStoraged && isSessionInfoStoraged && isSeatsInfoStoraged) {
    const movieInfo = JSON.parse(isMovieInfoStoraged);
    const sessionInfo = JSON.parse(isSessionInfoStoraged);
    const seatsInfo = JSON.parse(isSeatsInfoStoraged);

    generalInfo["movieInfo"] = movieInfo;
    generalInfo["sessionInfo"] = sessionInfo;
    generalInfo["seats"] = seatsInfo;
  }

  return (
    <>
      <Head>
        <title>Sucesso | Cineflex</title>
      </Head>
      <SucessContainer>
        <h1>Pedido feito com sucesso!</h1>
        <div className="info">
          <span>Filme e sessão</span>
          <span className="text">{generalInfo.movieInfo.title}</span>
          <span className="text">
            {generalInfo.seats.day.weekday} {generalInfo.seats.name}
          </span>
        </div>
        <div className="info">
          <span>Ingressos</span>
          {generalInfo.sessionInfo[0].map((seat: any) => {
            return (
              <span key={seat.id} className="text">
                Assento {seat.name}
              </span>
            );
          })}
        </div>
        <div className="info">
          <span>Comprador</span>
          <span className="text">Nome: {generalInfo.sessionInfo[1]}</span>
          <span className="text">CPF: {generalInfo.sessionInfo[2]}</span>
        </div>

        <Link href={"/"}>
          <button>Voltar pra Home</button>
        </Link>
      </SucessContainer>
    </>
  );
}
