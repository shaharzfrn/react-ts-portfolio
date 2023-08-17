import { Link } from 'react-router-dom';
import ContactIcons from '../ContactIcons/ContactIcons';

// import './style.scss';

const PUBLIC_URL = 'https://shaharzfrn.github.io/react-ts-portfolio/';

function SideBar() {
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque veniam
          maxime nesciunt commodi optio excepturi nemo, ratione veritatis
          nostrum repellendus error consequuntur dolorum. Veritatis voluptatum
          ratione, nisi libero cumque sit voluptate repellendus assumenda ex
          numquam temporibus quaerat quo ut odio deleniti. Ad at nobis ex illum
          obcaecati repudiandae tempora autem debitis amet quos deleniti
          accusamus odio fuga velit saepe sequi facere reprehenderit, id
          possimus sed cum itaque corporis inventore. Suscipit tenetur dolorem
          possimus tempore sint eos non optio iure laborum!
        </p>
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
