import { PropsWithChildren } from 'react';

function PageHeader({ children }: PropsWithChildren) {
  return <article className="page-header">{children}</article>;
}

export default PageHeader;
