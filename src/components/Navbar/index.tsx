import { NavLink } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  const showLogout = false;
  return (
    <nav className="navbar main-nav">
      <NavLink to="/" className="nav-logo-text">
        <h4 className="text-primary">MovieFlix</h4>
      </NavLink>
      {showLogout && <button className="logout-button">Sair</button>}
    </nav>
  );
};

export default Navbar;
