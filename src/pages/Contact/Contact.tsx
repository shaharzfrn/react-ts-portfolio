import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';
import Post from '../../components/Post/Post';

// import PageHeader from '../../components/PageHeader/PageHeader';
import EmailLink from '../../components/EmailLink/EmailLink';
import ContactIcons from '../../components/ContactIcons';

export default function Contact() {
  return (
    <Page title="" description="">
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
          <h2>Feel free to get in touch.</h2>
          <p>
            You can email me at:
            <EmailLink />
          </p>
          <ContactIcons />
        </Post.Header>
      </Post>
    </Page>
  );
}
