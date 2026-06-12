// === DERS17.JS ===
// Ders 17 verisi — tayca-v3
const L17 = {
  words:[
    {
      id:'w1',
      th:'เข้า',
      ro:'khao',
      tr:'giriş / girmek',
      tip:'Kh sesi Türkçe "k" gibi, "ao" ise "av" gibi okunur. Kısa ve keskin söyle.',
      ctx:'Kapı, bina veya alan girişlerinde tabela olarak kullanılır. Okun yönüyle birlikte görülür.',
      examples:[
        {
          th:'ประตูเข้าอยู่ทางนี้ครับ',
          ro:'pra-tuu khao yuu thang nii khrap',
          tr:'Giriş kapısı bu tarafta efendim.',
          bd:[
            {ro:'pra-tuu',tr:'kapı',role:'S - Ozne'},
            {ro:'khao',tr:'giriş',role:'Kelime'},
            {ro:'yuu',tr:'var / bulunuyor',role:'V - Yuklem'},
            {ro:'thang nii',tr:'bu taraf',role:'Kelime'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w2',
      th:'ออก',
      ro:'ok',
      tr:'çıkış / çıkmak',
      tip:'"Ok" kısa telaffuz edilir, Türkçe "ok" kelimesi gibi ama biraz daha açık.',
      ctx:'Bina çıkışları, market kasaları ve acil çıkış levhalarında kullanılır.',
      examples:[
        {
          th:'ทางออกอยู่ตรงไหนครับ',
          ro:'thang ok yuu trong nai khrap',
          tr:'Çıkış nerede efendim?',
          bd:[
            {ro:'thang ok',tr:'çıkış yolu',role:'S - Ozne'},
            {ro:'yuu',tr:'bulunuyor',role:'V - Yuklem'},
            {ro:'trong nai',tr:'tam olarak nerede',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w3',
      th:'ห้องน้ำ',
      ro:'hong-naam',
      tr:'tuvalet / banyo',
      tip:'"Hong" oda demek, "naam" su demek. Kelime kelime "su odası". İkinci hece biraz uzun söylenir.',
      ctx:'Restoran, market veya alışveriş merkezlerinde tuvalet sormak için kullanılır.',
      examples:[
        {
          th:'ห้องน้ำอยู่ชั้นสองค่ะ',
          ro:'hong-naam yuu chan song kha',
          tr:'Tuvalet ikinci katta efendim.',
          bd:[
            {ro:'hong-naam',tr:'tuvalet',role:'S - Ozne'},
            {ro:'yuu',tr:'bulunuyor',role:'V - Yuklem'},
            {ro:'chan song',tr:'ikinci kat',role:'Kelime'},
            {ro:'kha',tr:'(kibarlık eki - kadın)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w4',
      th:'ระวัง',
      ro:'ra-wang',
      tr:'dikkat / dikkat et',
      tip:'"Ra" hafif, "wang" vurgulu söylenir. Genellikle ünlem işaretiyle birlikte levhalarda görülür.',
      ctx:'Kaygan zemin, inşaat alanı veya tehlikeli bölge uyarılarında kullanılır.',
      examples:[
        {
          th:'ระวัง! พื้นลื่นค่ะ',
          ro:'ra-wang! phuean luen kha',
          tr:'Dikkat! Zemin kaygan efendim.',
          bd:[
            {ro:'ra-wang',tr:'dikkat',role:'V - Yuklem'},
            {ro:'phuean',tr:'zemin / yer',role:'S - Ozne'},
            {ro:'luen',tr:'kaygan',role:'Kelime'},
            {ro:'kha',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w5',
      th:'ปิด',
      ro:'pit',
      tr:'kapalı / kapatmak',
      tip:'"Pit" kısa ve sert söylenir. Mağaza veya restoranın kapalı olduğunu gösteren levhalarda görülür.',
      ctx:'Dükkan kapıları, kutu kapakları ve web sitelerinde "kapalı" anlamında kullanılır.',
      examples:[
        {
          th:'ร้านนี้ปิดแล้วครับ',
          ro:'raan nii pit lae-o khrap',
          tr:'Bu dükkan kapandı efendim.',
          bd:[
            {ro:'raan nii',tr:'bu dükkan',role:'S - Ozne'},
            {ro:'pit',tr:'kapalı / kapandı',role:'V - Yuklem'},
            {ro:'lae-o',tr:'zaten / artık',role:'Zaman'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w6',
      th:'เปิด',
      ro:'poet',
      tr:'açık / açmak',
      tip:'"Poet" iki heceli gibi hissettiriyor ama tek hece: "pöt" gibi söyler gibi düşün.',
      ctx:'Mağaza açılış saatleri, kapı işaretleri ve "açık" tabelalarda kullanılır.',
      examples:[
        {
          th:'ร้านเปิดกี่โมงครับ',
          ro:'raan poet kii mong khrap',
          tr:'Dükkan saat kaçta açılıyor efendim?',
          bd:[
            {ro:'raan',tr:'dükkan',role:'S - Ozne'},
            {ro:'poet',tr:'açıyor / açık',role:'V - Yuklem'},
            {ro:'kii mong',tr:'saat kaç',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w7',
      th:'ลด',
      ro:'lot',
      tr:'indirim / indirmek',
      tip:'"Lot" kısa söylenir. Alışverişlerde en çok göreceğin kelimelerden biri.',
      ctx:'Market raflarında, giyim mağazalarında ve restoran menülerindeki özel tekliflerde kullanılır.',
      examples:[
        {
          th:'ลด 50% ทุกเมนูค่ะ',
          ro:'lot haa-sip percent thuk me-nuu kha',
          tr:'Her menüde %50 indirim efendim.',
          bd:[
            {ro:'lot',tr:'indirim',role:'V - Yuklem'},
            {ro:'haa-sip percent',tr:'yüzde elli',role:'Kelime'},
            {ro:'thuk me-nuu',tr:'her menü',role:'O - Nesne'},
            {ro:'kha',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w8',
      th:'ฟรี',
      ro:'frii',
      tr:'ücretsiz / bedava',
      tip:'İngilizce "free" kelimesinden gelir, aynı telaffuz. Tayca yazım farklı ama ses aynı.',
      ctx:'Wi-Fi tabelalarda, promosyon ürünlerinde ve "ücretsiz" hizmetlerde kullanılır.',
      examples:[
        {
          th:'Wi-Fi ฟรีทั้งร้านค่ะ',
          ro:'wai-fai frii thang raan kha',
          tr:'Wi-Fi tüm dükkanda ücretsiz efendim.',
          bd:[
            {ro:'wai-fai',tr:'Wi-Fi',role:'S - Ozne'},
            {ro:'frii',tr:'ücretsiz',role:'Kelime'},
            {ro:'thang raan',tr:'tüm dükkan',role:'Kelime'},
            {ro:'kha',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w9',
      th:'ที่จอดรถ',
      ro:'thii-jot-rot',
      tr:'otopark / park yeri',
      tip:'"Thii" yer anlamı taşır, "jot" park etmek, "rot" araç. Üç kelime birleşiyor.',
      ctx:'Alışveriş merkezleri, restoranlar ve otellerin otopark tabelalarında kullanılır.',
      examples:[
        {
          th:'ที่จอดรถอยู่ด้านหลังครับ',
          ro:'thii-jot-rot yuu dan lang khrap',
          tr:'Otopark arka tarafta efendim.',
          bd:[
            {ro:'thii-jot-rot',tr:'otopark',role:'S - Ozne'},
            {ro:'yuu',tr:'bulunuyor',role:'V - Yuklem'},
            {ro:'dan lang',tr:'arka taraf',role:'Kelime'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w10',
      th:'ชั้น',
      ro:'chan',
      tr:'kat (bina katı)',
      tip:'"Chan" kısa ve düz söylenir. Sayıyla birlikte kullanılır: chan nueng = 1. kat.',
      ctx:'Alışveriş merkezleri ve otellerde kat numaralarını okurken kullanılır.',
      examples:[
        {
          th:'ห้องอาหารอยู่ชั้นสามครับ',
          ro:'hong aa-haan yuu chan saam khrap',
          tr:'Restoran üçüncü katta efendim.',
          bd:[
            {ro:'hong aa-haan',tr:'yemek salonu / restoran',role:'S - Ozne'},
            {ro:'yuu',tr:'bulunuyor',role:'V - Yuklem'},
            {ro:'chan saam',tr:'üçüncü kat',role:'Kelime'},
            {ro:'khrap',tr:'(kibarlık eki)',role:'Kibar'}
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      id:'g1',
      title:'ไม่ + fiil = yasak veya olumsuz emir',
      explanation:'"Mai" kelimesi fiilin önüne gelince yasak veya olumsuzluk bildirir. Tabelarda çok sık görülür. Mai suup bu-rii = sigara içilmez. Mai ao rot = araç giremez.',
      examples:[
        {th:'ไม่สูบบุหรี่',ro:'mai suup bu-rii',tr:'Sigara içilmez.'},
        {th:'ไม่จอดรถ',ro:'mai jot rot',tr:'Park etmek yasaktır.'},
        {th:'ไม่นำอาหารเข้า',ro:'mai nam aa-haan khao',tr:'Yiyecek getirmek yasaktır.'},
        {th:'ไม่ถ่ายรูป',ro:'mai thaai ruup',tr:'Fotoğraf çekmek yasaktır.'},
        {th:'ไม่ทิ้งขยะ',ro:'mai thing kha-ya',tr:'Çöp atmak yasaktır.'}
      ]
    },
    {
      id:'g2',
      title:'Sayı + baht = fiyat okuma',
      explanation:'Tayca fiyatları okurken sayının ardından "baht" gelir. Menü veya etiket fiyatlarını anlayabilmek için sayıları hatırlamak önemlidir. Yüzler için "roi", binler için "phan" kullanılır.',
      examples:[
        {th:'สามร้อยบาท',ro:'saam roi baht',tr:'300 baht'},
        {th:'ห้าสิบบาท',ro:'haa-sip baht',tr:'50 baht'},
        {th:'หนึ่งพันบาท',ro:'nueng phan baht',tr:'1000 baht'},
        {th:'สองร้อยห้าสิบบาท',ro:'song roi haa-sip baht',tr:'250 baht'},
        {th:'เจ็ดสิบบาท',ro:'jet-sip baht',tr:'70 baht'}
      ]
    },
    {
      id:'g3',
      title:'ทาง + yön = yol/taraf ifadesi',
      explanation:'"Thang" yön bildiren kelimelerin önüne gelir ve "taraf, yol, yön" anlamı katar. Tabelalarda ve yol tarifi verirken çok kullanılır.',
      examples:[
        {th:'ทางเข้า',ro:'thang khao',tr:'giriş yolu'},
        {th:'ทางออก',ro:'thang ok',tr:'çıkış yolu'},
        {th:'ทางขวา',ro:'thang khwa',tr:'sağ taraf'},
        {th:'ทางซ้าย',ro:'thang saai',tr:'sol taraf'},
        {th:'ทางออกฉุกเฉิน',ro:'thang ok chuk-choen',tr:'acil çıkış'}
      ]
    }
  ],
  speaking:[
    {id:'sp1',task:'Bir restorana girerken giriş tabelasını Tayca oku.'},
    {id:'sp2',task:'"Tuvalet nerede?" sorusunu Tayca sor.'},
    {id:'sp3',task:'Bir levhada "ระวัง" yazıyor. Bu kelimeyi yüksek sesle oku ve Türkçe anlamını söyle.'},
    {id:'sp4',task:'"Bu dükkan kapalı." cümlesini Tayca söyle.'},
    {id:'sp5',task:'Markette %30 indirim tabelası görüyorsun. Tayca nasıl söylenir?'},
    {id:'sp6',task:'"Otopark nerede?" sorusunu Tayca sor.'},
    {id:'sp7',task:'Menüde bir yemeğin fiyatı 150 baht. Bunu Tayca söyle.'},
    {id:'sp8',task:'"Sigara içilmez" uyarısını Tayca söyle.'},
    {id:'sp9',task:'Asansörde 4. kata gitmek istiyorsun. Kat numarasını Tayca söyle.'},
    {id:'sp10',task:'"Wi-Fi ücretsiz mi?" sorusunu Tayca sor.'},
    {id:'sp11',task:'"Acil çıkış bu tarafta." cümlesini Tayca söyle.'},
    {id:'sp12',task:'Bir tabela "เปิด 09:00-22:00" yazıyor. Bu saatleri Tayca oku.'}
  ],
  dialogues:[
    {
      id:'d1',
      title:'Alışveriş Merkezinde Yardım',
      lines:[
        {speaker:'Tom',th:'ขอโทษครับ ห้องน้ำอยู่ที่ไหนครับ',ro:'kho-thot khrap hong-naam yuu thii nai khrap',tr:'Affedersiniz, tuvalet nerede efendim?'},
        {speaker:'Lucy',th:'ห้องน้ำอยู่ชั้นสองค่ะ ทางนั้นเลยค่ะ',ro:'hong-naam yuu chan song kha thang nan loei kha',tr:'Tuvalet ikinci katta efendim, o tarafta.'},
        {speaker:'Tom',th:'ชั้นสองใช่ไหมครับ ขึ้นลิฟต์ไหนครับ',ro:'chan song chai mai khrap khuean lift nai khrap',tr:'İkinci kat mı efendim? Hangi asansörü kullanayım?'},
        {speaker:'Lucy',th:'ลิฟต์อยู่ทางขวามือค่ะ ใกล้ทางเข้าค่ะ',ro:'lift yuu thang khwa mue kha klai thang khao kha',tr:'Asansör sağ tarafta efendim, girişin yanında.'},
        {speaker:'Tom',th:'ขอบคุณมากครับ',ro:'khop-khun maak khrap',tr:'Çok teşekkür ederim efendim.'},
        {speaker:'Lucy',th:'ยินดีค่ะ',ro:'yin-dii kha',tr:'Rica ederim efendim.'}
      ]
    },
    {
      id:'d2',
      title:'Restoran Menüsü Okuma',
      lines:[
        {speaker:'Tom',th:'เมนูนี้ราคาเท่าไหร่ครับ',ro:'me-nuu nii raa-khaa thao-rai khrap',tr:'Bu menünün fiyatı ne kadar efendim?'},
        {speaker:'Lucy',th:'สองร้อยบาทค่ะ แต่วันนี้ลด 20% ค่ะ',ro:'song roi baht kha tae wan nii lot yii-sip percent kha',tr:'İki yüz baht efendim, ama bugün %20 indirim var.'},
        {speaker:'Tom',th:'โอ้ ลดด้วย ดีมากเลยครับ',ro:'o lot duai dii maak loei khrap',tr:'Vay, indirimli de, çok güzel efendim.'},
        {speaker:'Lucy',th:'มีเมนูแนะนำด้วยค่ะ ฟรีของหวานค่ะ',ro:'mii me-nuu nae-nam duai kha frii khong-waan kha',tr:'Önerilen menü de var efendim, tatlı ücretsiz.'},
        {speaker:'Tom',th:'เอาเมนูแนะนำครับ',ro:'ao me-nuu nae-nam khrap',tr:'Önerilen menüyü alayım efendim.'}
      ]
    },
    {
      id:'d3',
      title:'Park Yeri Arama',
      lines:[
        {speaker:'Tom',th:'ที่จอดรถอยู่ที่ไหนครับ',ro:'thii-jot-rot yuu thii nai khrap',tr:'Otopark nerede efendim?'},
        {speaker:'Lucy',th:'ที่จอดรถอยู่ด้านหลังอาคารค่ะ',ro:'thii-jot-rot yuu dan lang aa-khaan kha',tr:'Otopark binanın arkasında efendim.'},
        {speaker:'Tom',th:'ไปทางไหนครับ ทางออกนี้ใช่ไหมครับ',ro:'pai thang nai khrap thang ok nii chai mai khrap',tr:'Hangi taraftan gideyim, bu çıkıştan mı efendim?'},
        {speaker:'Lucy',th:'ไม่ใช่ค่ะ ทางออกฉุกเฉินอยู่ทางนั้นค่ะ ไม่ได้ค่ะ',ro:'mai chai kha thang ok chuk-choen yuu thang nan kha mai dai kha',tr:'Hayır efendim, acil çıkış o tarafta, oradan olmaz.'},
        {speaker:'Tom',th:'อ้อ ขอบคุณครับ ระวังด้วยนะครับ',ro:'o khop-khun khrap ra-wang duai na khrap',tr:'Aa, teşekkürler efendim, dikkat edin.'}
      ]
    },
    {
      id:'d4',
      title:'Mağaza Açık mı Kapalı mı?',
      lines:[
        {speaker:'Tom',th:'ร้านเปิดหรือยังครับ',ro:'raan poet rue yang khrap',tr:'Dükkan açık mı henüz efendim?'},
        {speaker:'Lucy',th:'ยังปิดอยู่ค่ะ เปิดสิบโมงค่ะ',ro:'yang pit yuu kha poet sip mong kha',tr:'Henüz kapalı efendim, saat onda açılıyor.'},
        {speaker:'Tom',th:'ตอนนี้กี่โมงแล้วครับ',ro:'ton nii kii mong lae-o khrap',tr:'Şu an saat kaç efendim?'},
        {speaker:'Lucy',th:'เก้าโมงครึ่งค่ะ อีกสามสิบนาทีค่ะ',ro:'kao mong khrueng kha iik saam-sip naa-thii kha',tr:'Dokuz buçuk efendim, otuz dakika daha var.'},
        {speaker:'Tom',th:'โอเค รอได้ครับ มีร้านกาแฟแถวนี้ไหมครับ',ro:'o-khe ro dai khrap mii raan kaa-fae thaeo nii mai khrap',tr:'Tamam, bekleyebilirim. Buralarda kahve dükkanı var mı efendim?'},
        {speaker:'Lucy',th:'มีค่ะ ชั้นหนึ่งค่ะ ใกล้ทางเข้าเลยค่ะ',ro:'mii kha chan nueng kha klai thang khao loei kha',tr:'Var efendim, birinci katta, girişin hemen yanında.'}
      ]
    }
  ],
  listening:[
    {id:'l1',audio_th:'ทางเข้าอยู่ทางขวาครับ',audio_ro:'thang khao yuu thang khwa khrap',question:'Adam nerede olduğunu söylüyor?',answer:'Giriş sağ tarafta.'},
    {id:'l2',audio_th:'ระวัง! พื้นลื่นค่ะ',audio_ro:'ra-wang phuean luen kha',question:'Kadın ne uyarısı veriyor?',answer:'Dikkat, zemin kaygan.'},
    {id:'l3',audio_th:'ห้องน้ำอยู่ชั้นสองค่ะ',audio_ro:'hong-naam yuu chan song kha',question:'Tuvalet kaçıncı katta?',answer:'İkinci katta.'},
    {id:'l4',audio_th:'ร้านนี้ปิดแล้วครับ',audio_ro:'raan nii pit lae-o khrap',question:'Dükkan ne durumda?',answer:'Kapandı.'},
    {id:'l5',audio_th:'ลด 30% ทุกอย่างค่ะ',audio_ro:'lot saam-sip percent thuk yang kha',question:'İndirim yüzdesi nedir?',answer:'%30 indirim.'},
    {id:'l6',audio_th:'Wi-Fi ฟรีทั้งร้านครับ',audio_ro:'wai-fai frii thang raan khrap',question:'Wi-Fi hakkında ne söyleniyor?',answer:'Tüm dükkanda ücretsiz.'},
    {id:'l7',audio_th:'ที่จอดรถอยู่ด้านหลังค่ะ',audio_ro:'thii-jot-rot yuu dan lang kha',question:'Otopark nerede?',answer:'Arka tarafta.'},
    {id:'l8',audio_th:'ไม่สูบบุหรี่ในร้านนะครับ',audio_ro:'mai suup bu-rii nai raan na khrap',question:'Ne yasak?',answer:'Dükkan içinde sigara içmek yasak.'},
    {id:'l9',audio_th:'ทางออกฉุกเฉินอยู่ทางนั้นค่ะ',audio_ro:'thang ok chuk-choen yuu thang nan kha',question:'Ne nerede?',answer:'Acil çıkış o tarafta.'},
    {id:'l10',audio_th:'ราคาสองร้อยห้าสิบบาทครับ',audio_ro:'raa-khaa song roi haa-sip baht khrap',question:'Fiyat ne kadar?',answer:'250 baht.'}
  ],
  quiz:[
    {
      id:'q1',
      question:'"เข้า" kelimesinin anlamı nedir?',
      options:['Çıkış','Giriş','Kapalı','İndirim'],
      c:1
    },
    {
      id:'q2',
      question:'"ห้องน้ำ" nerede görebilirsin?',
      options:['Menüde fiyat olarak','Otopark tabelasında','Tuvalet yönlendirme levhasında','İndirim etiketinde'],
      c:2
    },
    {
      id:'q3',
      question:'"ระวัง" kelimesinin Türkçe karşılığı nedir?',
      options:['Ücretsiz','Açık','Dikkat','İndirim'],
      c:2
    },
    {
      id:'q4',
      question:'"ปิด" ve "เปิด" hangi anlam çiftini oluşturur?',
      options:['Giriş / Çıkış','Kapalı / Açık','Yukarı / Aşağı','Sağ / Sol'],
      c:1
    },
    {
      id:'q5',
      question:'"ลด 50%" tabelasında ne yazıyor?',
      options:['50 baht fiyat','%50 indirim','50 adet stok','50 kişilik kapasite'],
      c:1
    },
    {
      id:'q6',
      question:'"ฟรี" kelimesi nereden gelmiştir ve ne anlama gelir?',
      options:['Fransızcadan, pahalı','İngilizceden, ücretsiz','Çinceden, hediye','Almancadan, açık'],
      c:1
    },
    {
      id:'q7',
      question:'"ที่จอดรถ" ne demektir?',
      options:['Otobüs durağı','Otopark','Taksi yeri','Trafik ışığı'],
      c:1
    },
    {
      id:'q8',
      question:'"ชั้นสาม" nereyi gösterir?',
      options:['Üçüncü kat','Üçüncü kapı','Üçüncü sıra','Üç metrekare'],
      c:0
    },
    {
      id:'q9',
      question:'"ทางออกฉุกเฉิน" ne anlama gelir?',
      options:['Ana giriş','Servis çıkışı','Acil çıkış','Müşteri girişi'],
      c:2
    },
    {
      id:'q10',
      question:'"ไม่สูบบุหรี่" tabelasında ne yazıyor?',
      options:['Sigara satılır','Sigara içilmez','Sigara alanı','Sigara molası'],
      c:1
    },
    {
      id:'q11',
      question:'"ไม่" kelimesi fiilin önüne gelince ne anlam katar?',
      options:['Teşvik eder','Yasaklar veya olumsuzlaştırır','Miktarı artırır','Fiyatı gösterir'],
      c:1
    },
    {
      id:'q12',
      question:'"สามร้อยบาท" kaç paradır?',
      options:['30 baht','300 baht','3000 baht','3 baht'],
      c:1
    },
    {
      id:'q13',
      question:'"ทางเข้า" ne anlama gelir?',
      options:['Çıkış yolu','Giriş yolu','Park alanı','Yemek salonu'],
      c:1
    },
    {
      id:'q14',
      question:'Phuket\'te bir tabelada "ระวัง พื้นลื่น" görüyorsun. Ne yapmalısın?',
      options:['Hızlıca geçmeli','Dikkatli olmalı, zemin kaygan','Fotoğraf çekmeli','Başka yol aramalı'],
      c:1
    },
    {
      id:'q15',
      question:'"ร้านเปิดกี่โมงครับ" sorusu ne soruyor?',
      options:['Dükkan nerede?','Dükkan kapalı mı?','Dükkan saat kaçta açılıyor?','Dükkan ne satıyor?'],
      c:2
    },
    {
      id:'q16',
      question:'"ไม่จอดรถ" tabelası ne anlama gelir?',
      options:['Araçlar girebilir','Park etmek yasaktır','Ücretsiz park','Otopark girişi'],
      c:1
    },
    {
      id:'q17',
      question:'Bir kadın "ห้องน้ำอยู่ชั้นสองค่ะ" diyor. Tuvalet nerede?',
      options:['Bodrum katta','Birinci katta','İkinci katta','Üçüncü katta'],
      c:2
    },
    {
      id:'q18',
      question:'"ทาง" kelimesi yön kelimeleriyle kullanılınca ne anlam verir?',
      options:['Fiyat ifadesi','Taraf / yol / yön','Zaman ifadesi','Kişi ismi'],
      c:1
    },
    {
      id:'q19',
      question:'Hangi kelime "dikkat" anlamına gelir?',
      options:['ลด','ฟรี','ระวัง','เปิด'],
      c:2
    },
    {
      id:'q20',
      question:'"หนึ่งพันบาท" kaç paradır?',
      options:['100 baht','500 baht','1000 baht','10000 baht'],
      c:2
    }
  ]
};
LESSONS[17] = L17;
