# Kolay Ingilizce Ogrenme - Proje Dokumani

Bu proje Turkce konusan kullanicilar icin pratik Ingilizce ogrenme uygulamasidir.

## Ana Dosyalar

- `index.html`: GitHub Pages giris dosyasi. `english-v3.html` dosyasina yonlendirir.
- `english-v3.html`: Ana uygulama. Arayuz, ders motoru, test, SRS, ceviri, ses ve yardim ekranlari burada.
- `ders1.js` - `ders49.js`: Ders verileri. Uygulama ders acildikca ilgili dosyayi yukler.
- `tools/enrich-bonus.mjs`: Bonus kelime setlerini zenginlestirmek icin yardimci arac.

## Uygulama Ozeti

- 20 ana ders: gunluk Ingilizce konusma konulari (Ders 2: Fiil Zamanlari).
- 29 bonus kelime seti: daha genis kelime havuzu.
- Turkce/English arayuz secimi.
- Web Speech API ve istege bagli Google TTS destegi.
- Yildizlama, liste, ders tamamlama ve ilerleme takibi.
- SRS tekrar sistemi.
- Test ve egzersiz modulleri.
- Ingilizce-Turkce ceviri modulu.
- GitHub Gist ile cihazlar arasi veri senkronu.

## Ders Veri Yapisi

Her `dersN.js` dosyasi su sekilde biter:

```javascript
LESSONS[N] = LN;
```

Temel alanlar:

- `words`: kelime listesi. Her kelime icin `en`, `ro`, `tr`, `tip`, `ctx`, `examples` kullanilir.
- `grammar`: gramer kartlari.
- `speaking`: konusma gorevleri.
- `dialogues`: diyaloglar.
- `listening`: dinleme sorulari.
- `quiz`: klasik quiz verisi. Bircok derste otomatik test kartlari kullanildigi icin bos olabilir.

## Onemli Notlar

- Ana uygulama dosyasi `english-v3.html` adini tasir.
- Yeni ders dosyasi eklenirse `LESSONS_META` icine ayni numarayla eklenmeli.
- Derslerde apostrof iceren Ingilizce metinler icin JS string tirnaklarina dikkat edilmeli. Ornek: `form:"I'll take..."`.
- Kullanici ilerlemesi localStorage uzerinde tutulur (`en1_*` anahtarlari; eski `tv3_*` verisi otomatik tasinir).
- Canliya almadan once ders dosyalarini `node --check dersN.js` ile kontrol et.

## Canliya Alma Kontrol Listesi

- `index.html` dosyasi `english-v3.html` adresine yonlendiriyor mu?
- Degisen tum `dersN.js` dosyalari soz dizimi kontrolunden geciyor mu?
- `english-v3.html` icindeki script bloklari soz dizimi olarak temiz mi?
- Yardim ekraninda eski dil/proje kalintisi yok mu?
- GitHub Pages uzerinde cache nedeniyle eski surum gorunurse query string veya hard refresh ile kontrol edildi mi?
