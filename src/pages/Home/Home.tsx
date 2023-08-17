import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';

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
    </Page>
  );
}
