// === DERS16.JS ===
// Ders 16 verisi — tayca-v3
const L16 = {
  words:[
    {
      id:'w1',
      th:'ไหว้',
      ro:'waai',
      tr:'wai yapmak (geleneksel selam)',
      tip:'Elleri göğüs hizasında birleştirerek yapılan selam. "waai" tek heceli, kısa söylenir.',
      ctx:'Tayland\'da karşılama ve saygı göstermenin en temel yolu. Her yaş ve durumda kullanılır.',
      examples:[
        {
          th:'ผมไหว้คุณลุงครับ',
          ro:'Phom waai khun-lung khrap',
          tr:'Amcaya wai yaptım.',
          bd:[
            {ro:'phom',tr:'ben (erkek)',role:'S - Ozne'},
            {ro:'waai',tr:'wai yapmak',role:'V - Yuklem'},
            {ro:'khun-lung',tr:'amca (saygılı hitap)',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w2',
      th:'วัด',
      ro:'wat',
      tr:'tapınak / Budist tapınağı',
      tip:'Kısa ve net: "wat". Tayland\'da binlerce wat var; Phuket\'te Wat Chalong en ünlüsü.',
      ctx:'Tayland kültürünün merkezinde yer alır. Ziyaret ederken uygun giyinmek zorunludur.',
      examples:[
        {
          th:'ผมอยากไปวัดครับ',
          ro:'Phom yaak pai wat khrap',
          tr:'Tapınağa gitmek istiyorum.',
          bd:[
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'yaak',tr:'istemek',role:'Modal'},
            {ro:'pai',tr:'gitmek',role:'V - Yuklem'},
            {ro:'wat',tr:'tapınak',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w3',
      th:'พระ',
      ro:'phra',
      tr:'rahip / Buda heykeli',
      tip:'"phra" hem Budist rahip hem de kutsal nesne için kullanılır. Bağlamdan anlaşılır.',
      ctx:'Tayland\'da rahibi gördüğünüzde saygıyla wai yapın. Kadınlar rahibe dokunmaz.',
      examples:[
        {
          th:'ผมเห็นพระที่วัดครับ',
          ro:'Phom hen phra thii wat khrap',
          tr:'Tapınakta rahip gördüm.',
          bd:[
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'hen',tr:'görmek',role:'V - Yuklem'},
            {ro:'phra',tr:'rahip',role:'O - Nesne'},
            {ro:'thii wat',tr:'tapınakta',role:'Edat'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w4',
      th:'บุญ',
      ro:'bun',
      tr:'sevap / iyi karma / hayır',
      tip:'"bun" kısa söylenir. Taylar iyi iş yapınca "tham bun" (sevap yapmak) derler.',
      ctx:'Tapınağa bağış yapmak, yiyecek vermek, serbest bırakmak hepsi "tham bun" sayılır.',
      examples:[
        {
          th:'การทำบุญสำคัญในวัฒนธรรมไทยครับ',
          ro:'Kaan tham bun sam-khan nai wat-tha-na-tham Thai khrap',
          tr:'Tayland kültüründe sevap yapmak önemlidir.',
          bd:[
            {ro:'kaan tham bun',tr:'sevap yapmak',role:'S - Ozne'},
            {ro:'sam-khan',tr:'önemli',role:'V - Yuklem'},
            {ro:'nai wat-tha-na-tham Thai',tr:'Tayland kültüründe',role:'Edat'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w5',
      th:'เคารพ',
      ro:'khao-rop',
      tr:'saygı göstermek',
      tip:'"khao-rop" iki heceli. Yaşlılara, rahibere ve kutsal nesnelere karşı kullanılır.',
      ctx:'Tayland\'da yaşlılara ve üst konumdakilere saygı göstermek son derece önemlidir.',
      examples:[
        {
          th:'เราต้องเคารพผู้ใหญ่ครับ',
          ro:'Rao tong khao-rop phuu-yai khrap',
          tr:'Büyüklerimize saygı göstermeliyiz.',
          bd:[
            {ro:'rao',tr:'biz',role:'S - Ozne'},
            {ro:'tong',tr:'zorunda',role:'Modal'},
            {ro:'khao-rop',tr:'saygı göstermek',role:'V - Yuklem'},
            {ro:'phuu-yai',tr:'büyükler/yaşlılar',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w6',
      th:'สุภาพ',
      ro:'su-phap',
      tr:'kibar / nazik',
      tip:'"su-phap" iki heceli. Hem davranış hem de giyim için kullanılır.',
      ctx:'Tapınağa giderken "แต่งตัวสุภาพ" (taeng-tua su-phap = kibar giyinmek) şart.',
      examples:[
        {
          th:'ต้องแต่งตัวสุภาพที่วัดครับ',
          ro:'Tong taeng-tua su-phap thii wat khrap',
          tr:'Tapınakta kibar giyinmek gerekiyor.',
          bd:[
            {ro:'tong',tr:'gerekiyor',role:'Modal'},
            {ro:'taeng-tua',tr:'giyinmek',role:'V - Yuklem'},
            {ro:'su-phap',tr:'kibar/uygun',role:'Kelime'},
            {ro:'thii wat',tr:'tapınakta',role:'Edat'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w7',
      th:'ห้าม',
      ro:'ham',
      tr:'yasak',
      tip:'"ham" düşük tonla söylenir. Uyarı tabelalarında sıkça görülür.',
      ctx:'Tapınak ve kutsal alanlarda "ห้ามถ่ายรูป" (fotoğraf yasak) gibi tabelalar görürsünüz.',
      examples:[
        {
          th:'ห้ามถ่ายรูปในวัดครับ',
          ro:'Ham thaat ruup nai wat khrap',
          tr:'Tapınakta fotoğraf çekmek yasak.',
          bd:[
            {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
            {ro:'thaat ruup',tr:'fotoğraf çekmek',role:'V - Yuklem'},
            {ro:'nai wat',tr:'tapınakta',role:'Edat'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w8',
      th:'โชคดี',
      ro:'chok-dii',
      tr:'iyi şanslar / kolay gelsin',
      tip:'"chok" = şans, "dii" = iyi. Ayrılırken veya birisine başarı dilerken söylenir.',
      ctx:'Bir arkadaşınız önemli bir işe gidiyorsa "chok dii na" diyerek uğurlayın.',
      examples:[
        {
          th:'โชคดีนะครับ',
          ro:'Chok-dii na khrap',
          tr:'İyi şanslar!',
          bd:[
            {ro:'chok-dii',tr:'iyi şans',role:'Kelime'},
            {ro:'na',tr:'(yumuşatma eki)',role:'Vurgu'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      id:'w9',
      th:'ขอโทษ',
      ro:'kho-thot',
      tr:'özür dilerim / pardon',
      tip:'"kho" = istemek/rica, "thot" = ceza/suç. Hem özür hem de dikkat çekmek için.',
      ctx:'Yanlışlıkla birisine çarptığınızda veya yer açmasını istediğinizde kullanın.',
      examples:[
        {
          th:'ขอโทษครับ ผมไม่รู้',
          ro:'Kho-thot khrap phom mai ruu',
          tr:'Özür dilerim, bilmiyordum.',
          bd:[
            {ro:'kho-thot',tr:'özür dilerim',role:'Kelime'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'},
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'mai ruu',tr:'bilmemek',role:'V - Yuklem'}
          ]
        }
      ]
    },
    {
      id:'w10',
      th:'กราบ',
      ro:'kraap',
      tr:'tam secde / derin saygı (tapınakta)',
      tip:'"kraap" yerde tam eğilmektir, wai\'dan çok daha derin. Tapınaklarda Buda\'ya yapılır.',
      ctx:'Tapınakta Buda heykelinin önünde yere kapanarak "kraap" yapılır. Üç kez tekrarlanır.',
      examples:[
        {
          th:'ผมกราบพระที่วัดครับ',
          ro:'Phom kraap phra thii wat khrap',
          tr:'Tapınakta Buda\'ya secde ettim.',
          bd:[
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'kraap',tr:'secde etmek',role:'V - Yuklem'},
            {ro:'phra',tr:'Buda/kutsal heykel',role:'O - Nesne'},
            {ro:'thii wat',tr:'tapınakta',role:'Edat'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    }
  ],
  grammar:[
    {
      title:'1. ห้าม (ham) + Fiil = Yasak',
      formula:'ห้าม (ham) + Fiil',
      explain:'ห้าม (ham) bir fiilin önüne geldiğinde o eylemi yasaklar. Türkçe "-mak yasaktır" veya "-mayın" ile eşdeğerdir. Tabelalar ve uyarılarda çok sık karşılaşırsınız.',
      tips:[
        'ham her zaman fiilin önünde gelir, özne olmadan da kullanılabilir.',
        'Daha güçlü yasak için "ham khat" (kesinlikle yasak) kullanılır.'
      ],
      examples:[
        {
          th:'ห้ามถ่ายรูปในวัดค่ะ',
          ro:'Ham thaat ruup nai wat kha',
          tr:'Tapınakta fotoğraf çekmek yasak.',
          bd:[
            {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
            {ro:'thaat ruup',tr:'fotoğraf çekmek',role:'V - Yuklem'},
            {ro:'nai wat',tr:'tapınakta',role:'Edat'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          th:'ห้ามสูบบุหรี่ที่นี่ครับ',
          ro:'Ham suup bu-rii thii-nii khrap',
          tr:'Burada sigara içmek yasak.',
          bd:[
            {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
            {ro:'suup bu-rii',tr:'sigara içmek',role:'V - Yuklem'},
            {ro:'thii-nii',tr:'burada',role:'Edat'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'ห้ามเหยียบหัวพระค่ะ',
          ro:'Ham yiap hua phra kha',
          tr:'Buda heykelinin başına basmak yasak.',
          bd:[
            {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
            {ro:'yiap',tr:'basmak',role:'V - Yuklem'},
            {ro:'hua phra',tr:'Buda\'nın başı',role:'O - Nesne'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          th:'ห้ามพูดเสียงดังในวัดครับ',
          ro:'Ham phuut siang-dang nai wat khrap',
          tr:'Tapınakta yüksek sesle konuşmak yasak.',
          bd:[
            {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
            {ro:'phuut',tr:'konuşmak',role:'V - Yuklem'},
            {ro:'siang-dang',tr:'yüksek ses',role:'Kelime'},
            {ro:'nai wat',tr:'tapınakta',role:'Edat'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'ห้ามนำสัตว์เข้าวัดค่ะ',
          ro:'Ham nam sat khao wat kha',
          tr:'Tapınağa hayvan sokmak yasak.',
          bd:[
            {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
            {ro:'nam',tr:'getirmek/sokmak',role:'V - Yuklem'},
            {ro:'sat',tr:'hayvan',role:'O - Nesne'},
            {ro:'khao wat',tr:'tapınağa girmek',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      title:'2. ควร (khuan) + Fiil = Yapmalısın / Tavsiye Edilir',
      formula:'ควร (khuan) + Fiil',
      explain:'ควร (khuan) bir fiilin önüne geldiğinde tavsiye veya "yapılması gereken" anlamı katar. Türkçe "-malı/-meli" veya "tavsiye edilir" ile eşdeğerdir. ต้อง\'dan daha yumuşaktır.',
      tips:[
        'khuan zorunlu değil, tavsiyedir. tong daha güçlü bir zorunluluk ifade eder.',
        'Olumsuz için "mai khuan" (yapmamalısın) kullanılır.'
      ],
      examples:[
        {
          th:'ควรไหว้พระที่วัดครับ',
          ro:'Khuan waai phra thii wat khrap',
          tr:'Tapınakta Buda\'ya wai yapmalısın.',
          bd:[
            {ro:'khuan',tr:'yapmalısın/tavsiye',role:'Modal'},
            {ro:'waai',tr:'wai yapmak',role:'V - Yuklem'},
            {ro:'phra',tr:'Buda',role:'O - Nesne'},
            {ro:'thii wat',tr:'tapınakta',role:'Edat'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'ควรแต่งตัวสุภาพเมื่อไปวัดค่ะ',
          ro:'Khuan taeng-tua su-phap mueang pai wat kha',
          tr:'Tapınağa giderken uygun giyinmeli.',
          bd:[
            {ro:'khuan',tr:'tavsiye edilir',role:'Modal'},
            {ro:'taeng-tua su-phap',tr:'uygun giyinmek',role:'V - Yuklem'},
            {ro:'mueang pai wat',tr:'tapınağa giderken',role:'Zaman'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          th:'ควรถอดรองเท้าก่อนเข้าวัดครับ',
          ro:'Khuan thot rong-thao kon khao wat khrap',
          tr:'Tapınağa girmeden önce ayakkabını çıkarmalısın.',
          bd:[
            {ro:'khuan',tr:'tavsiye edilir',role:'Modal'},
            {ro:'thot rong-thao',tr:'ayakkabı çıkarmak',role:'V - Yuklem'},
            {ro:'kon khao wat',tr:'tapınağa girmeden önce',role:'Zaman'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'ไม่ควรชี้นิ้วไปที่พระค่ะ',
          ro:'Mai khuan chii niu pai thii phra kha',
          tr:'Buda heykelini parmakla göstermemelisin.',
          bd:[
            {ro:'mai khuan',tr:'yapmamalısın',role:'Modal'},
            {ro:'chii niu',tr:'parmakla göstermek',role:'V - Yuklem'},
            {ro:'pai thii phra',tr:'Buda\'ya doğru',role:'Edat'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      title:'3. นะ (na) — Yumuşatma ve Pekiştirme Eki',
      formula:'Cümle + นะ (na) [+ ครับ/ค่ะ]',
      explain:'นะ (na) cümle sonuna eklenerek tonu yumuşatır, onay ister veya nazik bir uyarı yapar. Türkçede "-ya", "-ha", "değil mi" gibi tonlama eklerine benzer.',
      tips:[
        'na tek başına veya ครับ/ค่ะ ile birlikte kullanılabilir.',
        'Emir veya yasakları yumuşatmak için çok kullanışlıdır: "ham naa na" = "koyma yani".'
      ],
      examples:[
        {
          th:'ควรเคารพพระนะครับ',
          ro:'Khuan khao-rop phra na khrap',
          tr:'Rahibi saygıyla karşılamak gerekiyor, tamam mı?',
          bd:[
            {ro:'khuan',tr:'tavsiye',role:'Modal'},
            {ro:'khao-rop',tr:'saygı göstermek',role:'V - Yuklem'},
            {ro:'phra',tr:'rahip',role:'O - Nesne'},
            {ro:'na',tr:'(yumuşatma)',role:'Vurgu'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          th:'อย่าลืมถอดรองเท้านะค่ะ',
          ro:'Yaa luem thot rong-thao na kha',
          tr:'Ayakkabını çıkarmayı unutma, tamam?',
          bd:[
            {ro:'yaa luem',tr:'unutma',role:'Soru/Olumsuz'},
            {ro:'thot rong-thao',tr:'ayakkabı çıkarmak',role:'V - Yuklem'},
            {ro:'na',tr:'(yumuşatma)',role:'Vurgu'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          th:'โชคดีนะครับ',
          ro:'Chok-dii na khrap',
          tr:'İyi şanslar ha!',
          bd:[
            {ro:'chok-dii',tr:'iyi şans',role:'Kelime'},
            {ro:'na',tr:'(yumuşatma/pekiştirme)',role:'Vurgu'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        }
      ]
    }
  ],
  speaking:[
    {
      task:'Tapınağa gitmek istediğinizi söyleyin.',
      th:'ผมอยากไปวัดครับ',
      ro:'Phom yaak pai wat khrap',
      tr:'Tapınağa gitmek istiyorum.',
      bd:[
        {ro:'phom',tr:'ben',role:'S - Ozne'},
        {ro:'yaak pai',tr:'gitmek istemek',role:'Modal'},
        {ro:'wat',tr:'tapınak',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Birisine wai yapıp "Merhaba" deyin.',
      th:'สวัสดีครับ (พร้อมไหว้)',
      ro:'Sa-wat-dii khrap (phrom waai)',
      tr:'Merhaba (wai ile birlikte).',
      bd:[
        {ro:'sa-wat-dii',tr:'merhaba/iyi günler',role:'Kelime'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'},
        {ro:'phrom waai',tr:'wai ile birlikte',role:'Kelime'}
      ]
    },
    {
      task:'Tapınakta fotoğraf çekmenin yasak olduğunu söyleyin.',
      th:'ห้ามถ่ายรูปในวัดครับ',
      ro:'Ham thaat ruup nai wat khrap',
      tr:'Tapınakta fotoğraf çekmek yasak.',
      bd:[
        {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
        {ro:'thaat ruup',tr:'fotoğraf çekmek',role:'V - Yuklem'},
        {ro:'nai wat',tr:'tapınakta',role:'Edat'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Tapınağa girerken ayakkabı çıkarmanız gerektiğini söyleyin.',
      th:'ต้องถอดรองเท้าก่อนเข้าวัดครับ',
      ro:'Tong thot rong-thao kon khao wat khrap',
      tr:'Tapınağa girmeden önce ayakkabı çıkarmalısın.',
      bd:[
        {ro:'tong',tr:'gerekiyor',role:'Modal'},
        {ro:'thot rong-thao',tr:'ayakkabı çıkarmak',role:'V - Yuklem'},
        {ro:'kon khao wat',tr:'tapınağa girmeden önce',role:'Zaman'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Bir arkadaşınıza "İyi şanslar" deyin.',
      th:'โชคดีนะครับ',
      ro:'Chok-dii na khrap',
      tr:'İyi şanslar!',
      bd:[
        {ro:'chok-dii',tr:'iyi şans',role:'Kelime'},
        {ro:'na',tr:'(pekiştirme)',role:'Vurgu'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Özür dileyin ve "bilmiyordum" deyin.',
      th:'ขอโทษครับ ผมไม่รู้',
      ro:'Kho-thot khrap phom mai ruu',
      tr:'Özür dilerim, bilmiyordum.',
      bd:[
        {ro:'kho-thot',tr:'özür dilerim',role:'Kelime'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'},
        {ro:'phom mai ruu',tr:'bilmiyordum',role:'V - Yuklem'}
      ]
    },
    {
      task:'Büyüklere saygı göstermek gerektiğini söyleyin.',
      th:'ควรเคารพผู้ใหญ่ครับ',
      ro:'Khuan khao-rop phuu-yai khrap',
      tr:'Büyüklere saygı göstermeliyiz.',
      bd:[
        {ro:'khuan',tr:'tavsiye edilir',role:'Modal'},
        {ro:'khao-rop',tr:'saygı göstermek',role:'V - Yuklem'},
        {ro:'phuu-yai',tr:'büyükler',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Tapınağa giderken kibar giyinmek gerektiğini söyleyin.',
      th:'ควรแต่งตัวสุภาพเมื่อไปวัดครับ',
      ro:'Khuan taeng-tua su-phap mueang pai wat khrap',
      tr:'Tapınağa giderken uygun giyinmeli.',
      bd:[
        {ro:'khuan',tr:'tavsiye edilir',role:'Modal'},
        {ro:'taeng-tua su-phap',tr:'uygun giyinmek',role:'V - Yuklem'},
        {ro:'mueang pai wat',tr:'tapınağa giderken',role:'Zaman'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Tapınakta Buda\'ya secde ettinizi söyleyin.',
      th:'ผมกราบพระที่วัดครับ',
      ro:'Phom kraap phra thii wat khrap',
      tr:'Tapınakta Buda\'ya secde ettim.',
      bd:[
        {ro:'phom',tr:'ben',role:'S - Ozne'},
        {ro:'kraap',tr:'secde etmek',role:'V - Yuklem'},
        {ro:'phra',tr:'Buda',role:'O - Nesne'},
        {ro:'thii wat',tr:'tapınakta',role:'Edat'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Sevap yapmanın Tayland kültüründe önemli olduğunu söyleyin.',
      th:'การทำบุญสำคัญในวัฒนธรรมไทยครับ',
      ro:'Kaan tham bun sam-khan nai wat-tha-na-tham Thai khrap',
      tr:'Tayland kültüründe sevap yapmak önemlidir.',
      bd:[
        {ro:'kaan tham bun',tr:'sevap yapmak',role:'S - Ozne'},
        {ro:'sam-khan',tr:'önemli',role:'V - Yuklem'},
        {ro:'nai wat-tha-na-tham Thai',tr:'Tayland kültüründe',role:'Edat'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Rahibi gördüğünüzde ne yapacağınızı söyleyin.',
      th:'เมื่อเห็นพระ ผมควรไหว้ครับ',
      ro:'Mueang hen phra phom khuan waai khrap',
      tr:'Rahip gördüğümde wai yapmalıyım.',
      bd:[
        {ro:'mueang hen phra',tr:'rahip gördüğümde',role:'Zaman'},
        {ro:'phom',tr:'ben',role:'S - Ozne'},
        {ro:'khuan',tr:'tavsiye edilir',role:'Modal'},
        {ro:'waai',tr:'wai yapmak',role:'V - Yuklem'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      task:'Yüksek sesle konuşmanın tapınakta yasak olduğunu söyleyin.',
      th:'ห้ามพูดเสียงดังในวัดครับ',
      ro:'Ham phuut siang-dang nai wat khrap',
      tr:'Tapınakta yüksek sesle konuşmak yasak.',
      bd:[
        {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
        {ro:'phuut',tr:'konuşmak',role:'V - Yuklem'},
        {ro:'siang-dang',tr:'yüksek sesle',role:'Kelime'},
        {ro:'nai wat',tr:'tapınakta',role:'Edat'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    }
  ],
  dialogues:[
    {
      title:'🙏 İlk Tapınak Ziyareti',
      lines:[
        {
          s:'Tom',
          th:'ลูซี่ ผมอยากไปวัดชาลองครับ',
          ro:'Luu-sii phom yaak pai Wat Cha-long khrap',
          tr:'Lucy, Wat Chalong\'a gitmek istiyorum.',
          bd:[
            {ro:'Luu-sii',tr:'Lucy',role:'S - Ozne'},
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'yaak pai',tr:'gitmek istemek',role:'Modal'},
            {ro:'Wat Cha-long',tr:'Wat Chalong tapınağı',role:'O - Nesne'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'ดีเลยค่ะ แต่ต้องแต่งตัวสุภาพก่อนนะค่ะ',
          ro:'Dii loei kha tae tong taeng-tua su-phap kon na kha',
          tr:'Harika! Ama önce uygun giyinmen gerekiyor.',
          bd:[
            {ro:'dii loei',tr:'harika',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'tae',tr:'ama',role:'Kelime'},
            {ro:'tong taeng-tua su-phap',tr:'uygun giyinmek zorunda',role:'Modal'},
            {ro:'kon',tr:'önce',role:'Zaman'},
            {ro:'na kha',tr:'(yumuşatma)',role:'Kibar'}
          ]
        },
        {
          s:'Tom',
          th:'โอเคครับ ที่วัดต้องทำอะไรบ้างครับ',
          ro:'O-khe khrap thii wat tong tham a-rai bang khrap',
          tr:'Tamam. Tapınakta ne yapmam gerekiyor?',
          bd:[
            {ro:'o-khe',tr:'tamam',role:'Kelime'},
            {ro:'thii wat',tr:'tapınakta',role:'Edat'},
            {ro:'tong tham',tr:'yapmak zorunda',role:'Modal'},
            {ro:'a-rai bang',tr:'neler',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'ต้องถอดรองเท้าและไหว้พระนะค่ะ',
          ro:'Tong thot rong-thao lae waai phra na kha',
          tr:'Ayakkabıyı çıkarman ve Buda\'ya wai yapman lazım.',
          bd:[
            {ro:'tong',tr:'gerekiyor',role:'Modal'},
            {ro:'thot rong-thao',tr:'ayakkabı çıkarmak',role:'V - Yuklem'},
            {ro:'lae',tr:'ve',role:'Kelime'},
            {ro:'waai phra',tr:'Buda\'ya wai yapmak',role:'V - Yuklem'},
            {ro:'na kha',tr:'(yumuşatma)',role:'Kibar'}
          ]
        },
        {
          s:'Tom',
          th:'ห้ามถ่ายรูปไหมครับ',
          ro:'Ham thaat ruup mai khrap',
          tr:'Fotoğraf çekmek yasak mı?',
          bd:[
            {ro:'ham',tr:'yasak',role:'Soru/Olumsuz'},
            {ro:'thaat ruup',tr:'fotoğraf çekmek',role:'V - Yuklem'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'บางที่ห้ามค่ะ ควรถามก่อนนะค่ะ',
          ro:'Bang-thii ham kha khuan thaam kon na kha',
          tr:'Bazı yerlerde yasak. Önce sormak iyi olur.',
          bd:[
            {ro:'bang-thii',tr:'bazı yerlerde',role:'Edat'},
            {ro:'ham',tr:'yasak',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'khuan thaam kon',tr:'önce sormak tavsiye edilir',role:'Modal'},
            {ro:'na kha',tr:'(yumuşatma)',role:'Kibar'}
          ]
        }
      ]
    },
    {
      title:'🛕 Wai Selamı Öğrenmek',
      lines:[
        {
          s:'Tom',
          th:'ลูซี่ ผมไหว้ถูกต้องไหมครับ',
          ro:'Luu-sii phom waai thuuk-tong mai khrap',
          tr:'Lucy, wai yapmam doğru mu?',
          bd:[
            {ro:'phom waai',tr:'wai yapıyorum',role:'V - Yuklem'},
            {ro:'thuuk-tong',tr:'doğru',role:'Kelime'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'เกือบถูกค่ะ มือต้องอยู่ระดับหน้าอกค่ะ',
          ro:'Kueap thuuk kha mue tong yuu ra-dap naa-ok kha',
          tr:'Neredeyse doğru. Eller göğüs hizasında olmalı.',
          bd:[
            {ro:'kueap thuuk',tr:'neredeyse doğru',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'mue',tr:'eller',role:'S - Ozne'},
            {ro:'tong yuu',tr:'olmalı',role:'Modal'},
            {ro:'ra-dap naa-ok',tr:'göğüs hizası',role:'Edat'}
          ]
        },
        {
          s:'Tom',
          th:'แบบนี้ถูกไหมครับ',
          ro:'Baep nii thuuk mai khrap',
          tr:'Böyle doğru mu?',
          bd:[
            {ro:'baep nii',tr:'böyle',role:'Kelime'},
            {ro:'thuuk',tr:'doğru',role:'V - Yuklem'},
            {ro:'mai',tr:'(soru eki)',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'ถูกต้องค่ะ ดีมากเลยค่ะ',
          ro:'Thuuk-tong kha dii maak loei kha',
          tr:'Doğru! Çok iyi!',
          bd:[
            {ro:'thuuk-tong',tr:'doğru/tam',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'dii maak loei',tr:'gerçekten çok iyi',role:'Kelime'}
          ]
        }
      ]
    },
    {
      title:'🔱 Tapınak Kuralları',
      lines:[
        {
          s:'Lucy',
          th:'ทอม ก่อนเข้าวัดต้องถอดรองเท้านะค่ะ',
          ro:'Thom kon khao wat tong thot rong-thao na kha',
          tr:'Tom, tapınağa girmeden önce ayakkabıyı çıkarman lazım.',
          bd:[
            {ro:'Thom',tr:'Tom',role:'S - Ozne'},
            {ro:'kon khao wat',tr:'tapınağa girmeden önce',role:'Zaman'},
            {ro:'tong',tr:'gerekiyor',role:'Modal'},
            {ro:'thot rong-thao',tr:'ayakkabı çıkarmak',role:'V - Yuklem'},
            {ro:'na kha',tr:'(yumuşatma)',role:'Kibar'}
          ]
        },
        {
          s:'Tom',
          th:'โอเคครับ ห้ามทำอะไรอีกบ้างครับ',
          ro:'O-khe khrap ham tham a-rai iik bang khrap',
          tr:'Tamam. Başka neyin yasak olduğunu söyle.',
          bd:[
            {ro:'o-khe',tr:'tamam',role:'Kelime'},
            {ro:'ham tham',tr:'yapması yasak',role:'Soru/Olumsuz'},
            {ro:'a-rai iik bang',tr:'başka neler',role:'Soru/Olumsuz'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'ห้ามพูดเสียงดังและห้ามชี้ไปที่พระค่ะ',
          ro:'Ham phuut siang-dang lae ham chii pai thii phra kha',
          tr:'Yüksek sesle konuşmak ve Buda\'yı işaret etmek yasak.',
          bd:[
            {ro:'ham phuut siang-dang',tr:'yüksek sesle konuşmak yasak',role:'Soru/Olumsuz'},
            {ro:'lae',tr:'ve',role:'Kelime'},
            {ro:'ham chii pai thii phra',tr:'Buda\'yı işaret etmek yasak',role:'Soru/Olumsuz'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
          ]
        },
        {
          s:'Tom',
          th:'ขอบคุณครับ ผมจะระวังครับ',
          ro:'Khop-khun khrap phom ja ra-wang khrap',
          tr:'Teşekkürler. Dikkatli olacağım.',
          bd:[
            {ro:'khop-khun',tr:'teşekkürler',role:'Kelime'},
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'ja',tr:'(gelecek zaman)',role:'Zaman'},
            {ro:'ra-wang',tr:'dikkatli olmak',role:'V - Yuklem'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'โชคดีนะค่ะ ขอให้ได้บุญเยอะๆ ค่ะ',
          ro:'Chok-dii na kha kho hai dai bun yoe-yoe kha',
          tr:'İyi şanslar. Bol sevap kazanmanı dilerim.',
          bd:[
            {ro:'chok-dii na',tr:'iyi şanslar',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'kho hai dai bun',tr:'sevap kazanmasını dilemek',role:'Kelime'},
            {ro:'yoe-yoe',tr:'bol bol',role:'Vurgu'}
          ]
        }
      ]
    },
    {
      title:'🙏 Özür ve Kültürel Yanlış Anlaşılma',
      lines:[
        {
          s:'Tom',
          th:'ขอโทษครับ ผมไม่รู้ว่าห้ามเหยียบที่นั่น',
          ro:'Kho-thot khrap phom mai ruu waa ham yiap thii-nan',
          tr:'Özür dilerim, oraya basmanın yasak olduğunu bilmiyordum.',
          bd:[
            {ro:'kho-thot',tr:'özür dilerim',role:'Kelime'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'},
            {ro:'phom mai ruu',tr:'bilmiyordum',role:'V - Yuklem'},
            {ro:'waa ham yiap',tr:'basmanın yasak olduğunu',role:'Kelime'},
            {ro:'thii-nan',tr:'oraya',role:'Edat'}
          ]
        },
        {
          s:'Lucy',
          th:'ไม่เป็นไรค่ะ คุณไม่รู้เรื่องนี้ก็เข้าใจได้ค่ะ',
          ro:'Mai pen rai kha khun mai ruu rueang nii ko khao-jai dai kha',
          tr:'Sorun yok. Bunu bilmemen anlaşılır.',
          bd:[
            {ro:'mai pen rai',tr:'sorun yok',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'khun mai ruu rueang nii',tr:'bunu bilmemen',role:'Kelime'},
            {ro:'khao-jai dai',tr:'anlaşılır',role:'V - Yuklem'}
          ]
        },
        {
          s:'Tom',
          th:'ผมจะระวังมากขึ้นครับ ขอบคุณที่บอกครับ',
          ro:'Phom ja ra-wang maak khueng khrap khop-khun thii bok khrap',
          tr:'Daha dikkatli olacağım. Söylediğin için teşekkürler.',
          bd:[
            {ro:'phom',tr:'ben',role:'S - Ozne'},
            {ro:'ja ra-wang maak khueng',tr:'daha dikkatli olacak',role:'V - Yuklem'},
            {ro:'khop-khun thii bok',tr:'söylediğin için teşekkürler',role:'Kelime'},
            {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
          ]
        },
        {
          s:'Lucy',
          th:'ดีค่ะ ทอมเรียนรู้ไวมากเลยค่ะ',
          ro:'Dii kha Thom rian-ruu wai maak loei kha',
          tr:'Güzel. Tom çok hızlı öğreniyor.',
          bd:[
            {ro:'dii',tr:'iyi',role:'Kelime'},
            {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'},
            {ro:'Thom',tr:'Tom',role:'S - Ozne'},
            {ro:'rian-ruu wai maak',tr:'çok hızlı öğrenmek',role:'V - Yuklem'},
            {ro:'loei',tr:'gerçekten/tamamen',role:'Vurgu'}
          ]
        }
      ]
    }
  ],
  listening:[
    {
      th:'ควรไหว้เมื่อเจอผู้ใหญ่ครับ',
      ro:'Khuan waai mueang joe phuu-yai khrap',
      tr:'Büyüklerle karşılaşınca wai yapmalısın.',
      bd:[
        {ro:'khuan waai',tr:'wai yapman tavsiye edilir',role:'Modal'},
        {ro:'mueang joe',tr:'karşılaşınca',role:'Zaman'},
        {ro:'phuu-yai',tr:'büyükler',role:'O - Nesne'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      th:'ห้ามถ่ายรูปในวัดบางแห่งค่ะ',
      ro:'Ham thaat ruup nai wat bang-haeng kha',
      tr:'Bazı tapınaklarda fotoğraf çekmek yasak.',
      bd:[
        {ro:'ham thaat ruup',tr:'fotoğraf çekmek yasak',role:'Soru/Olumsuz'},
        {ro:'nai wat bang-haeng',tr:'bazı tapınaklarda',role:'Edat'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
      ]
    },
    {
      th:'ผมกราบพระสามครั้งครับ',
      ro:'Phom kraap phra saam khrang khrap',
      tr:'Buda\'ya üç kez secde ettim.',
      bd:[
        {ro:'phom',tr:'ben',role:'S - Ozne'},
        {ro:'kraap phra',tr:'Buda\'ya secde etmek',role:'V - Yuklem'},
        {ro:'saam khrang',tr:'üç kez',role:'Zaman'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      th:'การทำบุญทำให้จิตใจสงบค่ะ',
      ro:'Kaan tham bun tham hai jit-jai sa-ngop kha',
      tr:'Sevap yapmak insanı huzura kavuşturur.',
      bd:[
        {ro:'kaan tham bun',tr:'sevap yapmak',role:'S - Ozne'},
        {ro:'tham hai',tr:'yol açmak',role:'V - Yuklem'},
        {ro:'jit-jai sa-ngop',tr:'huzurlu/dingin zihin',role:'O - Nesne'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
      ]
    },
    {
      th:'ต้องแต่งตัวสุภาพเมื่อไปวัดครับ',
      ro:'Tong taeng-tua su-phap mueang pai wat khrap',
      tr:'Tapınağa giderken uygun giyinmek lazım.',
      bd:[
        {ro:'tong',tr:'gerekiyor',role:'Modal'},
        {ro:'taeng-tua su-phap',tr:'uygun giyinmek',role:'V - Yuklem'},
        {ro:'mueang pai wat',tr:'tapınağa giderken',role:'Zaman'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      th:'ขอโทษครับ ผมไม่รู้',
      ro:'Kho-thot khrap phom mai ruu',
      tr:'Özür dilerim, bilmiyordum.',
      bd:[
        {ro:'kho-thot',tr:'özür dilerim',role:'Kelime'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'},
        {ro:'phom mai ruu',tr:'bilmiyordum',role:'V - Yuklem'}
      ]
    },
    {
      th:'โชคดีนะค่ะ',
      ro:'Chok-dii na kha',
      tr:'İyi şanslar!',
      bd:[
        {ro:'chok-dii',tr:'iyi şans',role:'Kelime'},
        {ro:'na',tr:'(yumuşatma)',role:'Vurgu'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
      ]
    },
    {
      th:'ไม่ควรชี้นิ้วไปที่พระค่ะ',
      ro:'Mai khuan chii niu pai thii phra kha',
      tr:'Buda\'yı parmakla göstermemelisin.',
      bd:[
        {ro:'mai khuan',tr:'yapmamalısın',role:'Modal'},
        {ro:'chii niu',tr:'parmakla göstermek',role:'V - Yuklem'},
        {ro:'pai thii phra',tr:'Buda\'ya doğru',role:'Edat'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
      ]
    },
    {
      th:'การเคารพเป็นสิ่งสำคัญในวัฒนธรรมไทยครับ',
      ro:'Kaan khao-rop pen sing sam-khan nai wat-tha-na-tham Thai khrap',
      tr:'Saygı, Tayland kültüründe önemli bir şeydir.',
      bd:[
        {ro:'kaan khao-rop',tr:'saygı göstermek',role:'S - Ozne'},
        {ro:'pen sing sam-khan',tr:'önemli bir şeydir',role:'V - Yuklem'},
        {ro:'nai wat-tha-na-tham Thai',tr:'Tayland kültüründe',role:'Edat'},
        {ro:'khrap',tr:'(nezaket eki)',role:'Kibar'}
      ]
    },
    {
      th:'ทอมเรียนรู้วัฒนธรรมไทยได้เก่งมากค่ะ',
      ro:'Thom rian-ruu wat-tha-na-tham Thai dai keng maak kha',
      tr:'Tom Tayland kültürünü çok iyi öğreniyor.',
      bd:[
        {ro:'Thom',tr:'Tom',role:'S - Ozne'},
        {ro:'rian-ruu',tr:'öğrenmek',role:'V - Yuklem'},
        {ro:'wat-tha-na-tham Thai',tr:'Tayland kültürü',role:'O - Nesne'},
        {ro:'dai keng maak',tr:'çok iyi yapabiliyor',role:'Vurgu'},
        {ro:'kha',tr:'(nezaket eki, kadın)',role:'Kibar'}
      ]
    }
  ],
  quiz:[
    {q:'"Wai yapmak" Tayca\'da nasıl denir?', opts:['กราบ','ไหว้','เคารพ','บุญ'], c:1},
    {q:'"Tapınak" Tayca\'da nasıl denir?', opts:['พระ','บุญ','วัด','สุภาพ'], c:2},
    {q:'"ห้าม" ne anlama gelir?', opts:['tavsiye edilir','kibar','yasak','saygı'], c:2},
    {q:'"ควร" ne anlama gelir?', opts:['yasak','zorunda','yapmalısın/tavsiye','istemek'], c:2},
    {q:'"กราบ" ne anlama gelir?', opts:['wai yapmak','iyi şans','derin secde','özür'], c:2},
    {q:'"โชคดี" ne anlama gelir?', opts:['özür dilerim','iyi şanslar','yasak','saygı'], c:1},
    {q:'"ขอโทษ" ne anlama gelir?', opts:['teşekkürler','merhaba','özür dilerim','iyi şans'], c:2},
    {q:'"บุญ" ne anlama gelir?', opts:['tapınak','rahip','sevap/iyi karma','kibar'], c:2},
    {q:'"ห้ามถ่ายรูป" ne demek?', opts:['Fotoğraf çekmeli.','Fotoğraf çekmek yasak.','Fotoğraf çekmek tavsiye edilir.','Fotoğraf çektim.'], c:1},
    {q:'"ควรไหว้" ne demek?', opts:['Wai yapma.','Wai yapmak yasak.','Wai yapmalısın.','Wai yapmıyorum.'], c:2},
    {q:'"สุภาพ" ne anlama gelir?', opts:['yasak','kibar/nazik','saygı','tapınak'], c:1},
    {q:'"เคารพ" ne anlama gelir?', opts:['wai yapmak','sevap','saygı göstermek','secde etmek'], c:2},
    {q:'"พระ" kelimesi ne anlama gelebilir?', opts:['yalnızca tapınak','yalnızca Buda heykeli','rahip veya kutsal nesne','yalnızca sevap'], c:2},
    {q:'นะ (na) eki ne işe yarar?', opts:['yasak ekler','tonu yumuşatır/onay ister','gelecek zaman kurar','olumsuz yapar'], c:1},
    {q:'Tapınağa girerken ne yapılmalıdır?', opts:['Şapka takılmalı','Ayakkabı çıkarılmalı','Fotoğraf çekilmeli','Yüksek sesle selamlanmalı'], c:1},
    {q:'Tom\'un tapınakta selamlaşırken kullandığı nezaket eki hangisidir?', opts:['ค่ะ','นะ','ครับ','แล้ว'], c:2},
    {q:'"ไม่ควร" ne anlama gelir?', opts:['çok gerekli','yapmamalısın','yasak','mecbur'], c:1},
    {q:'Wai selamında eller nerede tutulur?', opts:['Baş üzerinde','Göğüs hizasında','Bel hizasında','Yana sarkıtılmış'], c:1},
    {q:'"ห้ามพูดเสียงดังในวัด" ne demek?', opts:['Tapınakta yüksek sesle konuşabilirsin.','Tapınakta yüksek sesle konuşmak yasak.','Tapınakta konuşmak tavsiye edilir.','Tapınakta susmak yasak.'], c:1},
    {q:'Tayland\'da kadınlar rahibi gördüğünde ne yapmamalıdır?', opts:['Wai yapmamalı','Ona dokunmamalı','Gülümsememeli','Konuşmamalı'], c:1}
  ]
};
LESSONS[16] = L16;
