import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Text, Stack } from "@chakra-ui/react";
import Card from "./components/Card";

function App() {
  return (
    <Stack
      flexDirection={"row"}
      gap={"15px"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      <Card Portada="xv" Title="XCV" Year="2022" />
      <Card Portada="xv" Title="XCV" Year="2022" />
      <Card Portada="xv" Title="XCV" Year="2022" />
      <Card Portada="xv" Title="XCV" Year="2022" />
      <Text bg={"blue.400"}>Hola esto es una prueba</Text>
    </Stack>
  );
}

export default App;
