const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Адрес сайта
const BASE_URL = 'https://uralblast.ru';

const sitemap = new SitemapStream({ hostname: BASE_URL });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

// Список страниц
const urls = [
  "/", 
  "/products/", 
  "/parts/", 
  "/parts/side-armor",
  "/parts/camera",
  "/parts/wheel",
  "/parts/impeller",
  "/parts/ladle",
  "/parts/blade",
  "/parts/auger",
  "/parts/curtain",
  "/parts/end-armor",
  "/parts/upper-armor",
  "/parts/camera-armor",
  "/parts/auger-armor",
  "/products/kran-tip",
  "/products/barabanniy-tip",
  "/products/prohodnoy-tip",
  "/products/ochistka-trub",
  "/products/ochistka-svelera",
  "/products/vraschayushchiy-stol",
  "/products/lentochniy-konveer",
  "/products/vykatnoy-stol",
  "/products/turbina",
  "/products/parts"
];

// Добавляем страницы в sitemap
urls.forEach(url => {
  sitemap.write({
    url,
    changefreq: 'weekly',
    priority: 0.8
  });
});

sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log('✅ Sitemap generated at ./public/sitemap.xml'))
  .catch(err => console.error('❌ Error generating sitemap:', err));
