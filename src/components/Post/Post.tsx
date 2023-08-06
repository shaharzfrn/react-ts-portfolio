import { PropsWithChildren } from 'react';

function Post({ children }: PropsWithChildren) {
  return <article className="post">{children}</article>;
}

export default Post;
