export type ServiceContentOverrides = Record<string, {
  content: string
}>

export const refreshedServiceContent: ServiceContentOverrides = {
  'ev-tasima': {
    content: `<h2>Adım Adım Ev Taşıma Stratejisi</h2>
<p>İstanbul gibi yoğun şehirlerde ev taşımak yalnızca mobilyaları kamyona yüklemekle sınırlı değildir; keşif, bina izinleri, komşu bilgilendirmeleri ve sigorta dokümantasyonu gibi onlarca parametre aynı anda yönetilmelidir. Profesyonel Evden Eve Nakliyat ekibi sahaya çıkmadan önce dairenizin elektrik, su ve asansör kullanım kısıtlarını analiz ederek tüm paydaşların sorumluluklarını yazılı hale getirir, böylece taşınma günü beklenmedik sürprizler yerine kontrollü bir operasyon yaşanır.</p>
<table><thead><tr><th>Hazırlık Aşaması</th><th>Sorumlu</th><th>Süre</th><th>Not</th></tr></thead><tbody>
<tr><td>Dijital envanter</td><td>Planlama uzmanı</td><td>45 dk</td><td>Kırılganlık kodu atanır</td></tr>
<tr><td>Bina izinleri</td><td>Saha koordinatörü</td><td>1 gün</td><td>Yönetim onayı alınır</td></tr>
<tr><td>Paketleme seti</td><td>Lojistik sorumlusu</td><td>3 saat</td><td>Oda bazlı etiketleme</td></tr>
<tr><td>Sigorta poliçesi</td><td>Müşteri temsilcisi</td><td>30 dk</td><td>Rayiç değer listesi</td></tr>
<tr><td>Komşu bilgilendirmesi</td><td>Saha koordinatörü</td><td>15 dk</td><td>Sessizlik saatleri paylaşılır</td></tr>
</tbody></table>
<p>Taşınma günü ise paketleme sıralamasından araç içi yük dengesine, yeni evdeki kurulum planından atık toplama lojistiğine kadar her adım dakikalarla planlanır. Zemin koruma matlarınız serilir, modüler mobilyalarınız QR etiketlerle takip edilir ve varış noktasında her oda için ayrı kontrol listeleri imzalanmadan operasyon kapanışına izin verilmez.</p>
<ul>
<li>Eski ve yeni adres için eş zamanlı WhatsApp bilgilendirmesi.</li>
<li>Beyaz eşyalar için üretici talimatına uygun demontaj.</li>
<li>Çocuk ve evcil hayvan güvenliği için geçici yaşam alanı.</li>
<li>Ambalaj atıklarının geri dönüşüm planına göre taşınması.</li>
</ul>`
  },
  'villa-tasimaciligi': {
    content: `<h2>Villa Taşımasında Mimari Okuma</h2>
<p>Yüksek tavanlar, panoramik camlar ve peyzajlı bahçelerle çevrili villalarda taşımacılık, klasik apartman süreçlerinden farklı riskler içerir; dar kıvrımlı merdivenler, zemindeki doğal taş kaplamalar ve havuz kenarı yaklaşım yolları aynı anda hesaplanmalıdır. Bu nedenle ilk gün, mimar eşliğinde saha gezisi yapılır ve taşıma hattı lazer ölçümlerle kayıt altına alınarak ağır mobilyalar için alternatif vinç konumları belirlenir.</p>
<table><thead><tr><th>Alan</th><th>Risk</th><th>Çözüm</th><th>Sorumlu</th></tr></thead><tbody>
<tr><td>Giriş holü</td><td>Mermer çizilmesi</td><td>Keçe bariyer</td><td>Saha koordinatörü</td></tr>
<tr><td>Bahçe patikası</td><td>Çökme</td><td>Alüminyum yol</td><td>Lojistik ekibi</td></tr>
<tr><td>Şarap mahzeni</td><td>Nem dalgalanması</td><td>İklim kasası</td><td>Depolama uzmanı</td></tr>
<tr><td>Sanat galerisi</td><td>UV etkisi</td><td>UV örtü</td><td>Küratör danışmanı</td></tr>
</tbody></table>
<p>Taşınma günü başladığında, değerli objeler için numaralı sandıklar kullanılır ve her sandığın GPS etiketi villa sahibiyle paylaşılan panelde görünür. Gün sonunda bahçe mobilyaları, akıllı ev sistemleri ve aydınlatmalar yeniden kalibre edilerek yeni yaşam alanı teslim edilir.</p>
<ul>
<li>Gece operasyonu gerekiyorsa komşu bildirimleri yapılır.</li>
<li>Havuz üstü geçişler geçici platformlarla güvene alınır.</li>
<li>Villa güvenlik sistemi devreden çıkmadan alternatif erişim planlanır.</li>
</ul>`
  },
  'yali-tasimaciligi': {
    content: `<h2>Yalı Taşımacılığında Deniz ve Tarih Dengesi</h2>
<p>Yalı taşımalarında tarihi ahşap kirişleri, alçak tavanları ve deniz tarafından gelen nemi aynı anda korumak gerekir; bu yüzden taşıma hattı belirlenirken hem iskele yaklaşımı hem de kara yolu alternatifleri eş zamanlı test edilir. Deniz tarafında kullanılan tüm platformlar kaymaz kaplamalarla güçlendirilir ve taşıma süresince rutubeti absorbe edecek jel paketler sahaya dağıtılır.</p>
<table><thead><tr><th>Malzeme</th><th>Koruma Yöntemi</th><th>Nem Limiti</th><th>Takip</th></tr></thead><tbody>
<tr><td>Ahşap silmeler</td><td>Keçe + balmumu</td><td>%50</td><td>Nem sensörü</td></tr>
<tr><td>Cam vitrinler</td><td>İzotermik örtü</td><td>%45</td><td>QR foto</td></tr>
<tr><td>Gümüş objeler</td><td>Anti-tarnish paket</td><td>%40</td><td>Kilitli kasa</td></tr>
<tr><td>Tekstil perdeler</td><td>İklim torbası</td><td>%55</td><td>RFID etiket</td></tr>
</tbody></table>
<p>Operasyon süresince, içerideki taşıma ekibi her odadan çıkmadan önce tavan, duvar ve döşemeyi fotoğraflayarak log kaydına işler, dışarıdaki ekip ise iskeleye yanaşan teknenin titreşimini minimize etmek için hidrolik dengeleme kullanır.</p>
<ul>
<li>İskele izinleri sahil güvenlikten yazılı olarak alınır.</li>
<li>Tarihi kısımlara basılacak yük için maksimum aks yükü hesaplanır.</li>
<li>Nem dalgalanması durumunda iklimlendirme jeneratörü devreye girer.</li>
</ul>`
  },
  'parca-esya-tasimaciligi': {
    content: `<h2>Parsiyel Gönderilerde Şeffaf Planlama</h2>
<p>Tek parça mobilya, butik mağaza dekoru ya da üniversiteye gönderilecek birkaç koli… Parsiyel taşımacılıkta en büyük risk karışma ve gecikmedir; bu yüzden her gönderiye özgü hacim kodu verilir ve o kod rota planında ayrı satır olarak görünür. Parsiyel araç doluluk oranı yüzde yetmişe ulaştığında, sistem müşteriye otomatik teslim tarihi bildirimi gönderir.</p>
<table><thead><tr><th>Hacim (m³)</th><th>Araç</th><th>Teslim Penceresi</th><th>Ek Hizmet</th></tr></thead><tbody>
<tr><td>0.5 - 1</td><td>Panelvan</td><td>24 saat</td><td>Kurye eşlik</td></tr>
<tr><td>1 - 3</td><td>Orta kamyon</td><td>48 saat</td><td>Ek ambalaj</td></tr>
<tr><td>3 - 6</td><td>Büyük kamyon</td><td>72 saat</td><td>Kasa mühürü</td></tr>
<tr><td>6+</td><td>Özel araç</td><td>Planlı</td><td>VIP teslim</td></tr>
</tbody></table>
<p>Yükleme gününden önce müşteriden fotoğraf ve ölçü alınır, ekip yerinde paketleme talep edilirse modüler koruma seti getirilir. Araç içinde her gönderi için mühürlü bölme kullanılır ve rota üzerindeki transfer noktalarında mühür numarası okutulmadan ilerlemeye izin verilmez.</p>
<ul>
<li>Gönderi hareketi e-posta ve SMS ile bildirilir.</li>
<li>Depoda bekleme gerekiyorsa günlük iklim raporu paylaşılır.</li>
<li>Teslim anında e-imza alınarak süreç kapanır.</li>
</ul>`
  },
  'sehir-ici-evden-eve-nakliyat': {
    content: `<h2>Şehir İçi Trafik ve Zaman Yönetimi</h2>
<p>Şehir içi taşımalar çoğunlukla birkaç saat içinde tamamlanmak istenir; bu baskı altında en kritik konu trafik tahmini ve bina erişim zamanlamasıdır. Sabah pik saatlerini atlamak için yükleme ekipleri vardiyalı çalışır, belediyenin geçici park permit uygulamasına başvurularak kamyon duraklama alanı önceden rezerve edilir.</p>
<table><thead><tr><th>Konut Tipi</th><th>Ekip</th><th>Süre</th><th>Özel Not</th></tr></thead><tbody>
<tr><td>1+1</td><td>3 kişi</td><td>3 saat</td><td>Asansör rezervasyonu</td></tr>
<tr><td>2+1</td><td>4 kişi</td><td>4 saat</td><td>Çift araç gerebilir</td></tr>
<tr><td>3+1</td><td>5 kişi</td><td>6 saat</td><td>Modüler lift önerilir</td></tr>
<tr><td>4+1+</td><td>6 kişi</td><td>8 saat</td><td>Vinç planı yapılır</td></tr>
</tbody></table>
<p>Operasyon sırasında mahalle sakinlerini rahatsız etmemek için gürültü sınırları takip edilir; paketlenen her oda, bittiğinde mobil uygulamada “tamamlandı” olarak işaretlenir ve müşteri tek bakışta ilerlemeyi görebilir.</p>
<ul>
<li>Asansör içleri kauçuk panellerle kaplanır.</li>
<li>Çöp ve ambalaj atıkları sahadan ayrılmadan toplanır.</li>
<li>Yeni dairede ilk kurulan alan yatak odası olur.</li>
</ul>`
  },
  'sehirler-arasi-evden-eve-nakliyat': {
    content: `<h2>Uzun Mesafede Güzergâh ve Güvenlik</h2>
<p>Şehirler arası taşımalar yüzlerce kilometrelik yolculuklar demektir; güzergâh seçimi yapılırken viyadük yükseklikleri, HGS/Otoyol geçişleri, dinlenme tesisleri ve yakıt planları tek şemada birleştirilir. Araçlarda bulunan telematik sistemleri, müşterinin paneline her iki saatte bir konum raporu gönderir.</p>
<table><thead><tr><th>Koridor</th><th>Mesafe</th><th>Transit Süre</th><th>Dinlenme Noktası</th></tr></thead><tbody>
<tr><td>İstanbul-Ankara</td><td>450 km</td><td>1 gün</td><td>Bolu</td></tr>
<tr><td>İstanbul-İzmir</td><td>480 km</td><td>1-2 gün</td><td>Balıkesir</td></tr>
<tr><td>Ankara-Antalya</td><td>480 km</td><td>1-2 gün</td><td>Konya</td></tr>
<tr><td>İzmir-Adana</td><td>930 km</td><td>2 gün</td><td>Mersin</td></tr>
</tbody></table>
<p>Yola çıkmadan önce kasa içi kamera sistemleri test edilir, yükleme alanı mühürlenir ve müşteriyle paylaşılan mühür numarası varışta doğrulanmadan açılmaz.</p>
<ul>
<li>Gece sürüşleri için çift şoför planlanır.</li>
<li>İklimlendirmeli kapalı kasa, yaz aylarında standarttır.</li>
<li>Varışta eşyalar oda bazlı çizelgeye göre indirillir.</li>
</ul>`
  },
  'ofis-tasimaciligi': {
    content: `<h2>Ofis Taşımada İş Sürekliliği</h2>
<p>Şirketler taşınırken kesinti minimumda tutulmalı; çalışanlar pazartesi sabahı bilgisayarlarını açtıklarında her şey aynı yerinde olmalıdır. Bu nedenle BT altyapısı, arşivler ve ortak alanlar için ayrı ekipler görevlendirilir, taşıma çizelgesi üretkenlik takvimine göre planlanır.</p>
<table><thead><tr><th>Bölüm</th><th>Paketleme Yöntemi</th><th>Süre</th><th>Kritik Not</th></tr></thead><tbody>
<tr><td>BT odası</td><td>Anti-statik paket</td><td>6 saat</td><td>IP adres planı</td></tr>
<tr><td>Arşiv</td><td>Barkodlu kutu</td><td>4 saat</td><td>Kişisel veri etiketi</td></tr>
<tr><td>Açık ofis</td><td>Modüler koli</td><td>8 saat</td><td>Masa planı</td></tr>
<tr><td>Toplantı alanı</td><td>Özel sandık</td><td>3 saat</td><td>Ses sistemi testi</td></tr>
</tbody></table>
<p>Operasyon boyunca çalışanlara bilgi akışı sağlamak için iç iletişim kanallarında “taşıma durumu” bölümü açılır ve her eşya grubu taşındıkça fotoğraflı bildirim gönderilir.</p>
<ul>
<li>Akıllı tahta ve ekranlar için orijinal kutular kullanılır.</li>
<li>Gizlilik gerektiren departmanlar kilitli sandıklarla taşınır.</li>
<li>Yeni ofiste ilk gün kahve alanı kurulumu tamamlanır.</li>
</ul>`
  },
  'kurumsal-tasimaciligi': {
    content: `<h2>Çok Lokasyonlu Kurumsal Operasyon</h2>
<p>Holdingler veya zincir mağazalar taşınırken aynı anda birden fazla lokasyon koordinasyonu gerekir; bu noktada merkezi dashboard ve görev atama sistemi devreye girer. Her lokasyonun çıkış ve varış tarihleri ayrı sprintler halinde planlanır.</p>
<table><thead><tr><th>Lokasyon</th><th>Öncelik</th><th>Koordinatör</th><th>Not</th></tr></thead><tbody>
<tr><td>Merkez</td><td>1</td><td>Proje yöneticisi</td><td>Karar merkezi</td></tr>
<tr><td>Bölge deposu</td><td>2</td><td>Lojistik lider</td><td>Stok kaydı</td></tr>
<tr><td>Şubeler</td><td>3</td><td>Saha süpervizörü</td><td>Personel eğitimi</td></tr>
<tr><td>Satış noktaları</td><td>4</td><td>Retail uzmanı</td><td>Müşteri bildirimi</td></tr>
</tbody></table>
<p>Taşıma boyunca risk raporları günlük olarak üst yönetime sunulur; elzem durumlarda acil müdahale timi devreye girecek şekilde vardiya planı tutulur.</p>
<ul>
<li>Yetki matrisi proje başında imzalanır.</li>
<li>Kritik ekipmanlar için yedek rota belirlenir.</li>
<li>Kapanışta finansal ve operasyonel rapor tek klasörde paylaşılır.</li>
</ul>`
  },
  'fabrika-tasimaciligi': {
    content: `<h2>Ağır Makine ve Üretim Hatları</h2>
<p>Fabrika taşımalarında tonajlı makinelerin sökümü, raylı sistemler, kimyasal tanklar ve hassas kalibrasyon gerektiren cihazlar söz konusudur; ilk adım, üretim duruşunu minimuma indirecek gece vardiyası planlamaktır. Zemin taşıma kapasitesi ölçülür, gerekirse çelik plakalarla güçlendirme yapılır.</p>
<table><thead><tr><th>Makine Tipi</th><th>Ağırlık</th><th>Yöntem</th><th>Ek Not</th></tr></thead><tbody>
<tr><td>CNC</td><td>12 ton</td><td>Vinç + lowbed</td><td>Vibrasyon sensörü</td></tr>
<tr><td>Pres hattı</td><td>18 ton</td><td>Modüler kaydırma</td><td>Hydrolik destek</td></tr>
<tr><td>Konveyör</td><td>4 ton</td><td>Segment söküm</td><td>Numaralı montaj</td></tr>
<tr><td>Kimyasal tank</td><td>8 ton</td><td>Özel izin</td><td>MSDS zorunlu</td></tr>
</tbody></table>
<p>Her makine söküldüğünde seri numarasıyla birlikte QR etiketi oluşturulur; yeni tesisde aynı sıra ile kurulması sağlanır.</p>
<ul>
<li>Üretim mühendisi her vardiyada hazır bulunur.</li>
<li>Kalibrasyon sonrası test üretimi yapılır.</li>
<li>Enerji bağlantıları elektrik mühendisince onaylanır.</li>
</ul>`
  },
  'banka-tasimaciligi': {
    content: `<h2>Banka Şubesi Güvenlik Protokolleri</h2>
<p>Banka taşımalarında para kasaları, ATM’ler, müşteri verileri ve alarm sistemleri aynı süreçte yönetilir; şube kapanışından en az üç gün önce güvenlik ekibiyle toplantı yapılarak rotalar belirlenir. Tüm ATM kasaları boşaltılıp tutanakla mühürlenir ve taşıma boyunca kamera kaydı tutulur.</p>
<table><thead><tr><th>Alan</th><th>Risk</th><th>Önlem</th><th>Sorumlu</th></tr></thead><tbody>
<tr><td>Kasa odası</td><td>Fiziksel hasar</td><td>Çelik kalkan</td><td>Güvenlik</td></tr>
<tr><td>ATM</td><td>Devrilme</td><td>Vinç aparatı</td><td>Teknik ekip</td></tr>
<tr><td>Arşiv</td><td>Veri sızıntısı</td><td>Kilitli kutu</td><td>Arşiv sorumlusu</td></tr>
<tr><td>BT odası</td><td>Veri kaybı</td><td>UPS koruma</td><td>BT lideri</td></tr>
</tbody></table>
<p>Teslimatta yeni şubede alarm ve kamera sistemleri test edilerek açılış onayı verilir; müşteri alanları temizlenene kadar operasyon kapanmaz.</p>
<ul>
<li>Çift imzalı tutanak her aşamada zorunludur.</li>
<li>Gece taşıması için polis bildirimi yapılır.</li>
<li>Müşteri belgeleri mühürlü kasalarda taşınır.</li>
</ul>`
  },
  'fuar-tasimaciligi': {
    content: `<h2>Fuar Standı Lojistiği</h2>
<p>Fuar taşımalarında en kritik konu saat bazlı teslimattır; standların geç teslimi, markanın ziyaretçi trafiğini kaybetmesine neden olur. Stand modülleri numaralanır, renk kodlanır ve fuar alanı ile koordineli olarak giriş saatleri rezerve edilir.</p>
<table><thead><tr><th>Stand Ölçeği</th><th>Teslim Öncesi Süre</th><th>Ekip</th><th>Ek Hizmet</th></tr></thead><tbody>
<tr><td>20 m²</td><td>12 saat</td><td>3 kişi</td><td>Kurulum destek</td></tr>
<tr><td>40 m²</td><td>24 saat</td><td>5 kişi</td><td>LED test</td></tr>
<tr><td>60 m²</td><td>36 saat</td><td>7 kişi</td><td>Depo alanı</td></tr>
<tr><td>80 m²+</td><td>48 saat</td><td>10 kişi</td><td>Vinç kiralama</td></tr>
</tbody></table>
<p>Kurulum tamamlandığında müşteri ile beraber checklist tutulur, fuar boyunca destek ekibi hazır bekler ve kapanışta sökme, paketleme ve geri yükleme aynı gün yapılır.</p>
<ul>
<li>Günlük iklim raporu stand sorumlusuna iletilir.</li>
<li>Ses ve ışık ekipmanları için ayrı sigorta yapılır.</li>
<li>Kapanış sonrası atıklar fuar kurallarına göre toplanır.</li>
</ul>`
  },
  'hastane-tasimaciligi': {
    content: `<h2>Tıbbi Ekipman Taşıma Protokolü</h2>
<p>Hastane taşımalarında MRI, ventilatör ve sterilizasyon cihazları gibi yüksek hassasiyetli ekipmanlar söz konusudur; bu nedenle biyomedikal mühendis eşliğinde kondisyon raporu hazırlanır. Steril alanlara giriş yapan tüm personel enfeksiyon kontrol eğitiminden geçer.</p>
<table><thead><tr><th>Cihaz</th><th>Hazırlık</th><th>Taşıma Aracı</th><th>Ek Not</th></tr></thead><tbody>
<tr><td>MRI</td><td>Helium purge</td><td>İklim kasası</td><td>Üretici onayı</td></tr>
<tr><td>Ventilatör</td><td>Batarya taması</td><td>Şok emici kasa</td><td>Teknik etiket</td></tr>
<tr><td>Ameliyat ışığı</td><td>Panel söküm</td><td>Özel sandık</td><td>Cam koruma</td></tr>
<tr><td>Laboratuvar cihazı</td><td>Reaktif boşaltma</td><td>Güvenli kutu</td><td>MSDS kaydı</td></tr>
</tbody></table>
<p>Hasta hizmetlerinin aksamaması için taşınma genellikle gece planlanır; yeni lokasyonda ağ, enerji ve HVAC testleri yapılmadan alan teslim edilmez.</p>
<ul>
<li>Hasta odaları tek tek kapatılıp etiketlenir.</li>
<li>UPS ve jeneratör bağlantıları test edilir.</li>
<li>Geçici acil servis alanı hazır tutulur.</li>
</ul>`
  },
  'konsolosluk-tasimaciligi': {
    content: `<h2>Diplomatik Lojistik ve Gizlilik</h2>
<p>Konsolosluklar taşınırken uluslararası protokoller, gizlilik sözleşmeleri ve diplomatik çanta kuralları devreye girer. Taşıma öncesinde Dışişleri onayı alınır, operasyon boyunca iletişim kayıt altına alınır.</p>
<table><thead><tr><th>Öğe</th><th>Statü</th><th>Taşıma Yöntemi</th><th>Takip</th></tr></thead><tbody>
<tr><td>Diplomatik çanta</td><td>Dokunulmaz</td><td>Gizli sandık</td><td>Çift imza</td></tr>
<tr><td>Arşiv</td><td>Gizli</td><td>Mühürlü kasa</td><td>RFID</td></tr>
<tr><td>Teknik ekipman</td><td>Kısıtlı</td><td>Güvenlik eskortu</td><td>Video kayıt</td></tr>
<tr><td>Mobilya</td><td>Standart</td><td>Özel ambalaj</td><td>Foto rapor</td></tr>
</tbody></table>
<p>Gümrük evrakları ve ATA karneleri taşıma planına eklenir; yeni lokasyonda güvenlik alarmı test edilene kadar teslim kapanmaz.</p>
<ul>
<li>Gizlilik sözleşmeleri ekip sahaya çıkmadan imzalanır.</li>
<li>Güvenlik eskortu konvoyu eşlik eder.</li>
<li>Tüm tutanaklar iki dilde hazırlanır.</li>
</ul>`
  },
  'universite-tasimaciligi': {
    content: `<h2>Kampüs Taşımalarında Akademik Takvim</h2>
<p>Üniversitelerin laboratuvarları, kütüphaneleri ve idari ofisleri aynı anda taşınırken akademik takvim aksatılmamalıdır; bu nedenle yaz dönemi tercih edilir ve bölümlere özel geçiş planları yapılır.</p>
<table><thead><tr><th>Birim</th><th>Paketleme</th><th>Süre</th><th>Ek Not</th></tr></thead><tbody>
<tr><td>Laboratuvar</td><td>İklim kasası</td><td>6 saat</td><td>Teknik eşlik</td></tr>
<tr><td>Kütüphane</td><td>Asitsiz kutu</td><td>8 saat</td><td>Numaralı raf</td></tr>
<tr><td>İdari</td><td>Kilitli kutu</td><td>4 saat</td><td>KVKK etiketi</td></tr>
<tr><td>Öğrenci işleri</td><td>Modüler koli</td><td>5 saat</td><td>Öncelikli kurulum</td></tr>
</tbody></table>
<p>Taşıma süresince öğrenciler ve akademisyenler bilgilendirilir, yeni kampüste ilk açılan alanlar yemekhane ve kütüphane olur.</p>
<ul>
<li>Her bölüm sorumlusu ile günlük durum toplantısı yapılır.</li>
<li>Öğrenci hizmetleri için geçici danışma masası kurulır.</li>
<li>Laboratuvar cihazları için kalibrasyon randevuları alınır.</li>
</ul>`
  },
  'arsiv-tasimaciligi': {
    content: `<h2>Belge Güvenliğine Odaklanan Arşiv Taşıması</h2>
<p>Kurumsal arşivler taşınırken veri bütünlüğü, nem kontrolü ve erişim logları kritik öneme sahiptir. Taşınacak her kutuya barkod verilir ve dijital envanter sistemiyle eşleştirilir.</p>
<table><thead><tr><th>Belge Türü</th><th>Koruma</th><th>Nem Limiti</th><th>Takip</th></tr></thead><tbody>
<tr><td>Hukuki dosya</td><td>Kilitli kutu</td><td>%45</td><td>Çift imza</td></tr>
<tr><td>Personel dosyası</td><td>Şifreli valiz</td><td>%50</td><td>KVKK etiketi</td></tr>
<tr><td>Muhasebe evrağı</td><td>Asitsiz kutu</td><td>%40</td><td>Barkod</td></tr>
<tr><td>Tarihsel kayıt</td><td>Özel sandık</td><td>%35</td><td>Foto rapor</td></tr>
</tbody></table>
<p>Taşıma hattında nem ve sıcaklık sensörleri çalışır, yeni arşiv odasında raf yerleşimi tamamlanmadan teslim olmaz.</p>
<ul>
<li>Yetkisiz personelin alana girmesi engellenir.</li>
<li>Nem raporları müşteriyle paylaşılır.</li>
<li>Kapanışta tüm kutular sayılarak teslim edilir.</li>
</ul>`
  },
  'muze-tasimaciligi': {
    content: `<h2>Küratör Eşliğinde Müze Taşımacılığı</h2>
<p>Müzelerdeki eserler benzersizdir; taşınma sırasında kondisyona zarar gelmemesi için konservatörlerle birlikte çalışılır ve her eser için ayrı klima, nem ve titreşim limitleri belirlenir.</p>
<table><thead><tr><th>Eser Türü</th><th>Paketleme</th><th>Nem</th><th>Ek Önlem</th></tr></thead><tbody>
<tr><td>Tuval</td><td>Asitsiz sandık</td><td>%50</td><td>UV filtre</td></tr>
<tr><td>Heykel</td><td>Köpük kalıp</td><td>%45</td><td>Vibrasyon sensörü</td></tr>
<tr><td>Tekstil</td><td>İklim torbası</td><td>%55</td><td>Toz bariyeri</td></tr>
<tr><td>Arkeolojik obje</td><td>Kumlanmış kasa</td><td>%40</td><td>Mühürlü etiket</td></tr>
</tbody></table>
<p>Taşıma hattında güvenlik kameraları kurulur, eser hareketleri dijital loga işlenir ve yeni sergileme alanında konservasyon onayı alınana kadar ambalaj açılmaz.</p>
<ul>
<li>Küratör eşliğinde paketleme yapılır.</li>
<li>İklim değerleri saatlik raporlanır.</li>
<li>Sigorta değerleri bağımsız eksperce onaylanır.</li>
</ul>`
  },
  'bankamatik-tasimaciligi': {
    content: `<h2>ATM ve Bankamatik Taşıması</h2>
<p>Bankamatik taşımalarında güvenlik, elektrik bağlantıları ve yazılım testleri birlikte yönetilir; cihazlar kullanım dışı bırakılır ve kasa boşaltılır, söküm süresince kamera kaydı tutulur.</p>
<table><thead><tr><th>ATM Tipi</th><th>Ağırlık</th><th>Ekipman</th><th>Kurulum Süresi</th></tr></thead><tbody>
<tr><td>Duvar tipi</td><td>600 kg</td><td>Raylı sistem</td><td>2 saat</td></tr>
<tr><td>Stand alone</td><td>900 kg</td><td>Vinç + palet</td><td>3 saat</td></tr>
<tr><td>Çift taraflı</td><td>1200 kg</td><td>Hidrolik merdiven</td><td>4 saat</td></tr>
<tr><td>Mobil</td><td>400 kg</td><td>Kabin + forklift</td><td>1,5 saat</td></tr>
</tbody></table>
<p>Yeni alanda ankrajlar hazırlanır, aktivasyon sonrası test çekimi yapılır ve log dosyaları bankaya teslim edilir.</p>
<ul>
<li>Polis bildirimi ve güvenlik eskortu planlanır.</li>
<li>Data ve enerji hatları mühendis gözetiminde bağlanır.</li>
<li>Söküm ve kurulumda çift imza tutanağı kullanılır.</li>
</ul>`
  },
  'para-kasasi-tasimaciligi': {
    content: `<h2>Çelik Kasa Taşımacılığı</h2>
<p>Değerli kasalar taşınırken ağırlık, güvenlik ve hukuki süreçler aynı anda yönetilir; kasanın bulunduğu zemin statik açıdan analiz edilir, taşıma güzergâhı çelik plakalarla güçlendirilir ve kombinasyon bilgisi yalnızca yetkili müşteri temsilcisiyle paylaşılır.</p>
<table><thead><tr><th>Kasa Tipi</th><th>Ağırlık</th><th>Ekipman</th><th>Kurulum Süresi</th></tr></thead><tbody>
<tr><td>Duvar içi</td><td>500-900 kg</td><td>Raylı sistem</td><td>3 saat</td></tr>
<tr><td>Yer tipi</td><td>900-1500 kg</td><td>Vinç + kaydırma</td><td>4 saat</td></tr>
<tr><td>Bankamatik kasası</td><td>700-1100 kg</td><td>Forklift</td><td>3,5 saat</td></tr>
<tr><td>Mücevher</td><td>1200-2000 kg</td><td>Hidrolik taşıma</td><td>5 saat</td></tr>
</tbody></table>
<p>Operasyon adımları, kasanın kullanım dışı bırakılması, kamera destekli söküm, yeni lokasyonda ankraj hazırlığı ve kombinasyonun yeniden tanımlanması şeklinde ilerler.</p>
<ul>
<li>Kasa sökümünde güvenlik kamerası kaydı tutulur.</li>
<li>Yeni zemine yerleştirilmeden önce ankrajlar kontrol edilir.</li>
<li>Kurulum sonrası kombinasyon müşteriye teslim edilir.</li>
</ul>`
  }
}
