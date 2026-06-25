// ders1.js — English Lesson 1: Greetings & Introductions (beginner)
const L1 = {
  words: [
    {id:'w1', en:'Hello', ro:'/həˈloʊ/', tr:'Merhaba',
     tip:'En yaygın selamlama.', ctx:'Her ortamda kullanılır.',
     examples:[{en:'Hello!', tr:'Merhaba!'}]},
    {id:'w2', en:'Hi', ro:'/haɪ/', tr:'Selam',
     tip:'Kısa ve samimi selamlama.', ctx:'Arkadaşlar arasında.',
     examples:[{en:'Hi!', tr:'Selam!'}]},
    {id:'w3', en:'Good morning', ro:'/ɡʊd ˈmɔːrnɪŋ/', tr:'Günaydın',
     tip:'Sabah selamlaması.', ctx:'Öğlene kadar.',
     examples:[{en:'Good morning.', tr:'Günaydın.'}]},
    {id:'w4', en:'Goodbye', ro:'/ɡʊdˈbaɪ/', tr:'Hoşça kal',
     tip:'Vedalaşma.', ctx:'Ayrılırken.',
     examples:[{en:'Goodbye!', tr:'Hoşça kal!'}]},
    {id:'w5', en:'Bye', ro:'/baɪ/', tr:'Güle güle',
     tip:'Kısa veda.', ctx:'Samimi ortam.',
     examples:[{en:'Bye!', tr:'Güle güle!'}]},
    {id:'w6', en:'Thank you', ro:'/θæŋk juː/', tr:'Teşekkür ederim',
     tip:'Minnet ifadesi.', ctx:'Her yerde.',
     examples:[{en:'Thank you.', tr:'Teşekkür ederim.'}]},
    {id:'w7', en:'Please', ro:'/pliːz/', tr:'Lütfen',
     tip:'Nezaket kelimesi.', ctx:'İstek yaparken.',
     examples:[{en:'Please.', tr:'Lütfen.'}]},
    {id:'w8', en:'Yes', ro:'/jɛs/', tr:'Evet',
     examples:[{en:'Yes.', tr:'Evet.'}]},
    {id:'w9', en:'No', ro:'/noʊ/', tr:'Hayır',
     examples:[{en:'No.', tr:'Hayır.'}]},
    {id:'w10', en:'My name is...', ro:'/maɪ neɪm ɪz/', tr:'Benim adım...',
     tip:'Kendini tanıtma.', ctx:'İlk tanışmada.',
     examples:[{en:'My name is Ali.', tr:'Benim adım Ali.',
       bd:[{ro:'My name is',tr:'Benim adım',role:'S'},{ro:'Ali',tr:'Ali',role:'O'}]}]},
    {id:'w11', en:'Nice to meet you', ro:'/naɪs tə miːt juː/', tr:'Tanıştığıma memnun oldum',
     tip:'Tanışma ifadesi.', ctx:'Yeni biriyle tanışınca.',
     examples:[{en:'Nice to meet you.', tr:'Tanıştığıma memnun oldum.',
       bd:[{ro:'Nice to meet you',tr:'Memnun oldum',role:'phrase'}]}]},
    {id:'w12', en:'How are you?', ro:'/haʊ ɑːr juː/', tr:'Nasılsın?',
     tip:'Hal hatır sorusu.', ctx:'Selamdan sonra.',
     examples:[{en:'How are you?', tr:'Nasılsın?',
       bd:[{ro:'How are you',tr:'Nasılsın',role:'S'},{ro:'?',tr:'?',role:'?'}]}]},
    {id:'w13', en:"I'm fine", ro:'/aɪm faɪn/', tr:'İyiyim',
     tip:'Standart cevap.', ctx:'How are you? sorusuna.',
     examples:[{en:"I'm fine.", tr:'İyiyim.',
       bd:[{ro:"I'm",tr:'Ben',role:'S'},{ro:'fine',tr:'iyiyim',role:'V'}]}]},
    {id:'w14', en:'What is your name?', ro:'/wɒt ɪz jɔːr neɪm/', tr:'Adın ne?',
     tip:'İsim sorma.', ctx:'Tanışırken.',
     examples:[{en:'What is your name?', tr:'Adın ne?',
       bd:[{ro:'What',tr:'Ne',role:'S'},{ro:'is your name',tr:'senin adın',role:'V'}]}]}
  ],

  grammar: [
    {id:'g1', title:'İlk Adımlar — Selamlaşma', title_en:'First Steps — Greetings',
     explanation:'İngilizce öğrenmeye tek kelimelerle başla. Önce dinle, sonra tekrar et. Cümle kurmadan önce bu kelimeleri ezberle.',
     table:[
       {pronoun:'Selam', form:'Hello / Hi', example:'Hello!', tr:'Merhaba!'},
       {pronoun:'Sabah', form:'Good morning', example:'Good morning.', tr:'Günaydın.'},
       {pronoun:'Veda', form:'Goodbye / Bye', example:'Bye!', tr:'Güle güle!'},
       {pronoun:'Nezaket', form:'Please / Thank you', example:'Thank you.', tr:'Teşekkürler.'}
     ],
     note:'Önce tek kelime, sonra iki kelimelik ifadeler. Acele etme.'},
    {id:'g2', title:'To Be — am / is / are', title_en:'To Be — am / is / are',
     explanation:'Kendini tanıtırken "I am" kullanırsın. Soru sorarken kelime sırası değişir.',
     table:[
       {pronoun:'Ben', form:'I am', example:'I am Ali.', tr:'Ben Ali\'yim.'},
       {pronoun:'Sen / Siz', form:'You are', example:'You are kind.', tr:'Naziksin.'},
       {pronoun:'O', form:'He/She is', example:'She is Sara.', tr:'O Sara.'},
       {pronoun:'Soru', form:'Am I...?', example:'What is your name?', tr:'Adın ne?'}
     ],
     note:'Kısaltmalar: I\'m, you\'re, he\'s, she\'s'}
  ],

  speaking: [
    {id:'sp1', en:'Hello!', tr:'Merhaba!', prompt:'Selamla'},
    {id:'sp2', en:'Good morning.', tr:'Günaydın.', prompt:'Sabah selamı söyle'},
    {id:'sp3', en:'My name is ...', tr:'Benim adım ...', prompt:'Adını söyle'},
    {id:'sp4', en:'Nice to meet you.', tr:'Tanıştığıma memnun oldum.', prompt:'Tanışma ifadesi'},
    {id:'sp5', en:'Thank you. Goodbye!', tr:'Teşekkürler. Hoşça kal!', prompt:'Teşekkür et ve vedalaş'}
  ],

  dialogues: [
    {id:'d1', title:'İlk Tanışma', title_en:'First Meeting',
     lines:[
       {speaker:'A', gender:'m', en:'Hello!', tr:'Merhaba!',
        bd:[{ro:'Hello',tr:'Merhaba',role:'greeting'}]},
       {speaker:'B', gender:'f', en:'Hi!', tr:'Selam!',
        bd:[{ro:'Hi',tr:'Selam',role:'greeting'}]},
       {speaker:'A', gender:'m', en:'My name is Tom.', tr:'Benim adım Tom.',
        bd:[{ro:'My name is',tr:'Benim adım',role:'S'},{ro:'Tom',tr:'Tom',role:'O'}]},
       {speaker:'B', gender:'f', en:'Nice to meet you, Tom.', tr:'Tanıştığıma memnun oldum, Tom.',
        bd:[{ro:'Nice to meet you',tr:'Memnun oldum',role:'phrase'},{ro:'Tom',tr:'Tom',role:'O'}]},
       {speaker:'A', gender:'m', en:'Nice to meet you too. Goodbye!', tr:'Ben de memnun oldum. Hoşça kal!',
        bd:[{ro:'Nice to meet you too',tr:'Ben de memnun oldum',role:'phrase'},{ro:'Goodbye',tr:'Hoşça kal',role:'farewell'}]},
       {speaker:'B', gender:'f', en:'Bye!', tr:'Güle güle!',
        bd:[{ro:'Bye',tr:'Güle güle',role:'farewell'}]}
     ]},
    {id:'d2', title:'Hal Hatır', title_en:'How Are You',
     lines:[
       {speaker:'A', gender:'f', en:'Good morning!', tr:'Günaydın!',
        bd:[{ro:'Good morning',tr:'Günaydın',role:'greeting'}]},
       {speaker:'B', gender:'m', en:'Good morning!', tr:'Günaydın!',
        bd:[{ro:'Good morning',tr:'Günaydın',role:'greeting'}]},
       {speaker:'A', gender:'f', en:'How are you?', tr:'Nasılsın?',
        bd:[{ro:'How are you',tr:'Nasılsın',role:'S'}]},
       {speaker:'B', gender:'m', en:"I'm fine, thank you.", tr:'İyiyim, teşekkür ederim.',
        bd:[{ro:"I'm fine",tr:'İyiyim',role:'V'},{ro:'thank you',tr:'teşekkürler',role:'courtesy'}]},
       {speaker:'A', gender:'f', en:'Goodbye!', tr:'Hoşça kal!',
        bd:[{ro:'Goodbye',tr:'Hoşça kal',role:'farewell'}]}
     ]}
  ],

  listening: [
    {id:'li1', audio:'', transcript:'Hello! My name is Emma. Nice to meet you!',
     tr:'Merhaba! Benim adım Emma. Tanıştığıma memnun oldum!',
     questions:[
       {q:'What is her name?', opts:['Emma','Tom','Sara','Ali'], answer:0, tr:'Adı ne?'},
       {q:'Which greeting does she use?', opts:['Goodbye','Hello','Good night','Please'], answer:1, tr:'Hangi selamı kullanıyor?'}
     ]}
  ]
};
LESSONS[1] = L1;
