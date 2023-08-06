import { PropsWithChildren } from 'react';

import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

export interface PageLayoutProps {
  title: string;
  description: string;
}

function PageLayout({
  title,
  description,
  children,
}: PropsWithChildren<PageLayoutProps>) {
  return (
    <div className="wrapper">
      <NavBar />

      <div className="main">{children}</div>
      <SideBar />
    </div>
  );
}

export default PageLayout;
