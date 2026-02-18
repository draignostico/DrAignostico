import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planos from "./pages/Planos";
import PaginaLogin from "./pages/PaginaLogin";
import PaginaCadastro from "./pages/PaginaCadastro";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import Analise from "./pages/Analise";
import Dashboard from "./pages/Dashboard";
import Diagnostico from "./pages/Diagnosticos";
import Pesquisar from "./pages/Pesquisar";
// import Informacoes from "./pages/Informacoes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/cadastro" element={<PaginaCadastro />} />
        <Route path="/recuperar" element={<EsqueceuSenha />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/pesquisar" element={<Pesquisar />} />
        {/* <Route path="/informacoes" element={<Informacoes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
