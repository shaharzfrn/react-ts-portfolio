import { Suspense } from 'react';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';

import Page from './layouts/Page';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './sass/main.scss';

function App() {
  return (
    <HashRouter
      basename={import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}
    >
      <Suspense fallback={<Page title="" description="" />} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
