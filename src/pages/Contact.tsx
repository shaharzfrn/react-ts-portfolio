import { Link } from 'react-router-dom';

import Page from '../layouts/Page';

import ContactIcons from '../components/ContactIcons';
import EmailLink from '../components/EmailLink';

function Contact() {
  return (
    <Page title="" description="Contact Me, email, gmail, send a message">
      <Page.Title>
        <Link to="/contact">contact</Link>
        <p>I&apos;ts always good idea to keep in touch</p>
      </Page.Title>
      <Page.Body>
        <p className="">
          Feel free to get in touch. You can email me at:
          <EmailLink />
        </p>
        <ContactIcons />
      </Page.Body>
    </Page>
  );
}

export default Contact;
