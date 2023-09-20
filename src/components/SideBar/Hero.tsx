import { Link } from 'react-router-dom';

import { PUBLIC_URL, BRAND, EMAIL } from '../../assets/data/consts';

function Hero() {
  return (
    <div className="page-intro sidebar-item | flow | text-center lg:text-start | lg:border-bottom">
      <Link to="/" className="logo round">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <h1 className="fw-bold fs-700 tracking-widest | text-uppercase">
        {BRAND}
      </h1>
      <p>
        <a className="text-uppercase tracking-widest" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </p>
    </div>
  );
}

export default Hero;
