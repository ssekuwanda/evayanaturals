import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import WellnessGoals from './components/WellnessGoals';
import BestSellers from './components/BestSellers';
import WhyChoose from './components/WhyChoose';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import WellnessHub from './components/WellnessHub';
import ShopPage from './components/ShopPage';

type Page = 'home' | 'wellness' | 'shop';

const PAGE_PATH: Record<Page, string> = {
  home: '/',
  shop: '/shop',
  wellness: '/wellness-hub',
};

const PAGE_SEO: Record<Page, { title: string; description: string; keywords: string; canonical: string }> = {
  home: {
    title: 'EVAYA Naturals | Premium Organic Spices, Herbal Supplements & Natural Products in Uganda',
    description:
      'Shop EVAYA Naturals for premium organic spices, herbal powders, cold-pressed oils, dried fruits, nuts, and wellness supplements. Same-day delivery in Kampala.',
    keywords:
      'organic spices Uganda, herbal supplements Kampala, natural products, cold-pressed oils, herbal powders, EVAYA Naturals',
    canonical: 'https://evayanaturals.com/',
  },
  shop: {
    title: 'Shop Natural Products | EVAYA Naturals Uganda',
    description:
      'Browse EVAYA Naturals shop for 160+ natural products, including herbs, oils, powders, teas, and wellness essentials in Uganda.',
    keywords:
      'shop natural products Uganda, herbal shop Kampala, batana oil, shilajit, moringa, turmeric, supplements',
    canonical: 'https://evayanaturals.com/shop',
  },
  wellness: {
    title: 'Wellness Hub | Natural Wellness Guides by EVAYA Naturals',
    description:
      'Explore EVAYA Naturals Wellness Hub for natural wellness education, supplement guidance, and herbal support categories for everyday health.',
    keywords:
      'wellness hub Uganda, natural wellness guide, herbal wellness tips, supplement guide Kampala',
    canonical: 'https://evayanaturals.com/wellness-hub',
  },
};

const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const applySeo = (page: Page) => {
  const seo = PAGE_SEO[page];
  document.title = seo.title;

  setMeta('meta[name="description"]', 'name', 'description', seo.description);
  setMeta('meta[name="keywords"]', 'name', 'keywords', seo.keywords);

  setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', seo.canonical);

  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
  setMeta('meta[name="twitter:url"]', 'name', 'twitter:url', seo.canonical);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seo.canonical);
};

const getPageFromLocation = (): { page: Page; shouldScrollTop: boolean } => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const hash = window.location.hash;

  if (path === '/shop' || hash === '#shop') {
    return { page: 'shop', shouldScrollTop: true };
  }
  if (path === '/wellness-hub' || hash === '#wellness-hub') {
    return { page: 'wellness', shouldScrollTop: true };
  }
  return { page: 'home', shouldScrollTop: hash === '' || hash === '#top' };
};

const App: React.FC = () => {
  const [page, setPage] = useState<Page>(() => getPageFromLocation().page);

  useEffect(() => {
    const syncPage = () => {
      const next = getPageFromLocation();
      setPage(next.page);
      if (next.shouldScrollTop) {
        window.scrollTo(0, 0);
      }
    };

    syncPage();
    window.addEventListener('hashchange', syncPage);
    window.addEventListener('popstate', syncPage);
    return () => {
      window.removeEventListener('hashchange', syncPage);
      window.removeEventListener('popstate', syncPage);
    };
  }, []);

  useEffect(() => {
    const expectedPath = PAGE_PATH[page];
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    const isHashRoute = window.location.hash === '#shop' || window.location.hash === '#wellness-hub';
    if ((currentPath !== expectedPath || isHashRoute) && !(page === 'home' && window.location.hash && !isHashRoute)) {
      const preserveSearch = page === 'shop' ? window.location.search : '';
      const preserveHash = page === 'home' ? window.location.hash : '';
      window.history.replaceState({}, '', `${expectedPath}${preserveSearch}${preserveHash}`);
    }
    applySeo(page);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'wellness':
        return <WellnessHub />;
      case 'shop':
        return <ShopPage />;
      default:
        return (
          <main>
            <Hero />
            <TrustStrip />
            <WellnessGoals />
            <BestSellers />
            <WhyChoose />
            <About />
            <Testimonials />
          </main>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-ev-cream text-ev-text selection:bg-ev-green selection:text-white overflow-x-hidden">
      <Navbar />
      {renderPage()}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
