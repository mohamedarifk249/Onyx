import { useRef } from 'react';
import useReveal from './hooks/useReveal';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ComingSoon from './pages/ComingSoon';
import { RouterProvider, useRouter } from './router';
import { SiteSettingsProvider } from './context/SiteSettings';

const PAGES = {
  '/contact': Contact,
  '/services': Services,
  '/about': AboutUs,
  '/certifications': ComingSoon,
};

function Shell() {
  const containerRef = useRef(null);
  const { path } = useRouter();
  useReveal(containerRef, [path]);

  const Page = PAGES[path] || Home;

  return (
    <div ref={containerRef}>
      <Navbar />
      <main key={path} className="page-transition">
        <Page />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <SiteSettingsProvider>
      <RouterProvider>
        <Shell />
      </RouterProvider>
    </SiteSettingsProvider>
  );
}

export default App;
