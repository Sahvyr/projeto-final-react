import * as React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";

export default function ActionAreaCard({ url, titulo }) {
  return (
    <Card
      sx={{
        width: 420,
        height: 312,
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      <CardActionArea sx={{ height: "100%", position: "relative" }}>
        {/* Imagem de fundo */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        {/* Overlay uniforme */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(75, 32, 129,0.70)", // meia-noite uniforme
            zIndex: 1,
          }}
        />
        {/* Linha branca esquerda */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "6px",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgb(8,47,191),rgba(135, 16, 69, 1))", // branco → branco transparente
            zIndex: 2,
          }}
        />

        {/* Texto */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#D1D4E0",
            textAlign: "center",
            px: 2,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {titulo}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
