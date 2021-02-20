import './style.scss';

const Nav = () => (
  <nav className="top">
    <h1 className="title">Pokédex</h1>
    <ul className="menu">
      <li className="menu-item"><a href="/" className="menu-item-link">Liste</a></li>
      <li className="menu-item"><a href="/types" className="menu-item-link">Type</a></li>
    </ul>
  </nav>
);

export default Nav;
