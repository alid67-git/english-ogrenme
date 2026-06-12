// === DERS18.JS ===
// Ders 18 verisi — tayca-v3
const L18 = {
  words:[
    {
      id:'w1',
      th:'ไลน์',
      ro:'lain',
      tr:'LINE (mesajlaşma uygulaması)',
      tip:'İngilizce "line" kelimesinin Tayca yazımı. Tayland\'da WhatsApp\'ın yerini tutan ana uygulama.',
      ctx:'Tayland\'da herkes LINE kullanır. Telefon numarası yerine LINE ID ile iletişim kurulur.',
      examples:[
        {
          th:'คุณมีไลน์ไหมครับ',
          ro:'khun mii lain mai khrap',
          tr:'LINE\'ınız var mı efendim?',
          bd:[
            {ro:'khun',tr:'siz / sen',role:'S - Ozne'},
            {ro:'mii',tr:'var',role:'V - Yuklem'},
            {ro:'lain',tr:'LINE',role:'O - Nesne'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w2',
      th:'เบอร์โทร',
      ro:'boe-tho',
      tr:'telefon numarası',
      tip:'"Boe" numara anlamındaki kısaltma, "tho" ise telefon anlamından gelir. Birlikte kullanılır.',
      ctx:'Yeni biriyle tanışınca telefon veya LINE numarası alışverişinde kullanılır.',
      examples:[
        {
          th:'เบอร์โทรคุณคือเท่าไหร่ครับ',
          ro:'boe-tho khun khue thao-rai khrap',
          tr:'Telefon numaranız nedir efendim?',
          bd:[
            {ro:'boe-tho',tr:'telefon numarası',role:'S - Ozne'},
            {ro:'khun',tr:'sizin',role:'Kelime'},
            {ro:'khue',tr:'... dır / eşittir',role:'V - Yuklem'},
            {ro:'thao-rai',tr:'nedir / kaç',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w3',
      th:'โทรหา',
      ro:'tho-haa',
      tr:'aramak (telefonda)',
      tip:'"Tho" telefon etmek, "haa" bulmak / aramak anlamında. İkisi birleşince "telefon edip aramak" olur.',
      ctx:'Birini aramak istediğinde veya arandığında kullanılır. LINE üzerinden de geçerli.',
      examples:[
        {
          th:'ผมจะโทรหาคุณตอนเย็นครับ',
          ro:'phom ja tho-haa khun ton yen khrap',
          tr:'Sizi akşam arayacağım efendim.',
          bd:[
            {ro:'phom',tr:'ben (erkek)',role:'S - Ozne'},
            {ro:'ja',tr:'(gelecek zaman)',role:'Modal'},
            {ro:'tho-haa',tr:'aramak',role:'V - Yuklem'},
            {ro:'khun',tr:'sizi',role:'O - Nesne'},
            {ro:'ton yen',tr:'akşam vakti',role:'Zaman'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w4',
      th:'ส่งข้อความ',
      ro:'song-kho-khwaam',
      tr:'mesaj göndermek',
      tip:'"Song" göndermek, "kho-khwaam" mesaj / haber anlamında. İkisi birleşince "mesaj gönder" olur.',
      ctx:'LINE veya SMS üzerinden metin mesajı göndermek istediğinde kullanılır.',
      examples:[
        {
          th:'ส่งข้อความมาหาผมได้เลยครับ',
          ro:'song kho-khwaam maa haa phom dai loei khrap',
          tr:'Bana mesaj atabilirsiniz efendim.',
          bd:[
            {ro:'song',tr:'gönder',role:'V - Yuklem'},
            {ro:'kho-khwaam',tr:'mesaj',role:'O - Nesne'},
            {ro:'maa haa',tr:'gelip bulmak / bana',role:'Kelime'},
            {ro:'phom',tr:'ben',role:'Kelime'},
            {ro:'dai loei',tr:'yapabilirsiniz',role:'Modal'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w5',
      th:'สติ๊กเกอร์',
      ro:'sa-tik-koe',
      tr:'sticker (LINE çıkartması)',
      tip:'İngilizce "sticker" kelimesinden Tayca\'ya uyarlanmış. LINE\'da çok kullanılan resimli ifadeler.',
      ctx:'LINE\'da duygular ve tepkileri ifade etmek için kullanılan grafik çıkartmalar.',
      examples:[
        {
          th:'ส่งสติ๊กเกอร์น่ารักมาให้ผมด้วยนะครับ',
          ro:'song sa-tik-koe naa-rak maa hai phom duai na khrap',
          tr:'Bana da sevimli sticker at efendim.',
          bd:[
            {ro:'song',tr:'gönder',role:'V - Yuklem'},
            {ro:'sa-tik-koe',tr:'sticker',role:'O - Nesne'},
            {ro:'naa-rak',tr:'sevimli',role:'Kelime'},
            {ro:'maa hai phom',tr:'bana',role:'Kelime'},
            {ro:'duai na',tr:'de / lütfen',role:'Vurgu'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w6',
      th:'เพิ่มเพื่อน',
      ro:'phoem-phuean',
      tr:'arkadaş eklemek (LINE\'da)',
      tip:'"Phoem" eklemek / artırmak, "phuean" arkadaş. LINE\'da kişi ekleme butonunun adı budur.',
      ctx:'LINE\'da yeni kişi eklerken kullanılan işlev. QR kod veya ID ile yapılır.',
      examples:[
        {
          th:'เพิ่มเพื่อนในไลน์ได้ยังไงครับ',
          ro:'phoem phuean nai lain dai yang-ngai khrap',
          tr:'LINE\'da arkadaş nasıl eklenir efendim?',
          bd:[
            {ro:'phoem phuean',tr:'arkadaş ekle',role:'V - Yuklem'},
            {ro:'nai lain',tr:'LINE\'da',role:'Kelime'},
            {ro:'dai',tr:'yapabilmek',role:'Modal'},
            {ro:'yang-ngai',tr:'nasıl',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w7',
      th:'แชร์',
      ro:'chaer',
      tr:'paylaşmak',
      tip:'İngilizce "share" kelimesinden. Konum, fotoğraf veya bağlantı paylaşmak için kullanılır.',
      ctx:'LINE üzerinden konum, fotoğraf veya link paylaşmak istediğinde kullanılır.',
      examples:[
        {
          th:'แชร์โลเคชั่นมาให้ผมได้ไหมครับ',
          ro:'chaer lo-khe-chan maa hai phom dai mai khrap',
          tr:'Bana konumunu paylaşır mısın efendim?',
          bd:[
            {ro:'chaer',tr:'paylaş',role:'V - Yuklem'},
            {ro:'lo-khe-chan',tr:'konum',role:'O - Nesne'},
            {ro:'maa hai phom',tr:'bana',role:'Kelime'},
            {ro:'dai mai',tr:'yapabilir misin',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w8',
      th:'แบตหมด',
      ro:'baet-mot',
      tr:'batarya bitti',
      tip:'"Baet" İngilizce "battery"den, "mot" bitmek / tükenmek anlamında. Çok yaygın kullanılan ifade.',
      ctx:'Telefon şarjı bittiğinde veya bitmek üzereyken kullanılan ifade.',
      examples:[
        {
          th:'โทษทีครับ แบตหมดแล้วครับ',
          ro:'thot-thii khrap baet-mot lae-o khrap',
          tr:'Özür dilerim efendim, batarya bitti.',
          bd:[
            {ro:'thot-thii',tr:'özür dilerim',role:'Kelime'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'},
            {ro:'baet',tr:'batarya',role:'S - Ozne'},
            {ro:'mot',tr:'bitti / tükendi',role:'V - Yuklem'},
            {ro:'lae-o',tr:'artık / zaten',role:'Zaman'}
          ]
        }
      ]
    },
    {
      id:'w9',
      th:'สัญญาณ',
      ro:'san-yaan',
      tr:'sinyal / bağlantı',
      tip:'"San-yaan" üç hece: san-yaa-an. Tayland\'ın turistik bölgelerinde sinyal genellikle iyidir.',
      ctx:'Telefon veya internet sinyali zayıf ya da yok olduğunda kullanılan kelime.',
      examples:[
        {
          th:'สัญญาณไม่ดีเลยครับ',
          ro:'san-yaan mai dii loei khrap',
          tr:'Sinyal hiç iyi değil efendim.',
          bd:[
            {ro:'san-yaan',tr:'sinyal',role:'S - Ozne'},
            {ro:'mai dii',tr:'iyi değil',role:'V - Yuklem'},
            {ro:'loei',tr:'hiç / kesinlikle',role:'Vurgu'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w10',
      th:'วิดีโอคอล',
      ro:'wi-dii-o-khon',
      tr:'görüntülü arama',
      tip:'İngilizce "video call"dan gelir. LINE üzerinden görüntülü arama yaparken kullanılır.',
      ctx:'LINE veya diğer uygulamalar üzerinden görüntülü konuşma yapmak istediğinde kullanılır.',
      examples:[
        {
          th:'วิดีโอคอลผมได้เลยนะครับ',
          ro:'wi-dii-o-khon phom dai loei na khrap',
          tr:'Beni görüntülü arayabilirsin efendim.',
          bd:[
            {ro:'wi-dii-o-khon',tr:'görüntülü ara',role:'V - Yuklem'},
            {ro:'phom',tr:'beni',role:'O - Nesne'},
            {ro:'dai loei',tr:'yapabilirsin',role:'Modal'},
            {ro:'na',tr:'(yumuşatma eki)',role:'Vurgu'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'ส่ง + nesne = göndermek',
      explanation:'"Song" (göndermek) fiilinin ardından ne gönderildiği gelir. Mesaj, fotoğraf, konum veya sticker göndermek için bu yapı kullanılır. Türkçedeki "... gönder" kalıbı gibi düşünebilirsin.',
      examples:[
        {th:'ส่งข้อความ',ro:'song kho-khwaam',tr:'mesaj gönder'},
        {th:'ส่งรูป',ro:'song ruup',tr:'fotoğraf gönder'},
        {th:'ส่งโลเคชั่น',ro:'song lo-khe-chan',tr:'konum gönder'},
        {th:'ส่งสติ๊กเกอร์',ro:'song sa-tik-koe',tr:'sticker gönder'},
        {th:'ส่งไฟล์',ro:'song fai',tr:'dosya gönder'}
      ]
    },
    {
      id:'g2',
      title:'โทร + yön = telefon eylem yapısı',
      explanation:'"Tho" (telefon etmek) fiilinin ardından yön belirten kelimeler gelir. "Tho-haa" = birini aramak (haa = aramak/bulmak). "Tho-maa" = seni aramak (birine doğru). Bu yapı günlük iletişimde çok kullanılır.',
      examples:[
        {th:'โทรหาผม',ro:'tho-haa phom',tr:'beni ara'},
        {th:'ผมจะโทรหาคุณ',ro:'phom ja tho-haa khun',tr:'seni arayacağım'},
        {th:'คุณโทรมาได้เลย',ro:'khun tho maa dai loei',tr:'beni arayabilirsin'},
        {th:'ใครโทรมาครับ',ro:'khrai tho maa khrap',tr:'kim aradı efendim?'},
        {th:'ไม่มีสัญญาณ โทรไม่ได้',ro:'mai mii san-yaan tho mai dai',tr:'sinyal yok, arayamıyorum'}
      ]
    },
    {
      id:'g3',
      title:'ได้ไหม = "... yapabilir misin?" soru kalıbı',
      explanation:'"Dai" yapabilmek anlamında, "mai" soru eki. Birlikte "yapabilir misin / mümkün mü?" sorusunu oluşturur. Nazik bir istek veya soru için çok kullanışlı bir kalıp.',
      examples:[
        {th:'แชร์โลเคชั่นได้ไหมครับ',ro:'chaer lo-khe-chan dai mai khrap',tr:'Konumu paylaşabilir misin efendim?'},
        {th:'ส่งข้อความได้ไหมครับ',ro:'song kho-khwaam dai mai khrap',tr:'Mesaj atabilir misin efendim?'},
        {th:'วิดีโอคอลได้ไหมคะ',ro:'wi-dii-o-khon dai mai kha',tr:'Görüntülü arayabilir miyim efendim?'},
        {th:'โทรหาได้ไหมครับ',ro:'tho-haa dai mai khrap',tr:'Arayabilir miyim efendim?'},
        {th:'เพิ่มเพื่อนได้ไหมคะ',ro:'phoem phuean dai mai kha',tr:'Arkadaş ekleyebilir miyim efendim?'}
      ]
    }
  ],
  speaking:[
    {id:'sp1',task:'"LINE\'ın var mı?" sorusunu Tayca sor.'},
    {id:'sp2',task:'Telefon numaranı birine veriyorsun. "Benim numaram..." cümlesini Tayca kur.'},
    {id:'sp3',task:'"Seni akşam arayacağım." cümlesini Tayca söyle.'},
    {id:'sp4',task:'"Bana mesaj at." isteğini Tayca ifade et.'},
    {id:'sp5',task:'"Batarya bitti." durumunu Tayca açıkla.'},
    {id:'sp6',task:'"Konumunu paylaşabilir misin?" sorusunu Tayca sor.'},
    {id:'sp7',task:'"Sinyal çok kötü." şikayetini Tayca söyle.'},
    {id:'sp8',task:'"LINE\'da arkadaş nasıl eklenir?" sorusunu Tayca sor.'},
    {id:'sp9',task:'"Beni görüntülü arayabilirsin." cümlesini Tayca söyle.'},
    {id:'sp10',task:'"Sana sticker göndereyim mi?" sorusunu Tayca sor.'},
    {id:'sp11',task:'"Kim aradı?" sorusunu Tayca sor.'},
    {id:'sp12',task:'"Fotoğrafı LINE\'dan göndereceğim." cümlesini Tayca söyle.'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'LINE ID Alışverişi',
      lines:[
        {s:'Tom',th:'คุณมีไลน์ไหมครับ',ro:'khun mii lain mai khrap',tr:'LINE\'ınız var mı efendim?'},
        {s:'Lucy',th:'มีค่ะ ไอดีไลน์คือ lucy_phuket ค่ะ',ro:'mii kha ai-dii lain khue lucy_phuket kha',tr:'Var efendim. LINE ID\'m lucy_phuket.'},
        {s:'Tom',th:'โอเค ผมจะเพิ่มเพื่อนนะครับ',ro:'o-khe phom ja phoem phuean na khrap',tr:'Tamam, arkadaş olarak ekleyeceğim efendim.'},
        {s:'Lucy',th:'ได้เลยค่ะ ส่งข้อความมาหาฉันได้นะคะ',ro:'dai loei kha song kho-khwaam maa haa chan dai na kha',tr:'Tabii efendim, bana mesaj atabilirsiniz.'},
        {s:'Tom',th:'ขอบคุณครับ ผมจะส่งสวัสดีก่อนนะครับ',ro:'khop-khun khrap phom ja song sa-wat-dii kon na khrap',tr:'Teşekkürler efendim, önce merhaba mesajı atayım.'},
        {s:'Lucy',th:'รอนะคะ จะรับเลยค่ะ',ro:'ro na kha ja rap loei kha',tr:'Bekliyorum efendim, hemen kabul edeceğim.'}
      ]
    },
    {
      id:'d2',
      title:'Arama Sorunu',
      lines:[
        {s:'Tom',th:'ฮัลโหล ลูซี่ ได้ยินไหมครับ',ro:'han-lo luu-sii dai yin mai khrap',tr:'Alo Lucy, duyuyor musunuz efendim?'},
        {s:'Lucy',th:'ได้ยินค่ะ แต่สัญญาณไม่ดีเลยค่ะ',ro:'dai yin kha tae san-yaan mai dii loei kha',tr:'Duyuyorum efendim ama sinyal hiç iyi değil.'},
        {s:'Tom',th:'ใช่ครับ โทรไม่ค่อยได้เลยครับ แบตก็ใกล้หมดแล้วด้วยครับ',ro:'chai khrap tho mai khoi dai loei khrap baet ko klai mot lae-o duai khrap',tr:'Evet efendim, arama da pek olmuyor. Batarya da neredeyse bitti.'},
        {s:'Lucy',th:'งั้นส่งข้อความในไลน์ดีกว่าค่ะ',ro:'ngan song kho-khwaam nai lain dii kwaa kha',tr:'O zaman LINE\'dan mesaj atmak daha iyi olur efendim.'},
        {s:'Tom',th:'โอเค ครับ จะส่งไลน์แทนครับ',ro:'o-khe khrap ja song lain thaen khrap',tr:'Tamam efendim, LINE\'dan göndereceğim.'}
      ]
    },
    {
      id:'d3',
      title:'Konum Paylaşma',
      lines:[
        {s:'Tom',th:'ผมหาร้านไม่เจอครับ แชร์โลเคชั่นได้ไหมครับ',ro:'phom haa raan mai joe khrap chaer lo-khe-chan dai mai khrap',tr:'Dükkanı bulamıyorum efendim, konumu paylaşabilir misiniz?'},
        {s:'Lucy',th:'ได้เลยค่ะ รอแปบนึงนะคะ',ro:'dai loei kha ro paep nueng na kha',tr:'Tabii efendim, bir saniye bekleyin.'},
        {s:'Tom',th:'ขอบคุณครับ ส่งมาในไลน์ได้เลยครับ',ro:'khop-khun khrap song maa nai lain dai loei khrap',tr:'Teşekkürler efendim, LINE\'da gönderebilirsiniz.'},
        {s:'Lucy',th:'ส่งแล้วค่ะ เห็นไหมคะ',ro:'song lae-o kha hen mai kha',tr:'Gönderdim efendim, görüyor musunuz?'},
        {s:'Tom',th:'เห็นแล้วครับ เดี๋ยวไปเลยครับ',ro:'hen lae-o khrap diao pai loei khrap',tr:'Gördüm efendim, hemen geliyorum.'}
      ]
    },
    {
      id:'d4',
      title:'Görüntülü Arama',
      lines:[
        {s:'Tom',th:'ลูซี่ วิดีโอคอลได้ไหมครับ อยากเห็นหน้าครับ',ro:'luu-sii wi-dii-o-khon dai mai khrap yaak hen naa khrap',tr:'Lucy, görüntülü arayabilir miyim efendim, yüzünü görmek istiyorum.'},
        {s:'Lucy',th:'ได้ค่ะ แต่รอให้ฉันแต่งหน้าก่อนนะคะ',ro:'dai kha tae ro hai chan taeng naa kon na kha',tr:'Olur efendim, ama önce makyaj yapayım.'},
        {s:'Tom',th:'ฮ่าฮ่า โอเค ครับ รอได้ครับ',ro:'haa haa o-khe khrap ro dai khrap',tr:'Ha ha, tamam efendim, bekleyebilirim.'},
        {s:'Lucy',th:'โอเคค่ะ พร้อมแล้วค่ะ วิดีโอคอลมาได้เลยค่ะ',ro:'o-khe kha phrom lae-o kha wi-dii-o-khon maa dai loei kha',tr:'Tamam efendim, hazırım, görüntülü arayabilirsiniz.'},
        {s:'Tom',th:'โทรแล้วนะครับ รับด้วยนะครับ',ro:'tho lae-o na khrap rap duai na khrap',tr:'Arıyorum efendim, açın lütfen.'},
        {s:'Lucy',th:'รับแล้วค่ะ สวัสดีค่ะ',ro:'rap lae-o kha sa-wat-dii kha',tr:'Açtım efendim, merhaba!'}
      ]
    }
  ],
  listening:[
    {diff:'easy', q:'Bu kelime ne anlama gelir?', opts:['LINE','Mesaj Gönder','Aramak','Sticker'], c:0, th:'ไลน์'},
    {diff:'easy', q:'Bu kelime ne anlama gelir?', opts:['Mesaj Gönder','Telefon Numarasi','Aramak','Sticker'], c:1, th:'เบอร์โทร'},
    {diff:'easy', q:'Bu kelime ne anlama gelir?', opts:['Mesaj Gönder','Sticker','Aramak','LINE'], c:2, th:'โทรหา'},
    {diff:'easy', q:'Bu kelime ne anlama gelir?', opts:['Aramak','Mesaj Gönder','Sticker','Paylasmak'], c:1, th:'ส่งข้อความ'},
    {diff:'easy', q:'Bu kelime ne anlama gelir?', opts:['Mesaj Gönder','LINE','Sticker','Aramak'], c:2, th:'สติ๊กเกอร์'},
    {diff:'medium', q:'Bu kelime ne anlama gelir?', opts:['Arkadasl Ekle','Paylasmak','Batarya Bitti','Sinyal'], c:0, th:'เพิ่มเพื่อน'},
    {diff:'medium', q:'Bu kelime ne anlama gelir?', opts:['Batarya Bitti','Paylasmak','Sinyal','Görüntülü Arama'], c:1, th:'แชร์'},
    {diff:'medium', q:'Bu kelime ne anlama gelir?', opts:['Sinyal','Batarya Bitti','Paylasmak','Görüntülü Arama'], c:1, th:'แบตหมด'},
    {diff:'medium', q:'Bu kelime ne anlama gelir?', opts:['Görüntülü Arama','Sinyal','Batarya Bitti','LINE'], c:1, th:'สัญญาณ'},
    {diff:'hard', q:'Bu kelime ne anlama gelir?', opts:['Görüntülü Arama','Sinyal','Mesaj Gönder','Aramak'], c:0, th:'วิดีโอคอล'}
  ],
  quiz:[
    {
      id:'q1',
      question:'"ไลน์" nedir?',
      options:['Tayland\'da kullanılan para birimi','Tayland\'da en yaygın mesajlaşma uygulaması','Tayca bir selamlama','Bir market zinciri'],
      c:1
    },
    {
      id:'q2',
      question:'"เบอร์โทร" ne anlama gelir?',
      options:['Telefon markası','Telefon numarası','Telefon kablosu','Telefon kutusu'],
      c:1
    },
    {
      id:'q3',
      question:'"โทรหา" fiilinin anlamı nedir?',
      options:['Mesaj göndermek','Aramak (telefonda)','Sinyal almak','Şarj etmek'],
      c:1
    },
    {
      id:'q4',
      question:'"ส่งข้อความ" ne demektir?',
      options:['Mesaj silmek','Mesaj okumak','Mesaj göndermek','Mesaj almak'],
      c:2
    },
    {
      id:'q5',
      question:'"สติ๊กเกอร์" hangi uygulamada en çok kullanılır?',
      options:['Google Maps','LINE','Google Translate','Grab'],
      c:1
    },
    {
      id:'q6',
      question:'"เพิ่มเพื่อน" ne anlama gelir?',
      options:['Arkadaşı silmek','Arkadaşa mesaj atmak','Arkadaş eklemek','Arkadaşı aramak'],
      c:2
    },
    {
      id:'q7',
      question:'"แชร์" fiili nereden gelmektedir ve ne anlama gelir?',
      options:['Taycadan, göndermek','İngilizceden, paylaşmak','Japonca\'dan, saklamak','Fransızcadan, bölmek'],
      c:1
    },
    {
      id:'q8',
      question:'"แบตหมด" cümlesi ne anlama gelir?',
      options:['Sinyal bitti','Batarya bitti','İnternet bitti','Para bitti'],
      c:1
    },
    {
      id:'q9',
      question:'"สัญญาณ" kelimesi ne anlama gelir?',
      options:['Şarj aleti','Kulaklık','Sinyal / bağlantı','Ekran'],
      c:2
    },
    {
      id:'q10',
      question:'"วิดีโอคอล" ne anlama gelir?',
      options:['Sesli mesaj','Görüntülü arama','Video indirme','Ekran paylaşımı'],
      c:1
    },
    {
      id:'q11',
      question:'"ส่ง" fiilinin temel anlamı nedir?',
      options:['Almak','Silmek','Göndermek','Aramak'],
      c:2
    },
    {
      id:'q12',
      question:'"โทรหาผม" cümlesini Türkçeye çevir.',
      options:['Ben seni aradım','Beni ara','Seni arayacağım','Kim aradı?'],
      c:1
    },
    {
      id:'q13',
      question:'"ได้ไหม" soru kalıbı ne anlama gelir?',
      options:['Nerede?','Kaç tane?','... yapabilir misin?','Ne zaman?'],
      c:2
    },
    {
      id:'q14',
      question:'Tayland\'da telefon numarası yerine ne paylaşmak daha yaygındır?',
      options:['E-posta adresi','LINE ID','Instagram kullanıcı adı','Adres'],
      c:1
    },
    {
      id:'q15',
      question:'"ส่งรูปในไลน์" ne anlama gelir?',
      options:['LINE\'da fotoğrafa bak','LINE\'dan fotoğraf gönder','LINE\'da fotoğrafı sil','LINE\'da fotoğraf al'],
      c:1
    },
    {
      id:'q16',
      question:'"สัญญาณไม่ดี" ne demektir?',
      options:['Sinyal çok iyi','Sinyal iyi değil','Sinyal var','Sinyal normal'],
      c:1
    },
    {
      id:'q17',
      question:'"โทรมาได้เลย" cümlesini Türkçeye çevir.',
      options:['Neden aradın?','Arayamam','Arayabilirsin','Aramak istemiyorum'],
      c:2
    },
    {
      id:'q18',
      question:'"phoem" kelimesinin Tayca karşılığı hangisidir ve ne anlama gelir?',
      options:['ส่ง - göndermek','เพิ่ม - eklemek / artırmak','แชร์ - paylaşmak','โทร - aramak'],
      c:1
    },
    {
      id:'q19',
      question:'Lucy bir mesajda "ส่งโลเคชั่นมาให้ฉันด้วยนะคะ" yazıyor. Ne istiyor?',
      options:['Fotoğraf göndermeni','Konumunu göndermeni','Adresi yazmanı','Telefon etmeni'],
      c:1
    },
    {
      id:'q20',
      question:'"แบตหมดแล้ว โทรไม่ได้" cümlesi ne anlama gelir?',
      options:['Sinyal yok, konuşamıyorum','Batarya bitti, arayamıyorum','İnternet yok, gönderemiyorum','Telefon kırık, kullanamıyorum'],
      c:1
    }
  ]
};
LESSONS[18] = L18;
