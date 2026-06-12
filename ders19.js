// === DERS19.JS ===
// Ders 19 verisi — tayca-v3
// Phuket Tam Gun Simulasyonu — Kapsamli Tekrar Dersi
const L19 = {
  words:[
    {
      id:'w1',
      th:'ตื่นนอน',
      ro:'tuen-non',
      tr:'uyanmak',
      tip:'"Tuen" kalkmak / uyanmak, "non" uyumak. Birlikte "uyku\'dan uyanmak" anlamı verir. "Non" sesini uzun söyle.',
      ctx:'Sabah rutinini anlatırken ve günü tarif ederken en sık kullanılan fiillerden biri.',
      examples:[
        {
          th:'ผมตื่นนอนตอนหกโมงเช้าครับ',
          ro:'phom tuen-non ton hok mong chao khrap',
          tr:'Sabah saat altıda uyandım efendim.',
          bd:[
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'tuen-non',tr:'uyandım',role:'V - Yuklem'},
            {ro:'ton hok mong chao',tr:'sabah saat altıda',role:'Zaman'}
          ]
        }
      ]
    },
    {
      id:'w2',
      th:'อาหารเช้า',
      ro:'aa-haan-chao',
      tr:'kahvaltı',
      tip:'"Aa-haan" yemek, "chao" sabah. Kelime kelime "sabah yemeği". "Chao" kısa ve keskin söylenir.',
      ctx:'Sabah rutininde, otelde veya kafede ne yenileceğini söylerken kullanılır.',
      examples:[
        {
          th:'กินอาหารเช้าด้วยกันไหมครับ',
          ro:'gin aa-haan-chao duai gan mai khrap',
          tr:'Kahvaltıyı birlikte yer miyiz efendim?',
          bd:[
            {ro:'gin',tr:'yemek',role:'V - Yuklem'},
            {ro:'aa-haan-chao',tr:'kahvaltı',role:'O - Nesne'},
            {ro:'duai gan',tr:'birlikte',role:'Kelime'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w3',
      th:'ตลาด',
      ro:'ta-laat',
      tr:'pazar / market',
      tip:'"Ta-laat" iki hece, "ta" kısa, "laat" uzunca söylenir. Sabah pazarları Tayland\'da çok canlıdır.',
      ctx:'Phuket\'te sabah erken açılan yerel pazarlar taze meyve, sebze ve hazır yemek satar.',
      examples:[
        {
          th:'ตลาดเช้าเปิดกี่โมงครับ',
          ro:'ta-laat chao poet kii mong khrap',
          tr:'Sabah pazarı saat kaçta açılıyor efendim?',
          bd:[
            {ro:'ta-laat chao',tr:'sabah pazarı',role:'S - Ozne'},
            {ro:'poet',tr:'açılıyor',role:'V - Yuklem'},
            {ro:'kii mong',tr:'saat kaçta',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w4',
      th:'ต่อรอง',
      ro:'to-rong',
      tr:'pazarlık etmek',
      tip:'"To-rong" iki hece eşit vurguyla söylenir. Tayland pazarlarında fiyat müzakeresi normaldir.',
      ctx:'Yerel pazarlarda veya turist dükkanlarında fiyat konuşurken kullanılır.',
      examples:[
        {
          th:'ต่อรองราคาได้ไหมครับ',
          ro:'to-rong raa-khaa dai mai khrap',
          tr:'Pazarlık yapabilir miyiz efendim?',
          bd:[
            {ro:'to-rong',tr:'pazarlık et',role:'V - Yuklem'},
            {ro:'raa-khaa',tr:'fiyat',role:'O - Nesne'},
            {ro:'dai mai',tr:'yapabilir miyim',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w5',
      th:'พักผ่อน',
      ro:'phak-phon',
      tr:'dinlenmek / tatil yapmak',
      tip:'"Phak" durmak / mola, "phon" rahatlamak. Birlikte "dinlenme molası" anlamı verir.',
      ctx:'Plajda, tatilde veya gün ortasında mola verirken kullanılır.',
      examples:[
        {
          th:'พักผ่อนที่ชายหาดสักครู่ครับ',
          ro:'phak-phon thii chaai-haat sak khruu khrap',
          tr:'Plajda biraz dinleneceğim efendim.',
          bd:[
            {ro:'phak-phon',tr:'dinlen',role:'V - Yuklem'},
            {ro:'thii chaai-haat',tr:'plajda',role:'Kelime'},
            {ro:'sak khruu',tr:'biraz / bir süre',role:'Zaman'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w6',
      th:'ดูพระอาทิตย์ตก',
      ro:'duu-phra-aa-thit-tok',
      tr:'gün batımını izlemek',
      tip:'"Duu" bakmak/izlemek, "phra aa-thit" güneş (saygılı ifade), "tok" düşmek/batmak. Phuket\'te harika gün batımları var!',
      ctx:'Phuket\'in batı kıyılarında gün batımı izlemek çok popülerdir. Promthep Burnu meşhurdur.',
      examples:[
        {
          th:'ไปดูพระอาทิตย์ตกด้วยกันไหมครับ',
          ro:'pai duu phra-aa-thit-tok duai gan mai khrap',
          tr:'Gün batımını birlikte izlemeye gidelim mi efendim?',
          bd:[
            {ro:'pai',tr:'git/gidelim',role:'V - Yuklem'},
            {ro:'duu',tr:'izlemek',role:'Kelime'},
            {ro:'phra-aa-thit-tok',tr:'gün batımı',role:'O - Nesne'},
            {ro:'duai gan',tr:'birlikte',role:'Kelime'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w7',
      th:'นวด',
      ro:'nuat',
      tr:'masaj (yapmak/almak)',
      tip:'"Nuat" kısa ve tek hece. Tayland masajı dünyaca ünlüdür. "Thai massage" yerine Taycada sadece "nuat" denir.',
      ctx:'Phuket\'te masaj salonları her yerde bulunur. Fiyatlar çok uygun, 1-2 saat masaj çok yaygın.',
      examples:[
        {
          th:'นวดไทยชั่วโมงละเท่าไหร่ครับ',
          ro:'nuat thai chua-mong la thao-rai khrap',
          tr:'Tai masajı saat başı ne kadar efendim?',
          bd:[
            {ro:'nuat thai',tr:'Tai masajı',role:'S - Ozne'},
            {ro:'chua-mong la',tr:'saat başı',role:'Zaman'},
            {ro:'thao-rai',tr:'ne kadar',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w8',
      th:'บิล',
      ro:'bin',
      tr:'hesap (restoranda)',
      tip:'İngilizce "bill" kelimesinden Tayca\'ya girmiş. Restoranda hesap isterken kullanılır. Genellikle el hareketi ile birlikte söylenir.',
      ctx:'Restoranda yemeği bitirince hesap istemek için kullanılır. "Khit bin duai" = hesabı hesap et.',
      examples:[
        {
          th:'เก็บบิลด้วยครับ',
          ro:'kep bin duai khrap',
          tr:'Hesabı getirir misiniz efendim?',
          bd:[
            {ro:'kep',tr:'al / topla',role:'V - Yuklem'},
            {ro:'bin',tr:'hesap',role:'O - Nesne'},
            {ro:'duai',tr:'de / lütfen',role:'Vurgu'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w9',
      th:'กลับบ้าน',
      ro:'glap-baan',
      tr:'eve dönmek',
      tip:'"Glap" dönmek, "baan" ev. Birlikte "eve dön" anlamı verir. "Glap" biraz "klap" gibi söylenir.',
      ctx:'Günün sonunda, geziden dönerken veya birine eve dönüp dönmediğini sorarken kullanılır.',
      examples:[
        {
          th:'กลับบ้านแล้วครับ เหนื่อยมากครับ',
          ro:'glap-baan lae-o khrap nuai maak khrap',
          tr:'Eve döndüm efendim, çok yoruldum.',
          bd:[
            {ro:'glap-baan',tr:'eve döndüm',role:'V - Yuklem'},
            {ro:'lae-o',tr:'artık / zaten',role:'Zaman'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'},
            {ro:'nuai maak',tr:'çok yoruldum',role:'Kelime'}
          ]
        }
      ]
    },
    {
      id:'w10',
      th:'ฝัน',
      ro:'fan',
      tr:'rüya görmek / hayal etmek',
      tip:'"Fan" kısa ve düz söylenir. Hem uyurken rüya görmek hem de uyanıkken hayal etmek anlamında kullanılır.',
      ctx:'Gece yatarken veya güzel bir şeyi hayal ederken kullanılır. "Fan dii" = güzel rüya.',
      examples:[
        {
          th:'ฝันดีนะครับ',
          ro:'fan dii na khrap',
          tr:'İyi geceler / tatlı rüyalar efendim.',
          bd:[
            {ro:'fan',tr:'rüya gör',role:'V - Yuklem'},
            {ro:'dii',tr:'güzel / iyi',role:'Kelime'},
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
      title:'แล้ว + fiil = ve sonra / bitince',
      explanation:'"Lae-o" (artık / zaten / bitti) kelimesi iki cümle arasında kullanılınca "... yapınca / bitince, sonra ..." anlamı verir. Günlük rutini anlatmak için çok kullanışlı bir bağlaç yapısı.',
      examples:[
        {th:'กินข้าวแล้วไปหาด',ro:'gin khao lae-o pai haat',tr:'Yemek yiyince plaja git.'},
        {th:'ตื่นนอนแล้วกินกาแฟ',ro:'tuen-non lae-o gin kaa-fae',tr:'Uyanınca kahve iç.'},
        {th:'ไปตลาดแล้วกลับบ้าน',ro:'pai ta-laat lae-o glap baan',tr:'Pazara gidince eve dön.'},
        {th:'นวดแล้วรู้สึกดีมาก',ro:'nuat lae-o ruu-suek dii maak',tr:'Masaj yapınca çok iyi hissediyorum.'},
        {th:'กลับบ้านแล้วฝันดีนะ',ro:'glap baan lae-o fan dii na',tr:'Eve dönünce tatlı rüyalar.'}
      ]
    },
    {
      id:'g2',
      title:'ตั้งแต่เช้า = sabahtan beri / sabah erkenden',
      explanation:'"Tang-tae" ... den beri anlamında, "chao" sabah demek. Birlikte "sabahtan beri / sabah erkenden" anlamı verir. Günün başından beri süren bir eylemi ifade etmek için kullanılır.',
      examples:[
        {th:'ตั้งแต่เช้าไปตลาดแล้ว',ro:'tang-tae chao pai ta-laat lae-o',tr:'Sabah erkenden pazara gitti.'},
        {th:'ตั้งแต่เช้าหิวมากเลย',ro:'tang-tae chao hiw maak loei',tr:'Sabahtan beri çok acıktım.'},
        {th:'ตั้งแต่เช้าอยู่ที่หาด',ro:'tang-tae chao yuu thii haat',tr:'Sabahtan beri plajdayım.'},
        {th:'ทำงานตั้งแต่เช้า',ro:'tham-ngaan tang-tae chao',tr:'Sabahtan beri çalışıyorum.'},
        {th:'ตั้งแต่เช้าไม่ได้กินข้าว',ro:'tang-tae chao mai dai gin khao',tr:'Sabahtan beri yemek yemedim.'}
      ]
    },
    {
      id:'g3',
      title:'ไป + yer = oraya gitmek (bağlamlı tekrar)',
      explanation:'"Pai" gitmek anlamındaki en temel fiildir. Yer ismiyle birleşince "oraya git" anlamı verir. Günlük Phuket rutininde sürekli kullanılır: pai haat (plaja git), pai ta-laat (pazara git), pai raan (dükkana git).',
      examples:[
        {th:'ไปหาด',ro:'pai haat',tr:'plaja git'},
        {th:'ไปตลาด',ro:'pai ta-laat',tr:'pazara git'},
        {th:'ไปนวด',ro:'pai nuat',tr:'masaja git'},
        {th:'ไปกินข้าว',ro:'pai gin khao',tr:'yemeye git'},
        {th:'ไปดูพระอาทิตย์ตก',ro:'pai duu phra-aa-thit-tok',tr:'gün batımı izlemeye git'}
      ]
    }
  ],
  speaking:[
    {id:'sp1',task:'Sabahleyin uyandın. "Saat yedide uyandım." cümlesini Tayca söyle.'},
    {id:'sp2',task:'"Kahvaltıyı birlikte yer miyiz?" sorusunu Tayca sor.'},
    {id:'sp3',task:'Pazara gidiyorsun. "Sabah pazarı nerede?" sorusunu Tayca sor.'},
    {id:'sp4',task:'Bir ürün beğendin. "Pazarlık yapabilir miyim?" sorusunu Tayca sor.'},
    {id:'sp5',task:'"Yemek yiyince plaja gideceğim." cümlesini Tayca söyle (lae-o kullan).'},
    {id:'sp6',task:'Plajda dinleniyorsun. "Burada biraz dinleneceğim." cümlesini Tayca söyle.'},
    {id:'sp7',task:'"Gün batımını birlikte izleyelim mi?" teklifini Tayca yap.'},
    {id:'sp8',task:'Masaj salonundasın. "Bir saatlik masaj ne kadar?" sorusunu Tayca sor.'},
    {id:'sp9',task:'Restoranda yemek bitince "Hesabı getirir misiniz?" cümlesini Tayca söyle.'},
    {id:'sp10',task:'"Eve döndüm, çok yoruldum." cümlesini Tayca söyle.'},
    {id:'sp11',task:'Yatmadan önce Lucy\'ye "Tatlı rüyalar." demek istiyorsun. Tayca söyle.'},
    {id:'sp12',task:'"Sabahtan beri plajdayım." cümlesini Tayca söyle (tang-tae chao kullan).'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Sahne 1 — Sabah: Kahvaltı ve Pazar',
      lines:[
        {speaker:'Tom',th:'สวัสดีตอนเช้าครับ ตื่นนอนแล้วหิวมากเลยครับ',ro:'sa-wat-dii ton chao khrap tuen-non lae-o hiw maak loei khrap',tr:'Günaydın efendim. Uyandım ve çok acıktım.'},
        {speaker:'Lucy',th:'สวัสดีตอนเช้าค่ะ กินอาหารเช้าด้วยกันไหมคะ',ro:'sa-wat-dii ton chao kha gin aa-haan-chao duai gan mai kha',tr:'Günaydın efendim. Kahvaltıyı birlikte yer miyiz?'},
        {speaker:'Tom',th:'ยินดีมากเลยครับ ไปตลาดเช้าด้วยกันได้ไหมครับ',ro:'yin-dii maak loei khrap pai ta-laat chao duai gan dai mai khrap',tr:'Çok memnuniyetle efendim. Sabah pazarına da birlikte gidebilir miyiz?'},
        {speaker:'Lucy',th:'ได้เลยค่ะ ตลาดอยู่แถวนี้เลยค่ะ เปิดตั้งแต่เช้ามากค่ะ',ro:'dai loei kha ta-laat yuu thaeo nii loei kha poet tang-tae chao maak kha',tr:'Tabii efendim. Pazar buranın hemen yakınında, sabah çok erkenden açılıyor.'},
        {speaker:'Tom',th:'เยี่ยมมากครับ ไปได้เลยครับ',ro:'yiam maak khrap pai dai loei khrap',tr:'Harika efendim, gidebiliriz.'},
        {speaker:'Lucy',th:'ที่ตลาดต่อรองราคาได้นะคะ อย่าลืมนะคะ',ro:'thii ta-laat to-rong raa-khaa dai na kha ya luem na kha',tr:'Pazarda pazarlık yapabilirsin efendim, unutma.'}
      ]
    },
    {
      id:'d2',
      title:'Sahne 2 — Öğleden Sonra: Plaj ve Masaj',
      lines:[
        {speaker:'Tom',th:'กินข้าวแล้วไปหาดดีไหมครับ',ro:'gin khao lae-o pai haat dii mai khrap',tr:'Yemek yiyince plaja gitsek güzel olmaz mıydı efendim?'},
        {speaker:'Lucy',th:'ดีมากเลยค่ะ อากาศวันนี้ดีมากค่ะ',ro:'dii maak loei kha aa-kaat wan nii dii maak kha',tr:'Çok güzel olur efendim. Bugünkü hava çok güzel.'},
        {speaker:'Tom',th:'พักผ่อนที่ชายหาดสักครู่แล้วไปนวดไหมครับ',ro:'phak-phon thii chaai-haat sak khruu lae-o pai nuat mai khrap',tr:'Biraz plajda dinlenince masaja gitsek mi efendim?'},
        {speaker:'Lucy',th:'โอ้โห ชอบมากเลยค่ะ นวดไทยดีมากนะคะ',ro:'o-ho chop maak loei kha nuat thai dii maak na kha',tr:'Vay canına, çok seviyorum efendim! Tai masajı gerçekten çok iyi.'},
        {speaker:'Tom',th:'นวดไทยชั่วโมงละเท่าไหร่ครับที่นี่',ro:'nuat thai chua-mong la thao-rai khrap thii nii',tr:'Burada Tai masajı saat başı ne kadar efendim?'},
        {speaker:'Lucy',th:'ประมาณสามร้อยบาทค่ะ ถูกมากนะคะ',ro:'pra-maan saam roi baht kha thuuk maak na kha',tr:'Yaklaşık 300 baht efendim. Çok ucuz değil mi?'}
      ]
    },
    {
      id:'d3',
      title:'Sahne 3 — Akşam: Gün Batımı ve Akşam Yemeği',
      lines:[
        {speaker:'Tom',th:'ไปดูพระอาทิตย์ตกที่แหลมพรหมเทพด้วยกันไหมครับ',ro:'pai duu phra-aa-thit-tok thii laem phrom-thep duai gan mai khrap',tr:'Promthep Burnu\'nda gün batımını birlikte izlemeye gidelim mi efendim?'},
        {speaker:'Lucy',th:'ไปเลยค่ะ สวยมากเลยที่นั่นค่ะ',ro:'pai loei kha suai maak loei thii nan kha',tr:'Gidelim efendim! Orası çok güzel.'},
        {speaker:'Tom',th:'ดูพระอาทิตย์ตกแล้วไปกินอาหารเย็นด้วยกันนะครับ',ro:'duu phra-aa-thit-tok lae-o pai gin aa-haan yen duai gan na khrap',tr:'Gün batımını izleyince akşam yemeğini birlikte yiyelim efendim.'},
        {speaker:'Lucy',th:'ยินดีมากค่ะ มีร้านอาหารทะเลอร่อยมากแถวนั้นค่ะ',ro:'yin-dii maak kha mii raan aa-haan tha-le a-roi maak thaeo nan kha',tr:'Çok memnuniyetle efendim. O tarafta çok lezzetli deniz mahsulleri restoranları var.'},
        {speaker:'Tom',th:'ยอดเยี่ยมมากครับ กินเสร็จแล้วเก็บบิลด้วยนะครับ',ro:'yot-yiam maak khrap gin set lae-o kep bin duai na khrap',tr:'Mükemmel efendim. Yemek bitince hesabı getirin lütfen.'},
        {speaker:'Lucy',th:'ค่ะ ไม่ต้องกังวลค่ะ ฉันจัดการเองค่ะ',ro:'kha mai tong gang-won kha chan jat-kaan eng kha',tr:'Efendim, merak etmeyin, ben hallederim.'}
      ]
    },
    {
      id:'d4',
      title:'Sahne 4 — Gece: Eve Dönüş ve İyi Geceler',
      lines:[
        {speaker:'Tom',th:'วันนี้สนุกมากเลยครับ ขอบคุณนะครับ',ro:'wan nii sa-nuk maak loei khrap khop-khun na khrap',tr:'Bugün çok eğlendim efendim, teşekkürler.'},
        {speaker:'Lucy',th:'ฉันก็สนุกมากค่ะ ทำอะไรชอบที่สุดคะ',ro:'chan ko sa-nuk maak kha tham a-rai chop thii sut kha',tr:'Ben de çok eğlendim efendim. En çok neyi sevdin?'},
        {speaker:'Tom',th:'ชอบดูพระอาทิตย์ตกที่สุดครับ สวยมากเลยครับ',ro:'chop duu phra-aa-thit-tok thii sut khrap suai maak loei khrap',tr:'En çok gün batımını izlemeyi sevdim efendim. Çok güzeldi.'},
        {speaker:'Lucy',th:'ใช่ค่ะ Phuket สวยมากเลยค่ะ โดยเฉพาะตอนเย็นค่ะ',ro:'chai kha Phuket suai maak loei kha doi-cha-pho ton yen kha',tr:'Evet efendim, Phuket çok güzel, özellikle akşamları.'},
        {speaker:'Tom',th:'กลับบ้านแล้วนะครับ ฝันดีนะครับ',ro:'glap baan lae-o na khrap fan dii na khrap',tr:'Artık eve gidiyorum efendim, tatlı rüyalar.'},
        {speaker:'Lucy',th:'กลับบ้านระวังด้วยนะคะ ฝันดีค่ะ พรุ่งนี้เจอกันใหม่นะคะ',ro:'glap baan ra-wang duai na kha fan dii kha phrung-nii joe gan mai na kha',tr:'Eve giderken dikkat et efendim, tatlı rüyalar. Yarın tekrar görüşürüz.'}
      ]
    }
  ],
  listening:[
    {id:'l1',audio_th:'ผมตื่นนอนตอนหกโมงเช้าครับ',audio_ro:'phom tuen-non ton hok mong chao khrap',question:'Adam saat kaçta uyandı?',answer:'Sabah saat altıda.'},
    {id:'l2',audio_th:'กินอาหารเช้าด้วยกันไหมคะ',audio_ro:'gin aa-haan-chao duai gan mai kha',question:'Kadın ne öneriyor?',answer:'Kahvaltıyı birlikte yemeyi öneriyor.'},
    {id:'l3',audio_th:'ที่ตลาดต่อรองราคาได้นะคะ',audio_ro:'thii ta-laat to-rong raa-khaa dai na kha',question:'Kadın ne söylüyor?',answer:'Pazarda pazarlık yapılabilir.'},
    {id:'l4',audio_th:'กินข้าวแล้วไปหาดดีไหมครับ',audio_ro:'gin khao lae-o pai haat dii mai khrap',question:'Adam ne öneriyor?',answer:'Yemek yiyince plaja gitmeyi öneriyor.'},
    {id:'l5',audio_th:'พักผ่อนที่ชายหาดสักครู่ค่ะ',audio_ro:'phak-phon thii chaai-haat sak khruu kha',question:'Kadın ne yapıyor?',answer:'Plajda biraz dinleniyor.'},
    {id:'l6',audio_th:'นวดไทยชั่วโมงละสามร้อยบาทครับ',audio_ro:'nuat thai chua-mong la saam roi baht khrap',question:'Tai masajı ne kadar?',answer:'Saat başı 300 baht.'},
    {id:'l7',audio_th:'ไปดูพระอาทิตย์ตกด้วยกันไหมครับ',audio_ro:'pai duu phra-aa-thit-tok duai gan mai khrap',question:'Adam ne öneriyor?',answer:'Gün batımını birlikte izlemeye gitmeyi öneriyor.'},
    {id:'l8',audio_th:'เก็บบิลด้วยครับ',audio_ro:'kep bin duai khrap',question:'Adam ne istiyor?',answer:'Hesabı getirmelerini istiyor.'},
    {id:'l9',audio_th:'กลับบ้านแล้วนะครับ ฝันดีนะครับ',audio_ro:'glap baan lae-o na khrap fan dii na khrap',question:'Adam ne yapıyor ve ne diliyor?',answer:'Eve dönüyor ve tatlı rüyalar diliyor.'},
    {id:'l10',audio_th:'ตั้งแต่เช้าอยู่ที่หาดค่ะ',audio_ro:'tang-tae chao yuu thii haat kha',question:'Kadın ne zamandan beri plajda?',answer:'Sabahtan beri plajda.'}
  ],
  quiz:[
    {
      id:'q1',
      question:'"ตื่นนอน" ne anlama gelir?',
      options:['Uyumak','Uyanmak','Yorulmak','Dinlenmek'],
      c:1
    },
    {
      id:'q2',
      question:'"อาหารเช้า" kelime kelime çevrilirse ne anlam çıkar?',
      options:['Akşam yemeği','Öğle yemeği','Sabah yemeği (kahvaltı)','Gece atıştırması'],
      c:2
    },
    {
      id:'q3',
      question:'"ตลาด" ne anlama gelir?',
      options:['Restoran','Pazar / market','Alışveriş merkezi','Süpermarket'],
      c:1
    },
    {
      id:'q4',
      question:'"ต่อรอง" ne zaman kullanılır?',
      options:['Yemek sipariş ederken','Taksi çağırırken','Fiyat konuşurken','Yol tarifi alırken'],
      c:2
    },
    {
      id:'q5',
      question:'"กินข้าวแล้วไปหาด" cümlesini doğru çevir.',
      options:['Plajdan sonra yemek ye.','Plajda yemek ye.','Yemek yiyince plaja git.','Plajda açım.'],
      c:2
    },
    {
      id:'q6',
      question:'"พักผ่อน" ne anlama gelir?',
      options:['Koşmak','Dinlenmek / tatil yapmak','Yüzmek','Alışveriş yapmak'],
      c:1
    },
    {
      id:'q7',
      question:'"ดูพระอาทิตย์ตก" ifadesinde "tok" ne anlama gelir?',
      options:['Doğmak','Parlamak','Düşmek / batmak','Yükselmek'],
      c:2
    },
    {
      id:'q8',
      question:'Phuket\'te gün batımını izlemek için meşhur yer neresidir?',
      options:['Patong plajı','Promthep Burnu','Big Buddha','Wat Chalong'],
      c:1
    },
    {
      id:'q9',
      question:'"นวด" ne anlama gelir?',
      options:['Yüzmek','Masaj','Dinlenmek','Egzersiz'],
      c:1
    },
    {
      id:'q10',
      question:'"เก็บบิลด้วยครับ" cümlesini Türkçeye çevir.',
      options:['Hesabı sil lütfen.','Hesabı getirin lütfen.','Hesabı bekleyin lütfen.','Hesabı yazın lütfen.'],
      c:1
    },
    {
      id:'q11',
      question:'"กลับบ้าน" ne anlama gelir?',
      options:['Evden çıkmak','Eve dönmek','Evi temizlemek','Ev aramak'],
      c:1
    },
    {
      id:'q12',
      question:'"ฝันดี" ne anlama gelir?',
      options:['İyi sabahlar','İyi öğleden sonralar','Tatlı rüyalar / iyi geceler','İyi yolculuklar'],
      c:2
    },
    {
      id:'q13',
      question:'"แล้ว" iki cümle arasında kullanılınca ne anlam verir?',
      options:['Ve aynı zamanda','... yapınca / bitince, sonra ...','Ama / ancak','Çünkü'],
      c:1
    },
    {
      id:'q14',
      question:'"ตั้งแต่เช้า" ne anlama gelir?',
      options:['Sabah geç saatlere kadar','Sabahtan beri / sabah erkenden','Yarın sabah','Her sabah'],
      c:1
    },
    {
      id:'q15',
      question:'"ตื่นนอนแล้วกินกาแฟ" cümlesini doğru çevir.',
      options:['Kahve içince uyan.','Uyanmadan önce kahve iç.','Uyanınca kahve iç.','Kahve içiyorum, uyumak istemiyorum.'],
      c:2
    },
    {
      id:'q16',
      question:'Tom bugün hangi sırayla aktivite yapıyor?',
      options:['Masaj - Pazar - Kahvaltı - Plaj','Kahvaltı - Pazar - Plaj - Masaj - Gün batımı','Gün batımı - Masaj - Pazar - Kahvaltı','Plaj - Kahvaltı - Masaj - Pazar'],
      c:1
    },
    {
      id:'q17',
      question:'"นวดไทยชั่วโมงละสามร้อยบาท" ne anlama gelir?',
      options:['Tai masajı toplam 300 baht.','Tai masajı saat başı 300 baht.','300 dakika Tai masajı.','300 baht ile 3 saat masaj.'],
      c:1
    },
    {
      id:'q18',
      question:'"ไปดูพระอาทิตย์ตกด้วยกันไหมครับ" sorusu ne anlama gelir?',
      options:['Gün doğumunu görmek ister misin?','Güneşi fotoğraflar mısın?','Gün batımını birlikte izlemeye gidelim mi?','Güneş nerede batıyor?'],
      c:2
    },
    {
      id:'q19',
      question:'"กลับบ้านระวังด้วยนะคะ" cümlesinde Lucy ne söylüyor?',
      options:['Eve erken gel.','Eve giderken dikkat et.','Evi kitle.','Evde bekle.'],
      c:1
    },
    {
      id:'q20',
      question:'Bu derste Tom\'un günü hangi aktiviteyle sona eriyor?',
      options:['Masaj','Akşam yemeği','Eve dönüş ve tatlı rüyalar','Gün batımı izleme'],
      c:2
    }
  ]
};
LESSONS[19] = L19;
