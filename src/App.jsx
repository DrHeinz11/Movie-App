import { useState, useEffect } from "react";
import { Text, Stack } from "@chakra-ui/react";
import Card from "./components/Card";
import Search from "./components/search/Search";

function App() {
  /* const API__URL = "http://www.omdbapi.com?apikey=2d5d9b60";

  const searchMovies = async (title) => {
    const response = await fetch(`${API__URL}&s=${title}`);
    const data = await response.json();
  };
  useEffect(() => {
    searchMovies("Frozen");
  }, []);*/

  return (
    <Stack
      flexDirection={"row"}
      gap={"15px"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      bg={"gray.300"}
    >
      <Card  Title="XCV" Year="2022" />
      <Card Portada="xv" Title="XCV" Year="2022" />
      <Card Portada="xv" Title="XCV" Year="2022" />
      <Card Portada="xv" Title="XCV" Year="2022" />
      <Text bg={"blue.400"}>Hola esto es una prueba</Text>

      <Search />
    </Stack>
  );
}

export default App;
