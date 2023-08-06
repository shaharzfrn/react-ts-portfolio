import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Toggler from './Toggler';

import routes from '../../assets/data/routes';

function Navigation() {
  const [isOpen, setOpen] = useState<boolean | null>(null);
  const [navStatus, setStatus] = useState('');

  useEffect(() => {
    if (isOpen === null) return;
    setStatus(isOpen ? 'menu-open' : 'menu-close');
  }, [isOpen]);

  return (
    <>
      <nav className={`navbar-nav ${navStatus}`}>
        <ul className="navbar-items">
          {routes
            .filter((link) => !link.index)
            .map((link) => (
              <li key={link.label} className="navbar-item">
                <Link to={link.path} className="link navbar-link">
                  {link.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <Toggler isOpen={isOpen} setOpen={setOpen} />
    </>
  );
}

export default Navigation;
