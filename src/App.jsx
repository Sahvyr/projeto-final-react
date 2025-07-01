import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import PainelDoUsuario from "./components/PainelDoUsuario";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota raiz: Redireciona para o Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rota pública: Login */}
        <Route path="/login" element={<Login />} />

        {/* Rota protegida: Home */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* Rota protegida: Painel do Usuário */}
        <Route
          path="/PainelDoUsuario"
          element={
            <PrivateRoute>
              <PainelDoUsuario />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
