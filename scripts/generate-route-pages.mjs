import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const sourceHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(sourceHtmlPath)) {
  throw new Error('dist/index.html not found. Run the build before generating route pages.');
}

const sourceHtml = fs.readFileSync(sourceHtmlPath, 'utf8');

const routes = [
  {
    route: 'shop',
    title: 'Shop Natural Products in Kampala, Uganda | EVAYA Naturals',
    description:
      'Buy herbs, herbal supplements, oils, powders, teas, seeds, skincare, and wellness products in Kampala, Uganda from EVAYA Naturals.',
    canonical: 'https://evayanaturals.com/shop',
    ogType: 'website',
    ogImage: 'https://evayanaturals.com/assets/products/spices.png',
  },
  {
    route: 'wellness-hub',
    title: 'Wellness Hub | Natural Wellness Guides by EVAYA Naturals',
    description:
      'Explore EVAYA Naturals Wellness Hub for natural wellness education, herbal support categories, and supplement guidance in Uganda.',
    canonical: 'https://evayanaturals.com/wellness-hub',
    ogType: 'article',
    ogImage: 'https://evayanaturals.com/assets/products/about-hero.png',
  },
];

const replaceTagContent = (html, pattern, replacement) => html.replace(pattern, replacement);

for (const route of routes) {
  let html = sourceHtml;
  html = replaceTagContent(html, /<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
  html = replaceTagContent(
    html,
    /<meta name="description" content="[^"]*"\s*\/>/,
    `<meta name="description" content="${route.description}" />`,
  );
  html = replaceTagContent(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${route.canonical}" />`,
  );
  html = replaceTagContent(
    html,
    /<meta property="og:type" content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${route.ogType}" />`,
  );
  html = replaceTagContent(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${route.canonical}" />`,
  );
  html = replaceTagContent(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${route.title}" />`,
  );
  html = replaceTagContent(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${route.description}" />`,
  );
  html = replaceTagContent(
    html,
    /<meta property="og:image" content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${route.ogImage}" />`,
  );
  html = replaceTagContent(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${route.title}" />`,
  );
  html = replaceTagContent(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${route.description}" />`,
  );
  html = replaceTagContent(
    html,
    /<meta name="twitter:image" content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${route.ogImage}" />`,
  );

  const routeDir = path.join(distDir, route.route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
}
