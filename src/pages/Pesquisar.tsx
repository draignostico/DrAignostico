import React, { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/pesquisar.css";

const Pesquisar: React.FC = () => {
  const [doenca, setDoenca] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const valor = doenca.trim();
    if (!valor) return;

    navigate(`/informacoes/${valor}`);
  };

  return (
    <div className="pesquisar-layout">
      <Sidebar />

      <div className="pesquisar-content">
        <DashboardNavbar />

        <div className="pesquisar-container">
          <form onSubmit={handleSubmit}>
            <div className="pesquisar-card">
              <h3>Informação sobre as doenças:</h3>

              <select
                value={doenca}
                onChange={(e) => setDoenca(e.target.value)}
                className="pesquisar-select"
              >
                <option value="">Selecione uma doença</option>
                <option value="diabetes">Diabetes</option>
                <option value="hipertensao">Hipertensão</option>
                <option value="pneumonia">Pneumonia</option>
                <option value="endocardite">Endocardite</option>
              </select>
            </div>

            <button
              type="submit"
              className="pesquisar-btn"
              disabled={!doenca}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pesquisar;