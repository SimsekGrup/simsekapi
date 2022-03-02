"use strict";
const axios = require("axios");
const apiURL = "https://api.simsek.biz.tr";

class SimsekAPI {
	constructor(apikey) {
		if(!apikey) throw reject("(SIMSEK API) API key girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak API keyinizi giriniz.");
		this.apikey = apikey;
	}
	
	
	espri() {
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=espri&key=${this.apikey}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	}
	
	askolcer() {
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=askolcer&key=${this.apikey}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	}  
	
	soz() {
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=soz&key=${this.apikey}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	} 
	
	keko(yazi) {
		if(!yazi) throw new Error("(SIMSEK API - Keko) Yazı girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak kekoca yazdırmak istediğiniz yazıyı giriniz.");
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=keko&key=${this.apikey}&yazi=${yazi}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	} 
	
	sifre(uzunluk, rakam, sembol) {
		if(!uzunluk) throw new Error("(SIMSEK API - Şifre oluşturucu) Şifre uzunluğu girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak şifre uzunluğunu rakamla yazınız.");
		rakam = rakam ? true : false
		sembol = sembol ? true : false
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=sifre&key=${this.apikey}&uzunluk=${uzunluk}&rakam=${rakam}&sembol=${sembol}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	} 
	
	renk(kod) {
		if(!kod) throw new Error("(SIMSEK API - Renk kodu ile arama) Renk kodu girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak renk kodunu yazınız.");
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=renk&key=${this.apikey}&renk=${renk}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	} 
	
	namaz(il) {
		if(!il) throw new Error("(SIMSEK API - Namaz vakitleri) İl girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak bir il yazınız.");
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=namaz&key=${this.apikey}&il=${il.toLocaleLowerCase("tr-TR")}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	} 
	
	hava(il) {
		if(!il) throw new Error("(SIMSEK API - Hava durumu) İl girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak bir il yazınız.");
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=hava&key=${this.apikey}&il=${il.toLocaleLowerCase("tr-TR")}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	} 
	
	eczane(il) {
		if(!il) throw new Error("(SIMSEK API - Nöbetçi eczaneler) İl girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak bir il yazınız.");
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=eczane&key=${this.apikey}&il=${il.toLocaleLowerCase("tr-TR")}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	} 
	
	burc(burc) {
		if(!burc) throw new Error("(SIMSEK API - Burç) Burç girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak aranacak burcu yazınız.");
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=burc&key=${this.apikey}&burc=${burc.toLocaleLowerCase("tr-TR")}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	} 
	
	vikipedi(ara) {
		if(!ara) throw new Error("(SIMSEK API - Vikipedi) Aranacak şey girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak vikipedide arayacağınız şeyi yazınız.");
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=vikipedi&key=${this.apikey}&ara=${burc.toLocaleLowerCase("tr-TR")}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	} 
	
	tarihtebugun() {
		return new Promise(async(resolve, reject) => {
			await axios.get(`${apiURL}/api?api=tarihtebugun&key=${this.apikey}`).then(async(res) => {
				await resolve(res.data);
			})
			.catch((err) => {
				if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
			});
		})
		.catch((err) => {
			if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
		});
	}
	
	doviz(doviz) {
		if(doviz) {
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=doviz&key=${this.apikey}&doviz=${doviz.toLocaleUpperCase()}`).then(async(res) => {
					await resolve(res.data[0]);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		} else {
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=doviz&key=${this.apikey}`).then(async(res) => {
					await resolve(res.data);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		}
	}
	
	altin(altin) {
		if(altin) {
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=altin&key=${this.apikey}&altin=${altin.toLocaleUpperCase()}`).then(async(res) => {
					await resolve(res.data[0]);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		} else {
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=altin&key=${this.apikey}`).then(async(res) => {
					await resolve(res.data);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		}
	}
	
	kripto(kripto) {
		if(kripto) {
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=kripto&key=${this.apikey}&kripto=${kripto.toLocaleUpperCase()}`).then(async(res) => {
					await resolve(res.data[0]);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		} else {
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=kripto&key=${this.apikey}`).then(async(res) => {
					await resolve(res.data);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		}
	}
	
	parite(parite) {
		if(parite) {
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=parite&key=${this.apikey}&parite=${parite.toLocaleUpperCase()}`).then(async(res) => {
					await resolve(res.data[0]);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		} else {
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=parite&key=${this.apikey}`).then(async(res) => {
					await resolve(res.data);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		}
	}
	
	instagram(islem, x, duzenle) {
		if(!islem) throw new Error("(SIMSEK API - Instagram) İşlem girilmemiş. 'kullanici' veya 'gonderi' işlemlerini kullanabilirsiniz.");
		if(islem == "kullanici") {
			if(!x) throw new Error("(SIMSEK API - Instagram) Kullanıcı adı girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak kullanıcı adını yazınız.");
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=instagram&islem=kullanici&kullanici=${x}&duzenle=${duzenle}&key=${this.apikey}`).then(async(res) => {
					await resolve(res.data);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		} else if(islem == "gonderi") {
			if(!x) throw new Error("(SIMSEK API - Instagram) Gönderi URL'si girilmemiş. Lütfen modülün dökümanını eksiksiz okuyarak gönderi URL'sini yazınız.");
			return new Promise(async(resolve, reject) => {
				await axios.get(`${apiURL}/api?api=instagram&islem=gonderi&duzenle=${duzenle}&key=${this.apikey}&url=${x}`).then(async(res) => {
					await resolve(res.data);
				})
				.catch((err) => {
					if(err) throw reject(`(SIMSEK API) Hata:\n${err.text}`);
				});
			})
			.catch((err) => {
				if(err) throw new Error(`(SIMSEK API) Hata:\n${err.text}`);
			});
		}
	} 
}
module.exports = SimsekAPI;