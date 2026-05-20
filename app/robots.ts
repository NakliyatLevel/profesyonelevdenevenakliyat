import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://profesyonelevdenevenakliyat.com'

  return {
    rules: [
      // Google Bot - Tam erişim
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/karakar/', '/api/', '/admin/', '/private/', '/temp/', '/cache/', '/.env', '/config/', '/database/'],
        crawlDelay: 1,
      },
      // Google Image Bot
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/karakar/', '/api/', '/admin/', '/private/'],
      },
      // Bing Bot
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/karakar/', '/api/', '/admin/', '/private/', '/temp/', '/cache/', '/.env', '/config/', '/database/'],
        crawlDelay: 1,
      },
      // Yandex Bot
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/karakar/', '/api/', '/admin/', '/private/', '/temp/', '/cache/', '/.env', '/config/', '/database/'],
        crawlDelay: 1,
      },
      // Baidu Bot
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/karakar/', '/api/', '/admin/', '/private/', '/temp/', '/cache/', '/.env', '/config/', '/database/'],
        crawlDelay: 1,
      },
      // DuckDuckGo Bot
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/karakar/', '/api/', '/admin/', '/private/', '/temp/', '/cache/', '/.env', '/config/', '/database/'],
        crawlDelay: 1,
      },
      // Sosyal Medya Botları - Tam erişim
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: ['/karakar/', '/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: ['/karakar/', '/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: ['/karakar/', '/api/', '/admin/', '/private/'],
      },
      // Tüm diğer botlar - Kontrollü erişim
      {
        userAgent: '*',
        allow: [
          '/',
          '/hakkimizda',
          '/hizmetlerimiz',
          '/cozumlerimiz',
          '/hizmet-bolgeleri',
          '/bolge/',
          '/hizmet/',
          '/cozum/',
          '/teklif-al',
          '/iletisim',
          '/blog',
          '/galeri',
          '/sss',
          '/referanslar',
          '/images/',
          '/css/',
          '/js/',
          '/fonts/',
          '/*.css$',
          '/*.js$',
          '/*.woff$',
          '/*.woff2$',
          '/*.ttf$',
          '/*.svg$',
          '/*.png$',
          '/*.jpg$',
          '/*.jpeg$',
          '/*.gif$',
          '/*.webp$',
        ],
        disallow: [
          '/karakar/',
          '/api/',
          '/admin/',
          '/dashboard/',
          '/settings/',
          '/manage/',
          '/private/',
          '/temp/',
          '/cache/',
          '/backup/',
          '/uploads/private/',
          '/.git/',
          '/.env',
          '/config/',
          '/database/',
          '/*.json$',
          '/*.sql$',
          '/*.db$',
          '/*.log$',
          '/*.bak$',
          '/*.tmp$',
          '/*.zip$',
          '/*.rar$',
          '/*.tar$',
          '/*.gz$',
          '/tmp/',
          '/session/',
          '/cookies/',
        ],
        crawlDelay: 2,
      },
      // Kötü niyetli botlar - Tamamen yasaklı
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'SiteAuditBot',
        disallow: '/',
      },
      {
        userAgent: 'SEMrushBot',
        disallow: '/',
      },
      {
        userAgent: 'Majestic',
        disallow: '/',
      },
      {
        userAgent: 'Screaming Frog',
        disallow: '/',
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-0.xml`,
      `${baseUrl}/sitemap-1.xml`,
      `${baseUrl}/sitemap-2.xml`,
    ],
  }
}
