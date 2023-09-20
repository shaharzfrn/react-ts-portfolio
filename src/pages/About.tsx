import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Page from '../layouts/Page';
import Section from '../components/Section/Section';

import { intro, someHistory, thingsILike } from '../assets/data/about';

function useWordCount(id: string) {
  const [words, setWords] = useState(0);

  useEffect(() => {
    const content = document.getElementById(id);
    const count = content?.innerText.match(/[^\s]+/g)?.length;

    setWords(count !== undefined ? count : 0);
  }, [id]);

  return { words };
}

function About() {
  const { words } = useWordCount('about-content');

  return (
    <Page title="About" description="About">
      <Page.Title>
        <Link to="/about">About me</Link>
        <p>(in about {words} words)</p>
      </Page.Title>
      <Page.Body id="about-content">
        <Section>
          <Section.Header>
            <h1 className="text-uppercase fw-bold clr-neutral-900 fs-500 padding-block-end-2">
              Intro
            </h1>
          </Section.Header>
          {intro.map((part) => {
            return <p key={Math.random()}>{part}</p>;
          })}
        </Section>
        <Section>
          <Section.Header>
            <h1 className="text-uppercase fw-bold clr-neutral-900 fs-500 padding-block-end-2">
              Some History
            </h1>
          </Section.Header>
          <ul className="padding-inline-start-5">
            {someHistory.map((part) => {
              return <li key={Math.random()}>{part}</li>;
            })}
          </ul>
        </Section>
        <Section>
          <Section.Header>
            <h1 className="text-uppercase fw-bold clr-neutral-900 fs-400 padding-block-end-2">
              <a href="#/">Things I like</a>
            </h1>
          </Section.Header>
          <ul className="padding-inline-start-5">
            {thingsILike.map((part) => {
              return <li key={Math.random()}>{part}</li>;
            })}
          </ul>
        </Section>
      </Page.Body>
      <slot />
    </Page>
  );
}

export default About;
