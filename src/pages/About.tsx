import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Page from '../layouts/Page';
import Section from '../components/Section/Section';

import { someHistory, thingsILike } from '../assets/data/about';
import Age from '../components/Age';

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
        <Page title="About" description="About, shahar zafran">
            <Page.Title>
                <Link to="/about">About me</Link>
                <p>(in about {words} words)</p>
            </Page.Title>
            <Page.Body id="about-content">
                <Section>
                    <Section.Header>
                        <h1 className="text-uppercase fw-bold clr-neutral-900 fs-600 padding-block-end-2">
                            Intro
                        </h1>
                    </Section.Header>
                    <p>
                        <span className="fw-semi-bold">Hi there</span>, <br />I&apos;m Shahar,{' '}
                        <Age /> years old software engineer based in Israel. <br />
                        I Specialize in designing and developing Real-Time Embedded systems at Skysoft Solutions.
                        I love digging into how things work—sometimes I’ll sit for hours chasing down a solution or reverse‑engineering gadgets just to see what makes them tick.
                        I also push my limits by training for triathlons, balancing swim, bike, and run workouts alongside my code.<br />
                        Whether you’d like to discuss embedded systems, reverse‑engineering techniques, triathlon training or ask for help, I’d love to hear from you!
                    </p>
                </Section>
                <Section>
                    <Section.Header>
                        <h1 className="text-uppercase fw-bold clr-neutral-900 fs-600 padding-block-end-2">
                            My Journey
                        </h1>
                    </Section.Header>
                    <ul className="padding-inline-start-5">
                        {someHistory.map((part) => {
                            return <li key={Math.random()} className="margin-block-end-3">{part}</li>;
                        })}
                    </ul>
                </Section>
                <Section>
                    <Section.Header>
                        <h1 className="text-uppercase fw-bold clr-neutral-900 fs-600 padding-block-end-2">
                            <a href="#/">Things I like</a>
                        </h1>
                    </Section.Header>
                    <ul className="padding-inline-start-5">
                        {thingsILike.map((part) => {
                            return <li key={Math.random()} className="margin-block-end-3">{part}</li>;
                        })}
                    </ul>
                </Section>
            </Page.Body>
            <slot />
        </Page >
    );
}

export default About;
