import { useRouter } from "next/router";
import Link from "next/link";
import { MovieHourContainer, MovieSelectHourContainer } from "./styles";
import Head from "next/head";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface ShowtimesProps {
  name: string;
  id: number;
}

interface DateProps {
  id: number;
  weekday: string;
  date: string;
  showtimes: ShowtimesProps[];
}

interface MovieInfo {
  id: number;
  title: string;
  posterURL: string;
  overview: string;
  releaseDate: string;
  days: DateProps[];
}

export default function Movie() {
  const [dateInfo, setDateInfo] = useState<MovieInfo>();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`/movies/${id}/showtimes`);

      setDateInfo(data);
    }

    fetchData();
  }, [id]);

  return (
    <>
      <Head>
        <title>Horários | Cineflex</title>
      </Head>
      {dateInfo ? (
        <MovieHourContainer>
          <h2>Selecione o horário</h2>
          <MovieSelectHourContainer>
            {dateInfo.days.map((date: DateProps) => {
              return (
                <>
                  <h4>
                    {date.weekday} - {date.date}
                  </h4>
                  <div>
                    {date.showtimes.map((showtime) => {
                      return (
                        <Link
                          key={showtime.id}
                          href={{
                            pathname: "/session/[id]",
                            query: { id: showtime.id },
                          }}
                        >
                          <button>{showtime.name}</button>
                        </Link>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </MovieSelectHourContainer>
        </MovieHourContainer>
      ) : (
        <MovieHourContainer>
          <h2>Nenhum horário disponível</h2>
        </MovieHourContainer>
      )}
    </>
  );
}
