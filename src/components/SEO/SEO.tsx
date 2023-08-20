import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

function SEO({ title, description }: SEOProps) {
  return (
    <Helmet
      titleTemplate="%s | shaharzfrn"
      defaultTitle="shaharzfrn"
      defer={false}
    >
      {/* Standard metadata tags */}
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
      {/*  */}
      {/* Facebook tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:image"
        content="/images/meta-seo-img-nubelson-fernandes.jpg"
      />
    </Helmet>
  );
}

export default SEO;
