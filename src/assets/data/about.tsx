import { ReactElement } from 'react';

type AboutElement = string | ReactElement;

const intro: AboutElement[] = [
  "I'm software engineer, working on embedded systems at Skysoft solutions",
];
const someHistory: AboutElement[] = [
  <>
    At 16, Only then I start play with computers, before that i just use them
    only for school homeworks, in the same year i accepted to the{' '}
    <a
      target="_blank"
      href="https://academic.openu.ac.il/cs/computer/pages/default.aspx?_gl=1*nod8y5*_ga*MTgwMTk1OTM4My4xNjk1MTg1MTUy*_ga_D925SY5X0Q*MTY5NTE4NTE1Mi4xLjAuMTY5NTE4NTE1Mi42MC4wLjA."
      rel="noreferrer"
    >
      Open University
    </a>{' '}
    to start my B.A degree in Computer Science.
  </>,
  'At 18-20, I serve in the IDF',
  <>
    At 21, I start to work as freelancer on{' '}
    <a href="https://www.fiverr.com/shaharzfrn">Fiverr</a> and builded a
    connections with multiple client that i&apos;m still working with them
    today.
  </>,
  <>
    At 22, I transfer to the{' '}
    <a
      target="_blank"
      href="https://www.technion.ac.il/en/home-2/"
      rel="noreferrer"
    >
      Technion
    </a>{' '}
    from the{' '}
    <a
      target="_blank"
      href="https://academic.openu.ac.il/cs/computer/pages/default.aspx?_gl=1*nod8y5*_ga*MTgwMTk1OTM4My4xNjk1MTg1MTUy*_ga_D925SY5X0Q*MTY5NTE4NTE1Mi4xLjAuMTY5NTE4NTE1Mi42MC4wLjA."
      rel="noreferrer"
    >
      Open University
    </a>{' '}
    using{' '}
    <a
      target="_blank"
      href="https://www.openu.ac.il/transfertrack/technion/pages/default.aspx"
      rel="noreferrer"
    >
      transfertrack
    </a>
    .
  </>,
  "At 25, as I write this (Sep 20 2023) I'm about to finish my B.Sc in a few days.",
];
const thingsILike: AboutElement[] = [
  'Triathlon',
  'Space',
  'Aviation',
  'Winter',
  <>
    Podcasts (
    <a href="https://www.osimhistoria.com/osimhistoria">Osim Historia</a>,{' '}
    <a href="https://www.hardreset.co.il">Hard Reset</a>)
  </>,
];

export { intro, someHistory, thingsILike };
