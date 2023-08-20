import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function NotFound() {
  return (
    <HelmetProvider>
      <div className="not-found">
        <Helmet
          titleTemplate="%s | shaharzfrn"
          defaultTitle="shaharzfrn"
          defer={false}
        >
          <title>Page Not Found</title>
          <meta name="description" content="Page Not Found" />
        </Helmet>
        <h1 className="h1 ">Page Not Found</h1>
        <p>
          Return <Link to="/">home</Link>.
        </p>
      </div>
    </HelmetProvider>
    // <Page title="" description="">
    //   <Page.Header>

    //   </Page.Header>
    // </Page>
  );
}

export default NotFound;
