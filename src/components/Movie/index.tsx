export interface MovieProps {
  id: number;
  title: string;
  posterURL: string;
}

import { MovieContainer } from "./styles";

export function Movie({ id, title, posterURL }: MovieProps) {
  return (
    <MovieContainer>
      <img src={posterURL} alt={title} />
    </MovieContainer>
  );
}
