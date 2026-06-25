// ders1.js — English Lesson 1: Greetings & Introductions
const L1 = {
  words: [
    {id:'w1', en:'Hello', ro:'/həˈloʊ/', tr:'Merhaba',
     tip:'En yaygın İngilizce selamlama.', ctx:'Her ortamda kullanılabilir.',
     examples:[
       {en:'Hello, how are you?', ro:'/həˈloʊ haʊ ɑːr juː/', tr:'Merhaba, nasılsın?',
        bd:[{ro:'Hello',tr:'Merhaba',role:'greeting'},{ro:'how',tr:'nasıl',role:'question'},{ro:'are you',tr:'sın',role:'verb'}]}
     ]},
    {id:'w2', en:'Hi', ro:'/haɪ/', tr:'Selam',
     tip:'Samimi ve kısa selamlama.', ctx:'Arkadaşlar arasında kullanılır.',
     examples:[
       {en:'Hi there!', ro:'/haɪ ðɛr/', tr:'Selam sana!',
        bd:[{ro:'Hi',tr:'Selam',role:'greeting'},{ro:'there',tr:'(pekiştirme)',role:'filler'}]}
     ]},
    {id:'w3', en:'Good morning', ro:'/ɡʊd ˈmɔːrnɪŋ/', tr:'Günaydın',
     tip:'Sabah selamlama ifadesi.', ctx:'Sabah 12\'ye kadar kullanılır.',
     examples:[
       {en:'Good morning, everyone!', ro:'/ɡʊd ˈmɔːrnɪŋ ˈɛvriwʌn/', tr:'Günaydın, herkese!',
        bd:[{ro:'Good morning',tr:'Günaydın',role:'greeting'},{ro:'everyone',tr:'herkes',role:'subject'}]}
     ]},
    {id:'w4', en:'Good afternoon', ro:'/ɡʊd ˌæftərˈnuːn/', tr:'İyi günler (öğleden sonra)',
     tip:'Öğleden sonra selamlama.', ctx:'12:00-18:00 arası kullanılır.',
     examples:[
       {en:'Good afternoon, sir.', ro:'/ɡʊd ˌæftərˈnuːn sɜːr/', tr:'İyi günler, efendim.',
        bd:[{ro:'Good afternoon',tr:'İyi günler',role:'greeting'},{ro:'sir',tr:'efendim',role:'honorific'}]}
     ]},
    {id:'w5', en:'Good evening', ro:'/ɡʊd ˈiːvnɪŋ/', tr:'İyi akşamlar',
     tip:'Akşam selamlama ifadesi.', ctx:'18:00\'dan sonra kullanılır.',
     examples:[
       {en:'Good evening! Welcome.', ro:'/ɡʊd ˈiːvnɪŋ ˈwɛlkəm/', tr:'İyi akşamlar! Hoş geldiniz.',
        bd:[{ro:'Good evening',tr:'İyi akşamlar',role:'greeting'},{ro:'Welcome',tr:'Hoş geldiniz',role:'welcome'}]}
     ]},
    {id:'w6', en:'Good night', ro:'/ɡʊd naɪt/', tr:'İyi geceler',
     tip:'Geceye girerken ya da ayrılırken söylenir.', ctx:'Genellikle vedalaşırken.',
     examples:[
       {en:'Good night, sleep well.', ro:'/ɡʊd naɪt sliːp wɛl/', tr:'İyi geceler, iyi uyu.',
        bd:[{ro:'Good night',tr:'İyi geceler',role:'farewell'},{ro:'sleep well',tr:'iyi uyu',role:'wish'}]}
     ]},
    {id:'w7', en:'Goodbye', ro:'/ɡʊdˈbaɪ/', tr:'Hoşça kal / Güle güle',
     tip:'Vedalaşma ifadesi.', ctx:'Resmi ve samimi ortamlarda kullanılır.',
     examples:[
       {en:'Goodbye, see you tomorrow.', ro:'/ɡʊdˈbaɪ siː juː təˈmɒroʊ/', tr:'Hoşça kal, yarın görüşürüz.',
        bd:[{ro:'Goodbye',tr:'Hoşça kal',role:'farewell'},{ro:'see you',tr:'görüşürüz',role:'phrase'},{ro:'tomorrow',tr:'yarın',role:'time'}]}
     ]},
    {id:'w8', en:'Bye', ro:'/baɪ/', tr:'Güle güle / Bay bay',
     tip:'Kısa ve samimi veda.', ctx:'Arkadaşlar ve tanıdıklar arasında.',
     examples:[
       {en:'Bye! Take care.', ro:'/baɪ teɪk kɛr/', tr:'Bay bay! Kendine iyi bak.',
        bd:[{ro:'Bye',tr:'Bay bay',role:'farewell'},{ro:'Take care',tr:'Kendine iyi bak',role:'wish'}]}
     ]},
    {id:'w9', en:'My name is...', ro:'/maɪ neɪm ɪz/', tr:'Benim adım...',
     tip:'Kendini tanıtırken kullanılır.', ctx:'Tanışma anında ilk cümle.',
     examples:[
       {en:'My name is Ali. Nice to meet you.', ro:'/maɪ neɪm ɪz æli naɪs tə miːt juː/', tr:'Benim adım Ali. Tanıştığıma memnun oldum.',
        bd:[{ro:'My name is',tr:'Benim adım',role:'intro'},{ro:'Nice to meet you',tr:'Tanıştığıma memnun oldum',role:'phrase'}]}
     ]},
    {id:'w10', en:'What is your name?', ro:'/wɒt ɪz jɔːr neɪm/', tr:'Adın ne?',
     tip:'Birinin adını sormak için kullanılır.', ctx:'Tanışma konuşmalarında.',
     examples:[
       {en:'Hello! What is your name?', ro:'/həˈloʊ wɒt ɪz jɔːr neɪm/', tr:'Merhaba! Adın ne?',
        bd:[{ro:'What',tr:'Ne',role:'question'},{ro:'is',tr:'(yardımcı fiil)',role:'verb'},{ro:'your name',tr:'senin adın',role:'subject'}]}
     ]},
    {id:'w11', en:'How are you?', ro:'/haʊ ɑːr juː/', tr:'Nasılsın?',
     tip:'Hal hatır sormak için kullanılır.', ctx:'Selamlaşmanın hemen ardından.',
     examples:[
       {en:'Hi! How are you today?', ro:'/haɪ haʊ ɑːr juː təˈdeɪ/', tr:'Selam! Bugün nasılsın?',
        bd:[{ro:'How',tr:'Nasıl',role:'question'},{ro:'are you',tr:'sın',role:'verb'},{ro:'today',tr:'bugün',role:'time'}]}
     ]},
    {id:'w12', en:"I'm fine, thank you.", ro:'/aɪm faɪn θæŋk juː/', tr:'İyiyim, teşekkür ederim.',
     tip:'How are you sorusunun standart cevabı.', ctx:'Günlük konuşmalarda.',
     examples:[
       {en:"I'm fine, thank you. And you?", ro:'/aɪm faɪn θæŋk juː ænd juː/', tr:'İyiyim, teşekkür ederim. Ya sen?',
        bd:[{ro:"I'm fine",tr:'İyiyim',role:'answer'},{ro:'thank you',tr:'teşekkür ederim',role:'courtesy'},{ro:'And you',tr:'Ya sen',role:'question'}]}
     ]},
    {id:'w13', en:'Nice to meet you.', ro:'/naɪs tə miːt juː/', tr:'Tanıştığıma memnun oldum.',
     tip:'Biriyle ilk kez tanışırken söylenir.', ctx:'Tanışma sırasında.',
     examples:[
       {en:'Nice to meet you, I am Sara.', ro:'/naɪs tə miːt juː aɪ æm særə/', tr:'Tanıştığıma memnun oldum, ben Sara.',
        bd:[{ro:'Nice to meet you',tr:'Memnun oldum',role:'phrase'},{ro:'I am',tr:'Ben (ım)',role:'intro'}]}
     ]},
    {id:'w14', en:'Where are you from?', ro:'/wɛr ɑːr juː frɒm/', tr:'Nerelisin?',
     tip:'Birinin nereli olduğunu sormak için.', ctx:'Tanışma konuşmalarında.',
     examples:[
       {en:'Where are you from? I am from Turkey.', ro:'/wɛr ɑːr juː frɒm aɪ æm frɒm ˈtɜːrki/', tr:'Nerelisin? Ben Türkiye\'denim.',
        bd:[{ro:'Where',tr:'Nere',role:'question'},{ro:'are you from',tr:'lisin',role:'verb'},{ro:'I am from Turkey',tr:'Türkiye\'denim',role:'answer'}]}
     ]},
    {id:'w15', en:'Please', ro:'/pliːz/', tr:'Lütfen',
     tip:'Rica veya nezaket ifadesi.', ctx:'İstek yaparken.',
     examples:[
       {en:'Can you help me, please?', ro:'/kæn juː hɛlp miː pliːz/', tr:'Bana yardım edebilir misin, lütfen?',
        bd:[{ro:'Can you',tr:'Yapabilir misin',role:'modal'},{ro:'help me',tr:'bana yardım et',role:'verb'},{ro:'please',tr:'lütfen',role:'courtesy'}]}
     ]},
    {id:'w16', en:'Thank you', ro:'/θæŋk juː/', tr:'Teşekkür ederim',
     tip:'Minnettarlık ifadesi.', ctx:'Her ortamda kullanılır.',
     examples:[
       {en:'Thank you very much!', ro:'/θæŋk juː ˈvɛri mʌtʃ/', tr:'Çok teşekkür ederim!',
        bd:[{ro:'Thank you',tr:'Teşekkür ederim',role:'courtesy'},{ro:'very much',tr:'çok',role:'intensifier'}]}
     ]},
    {id:'w17', en:"You're welcome", ro:'/jɔːr ˈwɛlkəm/', tr:'Rica ederim',
     tip:'Teşekküre karşı verilen cevap.', ctx:'"Thank you" dedikten sonra.',
     examples:[
       {en:"You're welcome! Happy to help.", ro:'/jɔːr ˈwɛlkəm hæpi tə hɛlp/', tr:'Rica ederim! Yardımcı olmaktan memnunum.',
        bd:[{ro:"You're welcome",tr:'Rica ederim',role:'response'},{ro:'Happy to help',tr:'Yardımcı olmaktan memnun',role:'phrase'}]}
     ]},
    {id:'w18', en:'Excuse me', ro:'/ɪkˈskjuːz miː/', tr:'Pardon / Afedersiniz',
     tip:'Dikkat çekmek veya özür dilemek için.', ctx:'Birine çarptığında veya soru sormak istediğinde.',
     examples:[
       {en:'Excuse me, where is the bathroom?', ro:'/ɪkˈskjuːz miː wɛr ɪz ðə ˈbæθruːm/', tr:'Pardon, tuvalet nerede?',
        bd:[{ro:'Excuse me',tr:'Pardon',role:'courtesy'},{ro:'where is',tr:'nerede',role:'question'},{ro:'the bathroom',tr:'tuvalet',role:'noun'}]}
     ]},
    {id:'w19', en:'I do not understand.', ro:'/aɪ duː nɒt ˌʌndərˈstænd/', tr:'Anlamıyorum.',
     tip:'Anlamamak için kullanılır.', ctx:'Dil öğrenme sürecinde çok işe yarar.',
     examples:[
       {en:'Sorry, I do not understand. Can you repeat?', ro:'/ˈsɒri aɪ duː nɒt ˌʌndərˈstænd kæn juː rɪˈpiːt/', tr:'Özür dilerim, anlamıyorum. Tekrar edebilir misin?',
        bd:[{ro:'I do not understand',tr:'Anlamıyorum',role:'verb'},{ro:'Can you repeat',tr:'Tekrarlayabilir misin',role:'request'}]}
     ]},
    {id:'w20', en:'Yes / No', ro:'/jɛs / noʊ/', tr:'Evet / Hayır',
     tip:'En temel onay ve ret kelimeleri.', ctx:'Her türlü soru cevabında.',
     examples:[
       {en:'Yes, I understand. No, I do not.', ro:'/jɛs aɪ ˌʌndərˈstænd noʊ aɪ duː nɒt/', tr:'Evet, anlıyorum. Hayır, anlamıyorum.',
        bd:[{ro:'Yes',tr:'Evet',role:'affirmative'},{ro:'I understand',tr:'anlıyorum',role:'verb'},{ro:'No',tr:'Hayır',role:'negative'}]}
     ]}
  ],

  tones: [
    {id:'p1', en:'Vowel Sounds', ro:'Ünlü Sesler', tr:'Ünlü harflerin telaffuzu',
     tip:'İngilizce\'de 5 ünlü harf 15+ farklı ses çıkarır.',
     sounds:[
       {symbol:'/æ/', example:'cat, hat, man', tr:'kısa "a" sesi — "kat" değil "kæt"'},
       {symbol:'/ɑː/', example:'car, far, hard', tr:'uzun "a" sesi — boğazdan'},
       {symbol:'/ɪ/', example:'sit, hit, bit', tr:'kısa "i" sesi'},
       {symbol:'/iː/', example:'see, tree, need', tr:'uzun "i" sesi'},
       {symbol:'/ʌ/', example:'cup, sun, run', tr:'kısa belirsiz "a/ö" sesi'},
       {symbol:'/uː/', example:'food, moon, blue', tr:'uzun "u" sesi'}
     ]},
    {id:'p2', en:'Consonant Sounds', ro:'Ünsüz Sesler', tr:'Türkçe\'de olmayan ünsüzler',
     tip:'th, w, v sesleri Türkçe\'de yok!',
     sounds:[
       {symbol:'/θ/', example:'think, three, bath', tr:'"th" sesi — dil üst dişlerin altına'},
       {symbol:'/ð/', example:'the, this, that', tr:'"th" yumuşak — "dh" gibi'},
       {symbol:'/w/', example:'water, win, way', tr:'"w" sesi — dudakları yuvarla'},
       {symbol:'/v/', example:'very, love, have', tr:'"v" sesi — üst diş alt dudak'},
       {symbol:'/r/', example:'red, run, car', tr:'"r" sesi — Türkçe r\'den farklı, yumuşak'}
     ]}
  ],

  grammar: [
    {id:'g1', title:'To Be — am/is/are', title_en:'To Be Verb',
     explanation:'İngilizce\'de "to be" fiili 3 şekilde kullanılır: I am, you/we/they are, he/she/it is.',
     table:[
       {pronoun:'I', form:'am', example:'I am Ali.', tr:'Ben Ali\'yim.'},
       {pronoun:'You', form:'are', example:'You are kind.', tr:'Sen naziksin.'},
       {pronoun:'He/She/It', form:'is', example:'She is here.', tr:'O burada.'},
       {pronoun:'We/They', form:'are', example:'They are friends.', tr:'Onlar arkadaş.'}
     ],
     note:'Kısaltmalar: I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re'},
    {id:'g2', title:'Soru Cümlesi — Am/Is/Are?', title_en:'Yes/No Questions',
     explanation:'"To be" ile soru yapmak için fiili öne alırsın.',
     table:[
       {pronoun:'Am I?', form:'', example:'Am I late?', tr:'Geç mi kaldım?'},
       {pronoun:'Are you?', form:'', example:'Are you ready?', tr:'Hazır mısın?'},
       {pronoun:'Is he/she?', form:'', example:'Is she happy?', tr:'O mutlu mu?'},
       {pronoun:'Are they?', form:'', example:'Are they here?', tr:'Onlar burada mı?'}
     ],
     note:'Cevap: Yes, I am. / No, I\'m not.'}
  ],

  speaking: [
    {id:'sp1', en:'Hello! My name is...', ro:'/həˈloʊ maɪ neɪm ɪz/', tr:'Merhaba! Benim adım...',
     tip:'Tanışma konuşmasının ilk cümlesi.',
     prompt:'Kendinizi tanıtın'},
    {id:'sp2', en:"Nice to meet you. I'm from Turkey.", ro:'/naɪs tə miːt juː aɪm frɒm ˈtɜːrki/', tr:'Tanıştığıma memnun oldum. Türkiye\'denim.',
     tip:'Tanışma sonrası doğal devam.',
     prompt:'Kendinizi tanıtmaya devam edin'},
    {id:'sp3', en:"How are you? I'm fine, thank you.", ro:'/haʊ ɑːr juː aɪm faɪn θæŋk juː/', tr:'Nasılsın? İyiyim, teşekkür ederim.',
     tip:'Hal hatır sorma ve cevap verme.',
     prompt:'Hal hatır sorun ve cevap verin'},
    {id:'sp4', en:'Excuse me, what is your name?', ro:'/ɪkˈskjuːz miː wɒt ɪz jɔːr neɪm/', tr:'Pardon, adınız ne?',
     tip:'Nazikçe soru sorma.',
     prompt:'Nazik bir soru sorun'},
    {id:'sp5', en:'Goodbye! See you tomorrow.', ro:'/ɡʊdˈbaɪ siː juː təˈmɒroʊ/', tr:'Hoşça kal! Yarın görüşürüz.',
     tip:'Vedalaşma cümlesi.',
     prompt:'Vedalaşın'}
  ],

  dialogues: [
    {id:'d1', title:'Tanışma Konuşması', title_en:'Meeting Someone New',
     lines:[
       {speaker:'A', gender:'m', en:'Hello! My name is Tom. What is your name?', ro:'/həˈloʊ maɪ neɪm ɪz tɒm wɒt ɪz jɔːr neɪm/', tr:'Merhaba! Benim adım Tom. Adın ne?'},
       {speaker:'B', gender:'f', en:"Hi Tom! I'm Sara. Nice to meet you.", ro:'/haɪ tɒm aɪm særə naɪs tə miːt juː/', tr:'Selam Tom! Ben Sara. Tanıştığıma memnun oldum.'},
       {speaker:'A', gender:'m', en:'Nice to meet you too, Sara. Where are you from?', ro:'/naɪs tə miːt juː tuː særə wɛr ɑːr juː frɒm/', tr:'Ben de memnun oldum, Sara. Nerelisin?'},
       {speaker:'B', gender:'f', en:"I'm from Turkey. And you?", ro:'/aɪm frɒm ˈtɜːrki ænd juː/', tr:'Türkiye\'denim. Ya sen?'},
       {speaker:'A', gender:'m', en:"I'm from England. How are you today?", ro:'/aɪm frɒm ˈɪŋɡlənd haʊ ɑːr juː təˈdeɪ/', tr:'İngiltere\'denim. Bugün nasılsın?'},
       {speaker:'B', gender:'f', en:"I'm fine, thank you! And you?", ro:'/aɪm faɪn θæŋk juː ænd juː/', tr:'İyiyim, teşekkür ederim! Ya sen?'},
       {speaker:'A', gender:'m', en:"I'm great, thanks. Goodbye Sara!", ro:'/aɪm ɡreɪt θæŋks ɡʊdˈbaɪ særə/', tr:'Harikayım, sağ ol. Hoşça kal Sara!'},
       {speaker:'B', gender:'f', en:'Bye Tom! Nice to meet you.', ro:'/baɪ tɒm naɪs tə miːt juː/', tr:'Güle güle Tom! Tanıştığıma memnun oldum.'}
     ]},
    {id:'d2', title:'Sınıfta Tanışma', title_en:'Meeting in Class',
     lines:[
       {speaker:'A', gender:'f', en:'Excuse me, is this seat free?', ro:'/ɪkˈskjuːz miː ɪz ðɪs siːt friː/', tr:'Pardon, bu koltuk boş mu?'},
       {speaker:'B', gender:'m', en:'Yes, please sit down. I am Ali.', ro:'/jɛs pliːz sɪt daʊn aɪ æm æli/', tr:'Evet, lütfen oturun. Ben Ali.'},
       {speaker:'A', gender:'f', en:"Thank you! I'm Ayse. Nice to meet you.", ro:'/θæŋk juː aɪm ajʃe naɪs tə miːt juː/', tr:'Teşekkür ederim! Ben Ayşe. Tanıştığıma memnun oldum.'},
       {speaker:'B', gender:'m', en:'Nice to meet you too! Are you a student here?', ro:'/naɪs tə miːt juː tuː ɑːr juː ə ˈstjuːdənt hɪr/', tr:'Ben de memnun oldum! Burada öğrenci misin?'},
       {speaker:'A', gender:'f', en:'Yes, I am. I study English. And you?', ro:'/jɛs aɪ æm aɪ ˈstʌdi ˈɪŋɡlɪʃ ænd juː/', tr:'Evet. İngilizce çalışıyorum. Ya sen?'},
       {speaker:'B', gender:'m', en:'Me too! This is great. Welcome!', ro:'/miː tuː ðɪs ɪz ɡreɪt ˈwɛlkəm/', tr:'Ben de! Harika. Hoş geldin!'}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:'Hello! My name is Emma. I am from London, England. I am twenty-five years old. Nice to meet you!',
     tr:'Merhaba! Benim adım Emma. Londra, İngiltere\'denim. Yirmi beş yaşındayım. Tanıştığıma memnun oldum!',
     questions:[
       {q:'What is her name?', opts:['Emma','Sara','Anna','Lisa'], answer:0, tr:'Adı ne?'},
       {q:'Where is she from?', opts:['Paris','New York','London','Berlin'], answer:2, tr:'Nerelidir?'},
       {q:'How old is she?', opts:['20','25','30','35'], answer:1, tr:'Kaç yaşında?'}
     ]}
  ]
};
LESSONS[1] = L1;
