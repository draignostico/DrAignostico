
import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import '../styles/dashboard.css';


const mockReports = [
  { id: 18, date: '09/05/2025' },
  { id: 17, date: '08/05/2025' },
  { id: 16, date: '07/05/2025' },
  { id: 15, date: '06/05/2025' },
  { id: 14, date: '05/05/2025' },
  { id: 13, date: '04/05/2025' },
];

export default function Anotacoes() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="anotacoes-header">
        <button 
          className="btn-add-notes"
          onClick={() => setIsModalOpen(true)}
        >
          Adicionar Anotações
        </button>
      </div>

      <div className="reports-grid">
        {mockReports.map((report) => (
          <div key={report.id} className="report-card">
            <div className="card-top">
              <div>
                <h3>Relatório {report.id}</h3>
                <p style={{fontSize: '12px', color: '#666', marginTop: '5px'}}>
                  Data da Sessão: {report.date}
                </p>
              </div>
              <div className="file-icon">
               
                📄
                <div style={{position: 'absolute', bottom: '5px', right: '5px', background: 'white', borderRadius: '50%', width: '15px', height: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span style={{fontSize: '10px', color: '#87CEEB'}}>⬇</span>
                </div>
              </div>
            </div>
            <button className="btn-download">
              <span>Download</span>
              <span>⬇</span>
            </button>
          </div>
        ))}
      </div>

      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>×</button>
            
            <h3 style={{color: '#0b2f8a', marginBottom: '10px'}}>Faça um comentário:</h3>
            
            <div className="modal-input-area">
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines" style={{borderBottom: 'none'}}></div>
            </div>

            <h3 style={{color: '#0b2f8a', marginBottom: '10px'}}>Anexar um arquivo:</h3>
            <div className="attach-area">
                <span style={{fontSize: '20px'}}>📎</span>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                <button 
                    style={{backgroundColor: '#0b2f8a', color: 'white', padding: '10px 40px', borderRadius: '5px', border: 'none', cursor: 'pointer'}}
                    onClick={() => setIsModalOpen(false)}
                >
                    Salvar
                </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}