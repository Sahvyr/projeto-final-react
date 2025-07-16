import React from "react";

import Grid from "@mui/material/Grid";
import ActionAreaCard from "../atoms/ActionAreaCard.jsx";

const BoxList = () => {
  const items = [
    {
      titulo: "PORQUE VIR PARA O BAYSIDE?",

      imagem:
        "https://images.unsplash.com/photo-1516274626895-055a99214f08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      titulo: "AUDITÓRIO BAYSIDE: UM NOVO ESPAÇO PARA O SEU EVENTO",

      imagem:
        "https://images.unsplash.com/photo-1559171667-74fe3499b5ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob3BwaW5nfGVufDB8fDB8fHww",
    },
    {
      titulo: "O NOVO BAYSIDE",

      imagem:
        "https://images.unsplash.com/photo-1619335680642-964b9c259d5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob3BwaW5nfGVufDB8fDB8fHww",
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      {items.map((item, index) => (
        <Grid key={index}>
          <ActionAreaCard url={item.imagem} titulo={item.titulo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BoxList;
