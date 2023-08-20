import { PropsWithChildren } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

export interface PageProps {
  title: string;
  description: string;
}

function Page({ title, description, children }: PropsWithChildren<PageProps>) {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | shaharzfrn"
        defaultTitle="shaharzfrn"
        defer={false}
      >
        {title && <title>{title}</title>}
        <meta name="description" content={description} />
      </Helmet>
      <div className="page-wrapper">
        <NavBar />

        <div className="page-body">{children}</div>
        <SideBar />
      </div>
    </HelmetProvider>
  );
}

function Header({ children }: PropsWithChildren) {
  return (
    <header className="page-header">
      <div className="page-title">{children}</div>
    </header>
  );
}

Page.Header = Header;

export default Page;
