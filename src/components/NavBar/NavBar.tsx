import { useState } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../assets/data/routes';

function Navbar() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <header className="navbar | border-bottom | box-shadow-1">
      <div className="container navbar-container" data-type="wide">
        <div className="navbar-brand">
          <h1>
            {routes
              .filter((link) => link.index && !link.disable)
              .map((link) => (
                <Link key={link.label} to={link.path} className="">
                  {link.label}
                </Link>
              ))}
          </h1>
        </div>

        <label className="navbar-toggle button-toggle" htmlFor="toggle">
          <input
            type="checkbox"
            id="toggle"
            onClick={() => setVisible((prev) => !prev)}
          />
          <span />
        </label>

        <nav className="navbar-nav" data-visible={visible}>
          <ul className="nav | flex-group">
            {routes
              .filter((link) => !link.index && !link.disable)
              .map((link) => (
                <li key={link.label} className="nav-item">
                  <Link to={link.path} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
