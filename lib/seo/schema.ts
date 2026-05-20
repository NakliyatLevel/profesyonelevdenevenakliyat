import { getSiteSettings } from '@/lib/settings'

const FALLBACKS = {
  domain: 'https://profesyonelevdenevenakliyat.com',
  companyName: 'Profesyonel Evden Eve Nakliyat',
  description: 'Profesyonel evden eve nakliyat çözümleri ile İstanbul ve tüm Türkiye\'de yanınızdayız.',
  phone: '+90 555 123 4567',
  email: 'bilgi@profesyonelevdenevenakliyat.com',
  address: 'Loft Residence, Esentepe Mah. Büyükdere Cad. No:201 34394 Şişli / İstanbul',
  addressLocality: 'Şişli',
  addressRegion: 'İstanbul',
  addressPostalCode: '34394',
  addressCountry: 'TR',
  logoPath: '/placeholder-logo.svg',
}

const sanitizeDomain = (value?: string) => {
  if (!value) return FALLBACKS.domain
  const trimmed = value.trim()
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed.replace(/^\/+/, '')}`
}

const buildAbsoluteUrl = (path?: string, domain?: string) => {
  if (!path) return undefined
  if (/^https?:\/\//i.test(path)) return path
  if (path.startsWith('//')) return `https:${path}`
  const base = sanitizeDomain(domain)
  if (path.startsWith('/')) return `${base}${path}`
  return `${base}/${path}`
}

const buildAddress = (settings: Record<string, string>) => ({
  '@type': 'PostalAddress',
  streetAddress: settings.address || FALLBACKS.address,
  addressLocality: settings.address_locality || FALLBACKS.addressLocality,
  addressRegion: settings.address_region || FALLBACKS.addressRegion,
  postalCode: settings.address_postal_code || FALLBACKS.addressPostalCode,
  addressCountry: settings.address_country || FALLBACKS.addressCountry,
})

export async function generateLocalBusinessSchema() {
  const settings = await getSiteSettings()
  const domain = sanitizeDomain(settings.domain)
  const companyName = settings.company_name || settings.site_title || FALLBACKS.companyName
  const description = settings.seo_description || FALLBACKS.description
  const phone = settings.phone || FALLBACKS.phone
  const email = settings.email || FALLBACKS.email
  const logoUrl = buildAbsoluteUrl(settings.logo_url || FALLBACKS.logoPath, domain)
  const sameAs = [settings.facebook, settings.instagram, settings.twitter, settings.linkedin, settings.youtube].filter(Boolean)

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${domain}#moving-company`,
    name: companyName,
    description,
    url: domain,
    telephone: phone,
    email,
    address: buildAddress(settings),
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Turkey',
    },
  }

  if (logoUrl) {
    const imageObject = {
      '@type': 'ImageObject',
      url: logoUrl,
    }

    schema.image = imageObject
    schema.logo = imageObject
  }

  if (sameAs.length) {
    schema.sameAs = sameAs
  }

  return schema
}

export async function generateReviewSchema(reviews: any[]) {
  const settings = await getSiteSettings()
  const domain = sanitizeDomain(settings.domain)
  const companyName = settings.company_name || settings.site_title || FALLBACKS.companyName
  const reviewTarget = {
    '@type': 'MovingCompany',
    '@id': `${domain}#moving-company`,
    name: companyName,
    url: domain,
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: reviews.map((review, index) => ({
      '@type': 'Review',
      position: index + 1,
      itemReviewed: reviewTarget,
      author: {
        '@type': 'Person',
        name: review.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.comment,
      datePublished: new Date(review.createdAt).toISOString(),
    })),
  }
}

export function generateFAQSchema(faqs: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBlogPostSchema(post: any, settings: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.seoDesc,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: settings.company_name || settings.site_title,
    },
    publisher: {
      '@type': 'Organization',
      name: settings.company_name || settings.site_title,
      logo: {
        '@type': 'ImageObject',
        url: settings.logo_url,
      },
    },
  }
}
