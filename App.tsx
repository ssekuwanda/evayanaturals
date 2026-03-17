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
import Faq from './components/Faq';
import { faqItems } from './components/faqData';

type Page = 'home' | 'wellness' | 'shop';

const PAGE_PATH: Record<Page, string> = {
  home: '/',
  shop: '/shop',
  wellness: '/wellness-hub',
};

const DEFAULT_OG_IMAGE = 'https://evayanaturals.com/assets/products/about-hero.png';

const PAGE_SEO: Record<
  Page,
  {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    ogImage: string;
    ogType: 'website' | 'article';
  }
> = {
  home: {
    title: 'EVAYA Naturals | Premium Organic Spices, Herbal Supplements & Natural Products in Kampala, Uganda',
    description:
      'Shop EVAYA Naturals in Kampala, Uganda for premium organic spices, herbal supplements, cold-pressed oils, herbal powders, teas, and wellness products. 160+ natural products. Same-day delivery across Kampala. Located at Kyato complex, next to Equatorial Mall.',
    keywords:
      'organic spices Uganda, herbal supplements Kampala, natural products Uganda, natural health shop Kampala, herbal powders Uganda, cold-pressed oils Kampala, natural wellness shop Uganda, herbal store Kampala, EVAYA Naturals Uganda',
    canonical: 'https://evayanaturals.com/',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
  },
  shop: {
    title: 'Shop Natural Products in Kampala, Uganda | EVAYA Naturals — Herbs, Oils & Supplements',
    description:
      'Buy herbs, herbal supplements, cold-pressed oils, powders, teas, seeds, skincare, and wellness products in Kampala, Uganda. EVAYA Naturals stocks shilajit, maca, ashwagandha, batana oil, matcha, reishi, tongkat ali, elderberry, moringa, sea moss, black seed oil, and 160+ more natural products. Order via WhatsApp for same-day delivery in Kampala.',
    keywords:
      'natural products Kampala Uganda, herbal shop Kampala, buy herbs Uganda, supplements Kampala, herbal supplements Uganda, batana oil Kampala, shilajit Uganda, maca Kampala, ashwagandha Uganda, reishi mushroom Kampala, tongkat ali Uganda, elderberry Kampala, matcha Uganda, black seed oil Kampala, moringa powder Uganda, sea moss Uganda, EVAYA Naturals shop',
    canonical: 'https://evayanaturals.com/shop',
    ogImage: 'https://evayanaturals.com/assets/products/spices.png',
    ogType: 'website',
  },
  wellness: {
    title: 'Wellness Hub | Natural Wellness Guides by EVAYA Naturals',
    description:
      'Explore EVAYA Naturals Wellness Hub for natural wellness education, supplement guidance, and herbal support categories for everyday health.',
    keywords:
      'wellness hub Uganda, natural wellness guide, herbal wellness tips, supplement guide Kampala, natural remedies Uganda',
    canonical: 'https://evayanaturals.com/wellness-hub',
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'article',
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

const setStructuredData = (id: string, data: Record<string, unknown>) => {
  let el = document.head.querySelector<HTMLScriptElement>(`script[data-seo-schema="${id}"]`);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-seo-schema', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

const getRouteSchema = (page: Page) => {
  if (page === 'shop') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          '@id': 'https://evayanaturals.com/shop#webpage',
          url: 'https://evayanaturals.com/shop',
          name: 'Natural Products Shop in Kampala, Uganda — EVAYA Naturals',
          description: PAGE_SEO.shop.description,
          isPartOf: {
            '@id': 'https://evayanaturals.com/#website',
          },
          about: [
            'Herbal Supplements Kampala',
            'Herbal Powders Uganda',
            'Oils & Butters Kampala',
            'Herbal Teas Uganda',
            'Spices & Herbs Kampala',
            'Skincare Uganda',
            'Hair Care Kampala',
            'Wellness Products Uganda',
            'Seeds & Superfoods Kampala',
          ],
          provider: {
            '@id': 'https://evayanaturals.com/#store',
          },
          breadcrumb: {
            '@id': 'https://evayanaturals.com/shop#breadcrumb',
          },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.seo-description'],
          },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': 'https://evayanaturals.com/shop#breadcrumb',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://evayanaturals.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Shop Natural Products in Kampala',
              item: 'https://evayanaturals.com/shop',
            },
          ],
        },
      ],
    };
  }

  if (page === 'wellness') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': 'https://evayanaturals.com/wellness-hub#webpage',
      url: 'https://evayanaturals.com/wellness-hub',
      name: 'EVAYA Naturals Wellness Hub',
      description: PAGE_SEO.wellness.description,
      isPartOf: {
        '@id': 'https://evayanaturals.com/#website',
      },
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://evayanaturals.com/#webpage',
        url: 'https://evayanaturals.com/',
        name: 'EVAYA Naturals',
        description: PAGE_SEO.home.description,
        isPartOf: {
          '@id': 'https://evayanaturals.com/#website',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://evayanaturals.com/#faq',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };
};

const applySeo = (page: Page) => {
  const seo = PAGE_SEO[page];
  document.title = seo.title;

  setMeta('meta[name="description"]', 'name', 'description', seo.description);
  setMeta('meta[name="keywords"]', 'name', 'keywords', seo.keywords);
  setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

  setMeta('meta[property="og:type"]', 'property', 'og:type', seo.ogType);
  setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
  setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
  setMeta('meta[property="og:url"]', 'property', 'og:url', seo.canonical);
  setMeta('meta[property="og:image"]', 'property', 'og:image', seo.ogImage);
  setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${seo.title} | EVAYA Naturals`);

  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', seo.ogImage);
  setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', `${seo.title} | EVAYA Naturals`);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seo.canonical);

  setStructuredData('route', getRouteSchema(page));
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
            <Faq />
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
