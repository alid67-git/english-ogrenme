// ders2.js — English Lesson 2: Verb Tenses
const L2 = {
  words: [
    {id:'w1', en:'always', ro:'/ˈɔːlweɪz/', tr:'her zaman', tip:'Geniş zaman ile kullanılır.', ctx:'Sıklık zarfları cümlenin başında veya fiilden önce gelir.',
     examples:[{en:'I always drink coffee in the morning.', ro:'/aɪ ˈɔːlweɪz drɪŋk ˈkɒfi ɪn ðə ˈmɔːrnɪŋ/', tr:'Sabahları her zaman kahve içerim.',
       bd:[{ro:'I',tr:'Ben',role:'subject'},{ro:'always drink',tr:'her zaman içerim',role:'verb'},{ro:'coffee',tr:'kahve',role:'object'}]}]},
    {id:'w2', en:'usually', ro:'/ˈjuːʒuəli/', tr:'genellikle',
     examples:[{en:'She usually walks to work.', ro:'/ʃiː ˈjuːʒuəli wɔːks tə wɜːrk/', tr:'Genellikle işe yürüyerek gider.'}]},
    {id:'w3', en:'now / at the moment', ro:'/naʊ / æt ðə ˈmoʊmənt/', tr:'şimdi / şu anda', tip:'Şimdiki zaman işaretidir.', ctx:'Present Continuous ile kullanılır.',
     examples:[{en:'I am studying English now.', ro:'/aɪ æm ˈstʌdiɪŋ ˈɪŋɡlɪʃ naʊ/', tr:'Şimdi İngilizce çalışıyorum.',
       bd:[{ro:'I am studying',tr:'çalışıyorum',role:'verb'},{ro:'now',tr:'şimdi',role:'time'}]}]},
    {id:'w4', en:'yesterday', ro:'/ˈjɛstərdeɪ/', tr:'dün', tip:'Geçmiş zaman işaretidir.', ctx:'Past Simple ile kullanılır.',
     examples:[{en:'We met yesterday.', ro:'/wiː mɛt ˈjɛstərdeɪ/', tr:'Dün buluştuk.'}]},
    {id:'w5', en:'last week', ro:'/lɑːst wiːk/', tr:'geçen hafta',
     examples:[{en:'I visited London last week.', ro:'/aɪ ˈvɪzɪtɪd ˈlʌndən lɑːst wiːk/', tr:'Geçen hafta Londra\'yı ziyaret ettim.'}]},
    {id:'w6', en:'ago', ro:'/əˈɡoʊ/', tr:'... önce', tip:'Süre + ago = geçmişte.', ctx:'two days ago, three years ago',
     examples:[{en:'She called me two hours ago.', ro:'/ʃiː kɔːld miː tuː aʊərz əˈɡoʊ/', tr:'İki saat önce beni aradı.'}]},
    {id:'w7', en:'while', ro:'/waɪl/', tr:'... iken / sırasında', tip:'Past Continuous ile sık kullanılır.', ctx:'Uzun süren geçmiş eylem.',
     examples:[{en:'I was reading while he was cooking.', ro:'/aɪ wɒz ˈriːdɪŋ waɪl hiː wɒz ˈkʊkɪŋ/', tr:'O yemek yaparken ben okuyordum.'}]},
    {id:'w8', en:'already', ro:'/ɔːlˈrɛdi/', tr:'zaten / çoktan', tip:'Present Perfect ile.', ctx:'Olumlu cümlelerde fiilden önce.',
     examples:[{en:'I have already finished my homework.', ro:'/aɪ hæv ɔːlˈrɛdi ˈfɪnɪʃt maɪ ˈhoʊmwɜːrk/', tr:'Ödevimi çoktan bitirdim.'}]},
    {id:'w9', en:'yet', ro:'/jɛt/', tr:'henüz / daha', tip:'Present Perfect olumsuz ve sorularda.', ctx:'Cümlenin sonunda.',
     examples:[{en:'Have you eaten yet?', ro:'/hæv juː ˈiːtən jɛt/', tr:'Henüz yemek yedin mi?'}]},
    {id:'w10', en:'just', ro:'/dʒʌst/', tr:'az önce / henüz', tip:'Present Perfect ile.', ctx:'have/has + just + V3',
     examples:[{en:'She has just left the office.', ro:'/ʃiː hæz dʒʌst lɛft ði ˈɒfɪs/', tr:'Az önce ofisten ayrıldı.'}]},
    {id:'w11', en:'since', ro:'/sɪns/', tr:'-den beri', tip:'Başlangıç noktası.', ctx:'Present Perfect ile: since 2020',
     examples:[{en:'I have lived here since 2019.', ro:'/aɪ hæv lɪvd hɪər sɪns ˈtwɛnti nˈaɪnti nˈaɪn/', tr:'2019\'dan beri burada yaşıyorum.'}]},
    {id:'w12', en:'for', ro:'/fər/', tr:'... süredir', tip:'Süre ifadesi.', ctx:'for two years, for a week',
     examples:[{en:'We have known each other for ten years.', ro:'/wiː hæv noʊn iːtʃ ˈʌðər fər tɛn jɪərz/', tr:'On yıldır birbirimizi tanıyoruz.'}]},
    {id:'w13', en:'will', ro:'/wɪl/', tr:'-ecek / -acak (gelecek)', tip:'Anlık karar veya tahmin.', ctx:'will + fiilin yalın hali',
     examples:[{en:'I will help you tomorrow.', ro:'/aɪ wɪl hɛlp juː təˈmɒroʊ/', tr:'Yarın sana yardım edeceğim.'}]},
    {id:'w14', en:'going to', ro:'/ˈɡoʊɪŋ tə/', tr:'-ecek (planlı)', tip:'Önceden planlanmış gelecek.', ctx:'am/is/are going to + verb',
     examples:[{en:'We are going to travel next month.', ro:'/wiː ɑːr ˈɡoʊɪŋ tə ˈtrævəl nɛkst mʌnθ/', tr:'Gelecek ay seyahat edeceğiz.'}]},
    {id:'w15', en:"don't / doesn't", ro:'/doʊnt / ˈdʌzənt/', tr:'...mez / ...maz', tip:'Present Simple olumsuz.', ctx:'He/She/It → doesn\'t',
     examples:[{en:"She doesn't like tea.", ro:'/ʃiː ˈdʌzənt laɪk tiː/', tr:'Çay sevmez.'}]},
    {id:'w16', en:"didn't", ro:'/ˈdɪdnt/', tr:'...medi / ...madı', tip:'Past Simple olumsuz.', ctx:'didn\'t + fiilin yalın hali',
     examples:[{en:"I didn't see him yesterday.", ro:'/aɪ ˈdɪdnt siː hɪm ˈjɛstərdeɪ/', tr:'Dün onu görmedim.'}]},
    {id:'w17', en:'have / has', ro:'/hæv / hæz/', tr:'sahip olmak / yapmış olmak', tip:'Present Perfect yardımcı fiili.', ctx:'have/has + V3 (3. hal)',
     examples:[{en:'He has worked here for five years.', ro:'/hiː hæz wɜːrkt hɪər fər faɪv jɪərz/', tr:'Beş yıldır burada çalışıyor.'}]},
    {id:'w18', en:'was / were', ro:'/wɒz / wɜːr/', tr:'idi / idiler', tip:'Past Simple ve Past Continuous.', ctx:'I/he/she/it → was; you/we/they → were',
     examples:[{en:'They were at home last night.', ro:'/ðeɪ wɜːr æt hoʊm lɑːst naɪt/', tr:'Dün gece evde idiler.'}]},
    {id:'w19', en:'tomorrow', ro:'/təˈmɒroʊ/', tr:'yarın', tip:'Gelecek zaman işareti.',
     examples:[{en:'It will rain tomorrow.', ro:'/ɪt wɪl reɪn təˈmɒroʊ/', tr:'Yarın yağmur yağacak.'}]},
    {id:'w20', en:'ever / never', ro:'/ˈɛvər / ˈnɛvər/', tr:'hiç / asla', tip:'Present Perfect ile deneyim soruları.', ctx:'Have you ever...?',
     examples:[{en:'Have you ever been to Paris?', ro:'/hæv juː ˈɛvər biːn tə ˈpærɪs/', tr:'Hiç Paris\'e gittin mi?'}]}
  ],

  tones: [],

  grammar: [
    {id:'g1', title:'Geniş Zaman — Present Simple', title_en:'Present Simple',
     explanation:'Alışkanlık, genel gerçek, program ve sıklık ifadeleri için kullanılır. 3. tekil (he/she/it) için fiile -s/-es eklenir.',
     table:[
       {pronoun:'Olumlu', form:'V / V+s', example:'I work. / She works.', tr:'Çalışırım. / O çalışır.'},
       {pronoun:'Olumsuz', form:"don't / doesn't", example:"We don't smoke.", tr:'Sigara içmeyiz.'},
       {pronoun:'Soru', form:'Do/Does + V?', example:'Do you speak English?', tr:'İngilizce konuşur musun?'},
       {pronoun:'Sıklık', form:'always, usually, often', example:'He usually gets up at seven.', tr:'Genellikle yedide kalkar.'}
     ],
     note:'go → goes, watch → watches, study → studies (he/she/it)'},
    {id:'g2', title:'Şimdiki Zaman — Present Continuous', title_en:'Present Continuous',
     explanation:'Şu anda devam eden, geçici veya yakın gelecekte planlanmış eylemler için. am/is/are + fiil-ing',
     table:[
       {pronoun:'Olumlu', form:'am/is/are + V-ing', example:'I am learning English.', tr:'İngilizce öğreniyorum.'},
       {pronoun:'Olumsuz', form:"am not / isn't / aren't", example:"She isn't listening.", tr:'Dinlemiyor.'},
       {pronoun:'Soru', form:'Am/Is/Are + S + V-ing?', example:'Are you waiting for me?', tr:'Beni mi bekliyorsun?'},
       {pronoun:'İşaret', form:'now, at the moment', example:'Look! It is raining.', tr:'Bak! Yağmur yağıyor.'}
     ],
     note:'write → writing, run → running, lie → lying'},
    {id:'g3', title:'Geçmiş Zaman — Past Simple', title_en:'Past Simple',
     explanation:'Geçmişte tamamlanmış, belirli zamanda olan eylemler. Düzenli fiiller: -ed; düzensiz fiiller: 2. hal (went, saw, had).',
     table:[
       {pronoun:'Olumlu', form:'V2 / V-ed', example:'I visited my parents yesterday.', tr:'Dün ailemi ziyaret ettim.'},
       {pronoun:'Olumsuz', form:"didn't + V", example:"He didn't call me.", tr:'Beni aramadı.'},
       {pronoun:'Soru', form:'Did + S + V?', example:'Did you enjoy the film?', tr:'Filmi beğendin mi?'},
       {pronoun:'İşaret', form:'yesterday, last..., ...ago', example:'She left two hours ago.', tr:'İki saat önce gitti.'}
     ],
     note:'did kullanıldığında asıl fiil yalın kalır: Did you go? (not Did you went?)'},
    {id:'g4', title:'Geçmişte Devam — Past Continuous', title_en:'Past Continuous',
     explanation:'Geçmişte belirli bir anda devam eden eylem. was/were + fiil-ing. Sıkça Past Simple ile birlikte (while, when).',
     table:[
       {pronoun:'Olumlu', form:'was/were + V-ing', example:'I was sleeping at midnight.', tr:'Gece yarısı uyuyordum.'},
       {pronoun:'Olumsuz', form:"wasn't / weren't", example:"They weren't working.", tr:'Çalışmıyorlardı.'},
       {pronoun:'Soru', form:'Was/Were + S + V-ing?', example:'Were you watching TV?', tr:'Televizyon mu izliyordun?'},
       {pronoun:'Birlikte', form:'when / while', example:'I was cooking when he arrived.', tr:'O geldiğinde yemek yapıyordum.'}
     ],
     note:'Uzun eylem: Past Continuous; kısa kesen eylem: Past Simple'},
    {id:'g5', title:'Yakın Geçmiş — Present Perfect', title_en:'Present Perfect',
     explanation:'Geçmişte başlayıp şimdiye bağlantısı olan eylemler. have/has + V3 (past participle). since/for, already, yet, just, ever.',
     table:[
       {pronoun:'Olumlu', form:'have/has + V3', example:'I have finished the report.', tr:'Raporu bitirdim.'},
       {pronoun:'Olumsuz', form:"haven't / hasn't", example:"She hasn't arrived yet.", tr:'Henüz gelmedi.'},
       {pronoun:'Soru', form:'Have/Has + S + V3?', example:'Have you ever tried sushi?', tr:'Hiç suşi denedin mi?'},
       {pronoun:'Süre', form:'since + nokta / for + süre', example:'I have lived here for three years.', tr:'Üç yıldır burada yaşıyorum.'}
     ],
     note:'go-went-gone, see-saw-seen, do-did-done — düzensiz fiillerin 3. halini ezberle'},
    {id:'g6', title:'Gelecek Zaman — Future', title_en:'Future (will / going to)',
     explanation:'will: anlık karar, tahmin, söz. going to: önceden plan, belirgin kanıta dayalı tahmin.',
     table:[
       {pronoun:'will', form:'will + V', example:"I'll call you later.", tr:'Seni sonra ararım.'},
       {pronoun:'going to', form:'am/is/are going to + V', example:'We are going to move house.', tr:'Ev taşıyacağız.'},
       {pronoun:'Olumsuz', form:"won't / not going to", example:"It won't take long.", tr:'Uzun sürmez.'},
       {pronoun:'Soru', form:'Will...? / Are...going to?', example:'Will you help me?', tr:'Bana yardım eder misin?'},
       {pronoun:'İşaret', form:'tomorrow, next week', example:'The meeting is going to start soon.', tr:'Toplantı yakında başlayacak.'}
     ],
     note:'Present Continuous de yakın gelecek planı için: I am meeting him at 5.'}
  ],

  speaking: [
    {id:'sp1', en:'I usually wake up at seven, but today I am staying in bed.', ro:'/aɪ ˈjuːʒuəli weɪk ʌp æt ˈsɛvən bʌt təˈdeɪ aɪ æm ˈsteɪɪŋ ɪn bɛd/', tr:'Genellikle yedide uyanırım ama bugün yatakta kalıyorum.',
     tip:'Present Simple + Present Continuous karşılaştırması.', prompt:'Alışkanlığınızı ve bugünkü durumunuzu söyleyin'},
    {id:'sp2', en:'Yesterday I worked until late. I was very tired.', ro:'/ˈjɛstərdeɪ aɪ wɜːrkt ənˈtɪl leɪt aɪ wɒz ˈvɛri taɪərd/', tr:'Dün geç saate kadar çalıştım. Çok yorgundum.',
     tip:'Past Simple örnek cümle.', prompt:'Dün ne yaptığınızı anlatın'},
    {id:'sp3', en:'While I was cooking, my friend called me.', ro:'/waɪl aɪ wɒz ˈkʊkɪŋ maɪ frɛnd kɔːld miː/', tr:'Yemek yaparken arkadaşım beni aradı.',
     tip:'Past Continuous + Past Simple.', prompt:'İki eylemi when/while ile birleştirin'},
    {id:'sp4', en:'I have already eaten, but I haven\'t drunk my coffee yet.', ro:'/aɪ hæv ɔːlˈrɛdi ˈiːtən bʌt aɪ ˈhævnt drʌŋk maɪ ˈkɒfi jɛt/', tr:'Çoktan yemek yedim ama kahvemi henüz içmedim.',
     tip:'Present Perfect: already ve yet.', prompt:'Bugün neler yaptığınızı already/yet ile söyleyin'},
    {id:'sp5', en:'I am going to study English every day. I will take the exam next year.', ro:'/aɪ æm ˈɡoʊɪŋ tə ˈstʌdi ˈɪŋɡlɪʃ ˈɛvri deɪ aɪ wɪl teɪk ði ɪɡˈzæm nɛkst jɪər/', tr:'Her gün İngilizce çalışacağım. Gelecek yıl sınava gireceğim.',
     tip:'going to (plan) + will (gelecek).', prompt:'Gelecek planlarınızı anlatın'},
    {id:'sp6', en:'Have you ever been abroad? — Yes, I have visited three countries.', ro:'/hæv juː ˈɛvər biːn əˈbrɔːd jɛs aɪ hæv ˈvɪzɪtɪd θriː ˈkʌntriz/', tr:'Hiç yurt dışına gittin mi? — Evet, üç ülke gezdim.',
     tip:'Present Perfect deneyim sorusu.', prompt:'Have you ever...? sorusu sorun ve cevaplayın'}
  ],

  dialogues: [
    {id:'d1', title:'Bir Günün Hikayesi', title_en:'A Day in Different Tenses',
     lines:[
       {speaker:'A', gender:'f', en:'Hi! How are you today?', ro:'/haɪ haʊ ɑːr juː təˈdeɪ/', tr:'Selam! Bugün nasılsın?'},
       {speaker:'B', gender:'m', en:'I am fine, thanks. I am preparing for an exam right now.', ro:'/aɪ æm faɪn θæŋks aɪ æm prɪˈpɛərɪŋ fər ən ɪɡˈzæm raɪt naʊ/', tr:'İyiyim, teşekkürler. Şu an bir sınava hazırlanıyorum.'},
       {speaker:'A', gender:'f', en:'Oh really? What did you do yesterday?', ro:'/oʊ ˈrɪəli wɒt dɪd juː duː ˈjɛstərdeɪ/', tr:'Öyle mi? Dün ne yaptın?'},
       {speaker:'B', gender:'m', en:'I studied all day. While I was reading, my phone rang.', ro:'/aɪ ˈstʌdid ɔːl deɪ waɪl aɪ wɒz ˈriːdɪŋ maɪ foʊn ræŋ/', tr:'Bütün gün çalıştım. Okurken telefonum çaldı.'},
       {speaker:'A', gender:'f', en:'Have you finished the first chapter yet?', ro:'/hæv juː ˈfɪnɪʃt ðə fɜːrst ˈtʃæptər jɛt/', tr:'İlk bölümü henüz bitirdin mi?'},
       {speaker:'B', gender:'m', en:'Yes, I have already finished it. I have studied for two weeks.', ro:'/jɛs aɪ hæv ɔːlˈrɛdi ˈfɪnɪʃt ɪt aɪ hæv ˈstʌdid fər tuː wiːks/', tr:'Evet, çoktan bitirdim. İki haftadır çalışıyorum.'},
       {speaker:'A', gender:'f', en:'Great! Are you going to take the exam next month?', ro:'/ɡreɪt ɑːr juː ˈɡoʊɪŋ tə teɪk ði ɪɡˈzæm nɛkst mʌnθ/', tr:'Harika! Gelecek ay sınava girecek misin?'},
       {speaker:'B', gender:'m', en:'Yes, I am going to take it on the fifteenth. I will call you after the exam.', ro:'/jɛs aɪ æm ˈɡoʊɪŋ tə teɪk ɪt ɒn ðə ˌfɪfˈtiːnθ aɪ wɪl kɔːl juː ˈɑːftər ði ɪɡˈzæm/', tr:'Evet, on beşinde gireceğim. Sınavdan sonra seni ararım.'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:"Every morning I get up at six thirty. Right now I am sitting on the train. Yesterday I missed the train because I woke up late. I have taken this route for two years. Next week I am going to start a new job, so I will leave earlier.",
     tr:'Her sabah altı buçukta kalkarım. Şu an trende oturuyorum. Dün geç kalktığım için trene yetişemedim. İki yıldır bu güzergahı kullanıyorum. Gelecek hafta yeni bir işe başlayacağım, bu yüzden daha erken çıkacağım.',
     questions:[
       {q:'What time does the speaker usually get up?', opts:['6:00','6:30','7:00','7:30'], answer:1, tr:'Konuşmacı genellikle saat kaçta kalkar?'},
       {q:'Why did he miss the train yesterday?', opts:['he was ill','he woke up late','the train was early','he forgot his ticket'], answer:1, tr:'Dün neden trene yetişemedi?'},
       {q:'What is he going to do next week?', opts:['travel abroad','start a new job','move house','take an exam'], answer:1, tr:'Gelecek hafta ne yapacak?'},
       {q:'Which tense: "I have taken this route for two years"?', opts:['Past Simple','Present Perfect','Future','Present Continuous'], answer:1, tr:'Hangi zaman: "I have taken this route for two years"?'}
     ]}
  ]
};
LESSONS[2] = L2;
