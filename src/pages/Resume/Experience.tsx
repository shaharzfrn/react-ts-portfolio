import { ReactElement } from 'react';
import { formatDateString } from '../../utils/formatDate';

import jobs from '../../assets/data/resume/experience';
import Section from '../../components/Section/Section';

interface JobProps {
    name: string;
    position: string;
    url: string;
    startDate: string;
    summary: ReactElement;
    highlights: ReactElement[];
    endDate: string | undefined;
}
function Job({
    name,
    position,
    url,
    startDate,
    endDate,
    summary,
    highlights,
}: JobProps) {
    return (
        <article className="padding-block-end-8 ">
            <header className="padding-block-end-4 fs-400 text-uppercase">
                <p className="clr-neutral-900 fw-semi-bold">
                    {url ? <a href={url}>{name}</a> : name} - {position}
                </p>
                <p className="fs-100">
                    {' '}
                    {formatDateString(startDate)} -{' '}
                    {endDate ? formatDateString(endDate) : 'present'}
                </p>
            </header>

            <div className="fs-200 ">
                {summary}
                <ul className="padding-inline-start-4">
                    {highlights.map((highlight) => {
                        return <li key={Math.random()}>{highlight}</li>;
                    })}
                </ul>
            </div>
        </article>
    );
}

function Experience() {
    return (
        <Section id="experience">
            <Section.Header>
                <h1 className="text-uppercase fw-bold clr-neutral-900 fs-500 text-center margin-block-end-4 tracking-wide">
                    <a href="#education" className="border-bottom-0 ">
                        experience
                    </a>
                </h1>
            </Section.Header>
            {jobs.map((job) => {
                const { name, position, url, startDate, endDate, summary, highlights } =
                    job as JobProps;
                return (
                    <Job
                        key={name}
                        name={name}
                        position={position}
                        url={url}
                        startDate={startDate}
                        endDate={endDate}
                        summary={summary}
                        highlights={highlights}
                    />
                );
            })}
        </Section>
    );
}

export default Experience;
