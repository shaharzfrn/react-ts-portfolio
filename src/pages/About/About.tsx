import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';
import Post from '../../components/Post/Post';
import Age from '../../components/Age/Age';

function useWordCount(id: string) {
  const [words, setWords] = useState(0);

  useEffect(() => {
    const content = document.getElementById(id);
    const count = content?.innerText.match(/[^\s]+/g)?.length;

    setWords(count !== undefined ? count : 0);
  }, [id]);

  return { words };
}

export default function About() {
  const { words } = useWordCount('about-content');

  return (
    <Page title="" description="">
      {/* <PageHeader /> */}
      <Page.Header>
        <h2 className="h2">
          <Link to="/about" className="link">
            About Me
          </Link>
        </h2>
        <p>(in about {words} words)</p>
      </Page.Header>
      <div id="about-content">
        <Post>
          <Post.Section>
            <Post.SectionHeader>
              <h3 className="h3">
                <a href="#asdasd" className="link">
                  Intro
                </a>
              </h3>
            </Post.SectionHeader>

            <Post.Body>
              <p>
                I&apos;m about <Age /> years old from Israel.
                <br />
                Unlike most of the people i know, I didn&apos;t have a
                connection to computers at young age.
              </p>
            </Post.Body>
          </Post.Section>
          <Post.Section id="asdasd" divider="both">
            <Post.SectionHeader>
              <h3 className="h3">More Comming Soon...</h3>
            </Post.SectionHeader>

            <Post.Body />
          </Post.Section>
        </Post>
      </div>
    </Page>
  );
}
