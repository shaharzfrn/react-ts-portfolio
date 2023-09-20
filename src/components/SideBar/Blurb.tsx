import { useEffect, useState } from 'react';
import { Link, useLocation as useRouterLocation } from 'react-router-dom';

function useLocation() {
  const [location, setLocation] = useState<string>('');
  const routerLocation = useRouterLocation();
  useEffect(() => {
    setLocation(routerLocation.pathname);
  }, [routerLocation]);

  return { location };
}

function Blurb() {
  const { location } = useLocation();

  return (
    <div className="page-blurb sidebar-item | flow | border-bottom">
      <h2 className="fs-500 fw-bold text-uppercase tracking-widest">
        About Me
      </h2>
      <p>
        Hi 👋, I&apos;m Shahar. I&apos;m am a{' '}
        <a href="https://www.technion.ac.il/en/home-2/">Technion</a> graduate.
      </p>
      {location === '/resume' ? (
        <Link to="/about" className="button" data-type="accent">
          About Me!
        </Link>
      ) : (
        <Link to="/resume" className="button" data-type="primary">
          Learn More!
        </Link>
      )}
    </div>
  );
}

export default Blurb;
