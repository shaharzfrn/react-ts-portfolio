import Hero from './Hero';
import Blurb from './Blurb';
import Footer from './Footer';

function Sidebar() {
  return (
    <>
      {/* <div className="page-sidebar"> */}
      <Hero />
      <Blurb />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default Sidebar;
