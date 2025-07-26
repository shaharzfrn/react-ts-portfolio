import { ReactElement } from 'react';

type AboutElement = string | ReactElement;

const someHistory: AboutElement[] = [
    <>
        <h4 className="fs-500 fw-semi-bold">
            Discovering the Spark (Age 16):
        </h4>
        My passion for programming ignited when I built my first PC and taught
        myself to code.
        That same year, I started to take courses in
        Computer Science at the
        {' '}<a
            target="_blank"
            href="https://www.openu.ac.il/young/pages/default.aspx"
            rel="noreferrer"
        >
            Open University
        </a>{' '}
        — juggling full‑time studies with high‑school
        coursework.
    </>,
    <>
        <h4 className="fs-500 fw-semi-bold">
            Exploring the Landscape (Ages 16–18)
        </h4>
        I dove into everything from web development and Linux server
        administration to robo‑hack projects and basic AI <br />experiments - testing
        out different languages (Python, C, JavaScript) and platforms
        (Raspberry Pi, Arduino). <br />
        That hands‑on tour helped me zero in on embedded systems and low‑level
        programming, the domains I’m still passionate about today.
    </>,
    <>
        <h4 className="fs-500 fw-semi-bold">
            Service and Growth (Ages 18–20):
        </h4>
        Served as a System Administrator in the National Center of Encryption and
        Information Security, building and deploying operational systems used
        across all IDF units, ensuring their reliability and performance.
        Contributed to the integration and deployment of new systems and
        technologies to enhance operational capabilities.
    </>,

    <>
        <h4 className="fs-500 fw-semi-bold">
            Freelance Foundations (Age 21-26)
        </h4>
        I launched my freelance career on Fiverr, delivering custom software
        solutions to clients around the world before and throughout my academic
        studies—sharpening my problem‑solving skills and client communication
        before transitioning into full‑time engineering roles.
    </>,
    <>
        <h4 className="fs-500 fw-semi-bold">
            Advancing Academically (Ages 22–25)
        </h4>
        I transferred from the Open University to the Technion through the
        {' '}<a
            target="_blank"
            href="https://www.openu.ac.il/transfertrack/technion/pages/computer_science.aspx"
            rel="noreferrer"
        >
            Afik Mahavar
        </a>{' '}
        program , focusing my coursework on AI and Operating Systems.
        In 2024, I completed my B.Sc. in Computer Science eager to apply these advanced concepts in building robust, real‑world systems.
    </>,
    <>
        <h4 className="fs-500 fw-semi-bold">
            Current Status
        </h4>
        I’m now a software engineer at Skysoft Solutions, building Real-Time Embedded systems
        — you can view my <a href="#/resume/#aaa">Full Resume</a>
    </>
];
const thingsILike: AboutElement[] = [
    <>
        <h4 className="fs-500 fw-semi-bold">
            Triathlon Training
        </h4>
        When I’m not at my desk, you’ll find me in the pool, on the bike,
        or out on a run—pushing my body’s limits in preparation for my next triathlon.
        The discipline and resilience I build in training carry straight over into my work.
    </>,
    <>
        <h4 className="fs-500 fw-semi-bold">
            Reverse‑Engineering & Problem Solving
        </h4>
        I love peeling back the layers of gadgets and protocols to see how they works.
        I’ve spent countless hours chasing elusive bugs or undocumented behaviors—because
        understanding the inner workings of a system is half the fun.
    </>,
    <>
        <h4 className="fs-500 fw-semi-bold">
            Home Automation & IoT
        </h4>
        From RF scanners to ESP32 sensors, I build end‑to‑end smart setups that monitor and control my environment.
        Crafting these interconnected systems is a fun blend of hardware, firmware, and networking.
    </>,
    <>
        <h4 className="fs-500 fw-semi-bold">
        Space & Aviation
        </h4>
        I’m fascinated by flight dynamics, aerospace systems, and satellite communications. 
            Whether it’s simulating drone autopilots or tracking rocket launches, I love exploring the technologies that keep us soaring.
    </>,
];

export { someHistory, thingsILike };
