import { GetStaticProps } from "next";
import Head from "next/head";
import { api } from "../services/api";
import { Movie, MovieProps } from "../components/Movie";

interface HomeProps {
  data: MovieProps[];
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Cineflex</title>
      </Head>
      <main>
        {data.map((movie, key) => {
          return (
            <Movie
              key={key}
              id={movie.id}
              title={movie.title}
              posterURL={movie.posterURL}
            />
          );
        })}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/movies");

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24, //24 hours
  };
};
