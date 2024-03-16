import { PropsWithChildren, Children } from 'react';

import { HelmetProvider, Helmet } from 'react-helmet-async';

import Navbar from '../../components/NavBar';
import Sidebar from '../../components/SideBar';

import { metas, Meta } from '../../assets/data/seo';

interface LayoutProps {
  title: string;
  description: string;
}

function Page({
  title = '',
  description = '',
  children,
}: PropsWithChildren<LayoutProps>) {
  const metaDescription = `shaharzfrn.com ${description}`;

  return (
    <HelmetProvider>
      <div className="page">
        <Helmet
          titleTemplate="%s | Shaharzfrn"
          defaultTitle="Shaharzfrn"
          defer={false}
        >
          <title>{title}</title>
          <meta name="description" content={metaDescription} />

          {metas.map((meta: Meta) => {
            return (
              <meta
                key={Math.random()}
                name={meta.name}
                content={meta.content}
              />
            );
          })}
        </Helmet>
        <Navbar />
        <div className="page-container | grid | lg:margin-block-8 lg:margin-inline-10 ">
          <Sidebar />
          <div className="page-main">
            <div className="flow | bg-neutral-000 clr-neutral-600 | border-block lg:border-inline padding-block-5">
              {children}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

function LayoutTitle({ children }: PropsWithChildren) {
  const childrenArr = Children.toArray(children);

  return (
    <div className="page-section-title | text-center lg:text-start text-uppercase | border-bottom padding-inline-8 padding-block-10 ">
      <h1 className="heading-2 fw-bold padding-block-end-8 tracking-widest">
        {childrenArr[0]}
      </h1>
      <div className="text-uppercase fs-100 fw-regular">
        {childrenArr.slice(1)}
      </div>
    </div>
  );
}

interface LayoutBodyProps {
  id?: string | undefined;
}

function LayoutBody({
  id = undefined,
  children,
}: PropsWithChildren<LayoutBodyProps>) {
  return (
    <div
      id={id}
      className="page-section-body | flow | padding-inline-8 padding-block-8"
    >
      {children}
    </div>
  );
}

// Page.Title =

export default Object.assign(Page, {
  Title: LayoutTitle,
  Body: LayoutBody,
});
