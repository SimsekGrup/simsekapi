<p align="center">
<h1><strong>Simsek API</strong></h1>
- Herhangi bir yardımcı modüle ihtiyaç duymadan bu modül sayesinde Simsek API'den doğrudan veri çekebilirsiniz.

[API sayfası](https://api.simsek.biz.tr) | [NPM sayfası](https://www.npmjs.com/package/simsekapi)
</p>

# 🔧 Kurulum
## Modülü kurmak için
```
$ npm install simsekapi
```
## Modülü sisteminize entegre etmek için
```js
var key = "api.simsek.biz.tr sitesinden almış olduğunuz api key"
var API = require("simsekapi");
<client>.SimsekAPI = new API(key)
```

# 💻 API'nin içerisinde bulunan fonksiyonlar ve örnekleri
***(Modülde şimdilik belli başlı API'ler bulunuyor, ilerleyen zamanda Simsek API'de bulunan bütün API'ler bu modüle entegre edilecek.)***
- Espri
```js
var veri = await <client>.SimsekAPI.espri()
console.log(veri.espri)
```

- Aşk ölçer
```js
var veri = await <client>.SimsekAPI.askolcer()
console.log(veri.askSeviye)
```

- Şifre oluşturma
```js
var uzunluk = 12
var rakam = true
var sembol = false
var veri = await <client>.SimsekAPI.sifre(uzunluk, rakam, sembol)
console.log(veri.sifre)
```

- Renk kodunu bulma
```js
var kod = "FF0000"
var veri = await <client>.SimsekAPI.renk(kod)
console.log(veri.renkismi)
```

- Namaz vakitleri
```js
var il = "ankara"
var veri = await <client>.SimsekAPI.namaz(il)
console.log(veri.yaklasanVakit)
```

- Hava durumu
```js
var il = "ankara"
var veri = await <client>.SimsekAPI.hava(il)
console.log(veri.sicaklikDerece)
```

- Nöbetçi eczaneler
```js
var il = "ankara"
var veri = await <client>.SimsekAPI.eczane(il)
console.log(veri[0].isim)
```

- Burç yorumları
```js
var burc = "ikizler"
var veri = await <client>.SimsekAPI.burc(burc)
console.log(veri.gunlukYorum)
```

- Instagram kullanıcı bilgisi
```js
var kullanici = "instagram"
var duzenle = true // JSON çıktısını düzenler
var veri = await <client>.SimsekAPI.instagram("kullanici", kullanici, duzenle)
console.log(veri.takipciSayisi)
```

- Instagram gönderi bilgisi
```js
var gonderi = "https://www.instagram.com/p/CaATvrRsjD3/"
var duzenle = true // JSON çıktısını düzenler
var veri = await <client>.SimsekAPI.instagram("gonderi", gonderi, duzenle)
console.log(veri.begeniSayisi)
```

- Döviz kurları
```js
var kur = "USD"
var veri = await <client>.SimsekAPI.doviz(kur)
console.log(veri.alis)
```

- Altın fiyatları
```js
var altin = "14"
var veri = await <client>.SimsekAPI.altin(altin)
console.log(veri.alis)
```

- Kripto fiyatları ($)
```js
var kripto = "BTC"
var veri = await <client>.SimsekAPI.kripto(kripto)
console.log(veri.alis)
```

- Parite bilgileri
```js
var parite = "USD/EUR"
var veri = await <client>.SimsekAPI.parite(parite)
console.log(veri.alis)
```

- Vikipedi arama
```js
var ara = "araba"
var veri = await <client>.SimsekAPI.vikipedi(ara)
console.log(veri.kisaAciklama)
```

- Tarihte bugün
```js
var veri = await <client>.SimsekAPI.tarihtebugun()
console.log(veri.olaylar)
```

- Ünlü kişilere ait sözler
```js
var veri = await <client>.SimsekAPI.soz()
console.log(veri.soz)
``` 

- Kekoca yazı yazma
```js
var yazi = "kekoca yazılacak yazı"
var veri = await <client>.SimsekAPI.keko(yazi)
console.log(veri.yazi)
```

<hr>

Herhangi bir hata durumunda [destek sunucumuza](https://api.simsek.biz.tr/destek) katılıp `Turkoglu-#0777` kullanıcısına ulaşabilirsiniz.

### **Turkoglu- tarafından ❤ ile yazılmıştır.**

