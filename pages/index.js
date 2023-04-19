import * as React from "react";
import { service } from "../service";
import Container from "@mui/material/Container";
import { Header } from "../components/Header";
import { GridImage } from "../components/GridImage";

export default function Home() {
  const [photos, setPhotos] = React.useState([]);

  const getPhotos = async () => {
    const photos = await service.get(
      "?per_page=30&?page=1&query=desk?orientation=landscape"
    );
    setPhotos(photos.data);
  };

  React.useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Header />
      <GridImage photos={photos} />
    </Container>
  );
}
