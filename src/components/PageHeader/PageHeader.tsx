import { PropsWithChildren } from 'react';

function PageHeader({ children }: PropsWithChildren) {
  return (
    <article className="page-header">
      <header>
        <div className="title">{children}</div>
      </header>
    </article>
  );
}

export default PageHeader;
