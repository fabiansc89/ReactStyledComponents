import React from "react";
import { Theme } from "./Theme";
import { Title } from "./Title";
import { BuyForm } from "./BuyForm";

const movies = [
  {
    id_tema: 1,
    name: "Star Wars",
    available: 3
  },
  {
    id_tema: 2,
    name: "Demon Slayer",
    available: 5
  },
  {
    id_tema: 3,
    name: "Harry Potter",
    available: 2
  }
];

export default function App() {
  const [theme, setTheme] = React.useState("1");

  return (
    <Theme theme={theme}>
      <Title>Películas</Title>

      {movies.map((movie) => (
        <BuyForm
          key={movie.name}
          movie={movie.name}
          available={movie.available}
          updateTheme={() => setTheme(movie.id_tema)}
        />
      ))}
    </Theme>
  );
}
