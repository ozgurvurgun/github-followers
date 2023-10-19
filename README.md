# github-followers
- Bu eklenti, siz takip ettiğiniz halde sizi takip etmeyen github kullanıcılarını listler.
- Eklenti web sayfasının DOM'ine erişebildiğinden api, token vs. ihtiyaç duyulmaz.
- Eklentinin çalışması için github oturumunuzu açmalı ve eklentiyi herhangi bir github sayfasında kullanmalısınız.
- Eğer yavaş bir internet bağlantısına sahip iseniz popup.js dosyasında
- 
    ```
     let counterGlobal = 15;
    ```
    - Buradaki hesaplama süresini yükseltiniz. fka nın following+followers toplamı yaklaşık 9000 civarı. İnternet hızınız düşük ise ve bu civarda takipçi hesaplatacaksanız süreyi 100s-110s civarı vermelisiniz. Bu konu internet hızınızla çok alakalıdır. Kendinize uygun süreyi bulunuz. f+f= 500-600 civarı 15s , 1000 civarı 18s-20s fazlası ile yeterli olacaktır.
- Github sınırları içinde olduğunuz sürece bütün kullanıcılar için bu eklentiyi kullanabilirsiniz.
- DİKKAT!! Bazı kullanıcılar sisteme isim soyisimlerini tanıtmadıkalarından dolayı bu kısımları hesaba katarak regex yazıp sorgu atmak gerekiyor. Eklentiyi direkt kullanırsanız bu kullanıcılar hesaplamaya katılamyacak. Ufak bi regex ile bunu çözebilirsniz.
- Çok iyi js bilmiyorum kod spagetti ve algoritması iyileştirilmeli. pr atabilirsiniz.
- Not: Tarayıcının geliştirici modunu açmayı unutma.

- Eklentiyi Nasıl Kurarım (chrome) ?
    - <span style="font-size:25px">&vellip;</span> &nbsp; &#x22B3; &nbsp; diğer araçlar &nbsp; &#x22B3; &nbsp; uzantılar &nbsp; &#x22B3; &nbsp; paketlenmiş öğe yükle
- 1.0 sürümünde takipçi sayısı az olan kullanıcılar gereksiz bekliyor olabilir. Sonraki sürüm de kullanıcının İnternet hızına göre makul hesaplama süresi otomatik olarak atanacak.