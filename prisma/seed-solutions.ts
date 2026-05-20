import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Çözümler ekleniyor...')

  const solutions = [
    {
      slug: 'ucretsiz-ekspertiz',
      title: 'Ücretsiz Ekspertiz',
      description: 'Yerinde yapılan keşif sayesinde eşyalarınızın hacmi, bina koşulları ve ekstra ihtiyaçlar daha taşınma gününden önce raporlanır; böylece sabit fiyatlı sözleşme imzalamak kolaylaşır.',
      metaTitle: 'Ücretsiz Ekspertiz | Yerinde Keşifle Şeffaf Fiyatlandırma',
      metaDescription: 'Ücretsiz ekspertiz talep edin, taşıma günü sürpriz yaşamayın. Uzman ekip tüm detayları ölçer, yazılı teklif ve operasyon planı hazırlar.',
      icon: 'ClipboardList',
      order: 1,
      content: `<h2>Önce Keşif, Sonra Teklif</h2>
<p>Telefonla alınan fiyatların çoğu, yükleme günü ortaya çıkan ekstra kat, dar kapı ya da kırılgan koleksiyonlar nedeniyle değişir. Ücretsiz ekspertiz; adres, merdiven açısı, asansör taşıma kapasitesi ve özel paketleme gerektiren tüm kalemleri sahada ölçerek bu belirsizliği kaldırır.</p>
<p>Profesyonel Evden Eve Nakliyat ekibi keşif formunu dijital olarak doldurur, her odayı etiketler ve operasyon planını aynı gün içinde paylaşır. Böylece hangi aracın, kaç kişilik ekibin ve hangi malzemenin geleceğini önceden görürsünüz.</p>
<h2>Ekspertizde Kontrol Edilen Başlıklar</h2>
<table><thead><tr><th>Başlık</th><th>Yapılan Ölçüm</th><th>Çıktı</th><th>Sorumlu</th></tr></thead><tbody>
<tr><td>Hacim analizi</td><td>m³ lazer tarama</td><td>Araç tipi</td><td>Planlama uzmanı</td></tr>
<tr><td>Bina erişimi</td><td>Kapı ve asansör ölçüsü</td><td>Asansör/Vinç kararı</td><td>Saha koordinatörü</td></tr>
<tr><td>Kırılgan ekipman</td><td>Fotoğraflı envanter</td><td>Özel kasa listesi</td><td>Paketleme lideri</td></tr>
<tr><td>Enerji kesintileri</td><td>Site kuralları</td><td>Operasyon süresi</td><td>Müşteri temsilcisi</td></tr>
</tbody></table>
<h2>Randevuya Hazırlık Listesi</h2>
<ul>
<li>Balkon, depo ve bodrumdaki eşyaları belirgin hale getirin.</li>
<li>Sökülmesini istemediğiniz mobilyaları etiketleyin.</li>
<li>Taşınmayacak parçaları ayrı bir odada toplayın.</li>
<li>Site yönetiminden taşınma saat aralığını yazılı alın.</li>
<li>Eksperle paylaşmak istediğiniz soruları önceden not edin.</li>
</ul>
<h2>Teklif Dosyasında Neler Bulunur?</h2>
<ol>
<li>Operasyon akışı (yükleme, yol, kurulum süreleri).</li>
<li>Hizmet kalemleri: paketleme, demontaj, taşıma, kurulum.</li>
<li>Sigorta ve sözleşme şartları için ayrı başlık.</li>
<li>Asansör veya vinç kullanımı gerekiyorsa teknik gereksinimler.</li>
<li>Teslim sonrası kontrol listesinin PDF versiyonu.</li>
</ol>
<p>Keşif raporu imzalandıktan sonra fiyat sabitlenir ve taşınma günü herhangi bir ek ücret talep edilmez. Şeffaf süreç, müşteriyle ekip arasındaki güveni artırır.</p>`
    },
    {
      slug: 'sozlesmeli-nakliyat',
      title: 'Sözleşmeli Nakliyat',
      description: 'Yazılı sözleşme; fiyat, sorumluluk ve teslim koşullarını tarafların imzasına bağlayarak taşıma günü yaşanabilecek anlaşmazlıkların önüne geçer.',
      metaTitle: 'Sözleşmeli Nakliyat | Yazılı Güvence ile Taşımacılık',
      metaDescription: 'Sözleşmeli nakliyat hizmetiyle fiyat sabitlenir, hasar tazminatı ve iptal koşulları netleşir. Belirsizliğe yer bırakmadan taşının.',
      icon: 'FileText',
      order: 2,
      content: `<h2>Hukuki Kalkanınız İmzalı Dokümandır</h2>
<p>Taşıma başlamadan önce imzalanan sözleşme; hangi hizmetin hangi ücretle verileceğini, hasar anında hangi prosedürün uygulanacağını ve sorumluluk sınırlarını açıkça yazar. Böylece hem müşteri hem nakliyeci, sürecin sonunda hangi yükümlülüğün kendisine ait olduğunu bilir.</p>
<p>Sözleşme ayrıca taşıma günü yapılacak iş listesini maddelere böler. Paketleme, demontaj, asansör kurulumu veya depolama gibi ek kalemler “sürpriz ücret” olmadan, baştan tanımlanır.</p>
<h2>Olmazsa Olmaz Maddeler</h2>
<ul>
<li>Başlangıç-bitiş saat aralığı ve maksimum tolerans süresi.</li>
<li>Ödeme planı (kapora, kalan, kredi kartı veya EFT).</li>
<li>Sigorta poliçe numarası ile teminat üst limitleri.</li>
<li>İptal/erteleme koşulları ve ceza yüzdeleri.</li>
<li>Eşya listesi ile durum fotoğraflarının sözleşmeye eklenmesi.</li>
</ul>
<h2>Sözleşme Tipi Karşılaştırması</h2>
<table><thead><tr><th>Başlık</th><th>Standart</th><th>Detaylı</th></tr></thead><tbody>
<tr><td>Fiyat garantisi</td><td>Sabit</td><td>Sabit + kur korumalı</td></tr>
<tr><td>Hasar tazminatı</td><td>Yasal sınır</td><td>Rayiç değer + kira bedeli</td></tr>
<tr><td>Ek hizmet</td><td>Toplu madde</td><td>Kalem kalem açıklama</td></tr>
<tr><td>Uyuşmazlık çözümü</td><td>Hakem heyeti</td><td>Arabulucu + mahkeme yolu</td></tr>
</tbody></table>
<h2>İmzadan Önce Kontrol</h2>
<ol>
<li>Firma ünvanı ve vergi numarasının ticaret siciliyle eşleştiğini doğrulayın.</li>
<li>Taşıma tarihini değiştirmek gerekirse uygulanacak ücret maddesini okuyun.</li>
<li>Hasar bildirimi için verilen süreyi takviminize işleyin.</li>
<li>Muhtemel ek hizmetlerin (vinç, depo vb.) tetikleyici durumlarını sorun.</li>
<li>Her sayfayı paraflayın; sözleşme bütünlüğü böylece korunur.</li>
</ol>
<p>Yazılı belge sayesinde olası anlaşmazlıklarda işletme kayıtları, e-posta arşivi ve fotoğraflar tek dosyada sunulur; hak kaybı yaşanmaz.</p>`
    },
    {
      slug: 'sigortali-nakliyat',
      title: 'Sigortalı Nakliyat',
      description: 'Taşıma sürecinde oluşabilecek kırılma, çizik, kayıp ya da gecikmelere karşı sigorta poliçesi devreye girer ve maddi kaybın telafisini garanti altına alır.',
      metaTitle: 'Sigortalı Nakliyat | Tam Kapsamlı Taşıma Sigortası',
      metaDescription: 'Sigortalı nakliyat ile eşyalarınız için tam teminat sağlayın. Poliçe türlerini, tazminat süreçlerini ve hasar bildirim adımlarını öğrenin.',
      icon: 'Shield',
      order: 3,
      content: `<h2>Riskleri Poliçe Üstlenir</h2>
<p>Şehir içi ya da şehirler arası taşınırken tek bir darbede yılların birikimi zarar görebilir. Sigortalı nakliyat hizmeti, firmayı ve müşteriyi aynı masada buluşturur; her parçanın parasal değeri poliçeye işlenir, tazminat koşulları baştan belirlenir.</p>
<p>Poliçe kapsamında yalnızca araç içindeki hasar değil, depolama, yükleme sırasında meydana gelen kazalar ve sel, yangın, hırsızlık gibi dış etkenler de değerlendirilebilir.</p>
<h2>Sigorta Türleri</h2>
<table><thead><tr><th>Tür</th><th>Kapsam</th><th>Tazminat Formülü</th><th>Uygun Olduğu Durum</th></tr></thead><tbody>
<tr><td>Zorunlu sorumluluk</td><td>Firma kusuru</td><td>Yasal üst sınır</td><td>Standart taşımalar</td></tr>
<tr><td>Genişletilmiş nakliyat</td><td>Kaza + dış riskler</td><td>Rayiç değer</td><td>Şehir dışı projeler</td></tr>
<tr><td>Değer beyanlı</td><td>Belirlenen tutar</td><td>Beyan edilen rakam</td><td>Antika ve koleksiyon</td></tr>
</tbody></table>
<h2>Poliçe Talep Formunda Yer Alan Sorular</h2>
<ul>
<li>Eşyaların toplam rayiç değeri ve fatura durumu.</li>
<li>Depolama süresi var mı, varsa gün sayısı.</li>
<li>Elektronik ürünler için iç hasar teminatı isteği.</li>
<li>Vinç veya asansör kullanımının gerekip gerekmediği.</li>
<li>Taşımanın hangi ülke/şehir sınırlarında yapılacağı.</li>
</ul>
<h2>Hasar Bildirimi Nasıl Yapılır?</h2>
<ol>
<li>Teslim anında paketleri ekip ile birlikte kontrol edin, tutanak tutun.</li>
<li>Hasarlı her ürün için fotoğraf ve kısa açıklama hazırlayın.</li>
<li>48 saat içinde hem firmaya hem sigorta şirketine yazılı bildirim gönderin.</li>
<li>Eksper randevusuna faturalar ve seri numaralarıyla katılın.</li>
<li>Tazminat kararı sonrası ödemenin kaç iş gününde yapılacağını teyit edin.</li>
</ol>
<p>Belgeler eksiksiz sunulduğunda ödeme süreci hızlanır, müşteri kaybı en aza iner.</p>`
    },
    {
      slug: 'asansorlu-nakliyat',
      title: 'Asansörlü Nakliyat',
      description: 'Vinçli dış cephe asansörü dar merdivenlere sıkışan büyük mobilyaları balkon veya pencereden indirip çıkararak hasarsız taşır.',
      metaTitle: 'Asansörlü Nakliyat | Vinçli Taşıma Çözümleri',
      metaDescription: 'Asansörlü nakliyat ile geniş hacimli eşyalarınızı dakikalar içinde indirip çıkarın. Keşif, site koordinasyonu ve güvenlik prosedürlerini öğrenin.',
      icon: 'ArrowUpDown',
      order: 4,
      content: `<h2>Dış Cepheden Güvenli Transfer</h2>
<p>Özellikle yüksek katlı rezidans ve tarihi binalarda merdiven boşluğu dardır, iç asansörler ise mobilyaların ölçüsüne izin vermez. Asansörlü nakliyat, mobil vinç üzerine kurulan raylı platformla eşyaları dış cepheden doğrudan araca indirerek hem süreyi kısaltır hem de bina ortak alanlarını korur.</p>
<p>Operasyon öncesinde statik hesap yapılır; platformun kurulacağı alanın eğimi, elektrik hatları ve rüzgâr yönü ölçülür. Böylece taşıma günü sürpriz yaşanmaz.</p>
<h2>Hangi Durumlarda Tercih Edilir?</h2>
<ul>
<li>Üçlü koltuk, piyano, kasa gibi hacimli eşyalar taşınacaksa.</li>
<li>Bina yönetmeliği merdiven kullanımına süre kısıtı koyduysa.</li>
<li>İç asansörün taşıma kapasitesi 250 kg altında ise.</li>
<li>Merdiven dönüşleri 90°’nin altında ise.</li>
</ul>
<h2>Yöntem Karşılaştırması</h2>
<table><thead><tr><th>Yöntem</th><th>Süre</th><th>Hasar Riski</th><th>Personel</th></tr></thead><tbody>
<tr><td>Merdiven</td><td>Uzun</td><td>Yüksek</td><td>6+</td></tr>
<tr><td>İç asansör</td><td>Orta</td><td>Orta</td><td>4</td></tr>
<tr><td>Dış cephe asansörü</td><td>Kısa</td><td>Çok düşük</td><td>3</td></tr>
</tbody></table>
<h2>Operasyon Akışı</h2>
<ol>
<li>Ekspertizde pencere ölçüleri ve kuruluma uygun zemin belirlenir.</li>
<li>Site yönetiminden yazılı izin alınır, park alanı bariyerle kapatılır.</li>
<li>Vinç kurulur, güvenlik çemberi oluşturulur.</li>
<li>Eşyalar askı kayışlarıyla sabitlenip platforma yerleştirilir.</li>
<li>Araçta istif tamamlandıktan sonra söküm yapılıp alan temizlenir.</li>
</ol>
<p>Bu yöntem; zaman tasarrufu, komşu rahatsızlığının azalması ve sıfıra yakın hasar riski sağlar.</p>`
    },
    {
      slug: 'ambalaj-paketleme',
      title: 'Ambalaj & Paketleme',
      description: 'Profesyonel paketleme, eşyalarınızın taşıma sırasında sabit kalmasını sağlar; her kategori için ayrı malzeme ve etiketleme sistemi kullanılır.',
      metaTitle: 'Ambalaj ve Paketleme | Profesyonel Koruma Katmanları',
      metaDescription: 'Cam, elektronik, tekstil ve mobilyalar için farklı paketleme teknikleri. Çift katmanlı koruma ve renk kodlu etiket sistemiyle güvenli taşıma.',
      icon: 'Package',
      order: 5,
      content: `<h2>Her Eşya İçin Özel Kalkan</h2>
<p>Taşıma hasarlarının çoğu yolda değil, kutuya yerleştirme anında başlar. Profesyonel paketleme; doğru katman sırası, nem kontrolü ve renk kodlu etiketlerle kutuların araç içinde sabitlenmesini sağlar.</p>
<p>Ekibimiz eşyaları dört kategoriye ayırır: kırılgan, elektronik, tekstil ve mobilya. Her kategori farklı malzeme ve uyarı etiketiyle işaretlenir.</p>
<h2>Malzeme Matrisi</h2>
<table><thead><tr><th>Eşya</th><th>İç Katman</th><th>Orta Katman</th><th>Dış Koruma</th></tr></thead><tbody>
<tr><td>Cam/Porselen</td><td>İpek kağıt</td><td>Balonlu naylon</td><td>Tahta kasa</td></tr>
<tr><td>Mobilya</td><td>Keçe battaniye</td><td>Çift kat streç</td><td>Köşe koruyucu</td></tr>
<tr><td>Elektronik</td><td>Antistatik torba</td><td>Köpük panel</td><td>Darbelere dayanıklı kutu</td></tr>
<tr><td>Tekstil</td><td>Vakum poşeti</td><td>Katlanma önleyici karton</td><td>Nefes alan torba</td></tr>
</tbody></table>
<h2>Paketleme Akışı</h2>
<ol>
<li>Envanter oluşturulur, kırılgan eşyalar fotoğraflanır.</li>
<li>Malzeme setleri oda bazında hazırlanır.</li>
<li>Her kutu renklere göre etiketlenir (Mutfak: sarı, Salon: mavi vb.).</li>
<li>Kutuların ağırlığı 25 kg’ı geçmeyecek şekilde dağıtılır.</li>
<li>Liste, müşteriyle paylaşılır ve imza altına alınır.</li>
</ol>
<h2>Neden Uzman Paketleme?</h2>
<ul>
<li>Sigorta poliçesi için gerekli fotoğraflı rapor otomatik oluşur.</li>
<li>Kurulum ekibi yeni evde kutuları renk koduna göre kolayca yerleştirir.</li>
<li>Nem ölçerler sayesinde depolama sırasında küf riski düşer.</li>
<li>Tek kullanımlık malzemeler geri dönüşüm planına göre toplanır.</li>
</ul>
<p>Doğru paketleme, taşıma sonrası kurulumu hızlandırır ve eşyalarınızı ilk günkü haliyle korur.</p>`
    },
  ]

  for (const solution of solutions) {
    const timestamp = new Date()

    await prisma.solution.upsert({
      where: { slug: solution.slug },
      update: {
        ...solution,
        updatedAt: timestamp,
      },
      create: {
        ...solution,
        id: solution.slug,
        active: true,
        updatedAt: timestamp,
      },
    })
    console.log(`✓ ${solution.title}`)
  }

  console.log('\nSeeding completed!')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
