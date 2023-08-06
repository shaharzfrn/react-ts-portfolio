import { useState, useEffect } from 'react';

const OPEN_HAMBURGER = <>&#9776;</>;
const CLOSE_HAMBURGER = <>&#10005;</>;

interface TogglerProp {
  isOpen: boolean | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
}

function Toggler({ isOpen, setOpen }: TogglerProp) {
  const [navStatus, setStatus] = useState('');

  useEffect(() => {
    if (isOpen === null) return;
    setStatus(isOpen ? 'menu-open' : 'menu-close');
  }, [isOpen]);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      role="presentation"
      className={`navbar-toggler ${navStatus}`}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      {isOpen ? CLOSE_HAMBURGER : OPEN_HAMBURGER}
    </div>
  );
}

export default Toggler;
