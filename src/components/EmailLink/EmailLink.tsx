import { useState } from 'react';

import useInterval from '../../hooks/useInterval';

const MESSAGES = [
  'hi',
  'hello',
  'hola',
  'you-can-email-me-at-literally-anything! Really',
  'well, not anything. But most things',
  'like-this',
  'or-this',
  'but not this :(  ',
  'you.can.also.email.me.with.specific.topics.like',
  'just-saying-hi',
  'please-work-for-us',
  'help',
  'admin',
  'or-I-really-like-your-website',
  'thanks',
];

function EmailLink() {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(MESSAGES[idx]);
  const [char, updateChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(isActive ? delay : null, () => {
    let newIdx = idx;
    let newChar = char;

    if (char - hold >= MESSAGES[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === MESSAGES.length) {
      updateIter(0);
      updateChar(0);
    } else {
      updateMessage(MESSAGES[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  });

  return (
    <div
      className=""
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < MESSAGES.length && setIsActive(true)}
    >
      <a href={`mailto:shaharzfrn@gmail.com?subject=${message}`}>
        <span>{message}</span>
        <span>@gmail.com</span>
      </a>
    </div>
  );
}

export default EmailLink;
