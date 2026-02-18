// src/pages/PlanosInterno.tsx
import DashboardLayout from '../components/DashboardLayout';
import '../styles/dashboard.css';

export default function PlanosInterno() {
  const plans = [1, 2, 3, 4]; 

  return (
    <DashboardLayout>
      <div className="plans-grid-internal">
        {plans.map((item) => (
          <div key={item} className="plan-card-internal">
            <h3>Plano mega</h3>
            <div className="plan-price">
              R$ 99,<span style={{fontSize: '16px'}}>90</span><span style={{fontSize: '14px', fontWeight: 'normal'}}>/mês</span>
            </div>

            <div className="plan-credits">
              <strong style={{fontSize: '24px', display: 'block'}}>75</strong>
              <span style={{fontSize: '12px'}}>Diagnósticos</span>
            </div>

            <ul className="plan-features">
              <li>✔ Diagnóstico</li>
              <li>✔ Diagnóstico</li>
              <li>✔ Diagnóstico</li>
              <li>✔ Diagnóstico</li>
            </ul>

            <button className="btn-contract">Contratar Agora</button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}