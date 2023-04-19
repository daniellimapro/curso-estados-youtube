import React, { createContext, useState } from "react";
import { service } from "../service";

export const Context = createContext([]);

export default function ContextProvider({ children }) {
  const [photosContext, setPhotosContext] = useState([]);

  const getPhotos = async () => {
    const photos = await service.get(
      "?per_page=10&?page=1&query=desk?orientation=landscape"
    );
    setPhotosContext(photos.data);
  };

  React.useEffect(() => {
    getPhotos();
  }, []);

  return (
    <Context.Provider value={{ photosContext }}>{children}</Context.Provider>
  );
}
