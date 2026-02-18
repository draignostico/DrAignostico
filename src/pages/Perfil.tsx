
import DashboardLayout from '../components/DashboardLayout';
import '../styles/dashboard.css';

export default function Perfil() {
  return (
    <DashboardLayout>
      <div className="profile-container">
        
        <div className="profile-avatar-large">
           <img src="" alt="" style={{width: '100%', height: '100%', borderRadius: '50%'}} />
           <div style={{position: 'absolute', bottom: '0', right: '0', background: 'white', padding: '5px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'}}>
             📷
           </div>
        </div>

        
        <div className="auth-form-wrapper" style={{maxWidth: '100%'}}> 
        
          <div className="input-group">
            <label>Nome:</label>
            <input type="text" placeholder="Flávio Noim" style={{backgroundColor: 'white'}} />
          </div>

          <div className="input-group">
            <label>Email:</label>
            <input type="email" placeholder="flavio@gmail.com" style={{backgroundColor: 'white'}} />
          </div>

          <div style={{display: 'flex', gap: '20px'}}>
            <div className="input-group" style={{flex: 1}}>
                <label>CRM:</label>
                <input type="text" placeholder="00000010" style={{backgroundColor: 'white'}} />
            </div>
            <div className="input-group" style={{flex: 1}}>
                <label>Senha:</label>
                <div style={{position: 'relative'}}>
                    <input type="password" placeholder="**********" style={{backgroundColor: 'white'}} />
                    <span style={{position: 'absolute', right: '10px', top: '15px', cursor: 'pointer'}}>👁️</span>
                </div>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <button className="btn-auth-submit" style={{width: '200px'}}>Salvar</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}