export interface MovieProps {
  id: number;
  title: string;
  posterURL: string;
}
import Link from "next/link";
import { MovieContainer } from "./styles";

export function Movie({ id, title, posterURL }: MovieProps) {
  return (
    <Link
      href={{
        pathname: "/movie/[id]",
        query: { id },
      }}
    >
      <MovieContainer>
        <img src={posterURL} alt={title} />
      </MovieContainer>
    </Link>
  );
}
