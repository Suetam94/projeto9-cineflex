import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import {
  FormContainer,
  Seat,
  SeatLegend,
  SeatsGeneralContainer,
  SeatsLegendContainer,
  SeatsSectionContainer,
} from "./styles";

interface SeatProps {
  id: number;
  name: string;
  isAvailable: boolean;
}

export default function Session() {
  const router = useRouter();
  const { id } = router.query;

  const [seats, setSeats] = useState<Array<SeatProps>>([]);
  const [selectedSeats, setSelectedSeats] = useState<Array<any>>([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/showtimes/${id}/seats`);

      setSeats(data.seats);
    }

    fetchData();
  }, [id]);

  function handleSeatsSelection(e: Event) {
    const el: HTMLDivElement = e.target as HTMLDivElement;

    const isSeatAvailable = seats.find((seat) => seat.name === el.innerText);

    const seatIsAlreadySelected = selectedSeats.findIndex(
      (seat) => seat.name === el.innerText
    );

    if (seatIsAlreadySelected > -1) {
      el.classList.toggle("selected");
      const updatedSeats = selectedSeats;

      updatedSeats.splice(seatIsAlreadySelected, 1);

      setSelectedSeats(updatedSeats);
      return;
    }

    if (isSeatAvailable) {
      el.classList.toggle("selected");
      setSelectedSeats([...selectedSeats, isSeatAvailable]);
    }
  }

  function handleOnSubmitRequest(e: React.FormEvent) {}

  return (
    <SeatsGeneralContainer>
      <h2>Selecione o(s) assento(s)</h2>
      <SeatsSectionContainer>
        {seats.map((seat: SeatProps) => {
          return (
            <Seat
              className={!seat.isAvailable ? "not-available" : ""}
              key={seat.id}
              // @ts-ignore
              onClick={(e: Event) => handleSeatsSelection(e)}
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
      <FormContainer onSubmit={(e) => handleOnSubmitRequest(e)}>
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
