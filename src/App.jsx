import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/Login";
import PainelDoUsuario from "./components/pages/PainelDoUsuario";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota raiz: Redireciona para o Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rota pública: Login */}
        <Route path="/login" element={<Login />} />

        {/* Rota protegida: Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Rotas aninhadas dentro do Dashboard */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

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
