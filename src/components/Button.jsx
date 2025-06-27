import React from "react";
import { useNavigate } from "react-router-dom";

const BotaoRedirecionar = ({ texto, caminho, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(caminho);
  };

  return (
    <button className={className} onClick={handleClick}>
      {texto}
    </button>
  );
};

export default BotaoRedirecionar;
