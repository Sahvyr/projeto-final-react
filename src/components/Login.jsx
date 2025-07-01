import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

//crie um arquivo chamado Login.jsx
const Login = () => {
  const navigate = useNavigate();
  return (
    <Button variant="text" onClick={() => navigate("/home")}>
      Clique para se logar
    </Button>
  );
};

export default Login;
