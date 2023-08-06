import { Link } from 'react-router-dom';

import Navigation from './Navigation';

import routes from '../../assets/data/routes';

// import './style.scss';
// import './style.css';

function NavBar() {
  return (
    <header className="navbar">
      <h1 className="h1 navbar-brand">
        {routes
          .filter((link) => link.index)
          .map((link) => (
            <Link key={link.label} to={link.path} className="link">
              {link.label}
            </Link>
          ))}
      </h1>
      <Navigation />
    </header>
  );
}

export default NavBar;
