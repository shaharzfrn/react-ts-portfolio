import { PropsWithChildren } from 'react';

interface SectionProps {
  id?: string | undefined;
}

function Section({
  id = undefined,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <div className="page-section" id={id}>
      {children}
    </div>
  );
}

function SectionHeader({ children }: PropsWithChildren) {
  return <div className="padding-block-end-2">{children}</div>;
}

export default Object.assign(Section, {
  Header: SectionHeader,
});
