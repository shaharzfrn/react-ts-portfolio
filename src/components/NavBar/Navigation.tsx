import { useState } from 'react';

import { Link } from 'react-router-dom';

import routes from '../../assets/data/routes';

const OPEN_HAMBURGER = <>&#9776;</>;
const CLOSE_HAMBURGER = <>&#10005;</>;

function Navigation() {
  const [isOpen, setOpen] = useState<boolean | null>(null);
  const [navStatus, setStatus] = useState('');

  const handleClick = () => {
    setOpen((prevState) => {
      setStatus(prevState ? 'menu-close' : 'menu-open');
      return !prevState;
    });
  };

  return (
    <>
      <nav className={`navbar-nav ${navStatus}`}>
        <ul className="navbar-items">
          {routes
            .filter((link) => !link.index && !link.disable)
            .map((link) => (
              <li key={link.label} className="navbar-item">
                <Link to={link.path} className="link navbar-link">
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <div
        role="presentation"
        className={`navbar-toggler ${navStatus}`}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        {isOpen ? CLOSE_HAMBURGER : OPEN_HAMBURGER}
      </div>
    </>
  );
}

export default Navigation;
