import { prisma } from '@/lib/db'
import { getSiteSettings } from '@/lib/settings'
import { notFound } from 'next/navigation'
import { PageHeading } from '@/components/ui/page-heading'
import { CheckCircle, Phone, Mail, Clock, ArrowRight, Home, Building2, Package, ClipboardList, Plane, Truck } from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, any> = {
  'evden-eve-nakliyat': Home,
  'ofis-tasimaciligi': Building2,
  'esya-depolama': Package,
  'paketleme-hizmeti': ClipboardList,
  'uluslararasi-nakliyat': Plane,
  'parca-esya-tasima': Truck,
}

type ServiceContent = {
  tagline: string
  intro: string
  bulletSections: {
    title: string
    items: string[]
  }[]
  table: {
    caption: string
    headers: string[]
    rows: string[][]
  }
  closing: string
  note?: string
}

const serviceContentMap: Record<string, ServiceContent> = {
  'ev-tasima': {
    tagline: 'Profesyonel Evden Eve Nakliyat disiplinini ev taşıma süreçlerinde uçtan uca uyguluyoruz.',
    intro:
      'Keşiften paketlemeye, yüksek kat indirmeden yeni evinizdeki kurulumlara kadar tüm ev taşıma adımlarını tek merkezden yönetiyoruz. Her bölge için oluşturduğumuz rota planları ve kat bazlı ekip organizasyonları sayesinde taşınma gününüz tahmin edilebilir ve stressiz ilerler.',
    bulletSections: [
      {
        title: 'Hazırlık Aşaması',
        items: [
          'Dijital envanter listesi ve oda bazlı fotoğraflama ile kayıt altına alma',
          'Profesyonel Evden Eve Nakliyat standartlarında ambalaj malzemesi seçimi',
          'Asansör kurulumu ve bina yönetimi izinlerinin tarafımızdan koordine edilmesi',
        ],
      },
      {
        title: 'Operasyon Adımları',
        items: [
          'Demontaj-montaj işlemlerinde yetkin marangoz desteği',
          'Beyaz eşya için özel kalıp ve darbe emici koruma',
          'Teslim sonrası oda yerleşimini içeren kontrol listesi',
        ],
      },
    ],
    table: {
      caption: 'Ev Taşıma Paketleri',
      headers: ['Paket', 'İçerik', 'Ortalama Süre'],
      rows: [
        ['Standart', 'Keşif + paketleme + taşıma', '1 iş günü'],
        ['Premium', 'Standart + temizlik + dekoratif yerleşim', '1-2 iş günü'],
        ['Elite', 'Premium + mini tadilat ve perde montajı', '2 iş günü'],
      ],
    },
    closing:
      'Her ev tesliminde Profesyonel Evden Eve Nakliyat kalite kontrol formu imzalatır, süreç boyunca tek irtibat noktasından sizi bilgilendiririz.',
  },
  'villa-tasimaciligi': {
    tagline: 'Profesyonel Evden Eve Nakliyat yaklaşımlı villa taşımalarında peyzajdan güvenliğe tüm ayrıntıları yönetiyoruz.',
    intro:
      'Çok katlı, geniş metrekareli veya müstakil yaşam alanlarında hassas taşınması gereken sanat eserleri, akıllı ev sistemleri ve dış mekan mobilyaları için uzman ekipler görevlendiriyoruz.',
    bulletSections: [
      {
        title: 'Villa Lojistik Planı',
        items: [
          'Site güvenliği ve yönetimi ile ortak takvim belirleme',
          'Bodrum, çatı ve depo alanları için ayrı ekip kurgusu',
          'Bahçe, havuz ve peyzaj ekipmanlarının söküm dosyası',
        ],
      },
      {
        title: 'Ekstra Koruma',
        items: [
          'Klima, şömine ve akıllı ev modülleri için teknik servis eş güdümü',
          'Değerli koleksiyonlar için iklim kontrollü taşıma kutuları',
          'Çift yönlü sigorta poliçesi ve anlık takip raporları',
        ],
      },
    ],
    table: {
      caption: 'Villa Taşımacılığı Paketleri',
      headers: ['Aşamalar', 'Detay', 'Süre'],
      rows: [
        ['Planlama', 'Keşif + güvenlik izinleri', '2 gün'],
        ['Operasyon', 'Paketleme + taşıma + kurulum', '2-3 gün'],
        ['Teslim', 'Bahçe ve iç mekan final kontrolleri', '1 gün'],
      ],
    },
    closing:
      'Villa taşımalarında her katman için ayrı sorumlu atar, Profesyonel Evden Eve Nakliyat standartlarında VIP raporlama sunarız.',
  },
  'yali-tasimaciligi': {
    tagline: 'Boğaz hattı ve kıyı şeridi lojistiğini bilen Profesyonel Evden Eve Nakliyat ekibiyle yalı taşımalarını yönetiyoruz.',
    intro:
      'Koruma altındaki yapıların hassasiyetini gözetir, rıhtım, iskele ve dar sokak erişimlerinde özel araç filosu kullanırız. Nadir eserler için mikro iklimlendirme sağlarız.',
    bulletSections: [
      {
        title: 'Yapısal Uyumluluk',
        items: [
          'Koruma kurulu izin süreçlerine danışmanlık',
          'Tarihi ahşap ve mermer yüzeyler için çizik önleyici uygulama',
          'Nem, tuzluluk ve rüzgâr etkisine göre paketleme',
        ],
      },
      {
        title: 'Güvenlik ve Sigorta',
        items: [
          'Limit üstü sigorta poliçeleri ve eksper raporları',
          '24/7 güvenlik kameraları ile yükleme takibi',
          'Kıyı geçiş saatleri için özel güzergâh planı',
        ],
      },
    ],
    table: {
      caption: 'Yalı Taşımacılığı Hizmet Tablosu',
      headers: ['Modül', 'Kapsam', 'Denetim'],
      rows: [
        ['Sanat Eseri Taşıma', 'Isı-nem kontrollü kasalar', 'Küratör onayı'],
        ['İskele Operasyonu', 'Vinç + deniz ulaşımı koordinasyonu', 'Liman Başkanlığı izinleri'],
        ['İç Mekan Kurulum', 'Kalıp destekleri ve sabitleme', 'Mimar/İç mimar eşliğinde'],
      ],
    },
    closing:
      'Yalı taşımalarında Profesyonel Evden Eve Nakliyat disiplinini kültürel miras hassasiyetiyle birleştiriyoruz.',
  },
  'parca-esya-tasimaciligi': {
    tagline: 'Profesyonel Evden Eve Nakliyat organizasyon yapımızla her parça eşya hareketini optimize ediyoruz.',
    intro:
      'Birkaç mobilya, beyaz eşya veya sezonluk kullanım eşyalarınızı, komple nakliyat kadar şeffaf ve sigortalı süreçlerle taşıyoruz. Paylaşımlı rota planı sayesinde bütçe dostu seçenekler sunuyoruz.',
    bulletSections: [
      {
        title: 'Hızlı Planlama',
        items: [
          'Online rezervasyon ve anlık fiyatlandırma',
          'Mikro paketleme çözümleri ve QR kodlu etiketleme',
          'Teslim noktasında fotoğraflı teslim tutanağı',
        ],
      },
      {
        title: 'Esnek Teslimat',
        items: [
          'Gün içi ekspres veya planlı teslim alternatifleri',
          'Depolama entegrasyonu ile ileri tarihli sevkiyat',
          'Farklı alıcı adreslerine bölünmüş teslim seçeneği',
        ],
      },
    ],
    table: {
      caption: 'Parça Eşya Paketleri',
      headers: ['Paket', 'Adet/Sınır', 'Süre'],
      rows: [
        ['Mini', '0-5 koli veya 1 mobilya', '24 saat'],
        ['Midi', '6-15 koli + 2 mobilya', '36 saat'],
        ['Maxi', '15+ koli veya beyaz eşya seti', '48 saat'],
      ],
    },
    closing:
      'Her teslimatta Profesyonel Evden Eve Nakliyat standartlarında sigorta ve dijital imza sunarız.',
  },
  'sehir-ici-nakliyat': {
    tagline: 'Profesyonel Evden Eve Nakliyat akışıyla şehir içi taşınmalarda trafik ve bina kurallarını yönetiyoruz.',
    intro:
      'İstanbul, Ankara, İzmir gibi yoğun metropollerde trafik saatleri, park izinleri ve site kurallarını dikkate alarak dakik plan yapıyoruz.',
    bulletSections: [
      {
        title: 'Şehir İçi Strateji',
        items: [
          'Belediye ve site taşıma izinlerinin alınması',
          'Çift asansör kurulumu ile yükleme-boşaltma hızlandırması',
          'Trafik yoğunluk haritasına göre rota optimizasyonu',
        ],
      },
      {
        title: 'Konfor Odaklılık',
        items: [
          'Kısa süreli depolama ile yeni ev hazırlığına zaman tanıma',
          'Evcil hayvan ve bitki taşıma kitleri',
          'Temizlik ve dezenfeksiyon desteği',
        ],
      },
    ],
    table: {
      caption: 'Şehir İçi Operasyon Planı',
      headers: ['Adım', 'Sorumlu', 'Zaman'],
      rows: [
        ['İzin ve Planlama', 'Operasyon Yöneticisi', '48 saat önce'],
        ['Paketleme & Yükleme', 'Saha Ekibi', 'Taşıma günü sabahı'],
        ['Teslim & Kontrol', 'Süpervizör', 'Taşıma günü öğleden sonra'],
      ],
    },
    closing:
      'Şehir içi taşımacılıkta da Profesyonel Evden Eve Nakliyat kalitesini garantiliyoruz.',
  },
  'sehirler-arasi-nakliyat': {
    tagline: 'Profesyonel Evden Eve Nakliyat vizyonu ile şehirler arası rotalarda çift yönlü planlama yapıyoruz.',
    intro:
      '81 ilin tamamında anlaşmalı depolarımız ve aktarma merkezlerimiz bulunur. Uzun mesafe taşımalarda iklimlendirilmiş araçlarımız devrededir.',
    bulletSections: [
      {
        title: 'Rota Güvenliği',
        items: [
          'GPS ve sıcaklık sensörlü araç takip sistemi',
          'Dinlenme tesisi planlaması ve iki şoförlü operasyon',
          'İl-ilçe bazlı sigorta teminatları',
        ],
      },
      {
        title: 'Müşteri Deneyimi',
        items: [
          'Günlük durum raporu ve fotoğraf paylaşımı',
          'Varışta yeni ev hazırlık ekibi',
          'Depolama + teslim kombinasyonu',
        ],
      },
    ],
    table: {
      caption: 'Şehirler Arası Paketler',
      headers: ['Mesafe', 'Araç Tipi', 'Teslimat'],
      rows: [
        ['0-400 km', 'Orta kamyon', '24 saat'],
        ['400-800 km', 'Mega kamyon', '36-48 saat'],
        ['800 km+', 'Çift şoför premium', '48-72 saat'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat standartlarımızla ülke çapında aynı kaliteyi yaşarsınız.',
  },
  'ofis-tasimaciligi': {
    tagline: 'Kurumsal ofis taşımalarında Profesyonel Evden Eve Nakliyat disipliniyle iş sürekliliğini koruyoruz.',
    intro:
      'IT altyapısı, arşivler, açık ofis mobilyaları ve ortak alan donanımları için ayrı ekipler kuruyor; hafta sonu ve gece operasyonlarıyla kesintiyi minimuma indiriyoruz.',
    bulletSections: [
      {
        title: 'Ofis Taşıma Modülleri',
        items: [
          'Rack kabinet ve sunucu odası sökümü için uzman ekip',
          'Çalışan dolapları ve kişisel eşyalar için kilitli koli sistemi',
          'Yeni lokasyonda masa-planına göre numaralandırma',
        ],
      },
      {
        title: 'Yönetim Raporlaması',
        items: [
          'Gantt tabanlı zaman çizelgesi paylaşımı',
          'Risk analizi ve B planı dökümanı',
          'Taşınma sonrası tutanak ve performans raporu',
        ],
      },
    ],
    table: {
      caption: 'Ofis Taşıma Paketleri',
      headers: ['Birim', 'Kapsam', 'Süre'],
      rows: [
        ['XS (0-25 çalışan)', 'Standart taşınma', '1 gün'],
        ['M (25-100 çalışan)', 'Standart + IT koordinasyonu', '2 gün'],
        ['XL (100+ çalışan)', 'Modüler taşınma + çoklu vardiya', '3-4 gün'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat bakış açımızla iş sürekliliğinizi koruyan ofis taşımacılığı sunuyoruz.',
  },
  'kurumsal-tasimaciligi': {
    tagline: 'Profesyonel Evden Eve Nakliyat omurgası üzerinde çok lokasyonlu kurumsal taşımaları yönetiyoruz.',
    intro:
      'Holding, zincir mağaza ve çok lokasyonlu şirketler için merkez ofis, şube ve depo taşımalarını tek sözleşme altında topluyoruz.',
    bulletSections: [
      {
        title: 'Kurumsal Yönetim',
        items: [
          'SLA ve KPI içeren sözleşme yapısı',
          'Şube bazlı taşınma takvimi ve stok sayımı',
          'Çapraz şehir ekip planlaması',
        ],
      },
      {
        title: 'Destek Servisleri',
        items: [
          'Depolama, arşiv ve imha hizmetleri',
          'Personel taşıma ve konaklama koordinasyonu',
          'Kurumsal iletişim ve iç duyuru kitleri',
        ],
      },
    ],
    table: {
      caption: 'Kurumsal Paket Tablosu',
      headers: ['Program', 'Kapsam', 'Denetim'],
      rows: [
        ['Pilot', '2 şube + merkez taşıması', 'Operasyon direktörü'],
        ['Bölgesel', '5-10 şube', 'Saha süpervizörü'],
        ['Ulusal', '10+ şube', 'Kurumsal proje yöneticisi'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat yaklaşımıyla her şube tesliminde aynı kaliteyi standartlaştırıyoruz.',
  },
  'fabrika-tasimaciligi': {
    tagline: 'Endüstriyel üretim tesislerini Profesyonel Evden Eve Nakliyat prensibiyle, ancak sanayi standartlarında taşıyoruz.',
    intro:
      'Ağır makine, üretim hattı, kalıp ve laboratuvar taşımalarında mühendislerimiz saha analizi yapar, elektrik-mekanik sökümlerini sertifikalı ekiplerimiz yürütür.',
    bulletSections: [
      {
        title: 'Teknik Süreç',
        items: [
          'Makine etiketleme ve kablo numaralandırma',
          'Titreşim ve darbe sensörlü taşıma kasaları',
          'Yeni tesiste sıfır hata ile hizalama',
        ],
      },
      {
        title: 'İş Güvenliği',
        items: [
          'İSG planı ve saha eğitimleri',
          'Vinç ve forklift operasyonu için sertifikalı operatörler',
          '24 saatlik vardiya planı ile üretim kaybını azaltma',
        ],
      },
    ],
    table: {
      caption: 'Fabrika Taşıma Modülleri',
      headers: ['Modül', 'İçerik', 'Süre'],
      rows: [
        ['Hat Taşıma', 'Hat sökümü + kurulum', '3-5 gün'],
        ['Makine Transferi', 'Tekil makine taşıma', '1-2 gün'],
        ['Laboratuvar', 'Cihaz kalibrasyonu ile teslim', '2 gün'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat titizliği ile sanayi taşımalarında üretim sürekliliğini koruyoruz.',
  },
  'banka-tasimaciligi': {
    tagline: 'Banka ve finans kurumlarını Profesyonel Evden Eve Nakliyat güvenlik seviyeleriyle taşıyoruz.',
    intro:
      'Kasalar, evraklar, POS cihazları, ATM kabinleri ve müşteri alanları için ayrı güvenlik protokolleri oluştururuz.',
    bulletSections: [
      {
        title: 'Gizlilik Önlemleri',
        items: [
          'Kilitli evrak kutuları ve zimmetli teslimatlar',
          'Alarm ve kamera sistemlerinin kontrollü sökümü',
          'Gece operasyonu ve güvenlik firması koordinasyonu',
        ],
      },
      {
        title: 'Şube Kurulumu',
        items: [
          'Şube içi müşteri yönlendirme set-up’ı',
          'Kasa odası nem ve sıcaklık ölçümleri',
          'Bilgi işlem cihazlarının yeniden kalibrasyonu',
        ],
      },
    ],
    table: {
      caption: 'Banka Taşıma Planı',
      headers: ['Aşama', 'Detay', 'Görevli'],
      rows: [
        ['Ön Hazırlık', 'Güvenlik senaryosu + izinler', 'Proje yöneticisi'],
        ['Taşıma', 'Kasalar + mobilya + IT', '3 ayrı ekip'],
        ['Açılış', 'Sistem kontrolleri', 'Şube yöneticisi + teknik ekip'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat kalitesiyle finans sektörünün güvenlik beklentilerini karşılıyoruz.',
  },
  'fuar-tasimaciligi': {
    tagline: 'Fuar ve etkinlik lojistiğini Profesyonel Evden Eve Nakliyat hızında kurguluyoruz.',
    intro:
      'Stant konstrüksiyonları, ürün prototipleri ve multimedya ekipmanlarını fuar takviminize uygun olarak taşır, kurar ve sökümünü gerçekleştiririz.',
    bulletSections: [
      {
        title: 'Fuar Öncesi',
        items: [
          'Stant modüllerinin numaralandırılması',
          'Işık-ses sistemleri için test alanı kurulumu',
          'Uluslararası fuarlarda gümrük danışmanlığı',
        ],
      },
      {
        title: 'Fuar Sonrası',
        items: [
          'Hızlı söküm ve depoya dönüş lojistiği',
          'Hasar raporu ve bakım listesi',
          'Bir sonraki fuar için paketleme talimatları',
        ],
      },
    ],
    table: {
      caption: 'Fuar Taşıma Takvimi',
      headers: ['Gün', 'Çalışma', 'Teslim Noktası'],
      rows: [
        ['Gün -2', 'Stant ve malzeme yükleme', 'Merkez depo'],
        ['Gün -1', 'Kurulum ve test', 'Fuar alanı'],
        ['Gün +1', 'Söküm ve geri taşıma', 'Depo / yeni rota'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat reflekslerimizle fuar sürelerine eksiksiz uyum sağlarız.',
  },
  'hastane-tasimaciligi': {
    tagline: 'Sağlık tesislerini Profesyonel Evden Eve Nakliyat hassasiyetinde, medikal standartlara uygun taşıyoruz.',
    intro:
      'Steril alanlar, MR cihazları, ameliyathaneler ve laboratuvarlar için uluslararası hijyen protokollerine göre çalışırız.',
    bulletSections: [
      {
        title: 'Medikal Hazırlık',
        items: [
          'Biohazard ve steril malzemeler için iki katmanlı paketleme',
          'MR ve tomografi cihazları için üretici onaylı söküm',
          'İlaç ve sarf malzemeleri için sıcaklık kontrollü taşıma',
        ],
      },
      {
        title: 'Hasta Güvenliği',
        items: [
          'Aktif servislerde gece operasyonu',
          'Hasta yönlendirme ve bilgilendirme kitleri',
          'Acil durum planı ve yedek güç kaynakları',
        ],
      },
    ],
    table: {
      caption: 'Hastane Taşıma Paketi',
      headers: ['Bölüm', 'İçerik', 'Teslim'],
      rows: [
        ['Poliklinik', 'Mobilya + BT altyapısı', '24 saat'],
        ['Yoğun Bakım', 'Medikal cihazlar + gaz hatları', '48 saat'],
        ['Laboratuvar', 'Cihaz kalibrasyonlu teslim', '36 saat'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat kalitemizle sağlık sektöründe sıfır hata hedefleriz.',
  },
  'konsolosluk-tasimaciligi': {
    tagline: 'Diplomatik misyonların taşınmasını Profesyonel Evden Eve Nakliyat güvenlik katmanlarıyla yürütüyoruz.',
    intro:
      'Konsolosluk binalarında bulunan arşiv, kültürel obje ve güvenlik sistemleri için devlet protokollerine uyumlu süreçler oluşturuyoruz.',
    bulletSections: [
      {
        title: 'Diplomatik Güvenlik',
        items: [
          'Kilitli konteyner ve eskortlu taşıma',
          'Şifreli cihaz ve belge transferi için log tutma',
          'Yetkili personel eşliğinde mühürleme',
        ],
      },
      {
        title: 'Temsil Alanları',
        items: [
          'Protokol salonlarının birebir kurulumu',
          'Bayrak, armalar ve sanat eserleri için özel koruma',
          'Konuk ağırlama alanı hazırlıkları',
        ],
      },
    ],
    table: {
      caption: 'Konsolosluk Taşıma Tablosu',
      headers: ['Aşama', 'İşlem', 'Denetim'],
      rows: [
        ['Gizli Arşiv', 'Şifreli kasalarla taşıma', 'Diplomatik temsilci'],
        ['Rezidans', 'Yaşam alanı kurulumları', 'Protokol sorumlusu'],
        ['Resmi Alanlar', 'Tören düzeni ve güvenlik testleri', 'Ortak komisyon'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat disiplinimizle diplomatik hassasiyeti koruruz.',
  },
  'universite-tasimaciligi': {
    tagline: 'Kampüs bazlı taşımaları Profesyonel Evden Eve Nakliyat metodolojisiyle planlıyoruz.',
    intro:
      'Fakülte binaları, laboratuvarlar, kütüphaneler ve öğrenci yaşam alanları için dönem aralarına uygun takvim belirliyoruz.',
    bulletSections: [
      {
        title: 'Akademik Takvim Uyumu',
        items: [
          'Sınav ve kayıt dönemlerine göre planlama',
          'Kütüphane kataloglarının dijital envanteri',
          'Laboratuvar cihazlarının üretici onaylı taşınması',
        ],
      },
      {
        title: 'Kampüs Lojistiği',
        items: [
          'Yurt odalarının kademeli taşınması',
          'Spor komplekslerinin demontaj planı',
          'Yeni kampüs yönlendirme tabelaları',
        ],
      },
    ],
    table: {
      caption: 'Üniversite Taşıma Programı',
      headers: ['Birim', 'Odak', 'Süre'],
      rows: [
        ['Fakülte', 'Derslik + akademik ofisler', '2-3 gün'],
        ['Kütüphane', 'Kitap + dijital arşiv', '3 gün'],
        ['Yurt', 'Öğrenci odaları + ortak alan', '2 gün'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat kalitemizle kampüs yaşamına hızlı dönüş sağlarız.',
  },
  'arsiv-tasimaciligi': {
    tagline: 'Arşiv taşıma projelerini Profesyonel Evden Eve Nakliyat seviyesinde güvence altına alıyoruz.',
    intro:
      'Fiziksel dosyalardan mikrofilmlere kadar tüm arşiv materyallerini numerik sistemle etiketleyip taşır, yeni lokasyonda aynı düzeni kurarız.',
    bulletSections: [
      {
        title: 'Veri Güvenliği',
        items: [
          'Sızdırmaz arşiv kutuları ve RFID etiketleme',
          'Zaman damgalı teslim tutanakları',
          'İmha edilmesi gereken belgeler için ayrı süreç',
        ],
      },
      {
        title: 'Düzen Kurulumu',
        items: [
          'Yeni raf sistemine uygun sınıflandırma',
          'Nem ve sıcaklık takibi için sensör kurulumu',
          'Arşiv yazılımlarıyla entegrasyon raporu',
        ],
      },
    ],
    table: {
      caption: 'Arşiv Taşıma Kategorileri',
      headers: ['Kategori', 'İçerik', 'Süre'],
      rows: [
        ['Fiziksel Dosya', 'Klasör ve kutu taşımacılığı', '1-2 gün'],
        ['Gizli Evrak', 'Şifreli kasa ve güvenlik', '24 saat'],
        ['Dijital Arşiv', 'Sunucu ve medya odası', '2 gün'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat güvencesiyle arşivleriniz yeni yerine aynı düzenle taşınır.',
  },
  'muze-tasimaciligi': {
    tagline: 'Müze ve koleksiyon taşımalarında Profesyonel Evden Eve Nakliyat tecrübesini konservasyon bilinciyle birleştiriyoruz.',
    intro:
      'Sanat eserleri, heykeller, arkeolojik buluntular için konservatör onaylı taşıma planları hazırlar, mikro klima kontrollü kasalar kullanırız.',
    bulletSections: [
      {
        title: 'Eser Koruma',
        items: [
          'UV filtreli ve titreşim sönümlü kutular',
          'Küratör eşliğinde paketleme ve açma',
          'Sıcaklık-nem kayıtlarının paylaşılması',
        ],
      },
      {
        title: 'Lojistik',
        items: [
          'Özel amortisörlü araçlar',
          'Güvenlik eskortu ve alarm entegrasyonu',
          'Yeni sergi düzeninin birebir kurulması',
        ],
      },
    ],
    table: {
      caption: 'Müze Taşıma Planı',
      headers: ['Eser Tipi', 'Paketleme', 'Denetim'],
      rows: [
        ['Tablo', 'Asitsiz kağıt + sert kasa', 'Restoratör'],
        ['Heykel', 'Köpük destekli ahşap kasa', 'Heykeltıraş / küratör'],
        ['Arkeolojik Buluntu', 'Nem kontrollü kapsül', 'Arkeolog'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat kalitesiyle kültürel mirası güvenle taşıyoruz.',
  },
  'bankamatik-tasimaciligi': {
    tagline: 'ATM ve self servis bankacılık ünitelerini Profesyonel Evden Eve Nakliyat güvenlik seviyesiyle taşırız.',
    intro:
      'Yerinde söküm, kasa kilitlerinin mühürlenmesi, GPS takipli taşıma ve yeni lokasyonda hızlı kurulum süreçlerini aynı gün içinde tamamlarız.',
    bulletSections: [
      {
        title: 'Teknik Detaylar',
        items: [
          'Enerji, data ve alarm bağlantılarının kayıt altına alınması',
          'Kaldırma ekipmanlarıyla çiziksiz taşıma',
          'Yeni noktada kalibrasyon ve test işlemleri',
        ],
      },
      {
        title: 'Güvenlik',
        items: [
          'Şifreli kilit mühürü ve eskortlu taşıma',
          'Operasyon boyunca güvenlik şirketi ile eş zamanlı iletişim',
          'Teslimde video kayıtlı raporlama',
        ],
      },
    ],
    table: {
      caption: 'Bankamatik Taşıma Adımları',
      headers: ['Adım', 'İçerik', 'Süre'],
      rows: [
        ['Söküm', 'Elektrik-data ayrıştırma', '2 saat'],
        ['Taşıma', 'Kasa transferi + GPS takip', '4-6 saat'],
        ['Kurulum', 'Montaj + test', '2 saat'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat disiplinimizle finansal cihazlarınızı aynı gün yeniden devreye alırız.',
  },
  'para-kasasi-tasimaciligi': {
    tagline: 'Para kasası ve değerli emanet taşımasını Profesyonel Evden Eve Nakliyat güvenliğiyle yürütüyoruz.',
    intro:
      'Ağır tonajlı kasaların sökülmesi, merdiven veya dar alan geçişleri için hidrolik sistemler kullanır, içerik güvenliğini zincirleme kontrol ederiz.',
    bulletSections: [
      {
        title: 'Fiziksel Güvenlik',
        items: [
          'Çelik kasa sabitleme ve şifre reset prosedürü',
          'Vinç, kızak ve hidrolik kaydırma ekipmanları',
          'Kat bazlı taşıma için özel rampa sistemleri',
        ],
      },
      {
        title: 'İçerik Yönetimi',
        items: [
          'Çift personelli mühürleme ve kayıt',
          'Sigorta şirketi ile eş zamanlı tutanak',
          'Yeni lokasyonda güvenlik testi ve alarm entegrasyonu',
        ],
      },
    ],
    table: {
      caption: 'Para Kasası Taşıma Planı',
      headers: ['Ağırlık Segmenti', 'Ekipman', 'Teslim Süresi'],
      rows: [
        ['0-500 kg', 'Modüler kızak', '1 gün'],
        ['500-1500 kg', 'Vinç + rampa sistemi', '1-2 gün'],
        ['1500 kg+', 'Özel mühendislik planı', '2-3 gün'],
      ],
    },
    closing:
      'Profesyonel Evden Eve Nakliyat güvencesiyle değerli kasa taşımalarınızı sorunsuz tamamlarız.',
  },
}

const renderServiceContent = (content: ServiceContent) => (
  <div className="space-y-8">
    <div className="prose max-w-none">
      <p className="text-lg text-muted-foreground font-medium">{content.tagline}</p>
      <p>{content.intro}</p>
    </div>
    {content.bulletSections.map((section) => (
      <div key={section.title} className="bg-muted/20 border border-muted rounded-xl p-6">
        <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="min-w-full text-sm">
        <caption className="text-left text-muted-foreground p-4 text-xs tracking-wide uppercase">
          {content.table.caption}
        </caption>
        <thead className="bg-muted/50 text-foreground">
          <tr>
            {content.table.headers.map((header) => (
              <th key={header} className="px-4 py-3 text-left font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-border">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p className="text-base text-foreground font-medium">{content.closing}</p>
    {content.note && (
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm text-muted-foreground">
        {content.note}
      </div>
    )}
  </div>
)

async function getService(slug: string) {
  try {
    const service = await prisma.service.findFirst({
      where: { 
        slug,
        active: true 
      },
    })
    return service
  } catch (error) {
    return null
  }
}

async function getAllServices() {
  try {
    const services = await prisma.service.findMany({
      where: { active: true },
      orderBy: { order: 'asc' },
      take: 6,
    })
    return services
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)
  
  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    }
  }

  return {
    title: `${service.name} | Hizmetlerimiz`,
    description: service.description || `${service.name} hizmeti hakkında detaylı bilgi`,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)
  const settings = await getSiteSettings()
  const allServices = await getAllServices()

  if (!service) {
    notFound()
  }

  const defaultBenefits = [
    'Profesyonel ve deneyimli ekip',
    'Sigortalı taşımacılık hizmeti',
    'Modern araç filosu',
    'Uygun fiyat garantisi',
    '7/24 müşteri desteği',
    'Zamanında teslimat',
  ]
  const benefits = service.benefits
    ? service.benefits.split('\n').map(b => b.trim()).filter(Boolean)
    : defaultBenefits
  const customContent = serviceContentMap[service.slug]

  return (
    <>
      <PageHeading
        title={service.name}
        description={service.description || ''}
        breadcrumbs={[
          { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
          { label: service.name },
        ]}
      />

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ana İçerik */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hizmet Kartı */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Icon = iconMap[service.slug] || Home
                    return <Icon className="w-10 h-10 text-primary" />
                  })()}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-3">{service.name}</h2>
                  <p className="text-muted-foreground text-lg">
                    {service.description}
                  </p>
                </div>
              </div>

              {service.content ? (
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              ) : customContent ? (
                renderServiceContent(customContent)
              ) : (
                <div className="prose max-w-none">
                  <h3>Hizmet Detayları</h3>
                  <p>
                    {service.name} hizmetimiz, taşınma sürecinizde ihtiyacınız olan tüm
                    profesyonel desteği sağlar. Deneyimli ekibimiz ve modern ekipmanlarımızla
                    eşyalarınızı güvenle taşıyoruz.
                  </p>
                  <h3>Hizmet Kapsamı</h3>
                  <ul>
                    <li>Ücretsiz keşif ve fiyat teklifi</li>
                    <li>Profesyonel paketleme hizmeti</li>
                    <li>Güvenli taşıma ve yükleme</li>
                    <li>Sigortalı nakliyat</li>
                    <li>Montaj ve yerleştirme</li>
                    <li>Temizlik hizmeti (opsiyonel)</li>
                  </ul>
                  <h3>Neden Bu Hizmeti Seçmelisiniz?</h3>
                  <p>
                    Yılların deneyimi ve binlerce başarılı taşınma ile kazandığımız uzmanlık,
                    size en kaliteli hizmeti sunmamızı sağlıyor. Müşteri memnuniyeti odaklı
                    çalışma prensibimizle her zaman yanınızdayız.
                  </p>
                </div>
              )}
            </div>

            {/* Avantajlar */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Hizmet Avantajları</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* İletişim Kartı */}
            <div className="bg-primary text-white rounded-2xl p-6 sticky top-[8.5rem]">
              <h3 className="text-xl font-bold mb-4">Hemen Teklif Alın</h3>
              <p className="text-primary-foreground/90 mb-6 text-sm">
                {service.name} hizmeti için ücretsiz fiyat teklifi alın
              </p>

              <div className="space-y-4">
                {settings.phone && (
                  <a
                    href={`tel:${settings.phone}`}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
                  >
                    <Phone className="w-5 h-5" />
                    <div>
                      <div className="text-xs text-primary-foreground/70">Telefon</div>
                      <div className="font-medium">{settings.phone}</div>
                    </div>
                  </a>
                )}

                {settings.email && (
                  <a
                    href={`mailto:${settings.email}`}
                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition"
                  >
                    <Mail className="w-5 h-5" />
                    <div>
                      <div className="text-xs text-primary-foreground/70">E-posta</div>
                      <div className="font-medium">{settings.email}</div>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <div>
                    <div className="text-xs text-primary-foreground/70">Çalışma Saatleri</div>
                    <div className="font-medium">7/24 Hizmet</div>
                  </div>
                </div>
              </div>

              <Link
                href="/iletisim"
                className="block w-full mt-6 bg-white text-primary text-center py-3 rounded-lg font-medium hover:bg-white/90 transition"
              >
                İletişim Formu
              </Link>
            </div>

            {/* Diğer Hizmetler */}
            {allServices.length > 1 && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-bold mb-4">Diğer Hizmetlerimiz</h3>
                <div className="space-y-3">
                  {allServices
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 5)
                    .map((s) => (
                      <Link
                        key={s.id}
                        href={`/hizmet/${s.slug}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition group"
                      >
                        <span className="text-sm font-medium">{s.name}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                </div>
                <Link
                  href="/hizmetlerimiz"
                  className="block text-center text-sm text-primary hover:underline mt-4"
                >
                  Tüm hizmetleri görüntüle →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
