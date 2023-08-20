import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';
import Post from '../../components/Post/Post';

export default function Home() {
  return (
    <Page title="" description="">
      <Page.Header>
        <h2 className="h2">
          <Link to="/" className="link">
            About this site
          </Link>
        </h2>
        <p>
          A beautiful, responsive, statically-generated, react application
          written with modern Javascript.
        </p>
      </Page.Header>

      <Post>
        <Post.Header>
          <h2 className="h2">Welcome</h2>
          <p>
            The site is still under construction but it will be finish really
            soon. but you can always{' '}
            <Link to="/contact" className="link">
              contact me
            </Link>
          </p>
          <h3 className="h3">
            Dont forget to keep follow, great things are comming
          </h3>
        </Post.Header>
      </Post>
    </Page>
  );
}
