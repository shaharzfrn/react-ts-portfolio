import { Link } from 'react-router-dom';
import Section from '../../components/Section/Section';

function Extra() {
  return (
    <Section id="extra">
      <Section.Header>
        <h1 className="text-uppercase fw-bold clr-neutral-900 fs-500 text-center margin-block-end-4 tracking-wide">
          Extra
        </h1>
      </Section.Header>
      <p className="fw-semi-bold text-uppercase text-center clr-neutral-900 fs-200">
        <Link to="/contact" className="border-bottom-0">
          References are available upon request
        </Link>
      </p>
    </Section>
  );
}

export default Extra;
