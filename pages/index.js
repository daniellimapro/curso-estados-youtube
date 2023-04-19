/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Container from "@mui/material/Container";
import { Header } from "../components/Header";
import { GridImage } from "../components/GridImage";
import { useRecoilState } from "recoil";
import { photosList } from "../atomos";
import { service } from "../service";

export default function Home() {
  const [_, setPhotosListRender] = useRecoilState(photosList);

  const getPhotos = async () => {
    const photos = await service.get(
      "?per_page=10&?page=1&query=desk?orientation=landscape"
    );
    setPhotosListRender(photos.data);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Header />
      <GridImage />
    </Container>
  );
}
