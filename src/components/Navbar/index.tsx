import { NavLink } from 'react-router-dom';

import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar main-nav">
      <NavLink to="/" className="nav-logo-text">
        <h4 className="text-primary">MovieFlix</h4>
      </NavLink>
    </nav>
  );
};

export default Navbar;
