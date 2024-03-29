/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

export function GridImage({ photos }) {
  return (
    <Box sx={{ width: "100%", minHeight: 829, mt: 3 }}>
      <Masonry columns={3}>
        {photos.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.urls.small}?w=162&auto=format`}
              srcSet={`${item.urls.small}?w=162&auto=format&dpr=2 2x`}
              alt={item.alt_description}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
