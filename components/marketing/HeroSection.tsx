'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ShieldCheck,
  MapPin,
  Instagram,
  ArrowRight,
  Users,
  FileText,
  Phone,
  MessageCircle,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

type HeroSectionProps = {
  settings?: Record<string, string | null>
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const siteSettings = settings || {}
  const [heroForm, setHeroForm] = useState({
    fromCity: '',
    toCity: '',
    roomType: '1+1',
    fullName: '',
    phone: '',
  })
  const [heroSubmitLoading, setHeroSubmitLoading] = useState(false)
  const [heroSubmitMessage, setHeroSubmitMessage] = useState('')

  const isHeroPriceReady =
    Boolean(heroForm.fromCity.trim()) &&
    Boolean(heroForm.toCity.trim()) &&
    Boolean(heroForm.roomType.trim()) &&
    Boolean(heroForm.fullName.trim()) &&
    Boolean(heroForm.phone.trim())

  const heroRoomKey = heroForm.roomType.replace('+', '_')
  const heroPriceMinRaw = siteSettings[`hero_price_${heroRoomKey}_min`]
  const heroPriceMaxRaw = siteSettings[`hero_price_${heroRoomKey}_max`]
  const heroPriceMin = Number.parseInt((heroPriceMinRaw || '').toString().replace(/\./g, '').replace(/\s/g, ''), 10)
  const heroPriceMax = Number.parseInt((heroPriceMaxRaw || '').toString().replace(/\./g, '').replace(/\s/g, ''), 10)
  const hasHeroPriceRange = Number.isFinite(heroPriceMin) && Number.isFinite(heroPriceMax) && heroPriceMin > 0 && heroPriceMax > 0

  const heroWhatsappHref = (() => {
    if (!siteSettings.whatsapp) return ''
    const whatsappNumber = siteSettings.whatsapp.toString().replace(/\s/g, '')
    const text =
      `Hızlı Teklif Talebi%0A` +
      `Nereden: ${encodeURIComponent(heroForm.fromCity)}%0A` +
      `Nereye: ${encodeURIComponent(heroForm.toCity)}%0A` +
      `Ev Tipi: ${encodeURIComponent(heroForm.roomType)}%0A` +
      `Ad Soyad: ${encodeURIComponent(heroForm.fullName)}%0A` +
      `Telefon: ${encodeURIComponent(heroForm.phone)}`
    return `https://wa.me/${whatsappNumber}?text=${text}`
  })()

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setHeroSubmitMessage('')
    setHeroSubmitLoading(true)

    try {
      const response = await fetch('/api/hero-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: heroForm.fullName,
          phone: heroForm.phone,
          fromCity: heroForm.fromCity,
          toCity: heroForm.toCity,
          roomType: heroForm.roomType,
          priceMin: hasHeroPriceRange ? heroPriceMin : undefined,
          priceMax: hasHeroPriceRange ? heroPriceMax : undefined,
        }),
      })

      if (!response.ok) throw new Error('Gönderim başarısız')

      setHeroSubmitMessage('success')
      setHeroForm({
        fromCity: '',
        toCity: '',
        roomType: '1+1',
        fullName: '',
        phone: '',
      })
    } catch {
      setHeroSubmitMessage('error')
    } finally {
      setHeroSubmitLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, #1e455f 1px, transparent 1px),
          linear-gradient(to bottom, #1e455f 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-0 h-full w-[520px] bg-gradient-to-b from-sky-100/70 via-sky-50/40 to-transparent blur-2xl md:block hidden" />
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full border border-sky-200/60 md:block hidden" />
        <div className="absolute -right-6 top-44 h-96 w-96 rounded-full border border-sky-200/40 md:block hidden" />
      </div>

      <div className="container mx-auto px-4 pt-0 pb-2 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <div className="max-w-3xl">

            <div className="mt-6 space-y-3">
              <h1 className="text-[2.21rem] lg:text-[2.6rem] md:leading-[1] font-extrabold leading-[1.05] text-foreground">
                Profesyonel Evden Eve <span className="text-secondary">Nakliyat</span>
              </h1>

              <div className="text-[1.15rem] md:text-[1.45rem] font-semibold text-foreground">
                Türkiye&apos;nin Her Noktasına Uzman Taşıma Çözümleri
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                İstanbul çıkışlı şehirlerarası evden eve nakliyat operasyonlarımızla Türkiye&apos;nin tüm illerine sigortalı, sözleşmeli
                ve profesyonel taşıma hizmeti sunuyoruz.
              </p>
            </div>

            <div className="mt-6">
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm">
                <div className="grid grid-cols-2 gap-3 md:gap-6 items-stretch">
                  <div className="space-y-3 text-center md:text-left">
                    <div className="flex items-center gap-3 justify-center h-full md:gap-4 md:items-center">
                      <div className="flex justify-center md:justify-center">
                        <div className="w-14 md:w-[4.85rem] lg:w-[5.7rem]">
                          <Image
                            src="/trust.webp"
                            alt="Şikayet yok güven rozeti"
                            width={160}
                            height={160}
                            priority
                            sizes="(min-width: 1024px) 92px, (min-width: 768px) 76px, 56px"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                      <div className="space-y-1 flex-1 md:text-center">
                        <p className="text-emerald-600 font-black tracking-tight text-lg md:text-[1.575rem]">
                          Şikayet Yok!
                        </p>
                        <p className="text-muted-foreground text-[0.7rem] md:text-base leading-snug">
                          Müşteri memnuniyeti bizim için en büyük gururdur.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l border-emerald-100 pl-6 md:pl-6 ml-4 md:ml-0" style={{ display: 'flex', flexDirection: 'column', gap: '0.675rem' }}>
                    {[
                      {
                        icon: Users,
                        title: '600+',
                        description: 'Mutlu Müşteri',
                      },
                      {
                        icon: ShieldCheck,
                        title: 'Sigortalı',
                        description: 'Taşıma Garantisi',
                      },
                      {
                        icon: FileText,
                        title: 'Sözleşmeli',
                        description: '%100 Güven',
                      },
                    ].map((item) => (
                      <div key={item.title} className="flex items-center md:items-start gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-emerald-200 bg-white text-emerald-600 flex items-center justify-center">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[0.68rem] md:text-lg font-bold text-emerald-700">{item.title}</p>
                          <p className="text-[0.63rem] md:text-sm text-foreground font-medium">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="rounded-2xl border border-emerald-100 bg-white shadow-sm flex items-center gap-4 sm:gap-5 min-h-[70px]"
                style={{ padding: '1.5rem' }}
              >
                <div className="w-12 h-12 rounded-full bg-white border border-emerald-50 shadow flex items-center justify-center">
                  <Image
                    src="/google.png"
                    alt="Google puanı"
                    width={40}
                    height={40}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">Google&apos;da 4.9/5</p>
                  <div className="text-xl text-orange-500 leading-none">★★★★★</div>
                  <p className="text-sm text-muted-foreground mt-1">600+ Mutlu Müşteri</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                {siteSettings.instagram && (
                  <a
                    href={siteSettings.instagram.toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full min-h-[63px] justify-start gap-4 text-white hover:opacity-95"
                      style={{
                        padding: '1rem',
                        backgroundImage:
                          'linear-gradient(135deg, #405DE6 0%, #5B51D8 12%, #833AB4 24%, #C13584 38%, #E1306C 52%, #FD1D1D 66%, #F56040 78%, #FCAF45 90%, #FFDC80 100%)',
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                          <Instagram className="w-5 h-5" />
                        </span>
                        <span className="text-left leading-tight">
                          <span className="block text-sm font-semibold">Instagram</span>
                          <span className="block text-xs text-white/90">Bizi Takip Edin</span>
                        </span>
                      </span>
                      <ArrowRight className="w-5 h-5 text-white/90 ml-auto" />
                    </Button>
                  </a>
                )}

                <div className="rounded-2xl border border-border bg-white shadow-sm flex items-center gap-4 min-h-[63px] px-4 py-3 md:py-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[0.81rem] md:text-sm font-semibold text-foreground">Türkiye Geneli Hizmet</p>
                    <p className="text-[0.7rem] md:text-xs text-muted-foreground">81 ilde profesyonel taşıma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:pt-2 h-full">
            <div className="rounded-2xl bg-white border border-border shadow-sm p-6 h-full flex flex-col">
              {heroSubmitMessage !== 'success' ? (
                <>
                  <div className="text-center space-y-1">
                    <div className="text-xl font-bold text-foreground">Hızlı Teklif Alın</div>
                    <div className="text-sm text-muted-foreground">2 dakikada ücretsiz fiyat teklifi</div>
                  </div>

                  <form onSubmit={handleHeroSubmit} className="mt-6 space-y-4 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">İl (Nereden)</label>
                        <input
                          type="text"
                          value={heroForm.fromCity}
                          onChange={(e) => setHeroForm((p) => ({ ...p, fromCity: e.target.value }))}
                          placeholder="Örn: İstanbul"
                          className="w-full px-4 py-3 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">İl (Nereye)</label>
                        <input
                          type="text"
                          value={heroForm.toCity}
                          onChange={(e) => setHeroForm((p) => ({ ...p, toCity: e.target.value }))}
                          placeholder="Örn: Ankara"
                          className="w-full px-4 py-3 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Ev Tipi</label>
                      <div className="grid grid-cols-5 gap-2">
                        {['1+0', '1+1', '2+1', '3+1', '4+1'].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setHeroForm((p) => ({ ...p, roomType: t }))}
                            className={
                              `h-10 rounded-md border text-sm font-medium transition-colors ` +
                              (heroForm.roomType === t
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-white text-foreground border-border hover:bg-muted')
                            }
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Ad Soyad</label>
                        <input
                          type="text"
                          value={heroForm.fullName}
                          onChange={(e) => setHeroForm((p) => ({ ...p, fullName: e.target.value }))}
                          placeholder="Örn: Ahmet Yılmaz"
                          className="w-full px-4 py-3 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                        <input
                          type="tel"
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm((p) => ({ ...p, phone: e.target.value }))}
                          placeholder="0555 555 55 55"
                          className="w-full px-4 py-3 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-ring/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {isHeroPriceReady && hasHeroPriceRange && (
                      <div className="rounded-xl border border-border bg-gradient-to-br from-muted/50 to-white p-4 text-center">
                        <div className="text-xs text-muted-foreground">Tahmini fiyat aralığındadır</div>
                        <div className="mt-1 text-2xl font-extrabold text-foreground">
                          {heroPriceMin.toLocaleString('tr-TR')} TL - {heroPriceMax.toLocaleString('tr-TR')} TL
                        </div>
                        <div className="mt-2 text-xs text-muted-foreground leading-relaxed">
                          Daha net fiyat için bilgilerinizi gönderin veya WhatsApp üzerinden paylaşın, ekibimiz size hızlıca dönüş yapsın.
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button type="submit" disabled={heroSubmitLoading} className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 font-semibold">
                        {heroSubmitLoading ? 'Gönderiliyor...' : 'Gönder'}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>

                      {siteSettings.whatsapp ? (
                        <a
                          href={heroWhatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 font-semibold">
                            WhatsApp Gönder
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </a>
                      ) : (
                        <div className="hidden sm:block" />
                      )}
                    </div>

                    <div className="text-xs text-muted-foreground text-center">
                      Bilgilerinizi aldıktan sonra en kısa sürede sizinle iletişime geçeceğiz.
                    </div>

                    {heroSubmitMessage === 'error' && (
                      <div className="text-xs text-center text-red-600 bg-red-50 p-3 rounded-lg">
                        Bir hata oluştu. Lütfen tekrar deneyin.
                      </div>
                    )}
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full space-y-6 py-8">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground">Mailiniz İletildi!</h3>
                    <p className="text-sm text-muted-foreground">Teklif talebiniz başarıyla alındı.</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg space-y-3 w-full">
                    <p className="text-xs text-blue-900 font-semibold">
                      En kısa sürede sizinle iletişime geçeceğiz. Bize ulaşabilirsiniz:
                    </p>
                    
                    <div className="space-y-2">
                      {siteSettings.phone && (
                      <a 
                        href={`tel:${siteSettings.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 p-2 bg-white rounded hover:bg-blue-50 transition text-xs"
                      >
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Telefon</p>
                          <p className="text-muted-foreground">{siteSettings.phone}</p>
                        </div>
                      </a>
                    )}
                    
                    {siteSettings.whatsapp && (
                      <a 
                        href={`https://wa.me/${siteSettings.whatsapp.toString().replace(/\s/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2 bg-white rounded hover:bg-blue-50 transition text-xs"
                        >
                          <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-foreground">WhatsApp</p>
                            <p className="text-muted-foreground">{siteSettings.whatsapp}</p>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={() => {
                      setHeroSubmitMessage('')
                      setHeroForm({
                        fromCity: '',
                        toCity: '',
                        roomType: '1+1',
                        fullName: '',
                        phone: '',
                      })
                    }}
                    className="w-full"
                  >
                    Yeni Teklif Talep Et
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}
