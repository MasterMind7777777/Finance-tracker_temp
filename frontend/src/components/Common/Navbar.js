import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import '../../styles/Common/Navbar.css';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/users" className="navbar-link">Users</Link>
        </li>
        <li className="navbar-item">
          <Link to="/transactions" className="navbar-link">Transactions</Link>
        </li>
        <li className="navbar-item">
          <Link to="/budgets" className="navbar-link">Budgets</Link>
        </li>
        <li className="navbar-item">
          <Link to="/categories" className="navbar-link">Categories</Link>
        </li>
        {user ? (
          <li className="navbar-item">
            <Link to="/logout" className="navbar-link">Logout</Link>
          </li>
        ) : (
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
        )}
        {/* You can add more navigation links here */}
      </ul>
    </nav>
  );
};

export default Navbar;
