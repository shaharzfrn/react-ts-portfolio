import { useEffect, useState, ReactElement, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';

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
    <BrowserRouter>
      <Suspense fallback={<PageLayout title="" description="" />} />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
