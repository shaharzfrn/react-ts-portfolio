import { Link } from 'react-router-dom';

import PageLayout from '../layouts/PageLayout';

export default function About() {
  return (
    <PageLayout title="" description="">
      <div className="page-title">
        <h2>
          <Link to="/about">About Me</Link>
        </h2>
        <p>(in about {123} words)</p>
      </div>

      {/* <Post postId="123" />
      <Post postId="#ipsmdksad" /> */}
    </PageLayout>
  );
}
