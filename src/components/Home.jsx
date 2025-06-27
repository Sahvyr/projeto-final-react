import React from "react";
import Button from "./Button";
import styles from "../Button.module.css";

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à Home</h1>
      <p>Esta é a página inicial do aplicativo.</p>
      <Button
        className={styles.botao}
        texto="Ir para o Painel do Usuário"
        caminho="/PainelDoUsuario"
      />
    </div>
  );
};

export default Home;
