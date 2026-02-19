import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/planosInternos.css";

const PlanosInterno: React.FC = () => {
  const plans = [
    { id: 1, current: true, buttonText: "Seu Plano" },
    { id: 2, current: false, buttonText: "Assinar Agora" },
    { id: 3, current: false, buttonText: "Contratar Agora" },
    { id: 4, current: false, buttonText: "Contratar Agora" },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <DashboardNavbar />
        
        <div className="plans-container">
          <div className="plans-grid">
            {plans.map((plan) => (
              <div key={plan.id} className="plan-card">
                <h2 className="plan-title">Plano mega</h2>

                <div className="plan-price">
                  <span className="currency">R$</span>
                  <span className="amount">99</span>
                  <span className="cents">,90</span>
                  <span className="period">/mês</span>
                </div>

                <div className="credits-badge">
                  <strong>75</strong>
                  <span>Diagnósticos</span>
                </div>

                <div className="features-grid">
                  <div className="feature-item"><span>✔</span> Diagnóstico</div>
                  <div className="feature-item"><span>✔</span> Diagnóstico</div>
                  <div className="feature-item"><span>✔</span> Diagnóstico</div>
                  <div className="feature-item"><span>✔</span> Diagnóstico</div>
                </div>

                <button className={`btn-plan ${plan.current ? 'current' : ''}`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanosInterno;