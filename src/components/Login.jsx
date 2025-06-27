import { useNavigate } from "react-router-dom";
import styles from "../Button.module.css";

//crie um arquivo chamado Login.jsx
const Login = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.botao} onClick={() => navigate("/home")}>
      Clique para se logar
    </button>
  );
};

export default Login;
