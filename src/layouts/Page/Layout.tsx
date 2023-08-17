import { PropsWithChildren } from 'react';

import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

export interface PageProps {
  title: string;
  description: string;
}

function Page({ title, description, children }: PropsWithChildren<PageProps>) {
  return (
    <div className="page-wrapper">
      {title}
      {description}
      <NavBar />

      <div className="page-body">{children}</div>
      <SideBar />
    </div>
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
