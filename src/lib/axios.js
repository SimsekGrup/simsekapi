const axios = require('axios');

const BASE_URL = 'https://api.simsek.biz.tr/api?api=';

function get(url, key, ...params) {
  return axios
    .get(`${BASE_URL + url}&key=${key}&${params.join('&')}`)
    .then(async (res) => res.data)
    .catch((err) => {
      if (err) throw new Error(`(SIMSEK API) Hata:\n${err}`);
    });
}

module.exports = {
  get
};
