import { PrismaClient, Prisma } from '@prisma/client'
import { refreshedServiceContent } from './data/refreshed-service-content'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding services...')

  type SeedService = Omit<Prisma.ServiceCreateInput, 'id' | 'updatedAt' | 'createdAt'>

  const services: SeedService[] = [
    // ─── BİREYSEL TAŞIMACILIK ───
    {
      name: 'Ev Taşıma',
      slug: 'ev-tasima',
      description: 'Eşyalarınız kapıdan teslim alınır, yeni adresinize kusursuz teslim edilir. Çift kat streç film, köpük tampon ve tahta kasalı ambalaj sistemiyle her parçanız güvende.',
      metaTitle: 'Ev Taşıma Hizmeti | Sigortalı Evden Eve Nakliyat',
      metaDescription: 'Ev taşıma sürecinizde sigortalı taşıma, profesyonel ambalaj ve montaj hizmeti. Aynı gün ekspertiz, ertesi gün taşıma imkânı.',
      benefits: `Sigortalı taşıma güvencesi\nÇift kat streç film ambalaj\nKöpük ve tahta kasa koruma\nAynı gün ekspertiz\nKapıdan kapıya teslimat\nMontaj ve demontaj dahil`,
      content: refreshedServiceContent['ev-tasima'].content,
      order: 1,
      active: true,
    },
    {
      name: 'Villa Taşımacılığı',
      slug: 'villa-tasimaciligi',
      description: 'Geniş avlular, özel mobilyalar ve sanat eserleriyle dolu villa taşımalarında uygulanan titiz planlama süreci, sıradan nakliyattan farklı bir uzmanlık gerektirir.',
      metaTitle: 'Villa Taşımacılığı | Özel Eşya Taşıma Hizmeti',
      metaDescription: 'Villa taşımacılığında özel ambalaj, özel araç ve uzman ekip. Bahçe mobilyaları, sanat eseri ve antika taşıma garantisi.',
      benefits: `Özel araç ve lift sistemi\nAntika ve sanat eseri taşıma\nBahçe mobilyası ambalajı\nEkstra sigorta seçeneği\nMimari ön keşif raporu\nDemontaj-montaj ekibi dahil`,
      content: refreshedServiceContent['villa-tasimaciligi'].content,
      order: 2,
      active: true,
    },
    {
      name: 'Yalı Taşımacılığı',
      slug: 'yali-tasimaciligi',
      description: 'Deniz kenarında konumlanan yalıların özgün mimarisi, taşıma sürecini teknik açıdan çok katmanlı kılar. İskele erişimi, nem koruması ve tarihi yapı hassasiyeti ön planda tutulur.',
      metaTitle: 'Yalı Taşımacılığı | Tarihi Yapılarda Nakliyat Hizmeti',
      metaDescription: 'Yalı taşımacılığında iskele erişimi, nem korumalı ambalaj ve tarihi yapıya zarar vermeyen tekniklerle güvenli nakliyat.',
      benefits: `İskele ve deniz yolu erişimi\nNem korumalı ambalaj sistemi\nTarihi yapıya uygun teknikler\nAntika ve ahşap mobilya uzmanlığı\nÖzel sigorta kapsamı\nLojistik ön planlama`,
      content: refreshedServiceContent['yali-tasimaciligi'].content,
      order: 3,
      active: true,
    },
    {
      name: 'Parça Eşya Taşımacılığı',
      slug: 'parca-esya-tasimaciligi',
      description: 'Tek koltuk, bir dolap ya da birkaç kutudan ibaret taşımalarda tam araç kiralamak ekonomik değil. Parça eşya sistemiyle yalnızca kullandığınız alan için ücret ödersiniz.',
      metaTitle: 'Parça Eşya Taşımacılığı | Tek Eşya Nakliyat',
      metaDescription: 'Tek mobilya veya az sayıda eşya taşımak için ekonomik parça eşya nakliyat hizmeti. Şehir içi ve şehirler arası.',
      benefits: `Kullandığın kadar öde sistemi\nAynı gün teslimat seçeneği\nOnline fiyat hesaplama\nSigortalı taşıma\nŞehir içi ve şehirlerarası\nHızlı randevu`,
      content: refreshedServiceContent['parca-esya-tasimaciligi'].content,
      order: 4,
      active: true,
    },
    {
      name: 'Şehir İçi Evden Eve Nakliyat',
      slug: 'sehir-ici-evden-eve-nakliyat',
      description: 'Aynı şehir içinde mahalle değiştirmek de ev taşımak kadar titizlik ister. Kısa mesafe, küçük hata payı demek değildir; aksine hız ve hassasiyetin bir arada yönetilmesidir.',
      metaTitle: 'Şehir İçi Evden Eve Nakliyat | Aynı Gün Taşıma',
      metaDescription: 'Şehir içi nakliyatta aynı gün taşıma, sigortalı taşıma ve montaj dahil hizmet. Trafik optimizasyonlu rota planlaması.',
      benefits: `Aynı gün taşıma imkânı\nTrafik rota optimizasyonu\nSigortalı taşıma\nMontaj-demontaj dahil\nSaatlik değil iş bazlı ücret\nHızlı ekip kurulumu`,
      content: refreshedServiceContent['sehir-ici-evden-eve-nakliyat'].content,
      order: 5,
      active: true,
    },
    {
      name: 'Şehirler Arası Evden Eve Nakliyat',
      slug: 'sehirler-arasi-evden-eve-nakliyat',
      description: 'İstanbul\'dan Ankara\'ya, Bursa\'dan İzmir\'e ya da Türkiye\'nin herhangi iki şehri arasında güvenli nakliyat. Uzun mesafe taşımacılıkta sigorta ve güzergah planlaması hayat kurtarır.',
      metaTitle: 'Şehirler Arası Evden Eve Nakliyat | Türkiye Geneli Taşıma',
      metaDescription: 'Türkiye genelinde şehirler arası nakliyat. Sigortalı taşıma, GPS takipli araçlar ve kapıdan kapıya teslimat.',
      benefits: `GPS takipli araç filosu\nTüm Türkiye kapsamı\nSigortalı taşıma güvencesi\nKapıdan kapıya teslimat\nOnline gönderi takibi\nGece taşıma seçeneği`,
      content: refreshedServiceContent['sehirler-arasi-evden-eve-nakliyat'].content,
      order: 6,
      active: true,
    },
    // ─── KURUMSAL TAŞIMACILIK ───
    {
      name: 'Ofis Taşımacılığı',
      slug: 'ofis-tasimaciligi',
      description: 'İş sürekliliğini kesmeden gerçekleştirilen ofis taşıması, her ekipmanın etiketlenerek taşınmasını ve yeni adreste aynı düzende kurulmasını kapsar.',
      metaTitle: 'Ofis Taşımacılığı | Kesintisiz Kurumsal Nakliyat',
      metaDescription: 'Ofis taşımacılığında etiketleme sistemi, BT ekipmanı taşıma ve hafta sonu operasyon seçeneği. İş sürekliliği garantisi.',
      benefits: `Hafta sonu ve gece operasyon\nBT ekipmanı özel ambalajı\nEtiketli demontaj sistemi\nAynı düzende kurulum\nSigortalı taşıma\nGizlilik sözleşmesi imkânı`,
      content: refreshedServiceContent['ofis-tasimaciligi'].content,
      order: 7,
      active: true,
    },
    {
      name: 'Kurumsal Taşımacılık',
      slug: 'kurumsal-tasimaciligi',
      description: 'Çok lokasyonlu kurumsal yapılar, merkezî koordinasyon gerektiren taşıma operasyonları ister. Proje yöneticisi ataması ve günlük ilerleme raporlamasıyla şeffaf süreç yönetimi sağlanır.',
      metaTitle: 'Kurumsal Taşımacılık | Proje Bazlı Nakliyat Hizmeti',
      metaDescription: 'Büyük kurumsal taşımalarda proje yönetimi, çoklu lokasyon koordinasyonu ve özel sigorta paketi ile kesintisiz operasyon.',
      benefits: `Atanmış proje yöneticisi\nÇok lokasyonlu koordinasyon\nGünlük ilerleme raporu\nÖzel kurumsal sigorta\nGizlilik protokolü\nMerkezî takip paneli`,
      content: refreshedServiceContent['kurumsal-tasimaciligi'].content,
      order: 8,
      active: true,
    },
    {
      name: 'Fabrika Taşımacılığı',
      slug: 'fabrika-tasimaciligi',
      description: 'Üretim makineleri, ağır sanayi ekipmanları ve depo raflarının taşınması; mühendislik hesabı, vinç koordinasyonu ve iş güvenliği protokolü gerektiren özel bir lojistik dalıdır.',
      metaTitle: 'Fabrika Taşımacılığı | Sanayi Ekipmanı Nakliyat',
      metaDescription: 'Fabrika ve sanayi tesisi taşımacılığında vinç, forklift ve ağır yük araçlarıyla güvenli makine nakliyatı.',
      benefits: `Ağır yük ve makine taşıma\nVinç ve forklift koordinasyonu\nİş güvenliği protokolü\nMühendis gözetiminde operasyon\nÜretim duruşu minimizasyonu\nSanayi sigortası`,
      content: refreshedServiceContent['fabrika-tasimaciligi'].content,
      order: 9,
      active: true,
    },
    {
      name: 'Banka Taşımacılığı',
      slug: 'banka-tasimaciligi',
      description: 'Şube yenileme, birleşme veya yer değişikliğinde banka taşımacılığı; güvenlik prosedürleri, değerli evrak protokolü ve koordineli kapatma planıyla yürütülür.',
      metaTitle: 'Banka Taşımacılığı | Güvenli Şube Nakliyat Hizmeti',
      metaDescription: 'Banka şubesi taşımacılığında gizlilik protokolü, değerli evrak güvencesi ve güvenlik koordinasyonu ile kesintisiz operasyon.',
      benefits: `Gizlilik ve güvenlik protokolü\nDeğerli evrak taşıma güvencesi\nGüvenlik ekibi koordinasyonu\nHafta sonu operasyon\nSigortalı taşıma\nKapsamlı hasar tutanağı`,
      content: refreshedServiceContent['banka-tasimaciligi'].content,
      order: 10,
      active: true,
    },
    {
      name: 'Fuar Taşımacılığı',
      slug: 'fuar-tasimaciligi',
      description: 'Stand malzemeleri, ekran sistemleri ve kurumsal tanıtım ekipmanlarının fuar alanına tam zamanında ulaşması; lojistik hata için sıfır tolerans demektir.',
      metaTitle: 'Fuar Taşımacılığı | Stand ve Ekipman Nakliyat Hizmeti',
      metaDescription: 'Fuar taşımacılığında zamanında teslimat, stand kurulum koordinasyonu ve fuar sonrası depolama hizmetleri.',
      benefits: `Zamanında teslimat garantisi\nStand kurulum koordinasyonu\nFuar alanı lojistik deneyimi\nDepolama ve geri taşıma\nHızlı montaj ekibi\nSigortalı ekipman nakliyatı`,
      content: refreshedServiceContent['fuar-tasimaciligi'].content,
      order: 11,
      active: true,
    },
    {
      name: 'Hastane Taşımacılığı',
      slug: 'hastane-tasimaciligi',
      description: 'Tıbbi cihazlar, ameliyathane ekipmanları ve hasta dosyalarının taşınması; hijyen standartları, kalibrasyon gereksinimleri ve kesintisiz bakım sürekliliği çerçevesinde yönetilir.',
      metaTitle: 'Hastane Taşımacılığı | Tıbbi Cihaz Nakliyat Hizmeti',
      metaDescription: 'Hastane taşımacılığında tıbbi cihaz kalibrasyonu, hijyen protokolü ve hasta hizmet sürekliliği gözetilerek güvenli nakliyat.',
      benefits: `Tıbbi cihaz kalibrasyonu\nHijyen protokollü ambalaj\nHasta bakım sürekliliği\nISO standartlı taşıma\nGece ve hafta sonu operasyon\nUzman teknik ekip`,
      content: refreshedServiceContent['hastane-tasimaciligi'].content,
      order: 12,
      active: true,
    },
    {
      name: 'Konsolosluk Taşımacılığı',
      slug: 'konsolosluk-tasimaciligi',
      description: 'Diplomatik temsilciliklerin ve konsoloslukların taşınması; protokol gereklilikleri, uluslararası mevzuat ve gizlilik standartları çerçevesinde titizlikle yönetilir.',
      metaTitle: 'Konsolosluk Taşımacılığı | Diplomatik Nakliyat Hizmeti',
      metaDescription: 'Konsolosluk ve büyükelçilik taşımacılığında diplomatik protokol, gizlilik standartları ve uluslararası nakliyat deneyimi.',
      benefits: `Diplomatik protokol bilgisi\nUluslararası nakliyat deneyimi\nGizlilik sözleşmesi\nÖzel güvenlik koordinasyonu\nEvrak ve arşiv taşıma\nYabancı dil destekli ekip`,
      content: refreshedServiceContent['konsolosluk-tasimaciligi'].content,
      order: 13,
      active: true,
    },
    {
      name: 'Üniversite Taşımacılığı',
      slug: 'universite-tasimaciligi',
      description: 'Araştırma laboratuvarları, kütüphane koleksiyonları ve idari birimlerin kampüsler arası taşınması; akademik takvime uyum ve hassas ekipman güvencesiyle planlanır.',
      metaTitle: 'Üniversite Taşımacılığı | Kampüs Nakliyat Hizmeti',
      metaDescription: 'Üniversite taşımacılığında laboratuvar cihazları, kütüphane koleksiyonu ve idari birim nakliyatı akademik takvimiyle uyumlu.',
      benefits: `Akademik takvime uyumlu planlama\nLaboratuvar cihazı uzmanlığı\nKütüphane koleksiyonu taşıma\nGeniş kampüs lojistiği\nBütçe dostu fiyatlandırma\nKurum protokolüne uyum`,
      content: refreshedServiceContent['universite-tasimaciligi'].content,
      order: 14,
      active: true,
    },
    // ─── DİĞER HİZMETLER ───
    {
      name: 'Arşiv Taşımacılığı',
      slug: 'arsiv-tasimaciligi',
      description: 'Kurumsal belgeler, hukuki dosyalar ve tarihi dokümanların taşınması; güvenli zincir, sayım kontrolü ve nem-ısı yönetimiyle arşiv bütünlüğünü korur.',
      metaTitle: 'Arşiv Taşımacılığı | Belge ve Doküman Nakliyat',
      metaDescription: 'Kurumsal arşiv ve hukuki belge taşımacılığında güvenlik zinciri, sayım kontrolü ve nem koruması ile kayıpsız nakliyat.',
      benefits: `Güvenli belge zinciri\nSayım ve envanter kontrolü\nNem ve ısı korumalı ambalaj\nGizlilik taahhütnamesi\nDigital indeksleme desteği\nAcil erişim protokolü`,
      content: refreshedServiceContent['arsiv-tasimaciligi'].content,
      order: 15,
      active: true,
    },
    {
      name: 'Müze Taşımacılığı',
      slug: 'muze-tasimaciligi',
      description: 'Sanat eserleri, arkeolojik buluntular ve tarihi objeler; iklim kontrollü araçlar, özel konteynerlere ve müzeci gözetiminde hareket eder.',
      metaTitle: 'Müze Taşımacılığı | Sanat Eseri Nakliyat Hizmeti',
      metaDescription: 'Müze ve galeri taşımacılığında iklim kontrollü araç, özel konteyner ve sigortalı sanat eseri nakliyatı.',
      benefits: `İklim kontrollü araç\nÖzel sanat eseri konteyneri\nMüzeci ve küratör koordinasyonu\nUluslararası nakliyat deneyimi\nSanat sigortası\nVibrasyon izolasyonlu kasa`,
      content: refreshedServiceContent['muze-tasimaciligi'].content,
      order: 16,
      active: true,
    },
    {
      name: 'Bankamatik Taşımacılığı',
      slug: 'bankamatik-tasimaciligi',
      description: 'ATM cihazlarının şube yenileme, konum değişikliği veya servis süreçlerinde taşınması; ağır yük ekipmanı, güvenlik protokolü ve anında devreye alma planıyla teslim edilir.',
      metaTitle: 'Bankamatik Taşımacılığı | ATM Nakliyat Hizmeti',
      metaDescription: 'Bankamatik ve ATM taşımacılığında güvenlik protokolü, ağır yük ekipmanı ve yerinde devreye alma hizmeti.',
      benefits: `Güvenlik eskortlu taşıma\nATM vinç ve forklift\nAnında devreye alma\nHafta sonu operasyon\nSigortalı taşıma\nBanka koordinatörü ile çalışma`,
      content: refreshedServiceContent['bankamatik-tasimaciligi'].content,
      order: 17,
      active: true,
    },
    {
      name: 'Para Kasası Taşımacılığı',
      slug: 'para-kasasi-tasimaciligi',
      description: 'Çelik kasalar, yangın güvenlikli dolaplar ve değerli eşya muhafazalarının taşınması; ağır yük tekniği, güvenlik zinciri ve titiz teslimat protokolüyle gerçekleşir.',
      metaTitle: 'Para Kasası Taşımacılığı | Güvenli Kasa Nakliyat',
      metaDescription: 'Para kasası ve çelik dolap taşımacılığında güvenlik eskort, forklift ve anlık teslimat onayı ile güvenli nakliyat.',
      benefits: `Güvenlik eskortlu taşıma\nForklift ve özel kaldırma\nAnlık teslimat onayı\nİki yetkili imzası\nGizli rota planlaması\nSigortalı kasa nakliyatı`,
      content: refreshedServiceContent['para-kasasi-tasimaciligi'].content,
      order: 18,
      active: true,
    },
    // ─── EK HİZMETLER ───
    {
      name: 'Ücretsiz Ekspertiz',
      slug: 'ucretsiz-ekspertiz',
      description: 'Taşınma süreciniz henüz başlamadan, uzman gözü evinizi inceler. Eşya hacmi, asansör boyutu ve merdiven açısı yerinde ölçülür; size şeffaf ve sabit bir teklif sunulur.',
      metaTitle: 'Ücretsiz Ekspertiz | Yerinde Nakliyat Fiyat Tespiti',
      metaDescription: 'Ücretsiz ekspertiz hizmetiyle taşınma maliyetinizi önceden netleştirin. Yerinde ölçüm, yazılı teklif ve sürpriz ek ücret yok.',
      benefits: `Yerinde ücretsiz ölçüm\nYazılı ve sabit fiyat teklifi\nSürpriz ek ücret yok\n24 saat içinde teklif teslimi\nTaşıma planı ön görüşme\nUzman keşif ekibi`,
      content: `<h2>Fiyat Söylenmeden Önce <em>Eviniz Görülmeli</em></h2>
<p>Taşınma bütçesi çoğu zaman telefon başında netleşir. Oysa asansör ölçüsü, merdiven açısı ve kırılgan mobilyaların hacmi hiçbir sözden tam okunamaz. <em>Ekspertiz ziyareti</em> bu belirsizliği baştan kapatır.</p>
<p>Uzman ekip kapıdan girer; her odayı tek tek ölçer, notunu kâğıda geçirir. <strong>Ortaya çıkan teklif değişmez</strong> — taşıma günü de aynı rakam geçerlidir.</p>
<h2>Ziyarette <u>İncelenen Her Nokta</u></h2>
<ul>
<li>Eşya türü, adet ve tahmini toplam hacim</li>
<li>Asansör iç boyutu ve azami yük kapasitesi</li>
<li>Bina giriş kapısı genişliği ile koridor dönüş açısı</li>
<li>Cam, ayna ve tablo gibi kırılabilir parçalar ayrıca not edilir</li>
<li>Söküm gerektiren mobilyalar ve gerekli alet listesi</li>
<li>Yeni adreste montaj gerektirecek ürünler</li>
</ul>
<h2>Teklif Yöntemi <strong>Doğruluk Karşılaştırması</strong></h2>
<table><thead><tr><th>Yöntem</th><th>Fiyat Doğruluğu</th><th>Sürpriz Ek Ücret</th><th>Yazılı Garanti</th></tr></thead><tbody>
<tr><td>Telefon tahmini</td><td>Düşük</td><td>Yüksek risk</td><td>Hayır</td></tr>
<tr><td>Fotoğraf incelemesi</td><td>Orta</td><td>Orta risk</td><td>Kısmi</td></tr>
<tr><td>Yerinde ekspertiz</td><td>Çok yüksek</td><td>Sıfır</td><td>Evet</td></tr>
</tbody></table>
<h2><em>Randevu Günü</em> Hazırlığı</h2>
<ol>
<li>Tüm oda kapılarını açık bırakın; uzman her köşeyi görmelidir</li>
<li>Depo, balkon ve bodrum eşyalarını önceden listeleyin</li>
<li>Taşımayı düşünmediğiniz parçaları belirtin veya ayırın</li>
<li>Taşınma tarihi tercihinizi ve yedek günleri hazırlayın</li>
<li>Aklınızdaki soruları yazılı not alın; uzman yanıtlar</li>
</ol>
<h2>Teklifte <strong>Hangi Kalemler Yer Alır?</strong></h2>
<p>Ziyaret tamamlandıktan sonra <u>24 saat içinde</u> yazılı teklif iletilir. Araç tipi, ekip büyüklüğü, çalışma süresi ve her hizmet kalemi ayrı satırda gösterilir. Hiçbir rakam açıklanmadan geçilmez.</p>
<p>İmzalanan teklife sonradan ek ücret yansıtılamaz. <em>Bu güvence</em>, ekspertiz yapan firmayla yapmayan firma arasındaki en somut farkı oluşturur.</p>`,
      order: 19,
      active: true,
    },
    {
      name: 'Sözleşmeli Evden Eve Nakliyat',
      slug: 'sozlesmeli-evden-eve-nakliyat',
      description: 'Taşıma günü yaşanan fiyat baskısı, kayıp eşya iddiaları ve sorumluluk tartışmalarının tek kalkanı imzalı bir sözleşmedir. Yazılı taahhüt olmadan yapılan nakliyat, her iki taraf için de belirsizlik demektir.',
      metaTitle: 'Sözleşmeli Evden Eve Nakliyat | Yasal Güvenceli Taşıma',
      metaDescription: 'Sözleşmeli nakliyatta fiyat garantisi, sorumluluk kapsamı ve tazminat şartları yazılı olarak belirlenir. Hukuki güvence ile taşının.',
      benefits: `Yazılı fiyat garantisi\nHukuki sorumluluk kapsamı\nTazminat şartları netleştirilmiş\nİptal ve erteleme koşulları\nEşya listesi sözleşmeye eklenir\nNoter onaylı seçenek`,
      content: `<h2>Sözlü Anlaşma <em>Taşıma Günü</em> Geçersizdir</h2>
<p>Araç yola çıktıktan sonra ortaya çıkan itirazlar, sözlü anlaşmalarla hiçbir mercide geçer sayılmaz. Kayıp ya da hasarlı eşya için hukuki yola başvurmak istediğinizde <strong>elinizde yazılı belge olmalıdır.</strong></p>
<p>Türkiye'de her yıl binlerce nakliyat uyuşmazlığı tüketici mahkemelerine taşınır. <em>Neredeyse tamamı</em> imzasız süreçlerden doğar. Yazılı sözleşme bu tartışmayı daha başlamadan bitirir.</p>
<h2>Sözleşmenin <u>Olmazsa Olmaz Maddeleri</u></h2>
<ul>
<li>Taşıma tarihi, başlangıç saati ve teslim penceresi açıkça yazılmış</li>
<li>Alım ve teslim adresi tam adresle belirtilmiş</li>
<li>Toplam ücret ve ödeme yöntemi net rakamlarla yer almış</li>
<li>Hasar durumunda sorumluluk sınırı tanımlanmış</li>
<li>İptal ve erteleme koşulları ayrı maddede açıklanmış</li>
<li>Taşınan eşya listesi ek belge olarak sözleşmeye eklenmiş</li>
</ul>
<h2>Standart ve <strong>Güçlendirilmiş Sözleşme</strong> Farkı</h2>
<table><thead><tr><th>Kapsam</th><th>Standart</th><th>Güçlendirilmiş</th></tr></thead><tbody>
<tr><td>Fiyat garantisi</td><td>Var</td><td>Var + ek ücret yasağı</td></tr>
<tr><td>Hasar tazminatı</td><td>Sınırlı</td><td>Tam rayiç değer</td></tr>
<tr><td>Eşya listesi</td><td>Genel</td><td>Kalemli ve çift imzalı</td></tr>
<tr><td>İptal hakkı</td><td>48 saat</td><td>72 saat + iade garantisi</td></tr>
</tbody></table>
<h2>İmzalamadan Önce <em>Kontrol Listesi</em></h2>
<ol>
<li>Firmanın vergi numarası ve ticari adresi sözleşmede yer alıyor mu?</li>
<li>Sigorta poliçe numarası açıkça yazıyor mu?</li>
<li>Ek hizmet ücretleri tek tek listelenmiş mi?</li>
<li>Teslimatta hasarın nasıl raporlanacağı yazılı mı?</li>
<li>Her sayfayı okuyun; imzanız o bilgiden haberdar olduğunuzu teyit eder</li>
</ol>
<h2>Anlaşmazlık Olursa <strong>İlk 48 Saat</strong></h2>
<p>Sözleşmeli bir nakliyatta hasar yaşandığında fotoğraf ve tutanak alınmalıdır. <u>Firma yazılı olarak</u> bildirilmeli; tazminat talebi bu belgelere dayanarak açılmalıdır. 48 saati geçiren bildirimler hukuki geçerliliğini yitirebilir.</p>
<p>Tüketici Hakem Heyeti'ne başvuru için alt sınır her yıl güncellenir. Daha yüksek talepler asliye hukuk mahkemesine taşınır. <em>Sözleşmesiz</em> hiçbir davada mahkeme firmanın sorumluluğunu otomatik kabul etmez.</p>`,
      order: 20,
      active: true,
    },
    {
      name: 'Sigortalı Evden Eve Nakliyat',
      slug: 'sigortali-evden-eve-nakliyat',
      description: 'Taşıma sırasında kırılan, çizilen ya da kaybolan bir eşya için tazminat alabilmek, ancak taşıma sigortası ile mümkündür. Poliçesiz yapılan nakliyat, tüm riski size bırakır.',
      metaTitle: 'Sigortalı Evden Eve Nakliyat | Taşıma Sigortası Kapsamı',
      metaDescription: 'Sigortalı nakliyatta kırılma, kayıp ve hasar tazminatı güvencesi. Poliçe kapsamı, hasar bildirimi ve tazminat süreci hakkında bilgi alın.',
      benefits: `Yükleme anından teslimata kadar sigorta\nKırılma ve kayıp tazminatı\nRayiç değer üzerinden poliçe\n48 saat içinde hasar bildirimi\nTazminat 15 iş günü\nYazılı poliçe teslimi`,
      content: `<h2>Kırılan Vazo <em>Sadece Para Değil</em>, Güvencesizliktir</h2>
<p>Taşıma sırasında zarar gören bir eşya için tazminat alabilmek, ancak geçerli bir poliçeyle mümkündür. <em>Poliçesiz nakliyatta</em> tüm sorumluluk size kalır; firma kusuru ispat edilemezse karşılık alamazsınız.</p>
<p>Öte yandan her sigorta aynı değildir. <strong>Zorunlu sorumluluk sigortası</strong> yalnızca firmanın kusurunu karşılar. Tam nakliyat poliçesi ise kaza, sel ve yangın gibi dış riskleri de içerir.</p>
<h2>Sigorta Türleri <u>Karşılaştırması</u></h2>
<table><thead><tr><th>Sigorta Türü</th><th>Kapsam</th><th>Tazminat Tabanı</th><th>Ekstra Maliyet</th></tr></thead><tbody>
<tr><td>Zorunlu sorumluluk</td><td>Firma kusuru</td><td>Yasal sınır</td><td>Dahil</td></tr>
<tr><td>Tam nakliyat sigortası</td><td>Her türlü hasar</td><td>Rayiç değer</td><td>%0,5–1,5</td></tr>
<tr><td>Değer beyan sigortası</td><td>Beyan edilen miktar</td><td>Beyan değeri</td><td>Değişken</td></tr>
</tbody></table>
<h2>Poliçe Almadan Önce <strong>Sorulacaklar</strong></h2>
<ul>
<li>Antika ve sanat eserleri ayrıca tanımlanmış mı?</li>
<li>Elektronik cihazlar için iç hasar teminatı var mı?</li>
<li>Reasürans şirketinin adı poliçede açıkça yazıyor mu?</li>
<li>Depolama süresi kapsama dahil mi?</li>
<li>Hasar bildirimi için süre sınırı kaç gün?</li>
</ul>
<h2>Hasar Durumunda <em>İzlenecek Adımlar</em></h2>
<ol>
<li>Teslim anında tüm eşyaları ekip önünde tek tek kontrol edin</li>
<li>Her hasarı fotoğrafla belgeleyin; zaman damgasına dikkat edin</li>
<li>Taşıma firmasına 48 saat içinde yazılı bildirim yapın</li>
<li>Sigorta şirketine hasar ihbar formu doldurun</li>
<li>Tazminat değerleme için eksper randevusu talep edin</li>
</ol>
<h2>Tazminat Sürecinde <strong>Kritik Süreler</strong></h2>
<p>Hasar bildirimi 48 saati geçerse tazminat hakkı önemli ölçüde zayıflar. <u>Eksper değerleme</u> genellikle 5 iş günü içinde tamamlanır. Ödeme kararı ise poliçeye göre 15 ile 30 iş günü arasında çıkar.</p>
<p>Yüksek değerli eşyalar için fatura veya bağımsız değerleme raporu önceden hazırlanmalıdır. <em>Bu belgeler</em> süreci hızlandırır ve itiraz sürecini gereksiz kılar.</p>`,
      order: 21,
      active: true,
    },
    {
      name: 'Asansörlü Evden Eve Nakliyat',
      slug: 'asansorlu-evden-eve-nakliyat',
      description: 'Vinç asansör sistemi, merdivenden çıkarılması imkânsız olan büyük mobilyaları dışarıdan kaldırarak taşır. Bina içi asansörü yetersiz kalan her taşıma için standart çözüm haline gelmiştir.',
      metaTitle: 'Asansörlü Evden Eve Nakliyat | Vinç Asansör ile Taşıma',
      metaDescription: 'Asansörlü nakliyatta vinç asansör sistemi, büyük mobilyaları hızlı ve hasarsız taşır. Rezervasyon ve koordinasyon dahildir.',
      benefits: `Vinç asansör sistemi\nMerdiven hasarı riski sıfır\nBüyük mobilya çözümü\nSite yönetimi koordinasyonu\nHızlı yükleme-tahliye\nSigortalı operasyon`,
      content: `<h2>Koltuk Asansöre <em>Sığmıyorsa</em> Vinç Devreye Girer</h2>
<p>Standart bir bina asansörünün iç ölçüsü 100 × 130 santimetre civarındadır. Üçlü köşe koltuk ya da king-size baza bu alana sığmaz. <em>Vinç asansör</em> bu durumda pencere veya balkon önünde konumlanır; eşyayı dışarıdan kaldırır.</p>
<p>Kurulum göründüğü kadar basit değildir. <strong>Araç parkı, vinç açısı ve pencere erişimi</strong> önceden hesaplanmazsa operasyon gün içinde durabilir.</p>
<h2>Vinç Asansör Gerektiren <u>Eşya Türleri</u></h2>
<ul>
<li>L ve U köşe koltuk takımları; bina asansörüne sığmayan en yaygın parça</li>
<li>King-size yatak kafalığı ve baza çerçeveleri</li>
<li>Piyano ve org gibi ağır müzik aletleri</li>
<li>Özel ölçülü dolap sistemleri ve büyük vitrinler</li>
<li>Jakuzi, küvet ve ankastre mutfak üniteleri</li>
</ul>
<h2>Taşıma Yöntemi <strong>Karşılaştırması</strong></h2>
<table><thead><tr><th>Yöntem</th><th>Büyük Eşya</th><th>Merdiven Hasarı</th><th>Ortalama Süre</th></tr></thead><tbody>
<tr><td>Elle merdiven</td><td>Sınırlı</td><td>Yüksek risk</td><td>Uzun</td></tr>
<tr><td>Bina asansörü</td><td>Orta</td><td>Orta risk</td><td>Orta</td></tr>
<tr><td>Vinç asansör</td><td>Tam çözüm</td><td>Sıfır</td><td>Kısa</td></tr>
</tbody></table>
<h2>Site Yönetimi <em>Koordinasyonu</em></h2>
<ol>
<li>Taşınma tarihi belirlenir belirlenmez site yönetimine bildirim yapılır</li>
<li>Vinç asansör kullanım saati yöneticiyle önceden netleştirilir</li>
<li>Araç ve vinç için park alanı en az bir gün önceden ayrılır</li>
<li>Komşular bilgilendirilir; giriş-çıkış geçici olarak etkilenebilir</li>
<li>Bina sigortasının vinç kullanımını kapsayıp kapsamadığı sorulur</li>
</ol>
<h2>Operasyon Günü <strong>Nasıl İlerler?</strong></h2>
<p>Ekip sabahın erken saatinde gelir; vinç konumunu ayarlar. Küçük parçalar bina asansörüyle, büyük parçalar dışarıdan kaldırılır. <u>Her parça askıya alınmadan önce</u> bağlantı sistemi kontrol edilir.</p>
<p>Tüm operasyon iki saatte tamamlanabilir. <em>Merdiven taşımasının</em> yarısı kadar sürer; merdiven ve duvarı hasarsız terk eder.</p>`,
      order: 22,
      active: true,
    },
    {
      name: 'Ambalaj ve Paketleme',
      slug: 'ambalaj-ve-paketleme',
      description: 'Taşıma sırasındaki hasarların yüzde sekseninden fazlası hatalı paketlemeden kaynaklanır. Doğru malzeme, doğru teknik ve doğru sıra uygulandığında eşyanız bitmemiş gibi çıkar.',
      metaTitle: 'Ambalaj ve Paketleme Hizmeti | Profesyonel Nakliyat Ambalajı',
      metaDescription: 'Nakliyat ambalajında çift kat streç film, balonlu naylon ve tahta kasa ile kırılmaz paketleme hizmeti. Tüm eşya türleri için özel çözüm.',
      benefits: `Eşyaya özel ambalaj tekniği\nÇift kat streç film\nBalonlu naylon ve köpük\nTahta kasa özel üretim\nVakumlu torba seçeneği\nAmbalaj malzemesi dahil`,
      content: `<h2>Hasar Başlamadan <em>Ambalajda</em> Önlenir</h2>
<p>Taşıma hasarlarının büyük bölümü yolda değil, yükleme sırasında başlar. Doğru sabitlenmemiş bir vazo ilk frende sürüklenir. <em>Kırılma anı</em> çoğunlukla rampadan çıkarken yaşanır; araç henüz hareket etmemiştir.</p>
<p>Malzeme kalitesi, katman sayısı ve eşyalar arası dolgu yoğunluğu belirleyicidir. <strong>Gazete kâğıdı ile balonlu naylon</strong> arasındaki fark, taşınma sonrası açılan ilk kutuda ortaya çıkar.</p>
<h2>Eşyaya Göre <u>Doğru Ambalaj Malzemesi</u></h2>
<table><thead><tr><th>Eşya</th><th>İlk Katman</th><th>İkinci Katman</th><th>Dış Koruma</th></tr></thead><tbody>
<tr><td>Cam ve porselen</td><td>Köpük folyosu</td><td>Balonlu naylon</td><td>Tahta kasa</td></tr>
<tr><td>Mobilya yüzeyi</td><td>Tekstil battaniye</td><td>Çift kat streç</td><td>Köşe koruyucu</td></tr>
<tr><td>Elektronik cihaz</td><td>Antistatik torba</td><td>Köpük tampon</td><td>Sert karton</td></tr>
<tr><td>Tekstil ürünleri</td><td>—</td><td>Vakumlu torba</td><td>Dayanıklı naylon çuval</td></tr>
<tr><td>Kitap ve evrak</td><td>Silika jel</td><td>Şeffaf naylon</td><td>Asitsiz mukavva</td></tr>
</tbody></table>
<h2>Kendi Paketleme mi, <strong>Uzman Ambalaj mı?</strong></h2>
<ul>
<li>Evde bulunan malzeme çoğunlukla darbeye dayanıksız kalır</li>
<li>Yetersiz katman sayısı kırılgan parçaları koruyamaz</li>
<li>Yanlış etiketleme taşıma sırasında yönlendirme hatasına yol açar</li>
<li>Uzman ambalajda hasar sigortası poliçeye dahil edilebilir</li>
<li>Profesyonel ekip bir evi kendi başınıza yapacağınız sürenin üçte birinde paketler</li>
</ul>
<h2>Paketleme <em>Sırasının</em> Kuralları</h2>
<ol>
<li>Ağır ve sert eşyalar kutu tabanına yerleştirilir; zemin katmanı oluşturur</li>
<li>Hafif ve kırılgan parçalar üste konur; alt baskıdan korunur</li>
<li>Boşluklar köpük topuyla kapatılır; hareket engellenir</li>
<li>Her kutu içeriğini belirten etiketle kapanır</li>
<li>Kırılacak ürünlerin kutusu kırmızı bant ile ayrıştırılır</li>
</ol>
<h2>Yeni Evde <strong>Ambalaj Açma Sırası</strong></h2>
<p>Kutuları rastgele açmak yerine bir sıra belirleyin. Önce <u>yatak odası kurulur</u>; geceyi geçirecek alan elde edilir. Ardından mutfak, en son oturma odası açılır.</p>
<p>Tüm kutular açılmadan ambalaj malzemelerini dışarı çıkarmayın. <em>Kırık parçalar</em> gazete katları arasında gizli kalabilir; çöpe atılan ambalaj, olası kayıp iddiasını ispatsız bırakır.</p>`,
      order: 23,
      active: true,
    },
  ]

  for (const service of services) {
    const timestamp = new Date()

    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {
        ...service,
        updatedAt: timestamp,
      },
      create: {
        ...service,
        id: service.slug,
        updatedAt: timestamp,
      },
    })
    console.log(`✓ ${service.name} eklendi`)
  }

  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
