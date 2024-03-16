import randomColor from 'randomcolor';
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
        Hi there 👋
        <br></br>
        I&apos;m Shahar, a Software Engineer
        <br></br>{' '}
        currently working on embedded systems at {' '} 
        <a href="'https://www.linkedin.com/company/skysoft-solutions-by-comm-it/mycompany/verification/'">Skysoft Solutions</a>.
      </p>
      {location === '/resume' ? (
        <Link
          to="/about"
          className="button"
          data-type="accent"
          style={{
            backgroundColor: randomColor({
              luminosity: 'light',
              hue: 'blue',
              seed: 'zzzzzz',
            }),
          }}
        >
          About Me!
        </Link>
      ) : (
        <Link
          to="/resume"
          className="button"
          data-type="primary"
          style={{
            backgroundColor: randomColor({
              luminosity: 'light',
              hue: 'purple',
              seed: 12390,
            }),
          }}
        >
          Learn More!
        </Link>
      )}
    </div>
  );
}

export default Blurb;
