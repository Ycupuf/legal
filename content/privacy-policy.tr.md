# Gizlilik Politikası

Son güncelleme: 12 Nisan 2026

Bu Gizlilik Politikası, Wardrobe mobil uygulamasını ve ilgili hizmetleri kullandığınızda Wardrobe'un hangi verileri topladığını, nasıl kullandığını, nasıl sakladığını ve nasıl paylaştığını açıklar.

## 1. Toplanan Veriler

Toplanabilecek veri kategorileri şunlardır:

### Hesap ve profil verileri
- E-posta adresi ve kimlik doğrulama bilgileri
- Gender presentation ve stil tercihleri dahil profil tercihleri
- Onboarding durumu gibi temel hesap metadataları

### Dolap ürünü verileri
- Wardrobe item için yüklediğiniz fotoğraflar
- Kategori, renk, materyal, style score, anchor sınıflandırması ve benzeri analiz çıktıları

### Üretilen kombin verileri
- BFMW ile üretilen kombin görselleri
- Üretilen kombinlere bağlı style, substyle, gender, theme, slot ve render metadataları
- Kombin üretimi, kaydı ve gösterimi için gerekli prompt, validation ve compatibility metadataları

### Abonelik ve entitlement verileri
- RevenueCat ve ilgili uygulama mağazası altyapısından gelen abonelik durumu, entitlement durumu, mağaza bilgisi ve sona erme bilgileri

### Teknik ve kullanım verileri
- Kombin üretim işlerini yürütmek için gerekli uygulama oturum ve kuyruk bilgileri
- Hizmeti işletmek, güvenli hale getirmek ve hataları gidermek için gerekli log, tanılama ve telemetri verileri

## 2. Verileri Nasıl Kullanıyoruz

Verileri şu amaçlarla kullanırız:
- kullanıcı hesabını doğrulamak ve yönetmek
- yüklenen wardrobe item'ları analiz etmek
- kombin önerileri ve render'lar üretmek ve kaydetmek
- style, substyle ve feed deneyimini kişiselleştirmek
- global Community akışını işletmek
- abonelik ve entitlement durumunu senkronize etmek
- hizmet performansını iyileştirmek, hata ayıklamak ve güvenliği sağlamak

## 3. Wardrobe Fotoğrafları ile Generated Outfit'lar Arasındaki Fark

Wardrobe item fotoğrafları ile generated outfit'lar aynı şekilde ele alınmaz.

### Wardrobe item fotoğrafları
Wardrobe item fotoğrafları özeldir ve Community akışında herkese açık gösterilmez.

### Generated outfit'lar
BFMW ile üretilen kombinler otomatik olarak Community akışına eklenir. Bu davranış için ayrıca uygulama içi bir opt-in istemeyiz.

Community görünürlüğü izleyene göre filtrelenir:
- izleyenin gender presentation bağlamı
- izleyenin aktif uygulama teması, yani black-studio veya white-studio varyasyonu

Bu nedenle generated outfit'lar global bir Community havuzunda tutulur; ancak her kullanıcı tüm havuzu filtresiz görmez.

## 4. Verileri Kimlerle İşliyoruz

Hizmeti çalıştırmak için verileri aşağıdaki servis sağlayıcılarla işleyebilir veya paylaşabiliriz:
- Supabase: kimlik doğrulama, veritabanı, depolama ve edge function altyapısı
- OpenAI: görsel üretim ve kombinle ilgili yapay zeka işlemleri
- RevenueCat: abonelik ve entitlement yönetimi
- Apple App Store ve Google Play faturalandırma sistemleri: abonelik satın alma veya geri yükleme işlemleri sırasında

Wardrobe item fotoğraflarınızı Community akışında herkese açık göstermeyiz.

## 5. Saklama Süreleri

Farklı veri türleri farklı sürelerle saklanır:

- Hesap ve profil verileri: hesap yaşam döngüsü boyunca veya daha önce silinirse o ana kadar
- Wardrobe item fotoğrafları ve özel dolap verileri: siz silene kadar veya hesap silme işlemiyle kaldırılana kadar
- Generated outfit kayıtları: kaydedilen görünümler, üretim geçmişi ve Community özelliklerini işletmek için gerekli süre boyunca
- Community'de yayınlanan generated outfit'lar: hesap silinse bile kullanıcı kimliği kaldırılmış şekilde Community'de kalabilir
- Abonelik verileri: entitlement yönetimi, faturalandırma desteği, uyumluluk ve kötüye kullanım önleme amaçlarıyla gerekli olduğu sürece

## 6. Hesap Silme

Hesap silme işlemini uygulama içinden başlatabilirsiniz.

Hesabınızı sildiğinizde:
- profil verileriniz kaldırılır
- wardrobe item'larınız ve özel yüklediğiniz dolap görselleri kaldırılır
- hesabınıza bağlı private generated data kaldırılır
- Community'de yayınlanmış generated outfit'lar, hesap kimliği kaldırılmış şekilde kalmaya devam edebilir

## 7. Güvenlik

Saklanan verileri korumak için makul teknik ve organizasyonel önlemler kullanırız. Ancak hiçbir aktarım veya depolama yöntemi tamamen güvenli değildir.

## 8. Çocukların Kullanımı

Wardrobe, yürürlükteki hukuka göre ebeveyn izni olmaksızın kullanılamayacak yaş grubuna yönelik tasarlanmamıştır.

## 9. Uluslararası İşleme

Verileriniz, bulunduğunuz ülke dışındaki altyapı ve servis sağlayıcılar tarafından işlenebilir.

## 10. Bu Politikanın Güncellenmesi

Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncel sürüm uygulama içinden ve/veya herkese açık policy URL'leri üzerinden sunulur.

## 11. İletişim

Gizlilik ve veri konuları için:

- Destek URL: `https://your-domain.com/support`
- Gizlilik Politikası URL: `https://your-domain.com/privacy`

