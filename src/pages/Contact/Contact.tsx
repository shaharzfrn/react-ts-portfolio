import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';
import Post from '../../components/Post/Post';

import EmailLink from '../../components/EmailLink/EmailLink';
import ContactIcons from '../../components/ContactIcons';

function Contact() {
  return (
    <Page
      title="Contact"
      description="Contact Shahar Zafran via email @ shaharzfrn@gmail.com"
    >
      <Page.Header>
        <h2 className="h2">
          <Link to="/contact" className="link">
            Contact
          </Link>
        </h2>
        <p>I&apos;ts always good idea to keep in touch</p>
      </Page.Header>
      <Post>
        <Post.Header>
          <p>
            Feel free to get in touch. You can email me at:
            <EmailLink />
          </p>
          <ContactIcons />
        </Post.Header>
      </Post>
    </Page>
  );
}

export default Contact;
