PX.add({
id:"mikro", name:"Mikroiqtisodiyot", short:"Mikro", code:"MIEC13C6", teacher:"Bekmurodova F.A., PhD", credits:"6 ECTS",
note:"Fanning chizmalari ko'p — har mavzuga konspekt talab qilinadi. Og'zaki nazoratlarda grafik va formulalar bilan to'liq javob kutiladi.",
controls:[
 {k:"JN-1",week:3,ball:5,form:"Test",topics:[1,2,3],desc:"1–3 mavzular bo'yicha dars jarayonida test."},
 {k:"JN-2",week:6,ball:5,form:"Yozma",topics:[2,3,4,5,6],desc:"Grafik chizish, tahlil va masalalar — 1 ta variant."},
 {k:"ON-1",week:7,ball:15,form:"Og'zaki",topics:[1,2,3,4,5,6],desc:"Tayyorgarliksiz savol: grafiklar va formulalar bilan to'liq javob."},
 {k:"JN-3",week:10,ball:5,form:"Guruh loyihasi",topics:[7,8,9],desc:"Kichik guruhda 1 kompaniyani 7–9 mavzular doirasida tahlil qilish, taqdimot (Moodle)."},
 {k:"JN-4",week:13,ball:5,form:"Yozma",topics:[7,8,9,10,11,12,13],desc:"Grafiklar, tahlil va masalalar — 1 ta variant."},
 {k:"ON-2",week:14,ball:15,form:"Og'zaki",topics:[7,8,9,10,11,12,13,14],desc:"Har talabaga 3 ta savol, tayyorgarliksiz."},
 {k:"YN",week:16,ball:40,form:"Test yoki yozma",topics:"all",desc:"Barcha mavzular, asosiy va qo'shimcha adabiyotlar bo'yicha."}
],
topics:[
{t:"Mikroiqtisodiyotga kirish. Iqtisodiy tizimlar",sub:"Predmet va usullar, noyoblik, IICHE, iqtisodiy tizimlar, naflilik",
th:`<p><b>Mikroiqtisodiyot</b> alohida iqtisodiy agentlar — uy xo'jaliklari, firmalar va alohida bozorlar xulqini o'rganadi. Asosiy muammo — <b>noyoblik</b>: ehtiyojlar cheksiz, resurslar (yer, mehnat, kapital, tadbirkorlik) cheklangan.</p>
<ul><li><b>Muqobil xarajat</b> — tanlov qilishda voz kechilgan eng yaxshi muqobilning qiymati.</li>
<li><b>Ishlab chiqarish imkoniyatlari egri chizig'i (IICHE)</b> — resurslardan to'liq foydalanilganda maksimal mahsulot kombinatsiyalari. Egri ustidagi nuqta — samarali, ichidagi — samarasiz, tashqaridagi — erishib bo'lmaydi. Botiqligi — muqobil xarajatlar o'sib borishi qonuni.</li>
<li><b>Pozitiv tahlil</b> "nima bor"ni, <b>normativ tahlil</b> "nima bo'lishi kerak"ni tasvirlaydi.</li>
<li>Iqtisodiy tizimlar: <b>an'anaviy</b> (urf-odat), <b>ma'muriy-buyruqbozlik</b> (davlat rejasi), <b>bozor</b> (xususiy mulk, narx mexanizmi), <b>aralash</b>.</li>
<li><b>Naflilik</b> — iste'moldan olinadigan qoniqish. Kardinal (miqdoriy) yondashuv uni o'lchaydi, ordinal (tartibli) yondashuv faqat afzallik tartibini solishtiradi.</li></ul>`,
q:[
["Mikroiqtisodiyot asosan nimani o'rganadi?",["Alohida iqtisodiy agentlar va bozorlar xulqini","Milliy iqtisodiyotni yaxlit holda","Inflyatsiya va ishsizlik darajasini","Davlat byudjeti tuzilishini"],0,"Makroiqtisodiyot yaxlit iqtisodiyotni, mikroiqtisodiyot esa iste'molchi, firma va alohida bozorni o'rganadi."],
["Noyoblik (cheklanganlik) muammosining mohiyati nimada?",["Ehtiyojlar cheksiz, resurslar esa cheklangan","Aholida pul yetishmaydi","Bozorda tovarlar ortiqcha","Narxlar doimiy o'sadi"],0,"Aynan shu nomuvofiqlik har bir agentni tanlov qilishga majbur qiladi."],
["IICHE dan tashqaridagi nuqta nimani bildiradi?",["Mavjud resurs va texnologiya bilan erishib bo'lmaydigan kombinatsiya","Resurslardan samarasiz foydalanish","Samarali ishlab chiqarish","Ishsizlik mavjudligi"],0,"Tashqaridagi nuqtaga faqat resurslar ko'payganda yoki texnologiya yaxshilanganda (egri siljiganda) erishiladi."],
["IICHE ichidagi nuqta nimani ko'rsatadi?",["Resurslardan to'liq foydalanilmayotganini","Erishib bo'lmaydigan holatni","Maksimal samaradorlikni","Texnologik taraqqiyotni"],0,"Ichki nuqtada hech narsadan voz kechmasdan ikkala tovarni ham ko'paytirish mumkin — demak samarasizlik bor."],
["IICHE ning koordinata boshiga nisbatan botiq (tashqariga qavariq) shakli nimaga bog'liq?",["Muqobil xarajatlarning o'sib borishiga","Talab qonuniga","Pul massasining o'sishiga","Narxlarning barqarorligiga"],0,"Resurslar bir xil darajada mos emas, shuning uchun har bir qo'shimcha birlik uchun ko'proq voz kechish kerak bo'ladi."],
["Resurslar asosan davlat rejasi asosida taqsimlanadigan tizim qanday ataladi?",["Ma'muriy-buyruqbozlik tizimi","Bozor tizimi","An'anaviy tizim","Aralash tizim"],0,"Buyruqbozlik tizimida nima, qancha va kim uchun ishlab chiqarishni markaziy reja belgilaydi."],
["\"Minimal ish haqini oshirish kerak\" degan fikr qanday tasdiq?",["Normativ","Pozitiv","Empirik qonun","Matematik model"],0,"\"Kerak\" — qadriyat va baholashga asoslangan normativ fikr belgisi."],
["Ordinal (tartibli) naflilik yondashuvining mohiyati:",["Naflilik son bilan emas, afzallik tartibi bilan solishtiriladi","Naflilik util birligida aniq o'lchanadi","Naflilik narxga teng","Naflilik faqat pul bilan ifodalanadi"],0,"Ordinal yondashuvda iste'molchi faqat \"A to'plam B dan afzal\" deya oladi — befarqlik egri chiziqlari shunga asoslanadi."]
],
o:[
["Iqtisodiy tizim turlarini tavsiflang va farqini tushuntiring.",["An'anaviy — urf-odat va an'analar asosida","Buyruqbozlik — davlat mulki va markaziy reja","Bozor — xususiy mulk, raqobat, narx mexanizmi","Aralash — bozor mexanizmi + davlat tartibga solishi","Har biri \"nima, qanday, kim uchun\" savoliga qanday javob beradi"]],
["IICHE yordamida noyoblik va muqobil xarajatni tushuntiring.",["Grafik: ikki tovar o'qlari, botiq egri chiziq","Egri ustida, ichida va tashqarisidagi nuqtalar ma'nosi","Muqobil xarajat — egri qiyaligi","Muqobil xarajatlar o'sib borishi qonuni","Iqtisodiy o'sish — egrining tashqariga siljishi"]]
]},
{t:"Iste'mol nazariyasi",sub:"Befarqlik egri chizig'i, MRS, byudjet chizig'i, optimal tanlov",
th:`<p>Iste'molchi cheklangan daromad bilan naflilikni maksimallashtiradi.</p>
<ul><li><b>Befarqlik egri chizig'i</b> — bir xil naflilik beradigan tovar to'plamlari. Xususiyatlari: pastga og'gan, koordinata boshiga qavariq, kesishmaydi, uzoqroq egri — yuqoriroq naflilik.</li>
<li><b>MRS</b> (me'yoriy almashtirish normasi) — Y tovardan qanchasidan voz kechib, X ning qo'shimcha birligini olishga rozi: MRS = −ΔY/ΔX = MU<sub>X</sub>/MU<sub>Y</sub>. Egri bo'ylab pasayib boradi.</li>
<li>Maxsus holatlar: mukammal o'rinbosarlar — to'g'ri chiziq; mukammal to'ldiruvchilar — L shakli.</li>
<li><b>Byudjet chizig'i</b>: P<sub>X</sub>·X + P<sub>Y</sub>·Y = I. Qiyaligi −P<sub>X</sub>/P<sub>Y</sub>. Daromad o'zgarsa — parallel siljiydi; bitta narx o'zgarsa — buriladi.</li>
<li><b>Optimum</b> — byudjet chizig'i eng yuqori befarqlik egrisiga urinadigan nuqta: MRS = P<sub>X</sub>/P<sub>Y</sub>, ya'ni MU<sub>X</sub>/P<sub>X</sub> = MU<sub>Y</sub>/P<sub>Y</sub>.</li></ul>`,
q:[
["Befarqlik egri chizig'i nimani ifodalaydi?",["Iste'molchiga bir xil naflilik beradigan tovar to'plamlarini","Bir xil xarajat talab qiladigan to'plamlarni","Narx va talab miqdori bog'liqligini","Firmaning ishlab chiqarish imkoniyatlarini"],0,"Egri ustidagi har qanday to'plam iste'molchi uchun teng qiymatli."],
["Nima uchun ikki befarqlik egri chizig'i kesisha olmaydi?",["Afzalliklarning tranzitivligi va \"ko'p — yaxshi\" aksiomasiga zid bo'lgani uchun","Narxlar har xil bo'lgani uchun","Daromad cheklangani uchun","Ular doim parallel bo'lgani uchun"],0,"Kesishsa, bitta nuqta ikki xil naflilik darajasiga tegishli bo'lib qoladi — bu mantiqiy ziddiyat."],
["MRS<sub>XY</sub> nimaga teng?",["MU<sub>X</sub> / MU<sub>Y</sub>","P<sub>Y</sub> / P<sub>X</sub>","MU<sub>Y</sub> − MU<sub>X</sub>","I / P<sub>X</sub>"],0,"MRS = −ΔY/ΔX = MU<sub>X</sub>/MU<sub>Y</sub> — befarqlik egrisining qiyaligi."],
["Byudjet chizig'ining qiyaligi nimaga teng (X gorizontal o'qda)?",["−P<sub>X</sub> / P<sub>Y</sub>","−P<sub>Y</sub> / P<sub>X</sub>","I / P<sub>Y</sub>","MU<sub>X</sub> / MU<sub>Y</sub>"],0,"P<sub>X</sub>X + P<sub>Y</sub>Y = I dan Y = I/P<sub>Y</sub> − (P<sub>X</sub>/P<sub>Y</sub>)X."],
["Narxlar o'zgarmay, iste'molchi daromadi oshsa, byudjet chizig'i:",["Parallel ravishda o'ngga siljiydi","Qiyaligi oshadi","Chapga buriladi","O'zgarmaydi"],0,"Qiyalik faqat narxlar nisbatiga bog'liq; daromad faqat chiziq holatini siljitadi."],
["Iste'molchi muvozanati (optimum) sharti:",["MRS = P<sub>X</sub> / P<sub>Y</sub>","MU<sub>X</sub> = MU<sub>Y</sub>","P<sub>X</sub> = P<sub>Y</sub>","TU = 0"],0,"Optimumda befarqlik egrisi byudjet chizig'iga urinadi — qiyaliklar teng."],
["I = 100 so'm, P<sub>X</sub> = 5, P<sub>Y</sub> = 10. Byudjet chizig'i X o'qini qaysi nuqtada kesadi? (X miqdori)",null,"20","Butun daromad X ga sarflansa: X = I/P<sub>X</sub> = 100/5 = 20."],
["Mukammal to'ldiruvchi tovarlarning befarqlik egri chizig'i qanday ko'rinishda?",["L harfi shaklida (to'g'ri burchak)","Pastga og'gan to'g'ri chiziq","Vertikal chiziq","Koordinata boshidan chiqqan nur"],0,"Masalan, chap va o'ng poyabzal: faqat birini ko'paytirish naflilikni oshirmaydi."]
],
o:[
["Iste'molchi muvozanatini grafik yordamida tushuntiring.",["Befarqlik egri chiziqlari xaritasi","Byudjet chizig'i va uning tenglamasi","Urinish nuqtasi — optimum","Shart: MRS = Px/Py yoki MUx/Px = MUy/Py","Narx yoki daromad o'zgarsa optimum qanday siljiydi"]],
["Befarqlik egri chiziqlarining xususiyatlari va maxsus turlarini ayting.",["Pastga og'gan","Koordinata boshiga qavariq (MRS kamayadi)","Kesishmaydi","Uzoqroq egri — yuqori naflilik","O'rinbosarlar — to'g'ri chiziq, to'ldiruvchilar — L shakl"]]
]},
{t:"Individual va bozor talabi",sub:"Individual va bozor talabi, narx va narxsiz omillar, daromad va almashtirish samarasi",
th:`<ul><li><b>Bozor talabi</b> — barcha individual talablarning har bir narxdagi <b>gorizontal yig'indisi</b>.</li>
<li>Tovarning o'z narxi o'zgarsa — talab egri chizig'i <b>bo'ylab harakat</b>. Narxsiz omillar (daromad, did, o'rinbosar va to'ldiruvchilar narxi, kutishlar, xaridorlar soni) — egri chiziqning <b>siljishi</b>.</li>
<li>Narx o'zgarishining umumiy ta'siri = <b>almashtirish samarasi</b> (nisbatan arzonlashgan tovarga o'tish, doim narxga teskari) + <b>daromad samarasi</b> (real daromad o'zgarishi).</li>
<li>Normal tovarda ikkala samara bir yo'nalishda. Inferior tovarda daromad samarasi teskari. <b>Giffen tovari</b> — daromad samarasi almashtirish samarasidan kuchli bo'lgan inferior tovar: narx oshsa, talab oshadi.</li>
<li><b>Muvozanat</b>: Q<sub>d</sub> = Q<sub>s</sub>. Narx yuqori bo'lsa — ortiqcha taklif, past bo'lsa — taqchillik.</li></ul>`,
q:[
["Bozor talabi individual talablardan qanday hosil bo'ladi?",["Har bir narxda talab miqdorlari gorizontal qo'shiladi","Narxlar vertikal qo'shiladi","Eng katta individual talab olinadi","O'rtacha talab olinadi"],0,"Har bir narxda barcha xaridorlarning miqdorlari yig'iladi — gorizontal yig'indi."],
["Tovarning o'z narxi pasayganda nima sodir bo'ladi?",["Talab egri chizig'i bo'ylab pastga harakat","Talab egri chizig'i o'ngga siljiydi","Talab egri chizig'i chapga siljiydi","Taklif egri chizig'i siljiydi"],0,"O'z narxi — egri bo'ylab harakat; boshqa omillar — siljish."],
["Normal tovar uchun iste'molchilar daromadi oshsa:",["Talab egri chizig'i o'ngga siljiydi","Talab egri chizig'i chapga siljiydi","Talab miqdori kamayadi","Narx avtomatik pasayadi"],0,"Normal tovarda daromad va talab bir yo'nalishda o'zgaradi."],
["Almashtirish samarasi nimani bildiradi?",["Iste'molchi nisbatan arzonlashgan tovarga o'tadi","Real daromad o'zgarishi iste'molga ta'sir qiladi","Daromad oshsa talab oshadi","Narx o'zgarmasa ham talab o'zgaradi"],0,"Almashtirish samarasi har doim narx o'zgarishiga teskari yo'nalishda ta'sir qiladi."],
["Giffen tovarining o'ziga xosligi:",["Narx oshganda talab miqdori ham oshadi","Daromad oshganda talab oshadi","Narx o'zgarsa talab o'zgarmaydi","U hashamatli tovar hisoblanadi"],0,"Giffen — juda kuchli daromad samarasiga ega inferior tovar (masalan, kambag'al oila uchun asosiy oziq-ovqat)."],
["Q<sub>d</sub> = 100 − 2P va Q<sub>s</sub> = 20 + 2P. Muvozanat narxini toping.",null,"20","100 − 2P = 20 + 2P → 4P = 80 → P = 20 (Q = 60)."],
["Talab o'zgarmay, taklif kamaysa, muvozanatda nima bo'ladi?",["Narx oshadi, miqdor kamayadi","Narx pasayadi, miqdor oshadi","Narx va miqdor oshadi","Narx va miqdor pasayadi"],0,"Taklif chapga siljiydi — yangi muvozanat talab egrisi bo'ylab yuqoriga ko'chadi."],
["Choy narxi oshdi. Uning o'rinbosari — qahva talabi:",["O'ngga siljiydi","Chapga siljiydi","Egri bo'ylab yuqoriga harakatlanadi","O'zgarmaydi"],0,"O'rinbosar qimmatlashsa, xaridorlar qahvaga o'tadi — har bir narxda talab ko'proq."]
],
o:[
["Daromad va almashtirish samarasini normal, inferior va Giffen tovarlari misolida tushuntiring.",["Umumiy samara = almashtirish + daromad samarasi","Almashtirish samarasi doim narxga teskari","Normal tovar: ikkala samara bir yo'nalishda","Inferior: daromad samarasi teskari, lekin kuchsiz","Giffen: daromad samarasi ustun — talab egrisi yuqoriga og'gan"]],
["Talab va taklifning bir vaqtda siljishi muvozanatga qanday ta'sir qiladi?",["Ikkalasi o'ngga: miqdor oshadi, narx noaniq","Talab o'ngga, taklif chapga: narx oshadi, miqdor noaniq","Natija siljishlar kattaligiga bog'liq","Grafik bilan ko'rsatish"]]
]},
{t:"Elastiklik va uning amaliy qo'llanilishi",sub:"Narx, daromad, kross elastiklik; nuqtaviy va yoysimon; tushum; taklif elastikligi",
th:`<p><b>Elastiklik</b> — bir ko'rsatkich 1% o'zgarganda boshqasi necha foiz o'zgarishi. E<sub>d</sub> = %ΔQ / %ΔP.</p>
<ul><li>|E<sub>d</sub>| &gt; 1 — elastik; &lt; 1 — noelastik; = 1 — birlik elastik; 0 — mutlaq noelastik (vertikal egri); ∞ — mutlaq elastik (gorizontal egri).</li>
<li><b>Yoysimon</b>: E = (ΔQ/Q̄)/(ΔP/P̄), Q̄ va P̄ — o'rtachalar. <b>Nuqtaviy</b>: E = (dQ/dP)·(P/Q).</li>
<li><b>Tushum (TR)</b>: elastik talabda narx pasaysa TR oshadi; noelastikda narx oshsa TR oshadi; |E| = 1 da TR maksimal. Chiziqli talabning yuqori qismi elastik, pastki qismi noelastik.</li>
<li><b>Daromad elastikligi</b>: &gt;1 — hashamatli, 0–1 — zarur, &lt;0 — inferior tovar.</li>
<li><b>Kross elastiklik</b>: &gt;0 — o'rinbosarlar, &lt;0 — to'ldiruvchilar, 0 — bog'liq emas.</li>
<li><b>Taklif elastikligi</b> vaqt o'tishi bilan oshadi. Soliq yuki ko'proq noelastik tomonga tushadi.</li></ul>`,
q:[
["Narx 5% oshganda talab miqdori 15% kamaydi. |E<sub>d</sub>| = ?",null,"3","|E<sub>d</sub>| = 15/5 = 3 — talab elastik."],
["Talab elastik bo'lsa (|E<sub>d</sub>| &gt; 1), narx pasaysa umumiy tushum:",["Oshadi","Kamayadi","O'zgarmaydi","Nolga teng bo'ladi"],0,"Miqdor narxdan kuchliroq o'zgaradi, shuning uchun P×Q oshadi."],
["Mutlaq noelastik talab egri chizig'i qanday ko'rinishda?",["Vertikal chiziq","Gorizontal chiziq","Pastga og'gan to'g'ri chiziq","Giperbola"],0,"Narx qanday bo'lmasin, talab miqdori o'zgarmaydi (masalan, hayotiy dori)."],
["Kross elastiklik manfiy bo'lsa, tovarlar:",["To'ldiruvchilar","O'rinbosarlar","Bog'liq emas","Inferior"],0,"Birining narxi oshsa, ikkinchisiga talab kamayadi (benzin va avtomobil)."],
["Daromad elastikligi 1.8 bo'lgan tovar:",["Hashamatli tovar","Zarur tovar","Inferior tovar","Giffen tovari"],0,"Daromad elastikligi 1 dan katta — daromad o'sishidan tezroq o'sadigan talab."],
["Chiziqli talab egri chizig'ining o'rtasida elastiklik qanday?",["|E| = 1, tushum maksimal","|E| = 0","|E| cheksiz","|E| &gt; 1, tushum minimal"],0,"Yuqori qismi elastik, pastki qismi noelastik, o'rtasida birlik elastiklik va TR maksimumi."],
["Narx 20 → 25, talab 50 → 40. Yoysimon usulda |E<sub>d</sub>| = ?",null,"1","ΔQ/Q̄ = 10/45 ≈ 0.222; ΔP/P̄ = 5/22.5 ≈ 0.222 → |E| = 1."],
["Talab noelastik, taklif elastik tovarga aksiz solindi. Soliq yukini asosan kim ko'taradi?",["Xaridorlar","Sotuvchilar","Teng taqsimlanadi","Davlat"],0,"Yuk \"qochib keta olmaydigan\" — kamroq elastik tomonga tushadi."]
],
o:[
["Talab elastikligi umumiy tushumga qanday ta'sir qiladi?",["TR = P × Q","Elastik: P va TR teskari yo'nalishda","Noelastik: P va TR bir yo'nalishda","Birlik elastik: TR maksimal, o'zgarmaydi","Chiziqli talab va TR egri chizig'i grafigi"]],
["Elastiklik turlari va hisoblash usullarini ayting.",["Narx, daromad, kross elastiklik, taklif elastikligi","Yoysimon formula — o'rtachalar bilan","Nuqtaviy formula — hosila orqali","Elastik/noelastik/birlik/mutlaq holatlar","Amaliy misollar: soliq, narx siyosati"]]
]},
{t:"Ishlab chiqarish va texnologiya",sub:"Ishlab chiqarish funksiyasi, AP va MP, kamayib boruvchi qaytim, izokvanta, izokosta, miqyos samarasi",
th:`<ul><li><b>Ishlab chiqarish funksiyasi</b>: Q = f(L, K) — resurslar va maksimal mahsulot bog'liqligi.</li>
<li>Qisqa muddat — kamida bitta omil (odatda kapital) doimiy. <b>AP<sub>L</sub></b> = TP/L, <b>MP<sub>L</sub></b> = ΔTP/ΔL. MP chizig'i AP ni uning maksimumida kesib o'tadi.</li>
<li><b>Kamayib boruvchi qaytim qonuni</b>: bitta omil ko'paytirilib, boshqalari o'zgarmasa, ma'lum nuqtadan keyin MP kamayadi.</li>
<li>Uzoq muddat — barcha omillar o'zgaruvchan. <b>Izokvanta</b> — bir xil mahsulot beradigan L va K kombinatsiyalari. <b>MRTS</b> = MP<sub>L</sub>/MP<sub>K</sub> — izokvanta qiyaligi.</li>
<li><b>Izokosta</b>: wL + rK = TC — bir xil xarajatli kombinatsiyalar, qiyaligi −w/r.</li>
<li><b>Ishlab chiqaruvchi muvozanati</b>: MRTS = w/r, ya'ni MP<sub>L</sub>/w = MP<sub>K</sub>/r.</li>
<li><b>Miqyos samarasi</b>: barcha resurslar 2 marta oshganda mahsulot &gt;2 marta — o'suvchi, =2 — doimiy, &lt;2 — kamayuvchi.</li></ul>`,
q:[
["Ishchilar soni 4 dan 5 ga oshganda umumiy mahsulot 60 dan 70 ga oshdi. MP<sub>L</sub> = ?",null,"10","MP = ΔTP/ΔL = (70 − 60)/(5 − 4) = 10."],
["Kamayib boruvchi qaytim qonuni qachon amal qiladi?",["Bitta omil ko'paytirilib, qolganlari doimiy bo'lganda","Barcha omillar teng ko'paytirilganda","Narxlar oshganda","Texnologiya yaxshilanganda"],0,"Bu qisqa muddatli davr qonuni: doimiy omilga to'g'ri keladigan o'zgaruvchan omil ulushi oshib boradi."],
["MP<sub>L</sub> chizig'i AP<sub>L</sub> chizig'ini qaysi nuqtada kesib o'tadi?",["AP ning maksimumida","AP ning minimumida","MP ning maksimumida","TP nolga teng bo'lganda"],0,"MP &gt; AP bo'lsa AP o'sadi, MP &lt; AP bo'lsa kamayadi — kesishuv AP cho'qqisida."],
["Izokvanta nimani ifodalaydi?",["Bir xil mahsulot hajmini beradigan resurslar kombinatsiyalarini","Bir xil xarajatli kombinatsiyalarni","Bir xil naflilikni","Narx va miqdor bog'liqligini"],0,"Izo — teng, kvanta — miqdor."],
["MRTS<sub>LK</sub> nimaga teng?",["MP<sub>L</sub> / MP<sub>K</sub>","w / r","MP<sub>K</sub> / MP<sub>L</sub>","TP / L"],0,"Kapitalni mehnat bilan almashtirishning texnologik normasi — izokvanta qiyaligi."],
["Izokosta chizig'i nimani ko'rsatadi?",["Bir xil umumiy xarajat talab qiladigan resurslar kombinatsiyalarini","Bir xil mahsulot hajmini","Firma foydasini","Mehnat unumdorligini"],0,"wL + rK = TC — firmaning \"byudjet chizig'i\"."],
["Ishlab chiqaruvchining optimal nuqtasi sharti:",["MP<sub>L</sub>/w = MP<sub>K</sub>/r","MP<sub>L</sub> = MP<sub>K</sub>","w = r","AP = MP"],0,"Har bir so'mga to'g'ri keladigan me'yoriy mahsulot teng bo'lishi kerak; grafikda izokvanta izokostaga urinadi."],
["Barcha resurslar 2 marta oshirilganda mahsulot 2.5 marta oshdi. Bu:",["O'suvchi miqyos samarasi","Doimiy miqyos samarasi","Kamayuvchi miqyos samarasi","Kamayib boruvchi qaytim"],0,"Mahsulot resurslardan tezroq o'sdi — miqyos samarasi o'suvchi."]
],
o:[
["Qisqa muddatda TP, AP va MP egri chiziqlari qanday bog'langan?",["TP ning uch bosqichi","MP maksimumi — TP burilish nuqtasi","MP = AP — AP maksimumida","MP = 0 — TP maksimumida","Kamayib boruvchi qaytim qonuni"]],
["Ishlab chiqaruvchi muvozanatini izokvanta va izokosta bilan tushuntiring.",["Izokvanta xaritasi va MRTS","Izokosta tenglamasi, qiyaligi −w/r","Urinish nuqtasi: MRTS = w/r","Resurs narxi o'zgarsa izokosta buriladi","Kengayish yo'li"]]
]},
{t:"Firmaning ishlab chiqarish xarajatlari va foydasi",sub:"Oshkor va yashirin xarajatlar, iqtisodiy va buxgalteriya foydasi, FC, VC, MC, ATC",
th:`<ul><li><b>Tashqi (oshkor)</b> xarajatlar — boshqalarga to'lovlar. <b>Ichki (yashirin)</b> — firmaning o'z resurslari muqobil qiymati (egasining ish haqi, o'z kapitali bo'yicha boy berilgan foiz).</li>
<li><b>Buxgalteriya foydasi</b> = TR − oshkor xarajatlar. <b>Iqtisodiy foyda</b> = TR − (oshkor + yashirin). Nol iqtisodiy foyda — normal foyda.</li>
<li>Qisqa muddat: TC = FC + VC. FC — hajmga bog'liq emas (ijara), VC — bog'liq (xomashyo).</li>
<li>ATC = TC/Q, AVC = VC/Q, AFC = FC/Q (hajm oshgan sari doim kamayadi), MC = ΔTC/ΔQ.</li>
<li>MC egri chizig'i AVC va ATC ni ularning <b>minimumida</b> kesib o'tadi.</li>
<li>Uzoq muddat: LRAC — qisqa muddatli ATC lar o'ramasi. Miqyos samarasi o'suvchi bo'lsa LRAC pasayadi, kamayuvchi bo'lsa oshadi.</li></ul>`,
q:[
["Ichki (yashirin) xarajat nima?",["Firma egasining o'z resurslari muqobil qiymati","Yetkazib beruvchilarga to'lov","Bank krediti foizi","Ishchilar ish haqi"],0,"Masalan, egasi boshqa joyda ishlasa oladigan maoshi — buxgalteriyada ko'rinmaydi."],
["TR = 100, oshkor xarajatlar = 60, yashirin xarajatlar = 30. Iqtisodiy foyda = ?",null,"10","100 − (60 + 30) = 10. Buxgalteriya foydasi esa 40."],
["Hajm oshgan sari o'rtacha doimiy xarajat (AFC):",["Doim kamayadi","Doim oshadi","Avval kamayib, keyin oshadi","O'zgarmaydi"],0,"Doimiy xarajat ko'proq birlikka taqsimlanadi."],
["MC egri chizig'i ATC egri chizig'ini qayerda kesadi?",["ATC ning minimumida","ATC ning maksimumida","MC ning minimumida","Q = 0 da"],0,"MC &lt; ATC bo'lsa ATC tushadi, MC &gt; ATC bo'lsa ko'tariladi."],
["TC = 200 + 10Q + Q². Q = 10 bo'lganda ATC = ?",null,"40","TC = 200 + 100 + 100 = 400; ATC = 400/10 = 40."],
["Quyidagilardan qaysi biri qisqa muddatli doimiy xarajat?",["Bino ijarasi","Xomashyo","Ishbay ish haqi","Qadoqlash materiali"],0,"Ijara ishlab chiqarish hajmidan qat'i nazar to'lanadi."],
["Iqtisodiy foyda nolga teng bo'lsa, firma:",["Normal foyda oladi","Zarar ko'radi","Yopilishi kerak","Monopol foyda oladi"],0,"Barcha muqobil xarajatlar qoplangan — resurslar boshqa joyda ham shuncha topar edi."],
["Kamayuvchi miqyos samarasi sharoitida LRAC:",["Hajm oshgan sari oshadi","Hajm oshgan sari kamayadi","O'zgarmaydi","Nolga tushadi"],0,"Katta firmada boshqaruv murakkablashadi — birlik xarajati oshadi."]
],
o:[
["Iqtisodiy va buxgalteriya xarajatlari va foydasining farqini tushuntiring.",["Oshkor va yashirin xarajatlar","Buxgalteriya foydasi = TR − oshkor","Iqtisodiy foyda = TR − oshkor − yashirin","Normal foyda tushunchasi","Raqamli misol"]],
["Qisqa muddatli xarajat egri chiziqlarini chizing va bog'liqligini tushuntiring.",["FC gorizontal, VC va TC o'suvchi","AFC doim pasayadi","AVC va ATC U shaklida","MC ularni minimumda kesadi","ATC va AVC orasidagi masofa = AFC"]]
]},
{t:"Raqobatli bozorda firmaning xatti-harakati",sub:"Mukammal raqobat, P = MR, qisqa va uzoq muddat muvozanati, yopilish nuqtasi",
th:`<ul><li>Mukammal raqobat shartlari: ko'p sotuvchi va xaridor, bir xil mahsulot, bozorga erkin kirish-chiqish, to'liq axborot. Firma <b>narxni qabul qiluvchi</b>.</li>
<li>Firma talab egri chizig'i gorizontal: <b>P = MR = AR</b>.</li>
<li>Foydani maksimallashtirish: <b>MR = MC</b> (ya'ni P = MC).</li>
<li>Qisqa muddat: P &gt; ATC — iqtisodiy foyda; AVC &lt; P &lt; ATC — zarar, lekin ishlashda davom etadi; <b>P &lt; AVC<sub>min</sub></b> — yopilish.</li>
<li>Qisqa muddatli taklif egri chizig'i — MC ning AVC<sub>min</sub> dan yuqori qismi.</li>
<li>Uzoq muddat: kirish-chiqish tufayli <b>P = MC = ATC<sub>min</sub></b>, iqtisodiy foyda nol. Ham allokativ (P = MC), ham ishlab chiqarish (ATC min) samaradorligi.</li></ul>`,
q:[
["Mukammal raqobatda firma talab egri chizig'i qanday?",["Gorizontal, P = MR","Pastga og'gan","Vertikal","Yuqoriga og'gan"],0,"Firma bozor narxida xohlagancha sota oladi, narxga ta'sir qilmaydi."],
["Raqobatli firma qisqa muddatda qachon ishlab chiqarishni to'xtatadi?",["P &lt; AVC<sub>min</sub>","P &lt; ATC<sub>min</sub>","P = MC","MR = MC"],0,"Narx o'zgaruvchan xarajatni ham qoplamasa, ishlash yopilgandan ko'ra ko'proq zarar beradi."],
["P = 20, Q = 100, ATC = 15. Firma iqtisodiy foydasi = ?",null,"500","(P − ATC) × Q = (20 − 15) × 100 = 500."],
["Raqobatli firmaning qisqa muddatli taklif egri chizig'i:",["MC ning AVC<sub>min</sub> dan yuqori qismi","ATC egri chizig'i","Talab egri chizig'i","MR chizig'i"],0,"Har bir narxda firma P = MC bo'lgan miqdorni taklif qiladi."],
["Uzoq muddatda raqobatli firma iqtisodiy foydasi:",["Nolga teng","Doim musbat","Doim manfiy","Maksimal"],0,"Foyda bo'lsa yangi firmalar kiradi, narx tushadi — foyda nolgacha qisqaradi."],
["Uzoq muddatli muvozanatda raqobatli firma uchun qaysi shart bajariladi?",["P = MC = ATC<sub>min</sub>","P &gt; ATC","MR &gt; MC","P &lt; AVC"],0,"Bu ham allokativ, ham ishlab chiqarish samaradorligini bildiradi."],
["Quyidagilardan qaysi biri mukammal raqobat sharti EMAS?",["Bozorga kirish to'siqlari yuqori","Ko'p sotuvchilar","Bir xil mahsulot","To'liq axborot"],0,"Mukammal raqobatda kirish va chiqish erkin."],
["AVC &lt; P &lt; ATC bo'lsa, qisqa muddatda firma:",["Zarar bilan ishlashda davom etadi","Darhol yopiladi","Iqtisodiy foyda oladi","Narxni oshiradi"],0,"Narx o'zgaruvchan xarajatni va doimiy xarajatning bir qismini qoplaydi — yopilishdan ko'ra zarar kamroq."]
],
o:[
["Raqobatli firmaning qisqa muddatli muvozanatining uch holatini grafik bilan tushuntiring.",["MR = MC qoidasi, P = MR","Foyda holati: P &gt; ATC","Zarar, lekin ishlash: AVC &lt; P &lt; ATC","Yopilish nuqtasi: P = AVC min","Taklif egrisi — MC ning bir qismi"]],
["Uzoq muddatda raqobat bozori qanday muvozanatga keladi?",["Erkin kirish-chiqish","Foyda → kirish → narx pasayadi","Zarar → chiqish → narx oshadi","P = MC = min ATC","Samaradorlik turlari"]]
]},
{t:"Monopol firmaning xatti-harakati",sub:"Kirish to'siqlari, MR < P, monopol narx, samaradorlik yo'qotishi, Lerner va HHI, narx diskriminatsiyasi",
th:`<ul><li><b>Monopoliya</b> — o'rinbosarsiz mahsulotning yagona sotuvchisi. To'siqlar: resurs nazorati, patent va litsenziya, miqyos samarasi (tabiiy monopoliya), davlat.</li>
<li>Monopolist talab egri chizig'i — bozor talabi (pastga og'gan). <b>MR &lt; P</b>; chiziqli talabda MR qiyaligi ikki marta tik.</li>
<li>Foyda maksimumi: <b>MR = MC</b>, narx esa talab egrisidan olinadi (P &gt; MC). Monopolist faqat talabning elastik qismida ishlaydi.</li>
<li>Raqobatga nisbatan kamroq miqdor va yuqoriroq narx — <b>o'lik yuk yo'qotishi</b> (deadweight loss).</li>
<li><b>Lerner indeksi</b>: L = (P − MC)/P = 1/|E<sub>d</sub>|. <b>HHI</b> = bozor ulushlari (%) kvadratlari yig'indisi (max 10 000).</li>
<li><b>Monopsoniya</b> — yagona xaridor. <b>Narx diskriminatsiyasi</b>: 1-daraja (har bir xaridorga maksimal narx), 2-daraja (hajmga qarab), 3-daraja (guruhlarga qarab, elastikroq guruhga past narx).</li></ul>`,
q:[
["Monopolist uchun me'yoriy daromad (MR) va narx qanday bog'langan?",["MR &lt; P","MR = P","MR &gt; P","MR har doim nol"],0,"Ko'proq sotish uchun barcha birliklar narxini tushirish kerak — shu sabab MR narxdan past."],
["Monopolist ishlab chiqarish hajmini qaysi shart bo'yicha tanlaydi?",["MR = MC","P = MC","P = ATC","MR = 0"],0,"Hajm MR = MC dan topiladi, narx esa shu hajmda talab egrisidan olinadi."],
["P = 50, MC = 30. Lerner indeksi = ?",null,"0.4","L = (50 − 30)/50 = 0.4."],
["Bozorda 4 firma: ulushlari 40%, 30%, 20%, 10%. HHI = ?",null,"3000","40² + 30² + 20² + 10² = 1600 + 900 + 400 + 100 = 3000."],
["Monopoliyaning jamiyat uchun asosiy samarasizligi:",["O'lik yuk yo'qotishi — kam miqdor va yuqori narx","Haddan ortiq ko'p ishlab chiqarish","Narxlarning juda pastligi","Reklama xarajatlari yo'qligi"],0,"P &gt; MC bo'lgan, lekin ishlab chiqarilmagan birliklar jamiyat uchun yo'qotilgan foyda."],
["Tabiiy monopoliyaning asosiy sababi:",["Katta miqyos samarasi — bitta firma arzonroq ishlab chiqaradi","Davlat litsenziyasi","Reklama","Narx diskriminatsiyasi"],0,"Masalan, elektr tarmoqlari: ikkinchi tarmoqni qurish iqtisodiy jihatdan noo'rin."],
["3-darajali narx diskriminatsiyasida qaysi guruhga pastroq narx belgilanadi?",["Talabi elastikroq guruhga","Talabi noelastik guruhga","Daromadi yuqori guruhga","Barchaga teng narx"],0,"Masalan, talabalar chegirmasi: ular narxga sezgirroq."],
["Monopolist talab egri chizig'ining qaysi qismida ishlaydi?",["Elastik qismida","Noelastik qismida","Birlik elastik nuqtada doim","Ixtiyoriy qismida"],0,"Noelastik qismda MR &lt; 0 — narxni oshirib, kamroq sotish foydaliroq bo'ladi."]
],
o:[
["Monopolist narx va hajmni qanday aniqlaydi? Grafik bilan tushuntiring.",["Talab, MR, MC, ATC egri chiziqlari","MR = MC dan hajm","Narx — talab egrisidan","Foyda to'rtburchagi (P − ATC) × Q","Raqobat bilan solishtirish, o'lik yuk"]],
["Monopol hokimiyat ko'rsatkichlari va narx diskriminatsiyasini tushuntiring.",["Lerner indeksi va elastiklik bilan bog'liqligi","HHI va bozor kontsentratsiyasi","1-, 2-, 3-darajali diskriminatsiya","Diskriminatsiya shartlari (qayta sotish imkonsizligi)","Monopsoniya tushunchasi"]]
]},
{t:"Monopolistik raqobat va oligopoliya",sub:"Mahsulot differensiatsiyasi, uzoq muddat muvozanati, narxsiz raqobat, oligopoliya modellari",
th:`<ul><li><b>Monopolistik raqobat</b>: ko'p firma, <b>differensiatsiyalangan</b> mahsulot, erkin kirish. Talab egri chizig'i pastga og'gan, lekin elastik.</li>
<li>Qisqa muddatda foyda bo'lishi mumkin; uzoq muddatda kirish tufayli <b>P = ATC</b>, iqtisodiy foyda nol, lekin P &gt; MC va ATC minimumdan chapda — <b>ortiqcha quvvat</b>.</li>
<li><b>Narxsiz raqobat</b>: sifat, dizayn, xizmat, joylashuv, <b>reklama</b> (brend sodiqligini oshiradi, talabni noelastik qiladi).</li>
<li><b>Oligopoliya</b>: bir nechta yirik firma, yuqori to'siqlar, <b>o'zaro bog'liqlik</b> — har bir firma raqiblar javobini hisobga oladi.</li>
<li>Modellar: <b>Kurno</b> (miqdor bo'yicha raqobat), <b>Bertran</b> (narx bo'yicha — narx MC gacha tushadi), <b>Shtakelberg</b> (yetakchi va izdosh), <b>singan talab egri chizig'i</b> (Svizi — narxlar \"qotib qolishi\"), <b>kartel</b> (til biriktirish, masalan OPEC).</li>
<li>O'yin nazariyasi: <b>mahbuslar dilemmasi</b> va <b>Nesh muvozanati</b> — hamkorlik foydali bo'lsa ham, har bir firma uchun aldash ustun strategiya.</li></ul>`,
q:[
["Monopolistik raqobatning asosiy belgisi:",["Ko'p firma va differensiatsiyalangan mahsulot","Bitta sotuvchi","Bir nechta yirik firma va bir xil mahsulot","Kirish taqiqlangan"],0,"Kafe, kiyim do'konlari — har biri o'ziga xos, lekin o'rinbosarlar ko'p."],
["Uzoq muddatda monopolistik raqobat firmasining iqtisodiy foydasi:",["Nolga teng (P = ATC)","Doim musbat","Doim maksimal","Doim manfiy"],0,"Erkin kirish foydani nolgacha kamaytiradi."],
["Monopolistik raqobatda \"ortiqcha quvvat\" nimani bildiradi?",["Firma ATC minimumidan kamroq hajmda ishlaydi","Firma juda ko'p ishlab chiqaradi","Narx MC ga teng","Reklama yo'q"],0,"Uzoq muddatda talab egrisi ATC ga minimumdan chapda urinadi."],
["Oligopoliyaning asosiy xususiyati:",["Firmalarning o'zaro bog'liqligi","Mukammal axborot","Erkin kirish","Firma narxni qabul qiluvchi"],0,"Har bir qaror raqiblar reaksiyasiga bog'liq."],
["Singan (Svizi) talab egri chizig'i modeli nimani tushuntiradi?",["Oligopoliyada narxlar nega barqaror bo'lishini","Monopol narxni","Kartel tuzilishini","Raqobatli muvozanatni"],0,"Raqiblar narx pasaytirishga ergashadi, oshirishga ergashmaydi — narx o'zgartirish foydasiz."],
["Bertran modelida bir xil mahsulotli duopoliyada narx:",["MC gacha tushadi","Monopol darajada qoladi","Cheksiz oshadi","Kurno narxiga teng"],0,"Har biri raqibdan biroz arzon sotib, butun bozorni olishga intiladi."],
["Mahbuslar dilemmasida Nesh muvozanati:",["Har ikki o'yinchi ustun strategiyani tanlaydi, natija ikkalasi uchun ham optimal emas","Har ikkisi hamkorlik qiladi","Bir o'yinchi doim yutadi","Muvozanat mavjud emas"],0,"Kartel a'zolari uchun kvotadan oshirish ustun strategiya — shu sabab kartellar beqaror."],
["Kartel nima?",["Narx yoki miqdor bo'yicha til biriktirgan firmalar guruhi","Davlat monopoliyasi","Raqobatli firmalar birlashmasi","Xalqaro savdo tashkiloti"],0,"Masalan, OPEC — neft qazib olish kvotalarini kelishadi."]
],
o:[
["Monopolistik raqobatning qisqa va uzoq muddatli muvozanatini tushuntiring.",["Pastga og'gan, elastik talab","Qisqa muddat: MR = MC, foyda/zarar","Uzoq muddat: P = ATC, foyda nol","Ortiqcha quvvat, P &gt; MC","Narxsiz raqobat va reklama roli"]],
["Oligopoliya modellarini taqqoslang.",["Kurno — miqdor bo'yicha raqobat","Bertran — narx bo'yicha, P = MC","Shtakelberg — yetakchi va izdosh","Svizi — singan talab egri chizig'i","Kartel va mahbuslar dilemmasi"]]
]},
{t:"Ishlab chiqarish omillari bozori: mehnat",sub:"Resurslardan foydalanish qoidasi, mehnatga talab va taklif, monopsoniya, kasaba uyushmalari, real ish haqi",
th:`<ul><li>Resurslarga talab — <b>hosila talab</b> (mahsulotga talabdan kelib chiqadi).</li>
<li><b>MRP</b> (me'yoriy daromad mahsuloti) = MR × MP. Raqobatli bozorda MRP = P × MP = VMP.</li>
<li><b>Resurslardan foydalanish qoidasi</b>: firma ishchilarni <b>MRP = w</b> (MRC) bo'lgunga qadar yollaydi. Ikki resurs uchun: MRP<sub>L</sub>/w = MRP<sub>K</sub>/r = 1.</li>
<li>Mehnat taklifi: almashtirish samarasi (ish haqi oshsa dam olish qimmatlashadi) va daromad samarasi — yuqori ish haqida taklif egri chizig'i <b>orqaga egilishi</b> mumkin.</li>
<li><b>Monopsoniya</b>: MRC &gt; w; raqobatga nisbatan kamroq ish o'rni va past ish haqi.</li>
<li><b>Kasaba uyushmalari</b> ish haqini oshiradi (talabni oshirish, taklifni cheklash, jamoaviy shartnoma); monopsoniyaga qarshi \"ikki tomonlama monopoliya\".</li>
<li><b>Real ish haqi</b> = nominal ish haqi / narxlar darajasi. O'sish omillari: mehnat unumdorligi, kapital, texnologiya, ta'lim.</li></ul>`,
q:[
["Mehnatning me'yoriy mahsuloti MP = 5, mahsulot narxi P = 4 (raqobatli bozor). MRP = ?",null,"20","MRP = P × MP = 4 × 5 = 20."],
["Firma qancha ishchi yollaydi?",["MRP = w bo'lgunga qadar","MP maksimal bo'lgunga qadar","AP = w bo'lgunga qadar","Ish haqi nolga tushgunga qadar"],0,"Qo'shimcha ishchi keltirgan daromad uning ish haqiga teng bo'lgan nuqta — optimal."],
["Resurslarga talab nima uchun \"hosila talab\" deyiladi?",["U mahsulotga bo'lgan talabdan kelib chiqadi","U davlat tomonidan belgilanadi","U har doim noelastik","U faqat ish haqiga bog'liq"],0,"Non talabi oshsa, novvoylarga talab ham oshadi."],
["Ish haqi juda yuqori darajada oshganda mehnat taklifi egri chizig'i orqaga egilishi sababi:",["Daromad samarasi almashtirish samarasidan kuchli bo'ladi","Almashtirish samarasi kuchayadi","Ishchilar soni kamayadi","Narxlar tushadi"],0,"Boy bo'lgan ishchi ko'proq dam olishni tanlaydi."],
["Monopson mehnat bozorida raqobatga nisbatan:",["Bandlik va ish haqi pastroq","Bandlik va ish haqi yuqoriroq","Bandlik yuqori, ish haqi past","O'zgarish yo'q"],0,"Yagona ish beruvchi qo'shimcha ishchi uchun barchaning ish haqini oshirishi kerak — shuning uchun kamroq yollaydi."],
["Nominal ish haqi 10% oshdi, narxlar 4% oshdi. Real ish haqi taxminan necha foiz oshdi?",null,"6","Real o'sish ≈ 10% − 4% = 6%."],
["Kasaba uyushmasining ish haqini oshirish usullaridan biri:",["Mehnat taklifini cheklash (litsenziya, uzoq o'qish)","Ish beruvchilar sonini kamaytirish","Mahsulot narxini pasaytirish","Unumdorlikni kamaytirish"],0,"Taklif kamaysa, muvozanat ish haqi oshadi."],
["Real ish haqining uzoq muddatli o'sishining asosiy omili:",["Mehnat unumdorligining oshishi","Pul massasining oshishi","Narxlarning oshishi","Ish kunining qisqarishi"],0,"Real ish haqi oxir-oqibat ishchi ishlab chiqargan mahsulot qiymatiga bog'liq."]
],
o:[
["Raqobatli va monopson mehnat bozorlarini taqqoslang.",["Raqobat: w = MRP, gorizontal taklif firma uchun","Monopsoniya: MRC egri chizig'i taklifdan yuqori","Monopsonist MRC = MRP bo'yicha yollaydi","Ish haqi taklif egrisidan — past","Kasaba uyushmalari va minimal ish haqi ta'siri"]],
["Mehnat taklifi va orqaga egiluvchi egri chiziqni tushuntiring.",["Ish va dam olish o'rtasida tanlov","Almashtirish samarasi","Daromad samarasi","Qaysi biri ustun bo'lsa — egri shakli","Grafik"]]
]},
{t:"Ishlab chiqarish omillari bozori: kapital va yer",sub:"Kapital va foiz, investitsiyalar, diskontlash, yer bozori, iqtisodiy va differensial renta",
th:`<ul><li><b>Kapital</b> — ishlab chiqarilgan ishlab chiqarish vositalari. Kapital xizmati narxi — <b>foiz</b>. Real foiz ≈ nominal − inflyatsiya.</li>
<li><b>Diskontlash</b>: kelajakdagi pulning bugungi qiymati PV = FV/(1 + r)<sup>n</sup>. <b>NPV</b> = Σ CF<sub>t</sub>/(1 + r)<sup>t</sup> − I<sub>0</sub>; NPV &gt; 0 bo'lsa loyiha foydali.</li>
<li>Investitsiya talabi foiz stavkasiga teskari bog'liq: foiz pasaysa ko'proq loyiha foydali bo'ladi.</li>
<li><b>Yer</b> taklifi mutlaq noelastik (vertikal). Narxni faqat talab belgilaydi.</li>
<li><b>Iqtisodiy renta</b> — taklifi noelastik resurs uchun muqobil qiymatdan ortiq to'lov.</li>
<li><b>Differensial renta I</b> — unumdorlik va joylashuv farqi; <b>II</b> — qo'shimcha kapital qo'yilmalari (intensifikatsiya) natijasi.</li>
<li><b>Yer narxi</b> = yillik renta / foiz stavkasi.</li></ul>`,
q:[
["2 yildan keyin olinadigan 1210 so'mning bugungi qiymati (r = 10%):",null,"1000","PV = 1210 / 1.1² = 1210 / 1.21 = 1000."],
["Yillik renta 500, bank foiz stavkasi 10%. Yer narxi = ?",null,"5000","Yer narxi = R/i = 500/0.1 = 5000."],
["Yer taklifi egri chizig'i odatda qanday?",["Vertikal (mutlaq noelastik)","Gorizontal","Yuqoriga og'gan","Pastga og'gan"],0,"Tabiiy yer miqdori narxga qarab o'zgarmaydi."],
["Foiz stavkasi pasaysa investitsiyalar:",["Oshadi","Kamayadi","O'zgarmaydi","Nolga tushadi"],0,"Kapital narxi arzonlashadi — ko'proq loyihaning NPV si musbat bo'ladi."],
["Loyiha qachon qabul qilinadi?",["NPV &gt; 0","NPV &lt; 0","PV = 0","Foiz stavkasi yuqori bo'lsa"],0,"Kelajakdagi tushumlarning bugungi qiymati boshlang'ich xarajatdan katta."],
["Differensial renta I ning sababi:",["Yerlarning unumdorligi va joylashuvidagi farq","Qo'shimcha kapital qo'yilmalari","Davlat subsidiyasi","Inflyatsiya"],0,"Unumdor yoki bozorga yaqin yer bir xil xarajatda ko'proq daromad beradi."],
["Differensial renta II nima bilan bog'liq?",["Bir yerga qo'shimcha kapital qo'yish (intensifikatsiya)","Tabiiy unumdorlik","Yer maydoni","Iqlim"],0,"Masalan, sug'orish tizimi qurish orqali hosildorlikni oshirish."],
["Nominal foiz 18%, inflyatsiya 10%. Real foiz stavkasi taxminan necha foiz?",null,"8","Real ≈ 18 − 10 = 8%."]
],
o:[
["Diskontlash va investitsiya qarorlarini tushuntiring.",["Pulning vaqt qiymati","PV formulasi","NPV va qaror qoidasi","Foiz stavkasi va investitsiya talabi","Misol"]],
["Yer bozori va renta turlarini tushuntiring.",["Vertikal taklif, talab narxni belgilaydi","Iqtisodiy renta","Differensial renta I va II","Yer narxi = R/i","Yerga talab omillari"]]
]},
{t:"Bozor iqtisodiyotida axborot, risk va noaniqlik",sub:"Risk va noaniqlik, kutilgan qiymat, riskka munosabat, asimmetrik axborot, signallar, auksionlar",
th:`<ul><li><b>Risk</b> — natijalar ehtimollari ma'lum; <b>noaniqlik</b> — ehtimollar noma'lum (F. Nayt).</li>
<li><b>Kutilgan qiymat</b> E = Σ p<sub>i</sub>·x<sub>i</sub>. Riskni o'lchash: dispersiya, standart og'ish.</li>
<li>Riskka munosabat: <b>riskdan qochuvchi</b> (kafolatlangan summani afzal ko'radi, naflilik funksiyasi botiq), <b>neytral</b>, <b>riskni sevuvchi</b>.</li>
<li>Riskni kamaytirish: <b>diversifikatsiya</b>, <b>sug'urta</b>, qo'shimcha axborot olish, xedjlash.</li>
<li><b>Asimmetrik axborot</b>: <b>limonlar bozori</b> (Akerlof) — sifatsiz tovar sifatlini siqib chiqaradi; <b>salbiy tanlov</b> (shartnomadan oldin); <b>ma'naviy xavf</b> (moral hazard — shartnomadan keyin xulq o'zgarishi).</li>
<li>Yechimlar: <b>signal berish</b> (Spens — diplom, kafolat), <b>skrining</b>, obro', standartlar.</li>
<li><b>Auksionlar</b>: ingliz (narx oshib boradi), golland (narx tushib boradi), yopiq birinchi narx, yopiq ikkinchi narx (Vikri).</li></ul>`,
q:[
["50% ehtimol bilan 100 so'm, 50% ehtimol bilan 0 so'm yutuq. Kutilgan qiymat = ?",null,"50","E = 0.5 × 100 + 0.5 × 0 = 50."],
["Risk va noaniqlikning farqi:",["Riskda natijalar ehtimollari ma'lum, noaniqlikda noma'lum","Risk har doim zarar keltiradi","Noaniqlik faqat davlatga tegishli","Farqi yo'q"],0,"F. Nayt ajratgan klassik farq."],
["Riskdan qochuvchi shaxs:",["Kutilgan qiymati teng bo'lsa, kafolatlangan daromadni afzal ko'radi","Doim lotereyani tanlaydi","Riskka befarq","Sug'urtadan voz kechadi"],0,"Shu sababli u sug'urta uchun pul to'lashga tayyor."],
["\"Limonlar bozori\" (Akerlof) nimani tushuntiradi?",["Asimmetrik axborot sifatli tovarlarni bozordan siqib chiqarishini","Monopol narxni","Tashqi samaralarni","Ijtimoiy ne'matlarni"],0,"Xaridor sifatni bilmasa, o'rtacha narx taklif qiladi — sifatli tovar egasi sotmaydi."],
["Sug'urta qilingandan keyin haydovchining ehtiyotsizroq bo'lishi:",["Ma'naviy xavf (moral hazard)","Salbiy tanlov","Signal berish","Diversifikatsiya"],0,"Shartnomadan keyingi yashirin xulq o'zgarishi."],
["Asosan kasal odamlarning tibbiy sug'urta sotib olishga intilishi:",["Salbiy tanlov","Ma'naviy xavf","Skrining","Xedjlash"],0,"Shartnoma tuzilishidan oldingi yashirin xususiyat."],
["Universitet diplomi mehnat bozorida qanday rol o'ynaydi (Spens nazariyasi)?",["Signal — ish beruvchiga qobiliyat haqida axborot beradi","Ma'naviy xavf","Monopsoniya","Tashqi samara"],0,"Qiyin olinadigan diplom yuqori unumdorlikni ko'rsatuvchi signal."],
["Golland auksionida narx:",["Yuqoridan boshlanib, kimdir rozi bo'lguncha tushib boradi","Pastdan boshlanib oshadi","Yopiq konvertda beriladi","Ikkinchi eng yuqori taklif bo'yicha to'lanadi"],0,"Masalan, Niderlandiyadagi gul auksionlari."]
],
o:[
["Asimmetrik axborot bozorlarida muammolar va yechimlar.",["Limonlar bozori","Salbiy tanlov","Ma'naviy xavf","Signal berish va skrining","Kafolat, obro', davlat standartlari"]],
["Riskni o'lchash va kamaytirish usullari.",["Kutilgan qiymat","Dispersiya, standart og'ish","Riskka munosabat turlari","Diversifikatsiya va sug'urta","Axborot qiymati"]]
]},
{t:"Tashqi samaralar. Kouz teoremasi",sub:"Bozor fiaskosi, ijobiy va salbiy tashqi samaralar, Pigu solig'i, Kouz teoremasi, davlat tartibga solishi",
th:`<ul><li><b>Bozor fiaskosi</b> — bozor resurslarni samarali taqsimlay olmaydigan holat (tashqi samaralar, ijtimoiy ne'matlar, monopoliya, asimmetrik axborot).</li>
<li><b>Tashqi samara</b> — bitimda qatnashmagan uchinchi shaxsga ta'sir. <b>Salbiy</b> (ifloslanish): MSC &gt; MPC → bozor <b>ortiqcha</b> ishlab chiqaradi. <b>Ijobiy</b> (ta'lim, emlash): MSB &gt; MPB → bozor <b>kam</b> ishlab chiqaradi.</li>
<li><b>Pigu solig'i</b> — salbiy tashqi samaraga teng soliq (MEC), xarajatlarni \"ichkilashtiradi\". Ijobiy samaraga — <b>Pigu subsidiyasi</b>.</li>
<li><b>Kouz teoremasi</b>: mulk huquqlari aniq belgilangan va tranzaksion xarajatlar past bo'lsa, tomonlar muzokara orqali huquq kimga berilganidan qat'i nazar samarali natijaga erishadi.</li>
<li>Boshqa vositalar: normativlar, <b>emissiya kvotalari savdosi</b> (cap-and-trade).</li></ul>`,
q:[
["Salbiy tashqi samara mavjud bo'lganda bozor:",["Ijtimoiy optimaldan ko'proq ishlab chiqaradi","Kamroq ishlab chiqaradi","Optimal miqdorni ishlab chiqaradi","Ishlab chiqarishni to'xtatadi"],0,"Firma ifloslanish xarajatini hisobga olmaydi — xususiy xarajat ijtimoiydan past."],
["Ijobiy tashqi samara misoli:",["Emlash (vaksina)","Zavod tutuni","Shovqin","Yo'l tirbandligi"],0,"Emlangan odam boshqalarni ham kasallikdan himoya qiladi."],
["Pigu solig'ining maqsadi:",["Salbiy tashqi samarani ichkilashtirish","Byudjetni to'ldirish","Monopoliyani cheklash","Importni kamaytirish"],0,"Soliq miqdori me'yoriy tashqi xarajatga teng bo'lsa, firma ijtimoiy optimal miqdorni tanlaydi."],
["Kouz teoremasining asosiy sharti:",["Mulk huquqlari aniq va tranzaksion xarajatlar past","Davlat aralashuvi","Monopoliya mavjudligi","Soliqlar yuqori"],0,"Shu sharoitda tomonlar o'zaro muzokara bilan samarali kelishuvga keladi."],
["Ijobiy tashqi samara bo'lganda bozor natijasi:",["Ijtimoiy optimaldan kam","Ortiqcha","Optimal","Nol"],0,"Ishlab chiqaruvchi yoki iste'molchi boshqalarga beradigan foydani hisobga olmaydi."],
["Salbiy tashqi samarada qaysi tengsizlik o'rinli?",["MSC &gt; MPC","MSC &lt; MPC","MSB &gt; MPB","MSC = MPC"],0,"Ijtimoiy xarajat = xususiy xarajat + tashqi xarajat."],
["Emissiya kvotalari savdosining afzalligi:",["Ifloslanishni eng arzon kamaytira oladigan firmalar kamaytiradi","Barcha firmalar bir xil kamaytiradi","Soliq to'lash shart emas","Ifloslanish to'liq yo'qoladi"],0,"Bozor kvotani eng ko'p qadrlaydiganlarga taqsimlaydi."],
["Quyidagilardan qaysi biri bozor fiaskosi EMAS?",["Raqobatli bozorda muvozanat narx","Tashqi samaralar","Ijtimoiy ne'matlar","Asimmetrik axborot"],0,"Raqobatli muvozanat (tashqi samara bo'lmasa) samarali hisoblanadi."]
],
o:[
["Salbiy tashqi samara va Pigu solig'ini grafik bilan tushuntiring.",["MPC va MSC egri chiziqlari","Bozor miqdori Qm &gt; optimal Q*","O'lik yuk yo'qotishi","Pigu solig'i = MEC","Natija: ichkilashtirish"]],
["Kouz teoremasini misol bilan tushuntiring.",["Mulk huquqi aniqligi","Tranzaksion xarajatlar","Muzokara orqali kelishuv","Huquq kimga berilsa ham samarali natija","Cheklovlar: ko'p tomonlar, yuqori xarajatlar"]]
]},
{t:"Ijtimoiy ne'matlar",sub:"Ijtimoiy ne'mat xususiyatlari, bozor muvaffaqiyatsizligi, chiptasiz yo'lovchi muammosi",
th:`<ul><li>Ne'matlar ikki mezon bo'yicha: <b>raqobatlilik</b> (bir kishining iste'moli boshqasinikini kamaytiradimi) va <b>istisno qilinuvchanlik</b> (to'lamaganni cheklash mumkinmi).</li>
<li><b>Xususiy ne'mat</b>: raqobatli, istisno qilinadi (non). <b>Ijtimoiy (jamoat) ne'mat</b>: noraqobatli, istisno qilinmaydi (milliy mudofaa, mayoq). <b>Umumiy resurs</b>: raqobatli, istisno qilinmaydi (baliq zaxirasi) — <b>\"umumiy mulk fojiasi\"</b>. <b>Klub ne'mati</b>: noraqobatli, istisno qilinadi (pullik TV).</li>
<li><b>Chiptasiz yo'lovchi (free rider)</b> — to'lamay foydalanuvchi; shu sabab bozor jamoat ne'matini yetarli ishlab chiqarmaydi.</li>
<li>Jamoat ne'mati talabi individual talablarning <b>vertikal yig'indisi</b>. Optimal miqdor (Samuelson sharti): <b>ΣMB = MC</b>.</li>
<li>Ijtimoiy ne'matlar defitsiti — bozor ularni kam ta'minlaydi; davlat soliqlar hisobidan moliyalashtiradi.</li></ul>`,
q:[
["Ijtimoiy (jamoat) ne'matining ikki xususiyati:",["Noraqobatlilik va istisno qilib bo'lmaslik","Raqobatlilik va istisno qilinuvchanlik","Faqat davlat ishlab chiqarishi","Bepulligi va sifatsizligi"],0,"Bir kishining foydalanishi boshqasiniki kamaytirmaydi va to'lamaganni cheklab bo'lmaydi."],
["Chiptasiz yo'lovchi (free rider) muammosi:",["Ne'matdan to'lamay foydalanish istagi","Jamoat transportida chiptasiz yurish jarimasi","Monopol narx","Ortiqcha ishlab chiqarish"],0,"Hamma boshqalar to'lashini kutsa, ne'mat umuman yaratilmasligi mumkin."],
["Baliq zaxirasi qaysi turdagi ne'mat?",["Umumiy resurs","Ijtimoiy ne'mat","Klub ne'mati","Xususiy ne'mat"],0,"Raqobatli (ovlangan baliq boshqaga qolmaydi), lekin istisno qilib bo'lmaydi."],
["\"Umumiy mulk fojiasi\" nimani anglatadi?",["Umumiy resursdan haddan ortiq foydalanib uni tugatish","Xususiy mulkni musodara qilish","Monopoliya tufayli yo'qotish","Jamoat ne'matining ortiqchaligi"],0,"Har bir foydalanuvchi o'z foydasini ko'radi, xarajatni esa hamma bo'lishadi."],
["Jamoat ne'mati uchun umumiy talab qanday hosil qilinadi?",["Individual talablarning vertikal yig'indisi","Gorizontal yig'indi","Eng katta talab","O'rtacha talab"],0,"Har bir miqdorda barcha iste'molchilarning to'lashga tayyorligi qo'shiladi."],
["Jamoat ne'matining optimal miqdori sharti (Samuelson):",["ΣMB = MC","MB = P","MC = 0","MR = MC"],0,"Barcha foydalanuvchilarning me'yoriy foydalari yig'indisi me'yoriy xarajatga teng."],
["Pullik kabel televideniyesi qaysi turdagi ne'mat?",["Klub ne'mati","Umumiy resurs","Ijtimoiy ne'mat","Xususiy ne'mat"],0,"Noraqobatli, lekin to'lamaganlarni cheklash mumkin."],
["Milliy mudofaa nima uchun odatda davlat tomonidan ta'minlanadi?",["Bozor chiptasiz yo'lovchi muammosi tufayli uni yetarli ta'minlay olmaydi","U juda arzon","Unga talab yo'q","U xususiy ne'mat"],0,"Klassik jamoat ne'mati — soliqlar orqali moliyalashtiriladi."]
],
o:[
["Ne'matlar tasnifini to'rt guruhga ajratib tushuntiring.",["Raqobatlilik va istisno qilinuvchanlik mezonlari","Xususiy ne'mat","Ijtimoiy ne'mat","Umumiy resurs va uning fojiasi","Klub ne'mati, misollar"]],
["Jamoat ne'matlarini ta'minlashda bozor nega muvaffaqiyatsiz?",["Chiptasiz yo'lovchi muammosi","Vertikal yig'indi talab","Samuelson sharti","Davlat ta'minoti va soliqlar","Ijtimoiy ne'matlar defitsiti"]]
]},
{t:"Ijtimoiy tanlov nazariyasi",sub:"Ovoz berish tamoyillari, ovoz berish paradoksi, Errou teoremasi, lobbizm, siyosiy renta, korruptsiya",
th:`<ul><li><b>Ijtimoiy (jamoaviy) tanlov nazariyasi</b> (Byukenen, Tallok) — iqtisodiy usullarni siyosiy qarorlarga qo'llaydi: saylovchilar, siyosatchilar, byurokratlar ham shaxsiy manfaat ko'zlaydi.</li>
<li><b>Ko'pchilik ovozi</b> qoidasi; <b>median saylovchi teoremasi</b> — ko'pchilik ovozida o'rtadagi saylovchi afzal ko'rgan variant yutadi.</li>
<li><b>Ovoz berish paradoksi</b> (Kondorse): individual afzalliklar tranzitiv bo'lsa ham, ko'pchilik ovozi natijasi tranzitiv bo'lmasligi mumkin (A &gt; B, B &gt; C, C &gt; A).</li>
<li><b>Errou imkonsizlik teoremasi</b>: bir vaqtda barcha \"adolatli\" shartlarni (to'liqlik, tranzitivlik, Pareto, bog'liq bo'lmagan alternativalardan mustaqillik, diktatura yo'qligi) qanoatlantiradigan ovoz berish tizimi mavjud emas.</li>
<li><b>Logrolling</b> — ovozlar ayirboshlash. <b>Lobbizm</b> — manfaatdor guruhlarning qarorlarga ta'siri.</li>
<li><b>Siyosiy renta izlash</b> — imtiyoz olish uchun resurs sarflash; <b>korruptsiya</b> davlat xarajatlarining samarasiz o'sishiga va farovonlik pasayishiga olib keladi.</li></ul>`,
q:[
["Ovoz berish paradoksi (Kondorse) nimani ko'rsatadi?",["Ko'pchilik ovozi natijasi tranzitiv bo'lmasligi mumkinligini","Saylovchilar ovoz bermasligini","Diktatura muqarrarligini","Median saylovchi doim yutqazishini"],0,"Uch saylovchi va uch variantda A &gt; B, B &gt; C, C &gt; A sikli paydo bo'lishi mumkin."],
["Errou imkonsizlik teoremasining mazmuni:",["Barcha adolatli shartlarni bir vaqtda qanoatlantiradigan ovoz berish tizimi yo'q","Ko'pchilik ovozi doim samarali","Lobbizm foydali","Saylovchilar ratsional emas"],0,"K. Errou — 1972-yil Nobel mukofoti sohibi."],
["Median saylovchi teoremasiga ko'ra ko'pchilik ovozida:",["O'rtadagi saylovchi afzal ko'rgan variant yutadi","Eng boy saylovchi qarori yutadi","Ozchilik qarori yutadi","Natija tasodifiy"],0,"Shu sabab partiyalar o'rta pozitsiyaga intiladi."],
["Logrolling nima?",["Deputatlar o'rtasida ovozlarni ayirboshlash","Davlat byudjetini qisqartirish","Saylov kampaniyasi","Soliq imtiyozi"],0,"\"Sen mening loyihamga ovoz ber, men seniga\"."],
["Siyosiy renta izlash:",["Davlatdan imtiyoz olish uchun resurs sarflash","Yerni ijaraga berish","Ishlab chiqarishni kengaytirish","Investitsiya qilish"],0,"Resurslar yangi qiymat yaratishga emas, mavjudini qayta taqsimlashga ketadi."],
["Ijtimoiy tanlov nazariyasining asoschilaridan biri:",["J. Byukenen","A. Marshall","J. M. Keyns","K. Marks"],0,"Jeyms Byukenen — 1986-yil Nobel mukofoti, G. Tallok bilan hammuallif."],
["Korruptsiyaning iqtisodiy oqibati:",["Davlat xarajatlarining samarasiz o'sishi va farovonlik pasayishi","Samaradorlik oshishi","Soliqlar kamayishi","Raqobat kuchayishi"],0,"Resurslar eng samarali emas, eng ko'p pora berganga taqsimlanadi."],
["Lobbizm nima?",["Manfaatdor guruhlarning davlat qarorlariga ta'sir o'tkazishi","Saylovda ovoz berish","Soliq to'lash","Davlat xaridlari"],0,"Kichik, uyushgan guruhlar ko'pincha keng tarqoq ko'pchilikdan kuchliroq ta'sir qiladi."]
],
o:[
["Ovoz berish qoidalari va ularning muammolarini tushuntiring.",["Ko'pchilik ovozi","Median saylovchi teoremasi","Kondorse paradoksi","Errou imkonsizlik teoremasi","Logrolling"]],
["Siyosiy renta, lobbizm va korruptsiyaning iqtisodiy oqibatlari.",["Renta izlash tushunchasi","Lobbizm va manfaatdor guruhlar","Korruptsiya mexanizmi","Davlat xarajatlarining samarasiz o'sishi","Farovonlik pasayishi"]]
]}
]});
