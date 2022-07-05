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
const simsekapi = require('simsekapi');
const client = new simsekapi('key');
```

# 💻 API'nin içerisinde bulunan fonksiyonlar ve örnekleri

**_(Modülde şimdilik belli başlı API'ler bulunuyor, ilerleyen zamanda Simsek API'de bulunan bütün API'ler bu modüle entegre edilecek.)_**

- Espri

```js
var veri = await client.espri();
console.log(veri.espri);
```

- Aşk ölçer

```js
var veri = await client.askolcer();
console.log(veri.askSeviye);
```

- Şifre oluşturma

```js
var uzunluk = 12;
var rakam = true;
var sembol = false;
var veri = await client.sifre(uzunluk, rakam, sembol);
console.log(veri.sifre);
```

- Renk kodunu bulma

```js
var kod = 'FF0000';
var veri = await client.renk(kod);
console.log(veri.renkismi);
```

- Namaz vakitleri

```js
var il = 'ankara';
var veri = await client.namaz(il);
console.log(veri.yaklasanVakit);
```

- Hava durumu

```js
var il = 'ankara';
var veri = await client.hava(il);
console.log(veri.sicaklikDerece);
```

- Nöbetçi eczaneler

```js
var il = 'ankara';
var veri = await client.eczane(il);
console.log(veri[0].isim);
```

- Burç yorumları

```js
var burc = 'ikizler';
var veri = await client.burc(burc);
console.log(veri.gunlukYorum);
```

- Instagram kullanıcı bilgisi

```js
var kullanici = 'instagram';
var duzenle = true; // JSON çıktısını düzenler
var veri = await client.instagram('kullanici', kullanici, duzenle);
console.log(veri.takipciSayisi);
```

- Instagram gönderi bilgisi

```js
var gonderi = 'https://www.instagram.com/p/CaATvrRsjD3/';
var duzenle = true; // JSON çıktısını düzenler
var veri = await client.instagram('gonderi', gonderi, duzenle);
console.log(veri.begeniSayisi);
```

- Döviz kurları

```js
var kur = 'USD';
var veri = await client.doviz(kur);
console.log(veri.alis);
```

- Altın fiyatları

```js
var altin = '14';
var veri = await client.altin(altin);
console.log(veri.alis);
```

- Kripto fiyatları ($)

```js
var kripto = 'BTC';
var veri = await client.kripto(kripto);
console.log(veri.alis);
```

- Parite bilgileri

```js
var parite = 'USD/EUR';
var veri = await client.parite(parite);
console.log(veri.alis);
```

- Vikipedi arama

```js
var ara = 'araba';
var veri = await client.vikipedi(ara);
console.log(veri.kisaAciklama);
```

- Tarihte bugün

```js
var veri = await client.tarihtebugun();
console.log(veri.olaylar);
```

- Ünlü kişilere ait sözler

```js
var veri = await client.soz();
console.log(veri.soz);
```

- Kekoca yazı yazma

```js
var yazi = 'kekoca yazılacak yazı';
var veri = await client.keko(yazi);
console.log(veri.yazi);
```

<hr>

Herhangi bir hata durumunda [destek sunucumuza](https://api.simsek.biz.tr/destek) katılıp `Turkoglu-#0777` kullanıcısına ulaşabilirsiniz.

### **Turkoglu- tarafından ❤ ile yazılmıştır.**
