import { Link } from 'react-router-dom';
import ContactIcons from '../ContactIcons';
import { BRAND, DOMAIN } from '../../assets/data/consts';

function Footer() {
  return (
    <div className="page-footer sidebar-item | flow | padding-block-end-4 lg:padding-block-end-0 clr-neutral-400">
      <ContactIcons />
      <p className="copyright | padding-block-start-5 | text-uppercase tracking-wide fs-100 margin-block-end-4">
        &copy; {BRAND}{' '}
        <Link to="/" className="">
          {DOMAIN}
        </Link>
        .
      </p>
    </div>
  );
}

export default Footer;
