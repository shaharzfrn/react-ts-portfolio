// import { useState } from 'react';

// interface TogglerProp {
//   isOpen: boolean | null;
//   setOpen: React.Dispatch<React.SetStateAction<boolean | null>>;
// }

// function Toggler({ isOpen, setOpen }: TogglerProp) {
//   const [navStatus, setStatus] = useState('');

//   const handleClick = () => {
//     setOpen((prevState) => {
//       setStatus(prevState ? 'menu-close' : 'menu-open');
//       return !prevState;
//     });
//   };

//   return (
//     <div
//       role="presentation"
//       className={`navbar-toggler ${navStatus}`}
//       onClick={handleClick}
//       onKeyDown={handleClick}
//     >
//       {/* {isOpen ? CLOSE_HAMBURGER : OPEN_HAMBURGER} */}
//     </div>
//   );
// }

// export default Toggler;
