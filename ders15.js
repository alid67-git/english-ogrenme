// === DERS15.JS ===
// Ders 15 verisi — tayca-v3
const L15 = {
  words:[
    {
      id:'w1',
      th:'วีซ่า',
      ro:'wii-saa',
      tr:'vize',
      tip:'İngilizce "visa" kelimesinden gelir. Uzun "ii" sesi: wiiii-saa.',
      ctx:'Pasaportunuzdaki giriş izni. Tayland\'da uzun kalmak için uzatmanız gerekir.',
      examples:[
        {
          th:'ผมต้องต่อวีซ่าครับ',
          ro:'Phom tong to wii-saa khrap',
          tr:'Vizeyi uzatmam gerekiyor.',
          bd:[
            {ro:'phom',tr:'ben (erkek)',role:'S - Ozne'},
            {ro:'tong',tr:'zorunda olmak',role:'Modal'},
            {ro:'to',tr:'uzatmak',role:'V - Yuklem'},
            {ro:'wii-saa',tr:'vize',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w2',
      th:'หนังสือเดินทาง',
      ro:'nang-suea-doen-thang',
      tr:'pasaport',
      tip:'Kelime kelime: "yürüyüş kitabı". nang-suea = kitap, doen-thang = yolculuk.',
      ctx:'İmmigrasyon ofisine her zaman orijinal pasaportunuzla gidin.',
      examples:[
        {
          th:'หนังสือเดินทางของผมอยู่ที่ไหนครับ',
          ro:'Nang-suea-doen-thang khong phom yuu thii-nai khrap',
          tr:'Pasaportum nerede?',
          bd:[
            {ro:'nang-suea-doen-thang',tr:'pasaport',role:'S - Ozne'},
            {ro:'khong phom',tr:'benim (iyelik)',role:'Kelime'},
            {ro:'yuu',tr:'bulunmak',role:'V - Yuklem'},
            {ro:'thii-nai',tr:'nerede',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w3',
      th:'ต่ออายุ',
      ro:'to-aa-yu',
      tr:'uzatmak (vize/ehliyet)',
      tip:'"to" = eklemek/uzatmak, "aa-yu" = yaş/süre. Vize, ehliyet gibi belgeleri uzatmak için.',
      ctx:'Vize bitiş tarihinden önce immigrasyon ofisine gidip ต่ออายุ yaptırın.',
      examples:[
        {
          th:'ผมอยากต่ออายุวีซ่าครับ',
          ro:'Phom yaak to-aa-yu wii-saa khrap',
          tr:'Vizemi uzatmak istiyorum.',
          bd:[
            {ro:'phom',tr:'ben (erkek)',role:'S - Ozne'},
            {ro:'yaak',tr:'istemek',role:'Modal'},
            {ro:'to-aa-yu',tr:'uzatmak',role:'V - Yuklem'},
            {ro:'wii-saa',tr:'vize',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w4',
      th:'สำนักงาน',
      ro:'sam-nak-ngan',
      tr:'ofis / daire (resmi)',
      tip:'"sam-nak" = merkez, "ngan" = iş. Resmi devlet daireleri için kullanılır.',
      ctx:'İmmigrasyon ofisi: สำนักงานตรวจคนเข้าเมือง (sam-nak-ngan truat khon khao mueang).',
      examples:[
        {
          th:'สำนักงานอยู่ที่ไหนครับ',
          ro:'Sam-nak-ngan yuu thii-nai khrap',
          tr:'Ofis nerede?',
          bd:[
            {ro:'sam-nak-ngan',tr:'ofis',role:'S - Ozne'},
            {ro:'yuu',tr:'bulunmak',role:'V - Yuklem'},
            {ro:'thii-nai',tr:'nerede',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w5',
      th:'แบบฟอร์ม',
      ro:'baep-form',
      tr:'form',
      tip:'İngilizce "form" kelimesinden alıntı. "baep" = tür/model.',
      ctx:'İmmigrasyon ofisinde dolduracağınız kağıt. Genellikle İngilizce veya Tayca.',
      examples:[
        {
          th:'ผมต้องกรอกแบบฟอร์มอะไรบ้างครับ',
          ro:'Phom tong krok baep-form a-rai bang khrap',
          tr:'Hangi formları doldurmam gerekiyor?',
          bd:[
            {ro:'phom',tr:'ben (erkek)',role:'S - Ozne'},
            {ro:'tong',tr:'zorunda olmak',role:'Modal'},
            {ro:'krok',tr:'doldurmak',role:'V - Yuklem'},
            {ro:'baep-form',tr:'form',role:'O - Nesne'},
            {ro:'a-rai bang',tr:'hangileri',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w6',
      th:'ค่าธรรมเนียม',
      ro:'khaa-tham-ma-niam',
      tr:'ücret / harç',
      tip:'"khaa" = bedel/ücret, "tham-ma-niam" = gelenek/kural. Resmi ödemeler için.',
      ctx:'Vize uzatma harcı genellikle 1900 Baht civarındadır. Nakit hazır bulundurun.',
      examples:[
        {
          th:'ค่าธรรมเนียมเท่าไหร่ครับ',
          ro:'Khaa-tham-ma-niam thao-rai khrap',
          tr:'Harç ne kadar?',
          bd:[
            {ro:'khaa-tham-ma-niam',tr:'harç/ücret',role:'S - Ozne'},
            {ro:'thao-rai',tr:'ne kadar',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w7',
      th:'ลายเซ็น',
      ro:'laai-sen',
      tr:'imza',
      tip:'"laai" = desen/çizgi, "sen" = İngilizce "sign"dan alıntı.',
      ctx:'Formları imzalamadan teslim etmeyin. Memur genellikle imzanızın yerini gösterir.',
      examples:[
        {
          th:'กรุณาเซ็นลายเซ็นตรงนี้ค่ะ',
          ro:'Ka-ru-naa sen laai-sen trong nii kha',
          tr:'Lütfen buraya imzalayın.',
          bd:[
            {ro:'ka-ru-naa',tr:'lütfen',role:'Kibar'},
            {ro:'sen',tr:'imzalamak',role:'V - Yuklem'},
            {ro:'laai-sen',tr:'imza',role:'O - Nesne'},
            {ro:'trong nii',tr:'tam buraya',role:'Edat'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w8',
      th:'สัญชาติ',
      ro:'san-chaat',
      tr:'uyruk / milliyet',
      tip:'"san" = bağ, "chaat" = ulus/millet. Formlarda her zaman karşınıza çıkar.',
      ctx:'Formda สัญชาติ kısmına "Turkish" veya "Türkiye" yazın.',
      examples:[
        {
          th:'สัญชาติของผมคือตุรกีครับ',
          ro:'San-chaat khong phom khue Tu-ra-kii khrap',
          tr:'Uyrumum Türkiye.',
          bd:[
            {ro:'san-chaat',tr:'uyruk',role:'S - Ozne'},
            {ro:'khong phom',tr:'benim',role:'Kelime'},
            {ro:'khue',tr:'olmak/eşittir',role:'V - Yuklem'},
            {ro:'Tu-ra-kii',tr:'Türkiye',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w9',
      th:'ที่อยู่',
      ro:'thii-yuu',
      tr:'adres',
      tip:'"thii" = yer, "yuu" = bulunmak. Tam anlamıyla "bulunulan yer".',
      ctx:'Phuket\'teki adresinizi formlara yazmak zorunda kalacaksınız.',
      examples:[
        {
          th:'ที่อยู่ของผมอยู่ในภูเก็ตครับ',
          ro:'Thii-yuu khong phom yuu nai Phuu-ket khrap',
          tr:'Adresim Phuket\'te.',
          bd:[
            {ro:'thii-yuu',tr:'adres',role:'S - Ozne'},
            {ro:'khong phom',tr:'benim',role:'Kelime'},
            {ro:'yuu nai',tr:'içinde bulunmak',role:'V - Yuklem'},
            {ro:'Phuu-ket',tr:'Phuket',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w10',
      th:'รอ',
      ro:'ro',
      tr:'beklemek',
      tip:'Çok kısa, tek heceli: "ro". İmmigrasyon ofisinde çok kullanacaksınız!',
      ctx:'Tayland devlet dairelerinde bekleme süresi uzun olabilir. Sabırlı olun.',
      examples:[
        {
          th:'ต้องรอนานไหมครับ',
          ro:'Tong ro naan mai khrap',
          tr:'Uzun beklemek gerekiyor mu?',
          bd:[
            {ro:'tong',tr:'zorunda olmak',role:'Modal'},
            {ro:'ro',tr:'beklemek',role:'V - Yuklem'},
            {ro:'naan',tr:'uzun süre',role:'Kelime'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      title:'1. ต้อง (tong) + Fiil = Zorunda Olmak',
      formula:'ต้อง (tong) + Fiil',
      explain:'ต้อง (tong) bir fiilin önüne geldiğinde "zorunda olmak / gerekiyor" anlamı katar. Türkçe "-meli/-malı" ya da "lazım" ile eşdeğerdir.',
      tips:[
        'tong hiçbir zaman çekilmez, her özneyle aynı kalır.',
        'Olumsuz için ไม่ต้อง (mai tong) kullanılır: "gerek yok / zorunda değilsin".'
      ],
      examples:[
        {
          th:'ผมต้องต่อวีซ่าครับ',
          ro:'Phom tong to wii-saa khrap',
          tr:'Vizeyi uzatmam gerekiyor.',
          bd:[
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'tong',tr:'zorunda',role:'Modal'},
            {ro:'to wii-saa',tr:'vize uzatmak',role:'V - Yuklem'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'คุณต้องกรอกแบบฟอร์มค่ะ',
          ro:'Khun tong krok baep-form kha',
          tr:'Formu doldurmanız gerekiyor.',
          bd:[
            {ro:'khun',tr:'siz/sen',role:'S - Ozne'},
            {ro:'tong',tr:'zorunda',role:'Modal'},
            {ro:'krok',tr:'doldurmak',role:'V - Yuklem'},
            {ro:'baep-form',tr:'form',role:'O - Nesne'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          th:'เราต้องรอที่นี่ครับ',
          ro:'Rao tong ro thii-nii khrap',
          tr:'Burada beklemek zorundayız.',
          bd:[
            {ro:'rao',tr:'biz',role:'S - Ozne'},
            {ro:'tong',tr:'zorunda',role:'Modal'},
            {ro:'ro',tr:'beklemek',role:'V - Yuklem'},
            {ro:'thii-nii',tr:'burada',role:'Edat'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'ไม่ต้องจ่ายเพิ่มค่ะ',
          ro:'Mai tong jaai phoem kha',
          tr:'Ekstra ödeme gerekmez.',
          bd:[
            {ro:'mai tong',tr:'gerek yok',role:'Soru/Olumsuz'},
            {ro:'jaai',tr:'ödemek',role:'V - Yuklem'},
            {ro:'phoem',tr:'ekstra/fazladan',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          th:'คุณต้องมีหนังสือเดินทางครับ',
          ro:'Khun tong mii nang-suea-doen-thang khrap',
          tr:'Pasaportunuz olması gerekiyor.',
          bd:[
            {ro:'khun',tr:'siz/sen',role:'S - Ozne'},
            {ro:'tong',tr:'zorunda',role:'Modal'},
            {ro:'mii',tr:'sahip olmak',role:'V - Yuklem'},
            {ro:'nang-suea-doen-thang',tr:'pasaport',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      title:'2. เข้า (khao) + İsim = İçine Girmek',
      formula:'เข้า (khao) + Yer/İsim',
      explain:'เข้า (khao) "girmek, içine" anlamına gelir. Bir yer adıyla birlikte "o yere girmek" anlamı oluşturur. Kapı, bina, ülke gibi sınırları olan yerlerle kullanılır.',
      tips:[
        'เข้าเมือง (khao mueang) = ülkeye giriş — immigrasyonda sıkça duyulur.',
        'เข้ามา (khao maa) = içeri gelmek (hareketi vurgular).'
      ],
      examples:[
        {
          th:'ผมเข้าสำนักงานตอนเช้าครับ',
          ro:'Phom khao sam-nak-ngan ton chao khrap',
          tr:'Sabah ofise girdim.',
          bd:[
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'khao',tr:'girmek',role:'V - Yuklem'},
            {ro:'sam-nak-ngan',tr:'ofis',role:'O - Nesne'},
            {ro:'ton chao',tr:'sabah vakti',role:'Zaman'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'กรุณาเข้ามาค่ะ',
          ro:'Ka-ru-naa khao maa kha',
          tr:'Lütfen içeri gelin.',
          bd:[
            {ro:'ka-ru-naa',tr:'lütfen',role:'Kibar'},
            {ro:'khao maa',tr:'içeri gelmek',role:'V - Yuklem'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          th:'คุณเข้าเมืองวันไหนครับ',
          ro:'Khun khao mueang wan nai khrap',
          tr:'Ülkeye hangi gün girdiniz?',
          bd:[
            {ro:'khun',tr:'siz/sen',role:'S - Ozne'},
            {ro:'khao mueang',tr:'ülkeye giriş',role:'V - Yuklem'},
            {ro:'wan nai',tr:'hangi gün',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'ห้ามเข้าค่ะ',
          ro:'Ham khao kha',
          tr:'Giriş yasak.',
          bd:[
            {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
            {ro:'khao',tr:'girmek',role:'V - Yuklem'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      title:'3. ของ (khong) = Sahiplik (İyelik) Eki',
      formula:'İsim + ของ (khong) + Sahip',
      explain:'ของ (khong) iki isim arasına girerek sahiplik ilişkisi kurar. Türkçe "-ın/-in" iyelik eki gibi çalışır ama sıralama farklıdır: önce sahip olunan şey, sonra ของ, sonra sahibi.',
      tips:[
        'Türkçede "benim pasaportum" = Tayca\'da "pasaport + ของ + ben".',
        'Günlük konuşmada bazen ของ düşürülür: "nang-suea-doen-thang phom" da aynı anlama gelir.'
      ],
      examples:[
        {
          th:'หนังสือเดินทางของผมหมดอายุแล้วครับ',
          ro:'Nang-suea-doen-thang khong phom mot aa-yu laeo khrap',
          tr:'Pasaportumun süresi doldu.',
          bd:[
            {ro:'nang-suea-doen-thang',tr:'pasaport',role:'S - Ozne'},
            {ro:'khong phom',tr:'benim',role:'Kelime'},
            {ro:'mot aa-yu',tr:'süresi dolmak',role:'V - Yuklem'},
            {ro:'laeo',tr:'zaten/artık',role:'Vurgu'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'ที่อยู่ของคุณคืออะไรค่ะ',
          ro:'Thii-yuu khong khun khue a-rai kha',
          tr:'Adresiniz nedir?',
          bd:[
            {ro:'thii-yuu',tr:'adres',role:'S - Ozne'},
            {ro:'khong khun',tr:'sizin',role:'Kelime'},
            {ro:'khue',tr:'olmak',role:'V - Yuklem'},
            {ro:'a-rai',tr:'ne',role:'Soru/Olumsuz'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          th:'วีซ่าของผมจะหมดในอีกสามวันครับ',
          ro:'Wii-saa khong phom ja mot nai iik saam wan khrap',
          tr:'Vizem üç gün sonra bitecek.',
          bd:[
            {ro:'wii-saa khong phom',tr:'benim vizem',role:'S - Ozne'},
            {ro:'ja',tr:'(gelecek zaman)',role:'Zaman'},
            {ro:'mot',tr:'bitmek',role:'V - Yuklem'},
            {ro:'nai iik saam wan',tr:'üç gün içinde',role:'Zaman'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    }
  ],
  speaking:[
    {
      task:'Pasaportunuzu kaybettiğinizi söyleyin.',
      th:'ผมทำหนังสือเดินทางหายครับ',
      ro:'Phom tham nang-suea-doen-thang haai khrap',
      tr:'Pasaportumu kaybettim.',
      bd:[
        {ro:'phom',tr:'ben',role:'S - Ozne'},
        {ro:'tham haai',tr:'kaybetmek',role:'V - Yuklem'},
        {ro:'nang-suea-doen-thang',tr:'pasaport',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Vize uzatma ofisinin nerede olduğunu sorun.',
      th:'สำนักงานต่ออายุวีซ่าอยู่ที่ไหนครับ',
      ro:'Sam-nak-ngan to-aa-yu wii-saa yuu thii-nai khrap',
      tr:'Vize uzatma ofisi nerede?',
      bd:[
        {ro:'sam-nak-ngan',tr:'ofis',role:'S - Ozne'},
        {ro:'to-aa-yu wii-saa',tr:'vize uzatma',role:'Kelime'},
        {ro:'yuu thii-nai',tr:'nerede',role:'Soru/Olumsuz'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Harcın ne kadar olduğunu sorun.',
      th:'ค่าธรรมเนียมเท่าไหร่ครับ',
      ro:'Khaa-tham-ma-niam thao-rai khrap',
      tr:'Harç ne kadar?',
      bd:[
        {ro:'khaa-tham-ma-niam',tr:'harç',role:'S - Ozne'},
        {ro:'thao-rai',tr:'ne kadar',role:'Soru/Olumsuz'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Kaç tane form doldurmak gerektiğini sorun.',
      th:'ต้องกรอกกี่แบบฟอร์มครับ',
      ro:'Tong krok kii baep-form khrap',
      tr:'Kaç form doldurmak gerekiyor?',
      bd:[
        {ro:'tong',tr:'gerekiyor',role:'Modal'},
        {ro:'krok',tr:'doldurmak',role:'V - Yuklem'},
        {ro:'kii',tr:'kaç',role:'Soru/Olumsuz'},
        {ro:'baep-form',tr:'form',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Vizemi uzatmak istediğinizi söyleyin.',
      th:'ผมอยากต่ออายุวีซ่าครับ',
      ro:'Phom yaak to-aa-yu wii-saa khrap',
      tr:'Vizemi uzatmak istiyorum.',
      bd:[
        {ro:'phom',tr:'ben',role:'S - Ozne'},
        {ro:'yaak',tr:'istemek',role:'Modal'},
        {ro:'to-aa-yu',tr:'uzatmak',role:'V - Yuklem'},
        {ro:'wii-saa',tr:'vize',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Uyruğunuzun Türk olduğunu söyleyin.',
      th:'สัญชาติของผมคือตุรกีครับ',
      ro:'San-chaat khong phom khue Tu-ra-kii khrap',
      tr:'Uyrumum Türkiye.',
      bd:[
        {ro:'san-chaat khong phom',tr:'benim uyruğum',role:'S - Ozne'},
        {ro:'khue',tr:'olmak',role:'V - Yuklem'},
        {ro:'Tu-ra-kii',tr:'Türkiye',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Phuket\'teki adresinizi söyleyin (boş bırakılabilir).',
      th:'ที่อยู่ของผมอยู่ในภูเก็ตครับ',
      ro:'Thii-yuu khong phom yuu nai Phuu-ket khrap',
      tr:'Adresim Phuket\'te.',
      bd:[
        {ro:'thii-yuu khong phom',tr:'benim adresim',role:'S - Ozne'},
        {ro:'yuu nai',tr:'içinde',role:'V - Yuklem'},
        {ro:'Phuu-ket',tr:'Phuket',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Ne kadar beklemeniz gerektiğini sorun.',
      th:'ต้องรอนานแค่ไหนครับ',
      ro:'Tong ro naan khae-nai khrap',
      tr:'Ne kadar beklemem gerekiyor?',
      bd:[
        {ro:'tong',tr:'gerekiyor',role:'Modal'},
        {ro:'ro',tr:'beklemek',role:'V - Yuklem'},
        {ro:'naan',tr:'uzun',role:'Kelime'},
        {ro:'khae-nai',tr:'ne kadar',role:'Soru/Olumsuz'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'İmzanın nereye atılacağını sorun.',
      th:'เซ็นลายเซ็นตรงไหนครับ',
      ro:'Sen laai-sen trong nai khrap',
      tr:'İmzayı nereye atacağım?',
      bd:[
        {ro:'sen',tr:'imzalamak',role:'V - Yuklem'},
        {ro:'laai-sen',tr:'imza',role:'O - Nesne'},
        {ro:'trong nai',tr:'nereye',role:'Soru/Olumsuz'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Pasaportunuzu gösterin ve "bu benim pasaportum" deyin.',
      th:'นี่คือหนังสือเดินทางของผมครับ',
      ro:'Nii khue nang-suea-doen-thang khong phom khrap',
      tr:'Bu benim pasaportum.',
      bd:[
        {ro:'nii',tr:'bu',role:'S - Ozne'},
        {ro:'khue',tr:'olmak',role:'V - Yuklem'},
        {ro:'nang-suea-doen-thang khong phom',tr:'benim pasaportum',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Ofise girip "İyi günler" deyin.',
      th:'สวัสดีครับ ผมมาต่ออายุวีซ่า',
      ro:'Sa-wat-dii khrap phom maa to-aa-yu wii-saa',
      tr:'İyi günler, vize uzatmaya geldim.',
      bd:[
        {ro:'sa-wat-dii',tr:'iyi günler/merhaba',role:'Kelime'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'},
        {ro:'phom',tr:'ben',role:'S - Ozne'},
        {ro:'maa',tr:'gelmek',role:'V - Yuklem'},
        {ro:'to-aa-yu wii-saa',tr:'vize uzatmak',role:'O - Nesne'}
      ]
    },
    {
      task:'Belgelerin eksiksiz olduğunu söyleyin.',
      th:'เอกสารของผมครบถ้วนครับ',
      ro:'Ek-ka-saan khong phom khrop-thuon khrap',
      tr:'Belgelerim eksiksiz.',
      bd:[
        {ro:'ek-ka-saan khong phom',tr:'benim belgelerim',role:'S - Ozne'},
        {ro:'khrop-thuon',tr:'eksiksiz/tam',role:'V - Yuklem'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    }
  ],
  dialogues:[
    {
      title:'🏢 İmmigrasyon Ofisine Giriş',
      lines:[
        {
          s:'Tom',
          th:'สวัสดีครับ ผมอยากต่ออายุวีซ่าครับ',
          ro:'Sa-wat-dii khrap phom yaak to-aa-yu wii-saa khrap',
          tr:'Merhaba, vizemi uzatmak istiyorum.',
          bd:[
            {ro:'sa-wat-dii',tr:'merhaba',role:'Kelime'},
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'yaak',tr:'istemek',role:'Modal'},
            {ro:'to-aa-yu wii-saa',tr:'vize uzatmak',role:'V - Yuklem'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'ได้ค่ะ คุณมีหนังสือเดินทางไหมค่ะ',
          ro:'Dai kha khun mii nang-suea-doen-thang mai kha',
          tr:'Tabii. Pasaportunuz var mı?',
          bd:[
            {ro:'dai',tr:'olur/tamam',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'khun',tr:'siz',role:'S - Ozne'},
            {ro:'mii',tr:'sahip olmak',role:'V - Yuklem'},
            {ro:'nang-suea-doen-thang',tr:'pasaport',role:'O - Nesne'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'}
          ]
        },
        {
          s:'Tom',
          th:'มีครับ นี่ครับ',
          ro:'Mii khrap nii khrap',
          tr:'Var, buyrun.',
          bd:[
            {ro:'mii',tr:'var',role:'V - Yuklem'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'},
            {ro:'nii',tr:'işte/buyrun',role:'Kelime'}
          ]
        },
        {
          s:'Lucy',
          th:'ขอบคุณค่ะ กรุณากรอกแบบฟอร์มนี้ก่อนนะค่ะ',
          ro:'Khop-khun kha ka-ru-naa krok baep-form nii kon na kha',
          tr:'Teşekkürler. Önce bu formu doldurun lütfen.',
          bd:[
            {ro:'khop-khun',tr:'teşekkür ederim',role:'Kelime'},
            {ro:'ka-ru-naa',tr:'lütfen',role:'Kibar'},
            {ro:'krok',tr:'doldurmak',role:'V - Yuklem'},
            {ro:'baep-form nii',tr:'bu form',role:'O - Nesne'},
            {ro:'kon',tr:'önce',role:'Zaman'},
            {ro:'na kha',tr:'(yumuşatma eki)',role:'Kibar'}
          ]
        },
        {
          s:'Tom',
          th:'ค่าธรรมเนียมเท่าไหร่ครับ',
          ro:'Khaa-tham-ma-niam thao-rai khrap',
          tr:'Harç ne kadar?',
          bd:[
            {ro:'khaa-tham-ma-niam',tr:'harç',role:'S - Ozne'},
            {ro:'thao-rai',tr:'ne kadar',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'หนึ่งพันเก้าร้อยบาทค่ะ',
          ro:'Nueng-phan kao-roi baat kha',
          tr:'Bin dokuz yüz Baht.',
          bd:[
            {ro:'nueng-phan',tr:'bin',role:'Kelime'},
            {ro:'kao-roi',tr:'dokuz yüz',role:'Kelime'},
            {ro:'baat',tr:'Baht',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      title:'📋 Form Doldurma',
      lines:[
        {
          s:'Lucy',
          th:'สัญชาติของคุณคืออะไรค่ะ',
          ro:'San-chaat khong khun khue a-rai kha',
          tr:'Uyruğunuz nedir?',
          bd:[
            {ro:'san-chaat khong khun',tr:'sizin uyruğunuz',role:'S - Ozne'},
            {ro:'khue a-rai',tr:'nedir',role:'Soru/Olumsuz'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          s:'Tom',
          th:'สัญชาติตุรกีครับ',
          ro:'San-chaat Tu-ra-kii khrap',
          tr:'Türk uyrukluyum.',
          bd:[
            {ro:'san-chaat',tr:'uyruk',role:'Kelime'},
            {ro:'Tu-ra-kii',tr:'Türkiye',role:'Kelime'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'ที่อยู่ในไทยคืออะไรค่ะ',
          ro:'Thii-yuu nai Thai khue a-rai kha',
          tr:'Tayland\'daki adresiniz nedir?',
          bd:[
            {ro:'thii-yuu nai Thai',tr:'Tayland\'daki adres',role:'S - Ozne'},
            {ro:'khue a-rai',tr:'nedir',role:'Soru/Olumsuz'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          s:'Tom',
          th:'อยู่ในภูเก็ตครับ',
          ro:'Yuu nai Phuu-ket khrap',
          tr:'Phuket\'teyim.',
          bd:[
            {ro:'yuu nai',tr:'içinde bulunmak',role:'V - Yuklem'},
            {ro:'Phuu-ket',tr:'Phuket',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'กรุณาเซ็นลายเซ็นตรงนี้ค่ะ',
          ro:'Ka-ru-naa sen laai-sen trong nii kha',
          tr:'Lütfen buraya imzalayın.',
          bd:[
            {ro:'ka-ru-naa',tr:'lütfen',role:'Kibar'},
            {ro:'sen laai-sen',tr:'imzalamak',role:'V - Yuklem'},
            {ro:'trong nii',tr:'tam buraya',role:'Edat'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      title:'⏳ Bekleme Süresi',
      lines:[
        {
          s:'Tom',
          th:'ต้องรอนานไหมครับ',
          ro:'Tong ro naan mai khrap',
          tr:'Uzun beklemek gerekiyor mu?',
          bd:[
            {ro:'tong',tr:'gerekiyor',role:'Modal'},
            {ro:'ro',tr:'beklemek',role:'V - Yuklem'},
            {ro:'naan',tr:'uzun',role:'Kelime'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'ประมาณหนึ่งถึงสองชั่วโมงค่ะ',
          ro:'Pra-maan nueng thueng song chua-mong kha',
          tr:'Yaklaşık bir ila iki saat.',
          bd:[
            {ro:'pra-maan',tr:'yaklaşık',role:'Kelime'},
            {ro:'nueng thueng song',tr:'bir ila iki',role:'Kelime'},
            {ro:'chua-mong',tr:'saat',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          s:'Tom',
          th:'โอเคครับ ขอบคุณครับ',
          ro:'O-khe khrap khop-khun khrap',
          tr:'Tamam, teşekkürler.',
          bd:[
            {ro:'o-khe',tr:'tamam',role:'Kelime'},
            {ro:'khop-khun',tr:'teşekkürler',role:'Kelime'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'ได้ค่ะ ถ้ามีคำถามก็ถามได้เลยค่ะ',
          ro:'Dai kha tha mii kham-thaam ko thaam dai loei kha',
          tr:'Tabii. Sorunuz olursa sormaya çekinmeyin.',
          bd:[
            {ro:'dai',tr:'olur',role:'Kelime'},
            {ro:'tha mii',tr:'eğer varsa',role:'Kelime'},
            {ro:'kham-thaam',tr:'soru',role:'O - Nesne'},
            {ro:'thaam dai loei',tr:'sorabilirsiniz',role:'V - Yuklem'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      title:'✅ İşlem Tamamlandı',
      lines:[
        {
          s:'Lucy',
          th:'เสร็จแล้วค่ะ วีซ่าของคุณต่ออายุแล้ว',
          ro:'Set laeo kha wii-saa khong khun to-aa-yu laeo',
          tr:'Bitti. Vizeniz uzatıldı.',
          bd:[
            {ro:'set laeo',tr:'bitti artık',role:'V - Yuklem'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'wii-saa khong khun',tr:'sizin vizeniz',role:'S - Ozne'},
            {ro:'to-aa-yu laeo',tr:'uzatıldı',role:'V - Yuklem'}
          ]
        },
        {
          s:'Tom',
          th:'ขอบคุณมากครับ ต่อไปต้องทำอะไรอีกไหมครับ',
          ro:'Khop-khun maak khrap to-pai tong tham a-rai iik mai khrap',
          tr:'Çok teşekkürler. Bundan sonra başka bir şey yapmam gerekiyor mu?',
          bd:[
            {ro:'khop-khun maak',tr:'çok teşekkürler',role:'Kelime'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'},
            {ro:'to-pai',tr:'bundan sonra',role:'Zaman'},
            {ro:'tong tham',tr:'yapmak zorunda',role:'Modal'},
            {ro:'a-rai iik',tr:'başka bir şey',role:'Soru/Olumsuz'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'}
          ]
        },
        {
          s:'Lucy',
          th:'ไม่ต้องค่ะ เรียบร้อยแล้ว',
          ro:'Mai tong kha riap-roi laeo',
          tr:'Gerek yok, her şey tamam.',
          bd:[
            {ro:'mai tong',tr:'gerek yok',role:'Soru/Olumsuz'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'riap-roi laeo',tr:'düzgün/tamam artık',role:'Kelime'}
          ]
        },
        {
          s:'Tom',
          th:'ดีมากครับ ขอบคุณอีกครั้งครับ',
          ro:'Dii maak khrap khop-khun iik khrang khrap',
          tr:'Harika. Tekrar teşekkürler.',
          bd:[
            {ro:'dii maak',tr:'çok iyi',role:'Kelime'},
            {ro:'khop-khun iik khrang',tr:'bir kez daha teşekkürler',role:'Kelime'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    }
  ],
  listening:[
    {
      th:'คุณต้องต่ออายุวีซ่าทุกปีครับ',
      ro:'Khun tong to-aa-yu wii-saa thuk pii khrap',
      tr:'Her yıl vizenizi uzatmanız gerekiyor.',
      bd:[
        {ro:'khun',tr:'siz',role:'S - Ozne'},
        {ro:'tong',tr:'zorunda',role:'Modal'},
        {ro:'to-aa-yu wii-saa',tr:'vize uzatmak',role:'V - Yuklem'},
        {ro:'thuk pii',tr:'her yıl',role:'Zaman'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      th:'สำนักงานอิมมิเกรชั่นอยู่ที่ภูเก็ตทาวน์ค่ะ',
      ro:'Sam-nak-ngan im-mi-kre-chan yuu thii Phuu-ket Thao kha',
      tr:'İmmigrasyon ofisi Phuket Town\'da.',
      bd:[
        {ro:'sam-nak-ngan im-mi-kre-chan',tr:'immigrasyon ofisi',role:'S - Ozne'},
        {ro:'yuu thii',tr:'...-de bulunmak',role:'V - Yuklem'},
        {ro:'Phuu-ket Thao',tr:'Phuket Town',role:'O - Nesne'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
      ]
    },
    {
      th:'ผมต้องนำหนังสือเดินทางและรูปถ่ายมาด้วยครับ',
      ro:'Phom tong nam nang-suea-doen-thang lae ruup-thaai maa duoi khrap',
      tr:'Pasaport ve fotoğraf getirmem gerekiyor.',
      bd:[
        {ro:'phom',tr:'ben',role:'S - Ozne'},
        {ro:'tong nam',tr:'getirmek zorunda',role:'Modal'},
        {ro:'nang-suea-doen-thang',tr:'pasaport',role:'O - Nesne'},
        {ro:'lae',tr:'ve',role:'Kelime'},
        {ro:'ruup-thaai',tr:'fotoğraf',role:'O - Nesne'},
        {ro:'maa duoi',tr:'de beraberinde getirmek',role:'Kelime'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      th:'ค่าธรรมเนียมหนึ่งพันเก้าร้อยบาทค่ะ',
      ro:'Khaa-tham-ma-niam nueng-phan kao-roi baat kha',
      tr:'Harç bin dokuz yüz Baht.',
      bd:[
        {ro:'khaa-tham-ma-niam',tr:'harç',role:'S - Ozne'},
        {ro:'nueng-phan kao-roi baat',tr:'1900 Baht',role:'Kelime'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
      ]
    },
    {
      th:'กรุณากรอกแบบฟอร์มให้ครบถ้วนค่ะ',
      ro:'Ka-ru-naa krok baep-form hai khrop-thuon kha',
      tr:'Lütfen formu eksiksiz doldurun.',
      bd:[
        {ro:'ka-ru-naa',tr:'lütfen',role:'Kibar'},
        {ro:'krok',tr:'doldurmak',role:'V - Yuklem'},
        {ro:'baep-form',tr:'form',role:'O - Nesne'},
        {ro:'hai khrop-thuon',tr:'eksiksiz olarak',role:'Kelime'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
      ]
    },
    {
      th:'สัญชาติของผมคือตุรกีครับ',
      ro:'San-chaat khong phom khue Tu-ra-kii khrap',
      tr:'Uyrumum Türkiye.',
      bd:[
        {ro:'san-chaat khong phom',tr:'benim uyruğum',role:'S - Ozne'},
        {ro:'khue',tr:'olmak',role:'V - Yuklem'},
        {ro:'Tu-ra-kii',tr:'Türkiye',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      th:'ต้องรอประมาณสองชั่วโมงค่ะ',
      ro:'Tong ro pra-maan song chua-mong kha',
      tr:'Yaklaşık iki saat beklemek gerekiyor.',
      bd:[
        {ro:'tong ro',tr:'beklemek zorunda',role:'Modal'},
        {ro:'pra-maan',tr:'yaklaşık',role:'Kelime'},
        {ro:'song chua-mong',tr:'iki saat',role:'Zaman'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
      ]
    },
    {
      th:'ลายเซ็นของคุณอยู่ตรงนี้ครับ',
      ro:'Laai-sen khong khun yuu trong nii khrap',
      tr:'İmzanız buraya.',
      bd:[
        {ro:'laai-sen khong khun',tr:'sizin imzanız',role:'S - Ozne'},
        {ro:'yuu trong nii',tr:'tam burada',role:'V - Yuklem'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      th:'ที่อยู่ของผมอยู่ในภูเก็ตครับ',
      ro:'Thii-yuu khong phom yuu nai Phuu-ket khrap',
      tr:'Adresim Phuket\'te.',
      bd:[
        {ro:'thii-yuu khong phom',tr:'benim adresim',role:'S - Ozne'},
        {ro:'yuu nai',tr:'içinde',role:'V - Yuklem'},
        {ro:'Phuu-ket',tr:'Phuket',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      th:'เอกสารครบแล้วค่ะ เดี๋ยวเรียกชื่อคุณค่ะ',
      ro:'Ek-ka-saan khrop laeo kha diao riak chuea khun kha',
      tr:'Belgeler tamam. Birazdan isminizi çağıracağız.',
      bd:[
        {ro:'ek-ka-saan khrop laeo',tr:'belgeler tamamdır',role:'Kelime'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
        {ro:'diao',tr:'birazdan',role:'Zaman'},
        {ro:'riak chuea khun',tr:'isminizi çağırmak',role:'V - Yuklem'}
      ]
    }
  ],
  quiz:[
    {q:'"Vize" Tayca\'da nasıl denir?', opts:['หนังสือเดินทาง','วีซ่า','แบบฟอร์ม','ลายเซ็น'], c:1},
    {q:'"Pasaport" Tayca\'da nasıl denir?', opts:['วีซ่า','ที่อยู่','หนังสือเดินทาง','สัญชาติ'], c:2},
    {q:'"ต่ออายุ" ne anlama gelir?', opts:['beklemek','imzalamak','uzatmak','ödemek'], c:2},
    {q:'"ค่าธรรมเนียม" ne anlama gelir?', opts:['adres','form','uyruk','harç/ücret'], c:3},
    {q:'"รอ" ne anlama gelir?', opts:['girmek','beklemek','doldurmak','uzatmak'], c:1},
    {q:'"สัญชาติ" ne anlama gelir?', opts:['adres','pasaport','uyruk/milliyet','imza'], c:2},
    {q:'ต้อง + fiil yapısı ne anlama gelir?', opts:['istemek','zorunda olmak','yapamamak','bilmek'], c:1},
    {q:'"ผมต้องต่อวีซ่าครับ" ne demek?', opts:['Vizemi uzattım.','Vize istiyorum.','Vizeyi uzatmam gerekiyor.','Vizemim yok.'], c:2},
    {q:'เข้า (khao) kelimesi ne anlama gelir?', opts:['çıkmak','girmek','beklemek','ödemek'], c:1},
    {q:'"แบบฟอร์ม" ne anlama gelir?', opts:['imza','form','ofis','harç'], c:1},
    {q:'"ลายเซ็น" ne anlama gelir?', opts:['uyruk','adres','imza','pasaport'], c:2},
    {q:'"ที่อยู่" ne anlama gelir?', opts:['harç','ofis','adres','vize'], c:2},
    {q:'Tom bir cümle sonuna hangi nezaket ekini kullanır?', opts:['ค่ะ','นะ','ครับ','เลย'], c:2},
    {q:'Lucy bir cümle sonuna hangi nezaket ekini kullanır?', opts:['ครับ','ค่ะ','นะ','แล้ว'], c:1},
    {q:'Erkek zamiri Tayca\'da hangisidir?', opts:['ฉัน','เรา','ผม','คุณ'], c:2},
    {q:'"ไม่ต้อง" ne anlama gelir?', opts:['çok gerekli','gerek yok','hemen','yasak'], c:1},
    {q:'"สำนักงาน" ne anlama gelir?', opts:['form','adres','ofis/daire','pasaport'], c:2},
    {q:'"เข้าสำนักงาน" ne anlama gelir?', opts:['ofiste beklemek','ofisi aramak','ofise girmek','ofisten çıkmak'], c:2},
    {q:'"ค่าธรรมเนียมเท่าไหร่ครับ" ne demek?', opts:['Form nerede?','Harç ne kadar?','Adres nedir?','Ne zaman?'], c:1},
    {q:'Vize uzatma harcı genellikle ne kadardır?', opts:['500 Baht','1000 Baht','1900 Baht','3000 Baht'], c:2}
  ]
};
LESSONS[15] = L15;
