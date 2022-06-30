const axios = require('./lib/axios');

class Client {
  constructor(key) {
    if (!key)
      throw new Error(
        '(SIMSEK API) API key girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak API keyinizi giriniz.'
      );

    this.key = key;
    this.BASE_URL = 'https://api.simsek.biz.tr/api?api=';
  }

  espiri() {
    return axios.get('espri', this.key);
  }

  askolcer() {
    return axios.get('askolcer', this.key);
  }

  soz() {
    return axios.get('soz', this.key);
  }

  keko(text) {
    return axios.get('keko', this.key, `yazi=${text}`);
  }

  sifre(length, number, symbol) {
    return axios.get(
      'sifre',
      this.key,
      `uzunluk=${length}`,
      `rakam=${number}`,
      `sembol=${symbol}`
    );
  }

  renk(code) {
    return axios.get('renk', this.key, `renk=${code}`);
  }

  namaz(city) {
    return axios.get(
      'namaz',
      this.key,
      `il=${city.toLocaleLowerCase('tr-TR')}`
    );
  }

  hava(city) {
    return axios.get('hava', this.key, `il=${city.toLocaleLowerCase('tr-TR')}`);
  }

  eczane(city) {
    return axios.get(
      'eczane',
      this.key,
      `il=${city.toLocaleLowerCase('tr-TR')}`
    );
  }

  burc(horoscop) {
    return axios.get('burc', this.key, `burc=${horoscop}`);
  }

  vikipedi(text) {
    return axios.get('vikipedi', this.key, `ara=${text}`);
  }

  tarihtebugun() {
    return axios.get('tarihtebugun', this.key);
  }

  doviz(currency) {
    if (currency) {
      return axios.get('doviz', this.key, `doviz=${currency}`);
    }

    return axios.get('doviz', this.key);
  }

  altin(gold) {
    if (gold) {
      return axios.get('altin', this.key, `altin=${gold}`);
    }

    return axios.get('altin', this.key);
  }

  kripto(crypto) {
    if (crypto) {
      return axios.get('kripto', this.key, `kripto=${crypto}`);
    }

    return axios.get('kripto', this.key);
  }

  parite(parity) {
    if (parity) {
      return axios.get('parite', this.key, `parite=${parity}`);
    }

    return axios.get('parite', this.key);
  }

  instagram(proccess, value, edit) {
    if (!proccess) {
      throw new Error(
        "(SIMSEK API - Instagram) İşlem girilmemiş. 'kullanici' veya 'gonderi' işlemlerini kullanabilirsiniz."
      );
    }

    if (!value) {
      throw new Error(
        "(SIMSEK API - Instagram) Değer girilmemiş. 'kullanici' veya 'gonderi' işlemlerini kullanabilirsiniz."
      );
    }

    switch (proccess) {
      case 'kullanici':
        return axios.get(
          'instagram',
          this.key,
          'islem=kullanici',
          `kullanici=${value}`,
          `duzenle=${edit}`
        );

      case 'gonderi':
        return axios.get(
          'instagram',
          this.key,
          'islem=gonderi',
          `url=${value}`,
          `duzenle=${edit}`
        );

      default:
        throw new Error(
          "(SIMSEK API - Instagram) İşlem girilmemiş. 'kullanici' veya 'gonderi' işlemlerini kullanabilirsiniz."
        );
    }
  }
}

module.exports = Client;
