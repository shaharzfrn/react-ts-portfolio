import { useState } from 'react';
import useInterval from '../../hooks/useInterval';

function Age() {
  const [age, setAge] = useState<string>();

  useInterval(25, () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-01-06T09:24:00');
    const currentAge = (Date.now() - birthTime.getTime()) / divisor;
    setAge(currentAge.toFixed(11));
  });
  // <div className='age'>{age}</div>
  return age;
}

export default Age;
