import React from "react";
import Button from "@mui/material/Button";
import AppBar from "../organisms/AppBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar />
      <h1>Bem-vindo à Home</h1>
      <p>Esta é a página inicial do aplicativo.</p>
      <Button variant="contained" onClick={() => navigate("/dashboard")}>
        Login
      </Button>
    </div>
  );
};

export default Home;
