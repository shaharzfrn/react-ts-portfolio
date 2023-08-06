import { Link } from 'react-router-dom';

import PageLayout from '../layouts/PageLayout';
import Post from '../components/Post/Post';
import PageHeader from '../components/PageHeader/PageHeader';

export default function Home() {
  return (
    <PageLayout title="" description="">
      <PageHeader>
        <header>
          <div className="title">
            <h2>
              <Link to="/">About this site</Link>
            </h2>
            <p>
              A beautiful, responsive, statically-generated, react application
              written with modern Javascript.
            </p>
          </div>
        </header>
      </PageHeader>

      <Post>
        <header>
          <div className="title">
            <h2>
              <Link to="/">About this site</Link>
            </h2>
            <p>
              A beautiful, responsive, statically-generated, react application
              written with modern Javascript.
            </p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>
          , view <Link to="/stats">site statistics</Link>, or{' '}
          <Link to="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source available{' '}
          <a href="https://github.com/mldangelo/personal-site">here</a>.
        </p>
      </Post>
      <Post>
        <header>
          <div className="title">
            <h2>
              <Link to="/">About this site</Link>
            </h2>
            <p>
              A beautiful, responsive, statically-generated, react application
              written with modern Javascript.
            </p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>
          , view <Link to="/stats">site statistics</Link>, or{' '}
          <Link to="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source available{' '}
          <a href="https://github.com/mldangelo/personal-site">here</a>.
        </p>
      </Post>

      <Post>
        <header>
          <div className="title">
            <h2>
              <Link to="/">About this site</Link>
            </h2>
            <p>
              A beautiful, responsive, statically-generated, react application
              written with modern Javascript.
            </p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link to="/about">about me</Link>, or you can check out my{' '}
          <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>
          , view <Link to="/stats">site statistics</Link>, or{' '}
          <Link to="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source available{' '}
          <a href="https://github.com/mldangelo/personal-site">here</a>.
        </p>
      </Post>
    </PageLayout>
  );
}
