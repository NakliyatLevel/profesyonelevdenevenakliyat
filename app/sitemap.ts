import { MetadataRoute } from 'next'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://profesyonelevdenevenakliyat.com'

  // ===== ANA SAYFALAR - PRIORITY 1.0 - 0.9 =====
  // Kritik sayfalar, günlük güncelleme
  const staticPages = [
    // Ana Sayfa - Kritik (Priority: 1.0)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    
    // ===== HİZMET SAYFALARI - PRIORITY 0.9 =====
    // Hizmetlerimiz - Ana hizmet sayfası
    {
      url: `${baseUrl}/hizmetlerimiz`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    
    // Çözümlerimiz - Ana çözüm sayfası
    {
      url: `${baseUrl}/cozumlerimiz`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    
    // Hizmet Bölgeleri - Ana bölge sayfası
    {
      url: `${baseUrl}/hizmet-bolgeleri`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    
    // ===== DÖNÜŞÜM SAYFALARI - PRIORITY 0.8 =====
    // Teklif Al - Yüksek dönüşüm sayfası
    {
      url: `${baseUrl}/teklif-al`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    
    // Blog - İçerik merkezi
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    
    // İletişim - Dönüşüm sayfası
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    
    // ===== BİLGİ SAYFALARI - PRIORITY 0.7 =====
    // Hakkımızda - Kurumsal bilgi
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    
    // Referanslar - Sosyal kanıt
    {
      url: `${baseUrl}/referanslar`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    
    // Galeri - Görsel içerik
    {
      url: `${baseUrl}/galeri`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    
    // ===== DESTEK SAYFALARI - PRIORITY 0.6 =====
    // SSS - Sık sorulan sorular
    {
      url: `${baseUrl}/sss`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]

  // ===== BLOG YAZILARI - PRIORITY 0.7 =====
  // Dinamik blog içeriği, haftalık güncelleme
  const posts = await prisma.post.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true, publishedAt: true },
    orderBy: { publishedAt: 'desc' },
  }).catch(() => [])

  const blogPages = posts.map((post, index) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: index === 0 ? ('weekly' as const) : ('monthly' as const),
    priority: index === 0 ? 0.75 : 0.7,
  }))

  // ===== DİNAMİK SAYFALAR - PRIORITY 0.6 =====
  // Özel sayfalar, aylık güncelleme
  const pages = await prisma.page.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  }).catch(() => [])

  const dynamicPages = pages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: page.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // ===== HİZMET BÖLGELERİ - PRIORITY 0.8 =====
  // Türkiye'nin 81 ili, aylık güncelleme
  const serviceAreas = await prisma.serviceArea.findMany({
    where: { active: true },
    select: { slug: true, updatedAt: true, city: true, order: true },
    orderBy: { order: 'asc' },
  }).catch(() => [])

  const areaPages = serviceAreas.map((area, index) => ({
    url: `${baseUrl}/bolge/${area.slug}`,
    lastModified: area.updatedAt,
    changeFrequency: 'monthly' as const,
    // İlk 10 bölge daha yüksek priority
    priority: index < 10 ? 0.85 : 0.8,
  }))

  // ===== HİZMETLER - PRIORITY 0.8 =====
  // Hizmet detay sayfaları, aylık güncelleme
  const services = await prisma.service.findMany({
    where: { active: true, showOnHomepage: true },
    select: { slug: true, updatedAt: true, order: true },
    orderBy: { order: 'asc' },
  }).catch(() => [])

  const servicePages = services.map((service, index) => ({
    url: `${baseUrl}/hizmet/${service.slug}`,
    lastModified: service.updatedAt,
    changeFrequency: 'monthly' as const,
    // İlk 5 hizmet daha yüksek priority
    priority: index < 5 ? 0.85 : 0.8,
  }))

  // ===== ÇÖZÜMLER - PRIORITY 0.8 =====
  // Çözüm detay sayfaları, aylık güncelleme
  const solutions = await prisma.solution.findMany({
    where: { active: true },
    select: { slug: true, updatedAt: true, order: true },
    orderBy: { order: 'asc' },
  }).catch(() => [])

  const solutionPages = solutions.map((solution, index) => ({
    url: `${baseUrl}/cozum/${solution.slug}`,
    lastModified: solution.updatedAt,
    changeFrequency: 'monthly' as const,
    // İlk 5 çözüm daha yüksek priority
    priority: index < 5 ? 0.85 : 0.8,
  }))

  // ===== GALERİ ALT SAYFALARI - PRIORITY 0.6 =====
  // Galeri kategorileri
  const galleryPages = [
    {
      url: `${baseUrl}/galeri/araclarimiz`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/galeri/paketleme`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/galeri/videolar`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Tüm sayfaları birleştir ve döndür
  return [
    ...staticPages,
    ...servicePages,
    ...solutionPages,
    ...areaPages,
    ...blogPages,
    ...dynamicPages,
    ...galleryPages,
  ]
}
