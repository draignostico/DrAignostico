import { Link } from 'react-router-dom';
import logo from "../img/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Dr. AIgnóstico" />
          <span>Dr.<strong>AI</strong>gnóstico</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/" style={{background: 'none', color: '#0066e6'}}>Sobre nós</Link></li>
          <li><Link to="/" style={{background: 'none', color: '#0066e6'}}>Nossos Planos</Link></li>
          <li><Link to="/login" className="btn-login" style={{border: '1px solid #0066e6', padding: '8px 20px', borderRadius: '5px'}}>Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;