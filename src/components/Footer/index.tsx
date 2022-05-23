import { FooterContainer } from "./styles";

interface FooterProps {
  imgURL: string;
  movieName: string;
  weekday?: string;
  hour?: string;
}

export function Footer({ imgURL, movieName, weekday, hour }: FooterProps) {
  return (
    <FooterContainer>
      <div>
        <img src={imgURL} alt={movieName} />
      </div>
      <p className={'info'}>
        <span>{movieName}</span>
        {weekday && hour ? (
          <span>
            {weekday} - {hour}
          </span>
        ) : (
          ""
        )}
      </p>
    </FooterContainer>
  );
}
