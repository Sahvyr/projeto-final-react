import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxBasic({ texto, imagem }) {
  return (
    <Box component="section" sx={{ p: 2, border: "1px solid grey" }}>
      {texto}
      <img src={imagem} alt="naotemimg" />
      (box renders an HTML section element.)
    </Box>
  );
}
