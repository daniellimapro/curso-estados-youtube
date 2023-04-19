/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import { Header } from "../components/Header";
import { GridImage } from "../components/GridImage";
import { getPhotos } from "../store/getPhotos";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";

export default function Home() {
  const { data, loading } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Header />
      {loading && <Loading />}
      {!loading && <GridImage photos={data} />}
    </Container>
  );
}
