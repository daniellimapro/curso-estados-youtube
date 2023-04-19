import React, { useContext } from "react";
import Container from "@mui/material/Container";
import { Header } from "../components/Header";
import { GridImage } from "../components/GridImage";
import { Context } from "../context";

export default function Home() {
  const { photosContext } = useContext(Context);

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Header />
      <GridImage photos={photosContext} />
    </Container>
  );
}
