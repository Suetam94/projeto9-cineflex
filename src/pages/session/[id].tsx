import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import {
  SeatsGeneralContainer,
  SeatsSectionContainer,
  Seat,
  SeatLegend,
  SeatsLegendContainer,
  FormContainer,
} from "./styles";

interface SeatProps {
  id: number;
  name: string;
  isAvailable: boolean;
}

export default function Session() {
  const router = useRouter();
  const { id } = router.query;

  const [seats, setSeats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/showtimes/${id}/seats`);

      setSeats(data.seats);
    }

    fetchData();
  }, [id]);

  return (
    <SeatsGeneralContainer>
      <h2>Selecione o(s) assento(s)</h2>
      <SeatsSectionContainer>
        {seats.map((seat: SeatProps) => {
          return (
            <Seat
              className={!seat.isAvailable ? "not-available" : ""}
              key={seat.id}
            >
              {seat.name}
            </Seat>
          );
        })}
      </SeatsSectionContainer>
      <SeatsLegendContainer>
        <div>
          <SeatLegend className={"selected"}></SeatLegend>
          <span>Selecionado</span>
        </div>
        <div>
          <SeatLegend></SeatLegend>
          <span>Disponível</span>
        </div>
        <div>
          <SeatLegend className={"not-available"}></SeatLegend>
          <span>Indisponível</span>
        </div>
      </SeatsLegendContainer>
      <FormContainer>
        <label>
          Nome do comprador:
          <input type="text" placeholder={"Digite seu nome..."} />
        </label>
        <label>
          CPF do comprador:
          <input type="text" placeholder={"Digite seu CPF..."} />
        </label>

        <button type="submit">Reservar assento(s)</button>
      </FormContainer>
    </SeatsGeneralContainer>
  );
}
