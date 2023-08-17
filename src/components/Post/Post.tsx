import { PropsWithChildren } from 'react';

function Post({ children }: PropsWithChildren) {
  return <article className="post">{children}</article>;
}

function PostHeader({ children }: PropsWithChildren) {
  return (
    <header className="post-header">
      <div className="post-title">{children}</div>
    </header>
  );
}

function PostBody({ children }: PropsWithChildren) {
  return <div className="post-body">{children}</div>;
}

function SectionDivider() {
  return <div className="post-section-split" />;
}

interface PostSectionProps {
  id?: string | undefined;
  divider?: 'both' | 'up' | 'down' | 'none';
}

function PostSection({
  id = undefined,
  divider = 'none',
  children,
}: PropsWithChildren<PostSectionProps>) {
  return (
    <>
      {divider === 'up' || divider === 'both' ? <SectionDivider /> : ''}
      <div className="post-section" id={id}>
        {children}
      </div>
      {divider === 'down' || divider === 'both' ? <SectionDivider /> : ''}
    </>
  );
}
PostSection.defaultProps = {
  id: undefined,
  divider: 'none',
};

interface SectionHeaderProps {
  position?: 'left' | 'right' | 'center';
}
function SectionHeader({
  position,
  children,
}: PropsWithChildren<SectionHeaderProps>) {
  return (
    <div className="post-section-header">
      <div className={`post-section-title align-${position}`}>{children}</div>
    </div>
  );
}
SectionHeader.defaultProps = {
  position: 'left',
};

Post.Header = PostHeader;
Post.Body = PostBody;
Post.Section = PostSection;
Post.SectionHeader = SectionHeader;
Post.SectionDivider = SectionDivider;

export default Post;
