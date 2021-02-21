import { Link } from 'react-router-dom'

import './style.scss';

const Nav = () => (
  <nav className="top">
    <h1 className="title">Pokédex</h1>
    <ul className="menu">
      <li className="menu-item"><Link to="/" className="menu-item-link">Liste</Link></li>
      <li className="menu-item"><Link to="/types" className="menu-item-link">Type</Link></li>
    </ul>
  </nav>
);

export default Nav;
