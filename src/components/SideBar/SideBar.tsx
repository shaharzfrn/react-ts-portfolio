import { Link, useLocation as useRouterLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ContactIcons from '../ContactIcons/ContactIcons';

// import './style.scss';

const PUBLIC_URL = '';

function useLocation() {
  const [location, setLocation] = useState<string>('');
  const routerLocation = useRouterLocation();
  useEffect(() => {
    setLocation(routerLocation.pathname);
  }, [routerLocation]);

  return { location };
}

function SideBar() {
  const { location } = useLocation();

  return (
    <section className="sidebar">
      <section className="intro">
        <Link to="/" className="logo">
          <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
        </Link>
        <header>
          <h2 className="h2">Shahar Zafran</h2>
          <p className="contact">
            <a href="mailto:shaharzfrn@gmail.com" className="link">
              shaharzfrn@gmail.com
            </a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2 className="h2">About Me</h2>
        <p>
          Hi 👋, I&apos;m Shahar. I&apos;m am a{' '}
          <a href="https://www.technion.ac.il/en/home-2/">Technion</a> graduate.
        </p>
        {location === '/resume' ? (
          <Link to="/about" className="sidebar-button">
            About Me!
          </Link>
        ) : (
          <Link to="/resume" className="sidebar-button">
            Learn More!
          </Link>
        )}
      </section>

      <section className="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Shahar Zafran{' '}
          <Link to="/" className="link">
            shaharzfrn.com
          </Link>
          .
        </p>
      </section>
    </section>
  );
}

export default SideBar;
