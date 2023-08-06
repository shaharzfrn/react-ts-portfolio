import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../assets/data/contact';

function ContactIcons() {
  return (
    <ul className="icons">
      {data.map((s) => (
        <li key={s.label}>
          <a href={s.link}>
            <FontAwesomeIcon icon={s.icon} className="icon" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ContactIcons;
