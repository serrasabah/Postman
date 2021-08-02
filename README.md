# Postman


Postman, Chrome uzantısı olarak kullanabileceğimiz veya direct indirip bilgisayarımıza yükleyebileceğimiz bir uygulamadır. Rest Client olarak da tanımlanabilir.
* Postman sayesinde uzun uzun kodlar yazmak yerine API’lerimizi kolayca test edebiliriz. Birçok özelliği sayesinde kolay bir şekilde istek hazırlayıp gelen cevap değerlerini kullanabiliriz.
* Hazırladığınız request’leri export edip arkadaşlarınızla da paylaşabiliriz. Aynı zamanda requestler arası veri aktarabilir, bir api’nin çıktısını diğerinin outputu olacak şekilde geliştirme yapabiliriz. 

**POST-GET-PUT-DELETE**
* GET: Sunucuda herhangi bir değişiklik (ekleme, slime, modifiye) yapılmayacaksa sadece veri çekmek(okuma) istiyorsak Get metodunu kullanabiliriz.
* POST: Server Api’e body kısmını doldurarak ve veri üzerinde değişiklik yapmak istediğimizde kullanabiliriz. CRUD operasyonlarından Create ve Update kısımlarını kapsar.
* PUT: Post isteğinin özelliklerine sahiptir. Yani CRUD operasyonlarından Create ve Update operasyonlarını yapmak istediğimizde kullanıyoruz.
* DELETE: CRUD operasyonlarından Delete’e karşılık gelir. Bir veriyi silmek istediğimizde kullanabiliriz.  
  
 # API (Application Programming Interface - Uygulama Programlama Arayüzü)
   
API:  karmaşıklığı yazılım geliştiricilerden gizleyen, kodları düzenleyen ve bileşenleri yeniden kullanılabilir hale getiren bir mekanizmadır.
Bir uygulamanın, servisin ve/veya platformun (örn. Chrome, Firefox, HTML, macOS, Youtube, Twitter, Facebook, Google, WordPress, Ubuntu, Android, jQuery, ...) sahip olduğu yeteneklere izin verilen sınırlandırmalar dahilinde dışarıdan erişilebilmesini sağlayan bir arayüzdür.

*API'nin Türleri Nelerdir?*
* **Open API (diğer adıyla Public API)** : Minimum kısıtlama ile geliştiriciler ve diğer kullanıcılar tarafından herkesin kullanımına açık API'lerdir. 
* **Internal API (diğer adıyla Private API)** : Harici kullanıcılardan gizlenir ve yalnızca dahili sistemler tarafından açığa çıkarılır. 
* **Partner API** : Stratejik iş ortaklarına veya stratejik iş ortakları tarafından sunulan API'lerdir. 
* **Composite API** : Composite API'ler birden çok veri veya hizmet API'sini birleştiren API'lerdir.



   *REST API ve SOAP API Nedir?*
   
**SOAP API (Simple Object Access Protocol)**
* SOAP web servis çağrılarında RPC (Remote Procedure Call) modelini kullanan, istemci/sunucu mantığına dayalı bir protokol olarak ifade edilebilir. 
* Metotların call edilmesi üzerine alınan response da dahil sürecin tamamı XML olarak ve genellikle HTTP (Hyper Text Transfer Protocol) protokolü kullanılarak iletilir. 
* XML yapısı sebebiyle REST’e kıyasla daha katı bir işleyişe sahip olduğu için pek tercih edilmemektedir. 


**REST  (Representational State Transfer)**
* SOAP ve WSDL tabanlı web servislerinin daha basite indirgenmiş hali olarak nitelendirilebilir. 
* Bu amaçla internet tarayıcısı sayfa işlemlerinin bir parçası olan HTTP protokolünü (GET, POST, PUT DELETE gibi talep tipleri) kullanır. Böylelikle REST API geliştiricilere yaygın, pratik ve oldukça esnek bir kullanım olanağı sunduğu gibi, minimum içerikle veri alıp gönderdiği için de daha hızlıdır. 
* REST API, istemci ve sunucu arasında XML, JSON, HTML, TEXT başta olmak üzere pek çok formatta veri taşıyarak uygulamaların haberleşmesini sağlar.
* Client-server arasında yani kullanıcı ile sunucu arasında daha hızlı ve daha pratik bir şekilde iletişim gerçekleştirilmesi için kullanılan bir servis yapısıdır.

*Rest Mimarisi ve Tarihçesi*
* Bu servis Roy Thomas Fielding tarafından 2000 yılında geliştirilmiştir.
* Performans açısından baskın bir avantaja sahiptir.
* Çok sade ve rahat kullanılabilir bir arayüzü bulunmaktadır.
* REST, servis ajanlarınca yani hizmet vekilleri tarafından bileşenler arasındaki haberleşme görünürlüğü sağlamaktadır.
* Bir veri ile beraber program kodu hareket ettirildiğinde, istenilen bileşen kolaylıkla taşınabilir.

*REST’in temelde şu mimari stil prensipleri çerçevesinde geliştirilmesi beklenir:*
* Layered System (Tabakalı Sistem)
* REST Üzerinde Kullanılan HTTP Metotları
* Stateless (Bağımsız)
* Basit Arayüz
* Code On Demand (İsteğe Bağlı Kod)
* Cach Edilebilme
* Client-Serer Mimarisi (Kullanıcı-Sunucu Mimarisi)


**RESTFUL NEDİR**
* REST bir mimari yapı oluşturmak ile birlikte bu mimari yapı kendine ait bir prensibe sahiptir ve belirlenen özellikleri ile kullanım gerçekleştirildiğinde, bu kullanım sonucunda da RESTful servis ortaya çıkar. Yani RESTful için REST mimari kullanımı gerçekleştiren web servisleridir.
* Genellikle HTTP protokolü üzerinden çalışma gösteren RESTful servisleri, bilgisayar veya cihazlarda kullanılan internet tarayıcıları üzerinde yani Safari, Google Chrome, Mozilla, Opera gibi tarayıcılarda kullanılan sayfaların transferini sağlayabilmek açısından DELETE, PUT, POST gibi HTTP metotları sayesinde haberleşme sağlarlar.



referanslar:
https://ceaksan.com/tr/rest-soap-api-nedir
https://www.argenova.com.tr/api-nedir
https://medium.com/huawei-developers-tr/postman-nedir-83eeaa5ed6ac
https://medium.com/kodcular/postman-nedir-ce39bef14db7
https://www.atakdomain.com/blog/rest-ve-restful-nedir
https://www.youtube.com/watch?v=9-O7fWP5gPg
