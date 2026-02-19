import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/diagnosticos.css";

const Diagnosticos: React.FC = () => {
  const [sintomas, setSintomas] = useState("");
  const [inicioSintomas, setInicioSintomas] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [peso2, setPeso2] = useState("");
  const [palpite, setPalpite] = useState("Endocardite");

  const handleSubmit = () => {
    console.log({
      sintomas,
      inicioSintomas,
      peso,
      altura,
      peso2,
      palpite,
    });
  };

  return (
    <div className="diagnosticos-layout">
      <Sidebar />

      <div className="diagnosticos-content">
        <DashboardNavbar />

        <div className="diagnosticos-container">

          {/* Sintomas */}
          <div className="card">
            <h3>Digite os Sintomas:</h3>
            <textarea
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />

            {/* NOVO CAMPO */}
            <div className="input-box inicio-sintomas">
              <label>Início dos Sintomas:</label>
              <input
                type="date"
                value={inicioSintomas}
                onChange={(e) => setInicioSintomas(e.target.value)}
              />
            </div>
          </div>

          {/* Inputs */}
          <div className="inputs-row">
            <div className="input-box">
              <label>Peso:</label>
              <input
                type="text"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label>Altura:</label>
              <input
                type="text"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
              />
            </div>

            <div className="input-box">
              <label>Peso:</label>
              <input
                type="text"
                value={peso2}
                onChange={(e) => setPeso2(e.target.value)}
              />
            </div>
          </div>

          {/* Palpite + Botão */}
          <div className="palpite-card">
            <div>
              <h4>Seu Palpite:</h4>

              <select
                value={palpite}
                onChange={(e) => setPalpite(e.target.value)}
              >
                <option>Endocardite</option>
                <option>Pneumonia</option>
                <option>Diabetes</option>
                <option>Hipertensão</option>
              </select>
            </div>

            <button className="btn-enviar" onClick={handleSubmit}>
              Enviar
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Diagnosticos;
