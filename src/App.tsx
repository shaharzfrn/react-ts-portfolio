import { useEffect, useState, ReactElement, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import PageLayout from './layouts/Page';

import Home from './pages/Home/Home';

import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';

import './assets/scss/main.scss';
import Contact from './pages/Contact/Contact';

function IdentityFormat(
  x: string | number | ReactElement
): string | number | ReactElement {
  return x;
}

export function Age() {
  const [age, setAge] = useState<string>();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-01-06T09:24:00');
    const currentAge = (Date.now() - birthTime.getTime()) / divisor;
    setAge(currentAge.toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return age;
}

interface TableRowProp {
  label: string;
  link?: string;
  value: string | number | ReactElement;
  format?: typeof IdentityFormat;
}
function TableRow({
  label,
  link,
  value,
  format = IdentityFormat,
}: TableRowProp) {
  return (
    <tr>
      <td width="70%">{label}</td>
      <td> {link ? <a href={link}>{format(value)}</a> : format(value)} </td>
    </tr>
  );
}
TableRow.defaultProps = {
  link: '',
  format: IdentityFormat,
};

function App() {
  return (
    <HashRouter basename="/">
      <Suspense fallback={<PageLayout title="" description="" />} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
