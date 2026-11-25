PX.add({
id:"imu", name:"Iqtisodiyotda miqdoriy usullar", short:"IMU", code:"IMU", teacher:"Dalaboyev U., Umarova Sh.", credits:"6 ECTS",
note:"Oraliq va yakuniy nazoratlar — kompyuterlashtirilgan test. Joriy nazoratlar — yozma ish (hisoblash).",
controls:[
 {k:"JN-1",week:4,ball:5,form:"Yozma ish",topics:[1,2,3],desc:"3-hafta yakunigacha o'tilgan barcha mavzular."},
 {k:"JN-2",week:6,ball:5,form:"Yozma ish",topics:[1,2,3,4,5],desc:"6-hafta yakunigacha o'tilgan barcha mavzular."},
 {k:"ON-1",week:8,ball:15,form:"Kompyuter testi",topics:[1,2,3,4,5,6,7,8],desc:"1-haftadan boshlanadigan barcha mavzular."},
 {k:"JN-3",week:10,ball:5,form:"Yozma ish",topics:[6,7,8,9,10],desc:"6–10 mavzular asosida."},
 {k:"ON-2",week:15,ball:15,form:"Kompyuter testi",topics:[9,10,11,12,13,14,15],desc:"9-haftadan boshlanadigan barcha mavzular."},
 {k:"JN-4",week:15,ball:5,form:"Yozma ish",topics:[11,12,13,14,15],desc:"11–15 haftalarda o'tilgan mavzular."},
 {k:"Faollik",week:15,ball:10,form:"Davomat",topics:[],desc:"Ma'ruza va seminarlardagi davomat va faollik."},
 {k:"YN",week:16,ball:40,form:"Kompyuter testi",topics:"all",desc:"Barcha mavzular."}
],
topics:[
{t:"Matritsalar va ular ustida amallar",sub:"Matritsa turlari, qo'shish, songa va matritsaga ko'paytirish, transponirlash, elementar almashtirishlar, rang",
th:`<ul><li><b>Matritsa</b> — m×n o'lchamli sonlar jadvali. Turlari: kvadrat, diagonal, birlik (E), nol, simmetrik (Aᵀ = A), uchburchak.</li>
<li>Qo'shish — faqat bir xil o'lchamlilar, elementma-element. Songa ko'paytirish — har elementga.</li>
<li><b>Ko'paytirish</b> A(m×n)·B(n×k) = C(m×k): c<sub>ij</sub> = i-satr × j-ustun. Shart: A ning ustunlari = B ning satrlari. Umuman <b>AB ≠ BA</b>.</li>
<li><b>Transponirlash</b>: satrlar ustunga aylanadi; (AB)ᵀ = BᵀAᵀ.</li>
<li><b>Elementar almashtirishlar</b>: satrlarni almashtirish, songa (≠0) ko'paytirish, bir satrga boshqasini qo'shish — rangni o'zgartirmaydi.</li>
<li><b>Rang</b> — chiziqli erkli satrlar (ustunlar) maksimal soni = pog'onali ko'rinishdagi nolmas satrlar soni.</li></ul>`,
q:[
["A — 2×3, B — 3×4 matritsa. AB ning o'lchami:",["2×4","3×3","4×2","Ko'paytirib bo'lmaydi"],0,"Tashqi o'lchamlar qoladi: (2×3)(3×4) = 2×4."],
["(AB)ᵀ nimaga teng?",["BᵀAᵀ","AᵀBᵀ","AB","BA"],0,"Transponirlashda tartib almashadi."],
["Matritsalar ko'paytmasi uchun umuman to'g'ri:",["AB ≠ BA","AB = BA har doim","AB = 0","AB = A + B"],0,"Ko'paytirish kommutativ emas."],
["A = [[1, 2], [2, 4]] matritsaning rangi:",null,"1","Ikkinchi satr birinchisining 2 baravari — bitta erkli satr."],
["A = [[2, 1], [3, 5]] matritsaning izi (diagonal elementlar yig'indisi):",null,"7","2 + 5 = 7."],
["A = [[1, −1], [0, 3]]. 2A matritsaning (2,2) elementi:",null,"6","2 × 3 = 6."],
["Elementar almashtirishlar matritsa rangini:",["O'zgartirmaydi","Oshiradi","Kamaytiradi","Nolga tenglaydi"],0,"Shu sabab rang pog'onali ko'rinishga keltirib topiladi."],
["Ixtiyoriy kvadrat A uchun AE = ?",["A","E","0","Aᵀ"],0,"Birlik matritsa — ko'paytirishda \"1\" vazifasi."]
],o:[]},
{t:"Chiziqli tenglamalar sistemasi",sub:"Matritsa rangining ahamiyati, Kroneker–Kapelli teoremasi, Gauss va Gauss–Jordan usullari",
th:`<ul><li>Sistema AX = B; <b>kengaytirilgan matritsa</b> (A|B).</li>
<li><b>Kroneker–Kapelli teoremasi</b>: sistema birgalikda ⇔ rang A = rang (A|B).</li>
<li>Agar rang A = rang (A|B) = n (noma'lumlar soni) — <b>yagona yechim</b>; &lt; n — <b>cheksiz ko'p</b> yechim (n − r erkin o'zgaruvchi); rang A &lt; rang (A|B) — yechim yo'q.</li>
<li><b>Gauss usuli</b>: to'g'ri yo'l — pog'onali (uchburchak) ko'rinishga keltirish, teskari yo'l — pastdan yuqoriga topish.</li>
<li><b>Gauss–Jordan</b>: A qismni birlik matritsaga keltirish — o'ng ustunda yechim hosil bo'ladi.</li></ul>`,
q:[
["Kroneker–Kapelli teoremasiga ko'ra sistema birgalikda bo'lishi sharti:",["rang A = rang (A|B)","det A = 0","rang A > rang (A|B)","A kvadrat bo'lishi"],0,"Asosiy va kengaytirilgan matritsa ranglari teng."],
["rang A = rang (A|B) = 3, noma'lumlar soni 3. Sistema:",["Yagona yechimga ega","Cheksiz ko'p yechimga ega","Yechimga ega emas","Faqat nol yechimga ega"],0,"Rang noma'lumlar soniga teng."],
["rang A = rang (A|B) = 2, noma'lumlar soni 4. Erkin o'zgaruvchilar soni:",null,"2","n − r = 4 − 2 = 2; sistema cheksiz ko'p yechimga ega."],
["rang A = 2, rang (A|B) = 3. Sistema:",["Birgalikda emas — yechim yo'q","Yagona yechimga ega","Cheksiz ko'p yechimga ega","Bir jinsli"],0,"Ranglar teng emas."],
["x + y = 5, x − y = 1. x = ?",null,"3","Qo'shsak: 2x = 6 → x = 3, y = 2."],
["Gauss usulining to'g'ri yo'lidan maqsad:",["Matritsani pog'onali (uchburchak) ko'rinishga keltirish","Determinantni hisoblash","Teskari matritsa topish","Rangni oshirish"],0,"Keyin teskari yo'l bilan noma'lumlar topiladi."],
["Gauss–Jordan usulida A qism qanday ko'rinishga keltiriladi?",["Birlik matritsa","Nol matritsa","Simmetrik matritsa","Transponirlangan"],0,"Shunda o'ng ustun to'g'ridan-to'g'ri yechimni beradi."],
["2x + 4y = 6, x + 2y = 3 sistema:",["Cheksiz ko'p yechimga ega","Yagona yechimga ega","Yechimga ega emas","Faqat x = 0"],0,"Ikkinchi tenglama birinchisining yarmi — rang 1 &lt; 2."]
],o:[]},
{t:"Determinantlar va teskari matritsa",sub:"Determinant xossalari, hisoblash, teskari matritsa, Kramer qoidasi",
th:`<ul><li>2×2: det [[a, b], [c, d]] = ad − bc. 3×3: Sarryus (uchburchak) qoidasi yoki satr bo'yicha yoyish (algebraik to'ldiruvchilar A<sub>ij</sub> = (−1)<sup>i+j</sup>M<sub>ij</sub>).</li>
<li><b>Xossalar</b>: det Aᵀ = det A; ikki satr almashsa — ishora o'zgaradi; ikki satr teng yoki proporsional — det = 0; satrni k ga ko'paytirsa — det ham k marta; det(AB) = det A · det B; uchburchak matritsa det = diagonal ko'paytmasi.</li>
<li><b>Teskari matritsa</b> A⁻¹ mavjud ⇔ det A ≠ 0. A⁻¹ = (1/det A)·Ã<sup>T</sup> (biriktirilgan matritsa). 2×2: [[a, b], [c, d]]⁻¹ = (1/(ad−bc))·[[d, −b], [−c, a]].</li>
<li>Matritsa usuli: X = A⁻¹B.</li>
<li><b>Kramer qoidasi</b> (det A ≠ 0): x<sub>i</sub> = Δ<sub>i</sub>/Δ, Δ<sub>i</sub> — i-ustun ozod hadlar bilan almashtirilgan determinant.</li></ul>`,
q:[
["det [[2, 3], [1, 4]] = ?",null,"5","2·4 − 3·1 = 5."],
["det [[1, 0, 0], [0, 2, 0], [0, 0, 3]] = ?",null,"6","Diagonal matritsa: 1·2·3 = 6."],
["Ikki satri bir xil bo'lgan matritsa determinanti:",["0","1","Diagonal ko'paytmasi","Aniqlab bo'lmaydi"],0,"Proporsional satrlar — det = 0."],
["Ikki satr o'rni almashtirilsa, determinant:",["Ishorasini o'zgartiradi","O'zgarmaydi","Nolga teng bo'ladi","Ikki baravar oshadi"],0,"Asosiy xossa."],
["Teskari matritsa mavjudligi sharti:",["det A ≠ 0","det A = 0","A simmetrik","A diagonal"],0,"Xos bo'lmagan (aynimagan) matritsa."],
["det A = 2, det B = 3. det(AB) = ?",null,"6","det(AB) = det A · det B."],
["2x + y = 5, x + 3y = 10. Kramer qoidasi bilan y = ?",null,"3","Δ = 6 − 1 = 5; Δy = 2·10 − 5·1 = 15; y = 15/5 = 3 (x = 1)."],
["A = [[2, 1], [1, 1]]. A⁻¹ ning (1,2) elementi:",null,"-1","det = 1; A⁻¹ = [[1, −1], [−1, 2]]."]
],o:[]},
{t:"Bir jinsli chiziqli tenglamalar sistemasi",sub:"Fundamental yechim, erkin o'zgaruvchilar, fundamental yechimlar sistemasi, iqtisodiy qo'llanish",
th:`<ul><li><b>Bir jinsli sistema</b> AX = 0 — har doim birgalikda (nol, trivial yechim bor).</li>
<li><b>Notrivial yechim</b> mavjud ⇔ rang A = r &lt; n. Kvadrat sistemada ⇔ det A = 0.</li>
<li><b>Fundamental yechimlar sistemasi (FYS)</b> — n − r ta chiziqli erkli yechim. Umumiy yechim — ularning chiziqli kombinatsiyasi: X = c₁X₁ + … + c<sub>n−r</sub>X<sub>n−r</sub>.</li>
<li>Topish: Gauss usuli bilan pog'onali ko'rinish → bazis va erkin o'zgaruvchilarni ajratish → erkin o'zgaruvchilarga navbat bilan (1, 0, …), (0, 1, …) qiymat berish.</li>
<li>Bir jinsli bo'lmagan sistema umumiy yechimi = xususiy yechim + bir jinsli sistema umumiy yechimi.</li>
<li>Iqtisodiy qo'llanish: muvozanat narxlar, balans tenglamalari.</li></ul>`,
q:[
["Bir jinsli sistema har doim:",["Birgalikda (kamida nol yechimi bor)","Birgalikda emas","Yagona notrivial yechimga ega","Cheksiz ko'p yechimga ega"],0,"X = 0 har doim yechim."],
["Kvadrat bir jinsli sistemada notrivial yechim mavjudligi sharti:",["det A = 0","det A ≠ 0","A birlik matritsa","rang A = n"],0,"Aks holda faqat nol yechim."],
["n = 5 noma'lum, rang A = 3. FYS dagi yechimlar soni:",null,"2","n − r = 5 − 3 = 2."],
["rang A = n bo'lsa, bir jinsli sistema:",["Faqat nol yechimga ega","Cheksiz ko'p yechimga ega","Yechimga ega emas","Ikki yechimga ega"],0,"Erkin o'zgaruvchi yo'q."],
["Bir jinsli sistemaning umumiy yechimi:",["FYS yechimlarining chiziqli kombinatsiyasi","Faqat nol vektor","Xususiy yechim","Determinant"],0,"Ixtiyoriy c₁, c₂, … koeffitsientlar bilan."],
["x + y + z = 0 tenglamaning FYS dagi yechimlar soni (3 noma'lum):",null,"2","Rang 1, 3 − 1 = 2 ta erkin o'zgaruvchi."],
["Bir jinsli bo'lmagan sistema umumiy yechimi:",["Xususiy yechim + bir jinsli sistema umumiy yechimi","Faqat xususiy yechim","Faqat FYS","Nol vektor"],0,"Chiziqli sistemalar strukturasi teoremasi."],
["Fundamental yechimlar qanday xususiyatga ega bo'lishi kerak?",["Chiziqli erkli","Chiziqli bog'liq","Hammasi teng","Nol"],0,"Bazis tashkil qiladi."]
],o:[]},
{t:"Xos qiymatlar va xos vektorlar",sub:"Xarakteristik tenglama, xos qiymat va vektorlarni aniqlash, diagonallashtirish, iqtisodiy qo'llanish",
th:`<ul><li>AX = λX (X ≠ 0) bo'lsa, λ — <b>xos qiymat</b>, X — <b>xos vektor</b>.</li>
<li><b>Xarakteristik tenglama</b>: det(A − λE) = 0. 2×2 da: λ² − (iz A)λ + det A = 0.</li>
<li>Xossalar: xos qiymatlar yig'indisi = iz A, ko'paytmasi = det A. Diagonal (uchburchak) matritsa xos qiymatlari — diagonal elementlari.</li>
<li>Xos vektor (A − λE)X = 0 bir jinsli sistemasidan topiladi.</li>
<li><b>Diagonallashtirish</b>: n ta chiziqli erkli xos vektor bo'lsa, A = PDP⁻¹ (D — xos qiymatlar diagonali). Har xil xos qiymatlar — diagonallashadi.</li>
<li>Iqtisodiyotda: dinamik tizimlar barqarorligi (|λ| &lt; 1), Markov zanjirlari, Leontyev modeli, o'sish sur'ati.</li></ul>`,
q:[
["A = [[2, 0], [0, 3]] xos qiymatlari:",["2 va 3","0 va 5","1 va 6","2 va 0"],0,"Diagonal matritsa — diagonal elementlari."],
["A = [[4, 1], [2, 3]] ning katta xos qiymati:",null,"5","λ² − 7λ + 10 = 0 → λ = 5 va 2."],
["Xos qiymatlar ko'paytmasi nimaga teng?",["det A","iz A","rang A","1"],0,"Yig'indisi esa izga teng."],
["A = [[1, 2], [3, 4]] ning xos qiymatlari yig'indisi:",null,"5","Iz = 1 + 4 = 5."],
["Xarakteristik tenglama:",["det(A − λE) = 0","AX = 0","det A = λ","A − E = 0"],0,"Undan xos qiymatlar topiladi."],
["Xos vektor qaysi sistemadan topiladi?",["(A − λE)X = 0","AX = B","A⁻¹X = λ","XA = E"],0,"Bir jinsli sistema — notrivial yechim kerak."],
["n×n matritsa diagonallashadi, agar:",["n ta chiziqli erkli xos vektorga ega bo'lsa","det A = 0 bo'lsa","Simmetrik bo'lmasa","Iz nolga teng bo'lsa"],0,"Har xil xos qiymatlar bu shartni kafolatlaydi."],
["Dinamik iqtisodiy tizim xₜ₊₁ = Axₜ barqaror bo'lishi sharti:",["Barcha |λ| &lt; 1","Barcha λ &gt; 1","det A &gt; 1","iz A = 0"],0,"Aks holda tebranishlar o'sib boradi."]
],o:[]},
{t:"Leontyev tarmoqlararo balans modeli",sub:"Ko'p tarmoqli iqtisodiyot, samaradorlik matritsasi, to'liq xarajatlar, muvozanatli narx modellari",
th:`<ul><li>Balans tenglamasi: <b>X = AX + Y</b>. X — yalpi mahsulot vektori, Y — yakuniy mahsulot, A — <b>bevosita xarajatlar koeffitsientlari</b> matritsasi: a<sub>ij</sub> = j-tarmoq birlik mahsulotiga sarflanadigan i-tarmoq mahsuloti.</li>
<li>Yechim: <b>X = (E − A)⁻¹Y</b>. B = (E − A)⁻¹ — <b>to'liq xarajatlar</b> matritsasi: b<sub>ij</sub> — j-tarmoqning 1 birlik yakuniy mahsuloti uchun i-tarmoqning jami (bevosita + bilvosita) ishlab chiqarishi.</li>
<li><b>Samaradorlik (mahsuldorlik)</b>: A samarali ⇔ (E − A)⁻¹ ≥ 0 mavjud. Yetarli shart: barcha ustun yig'indilari &lt; 1.</li>
<li>Muvozanatli narx modeli: P = AᵀP + V (V — qo'shilgan qiymat normasi) → P = (E − Aᵀ)⁻¹V.</li>
<li>Muallif — V. Leontyev, 1973-yil Nobel mukofoti.</li></ul>`,
q:[
["Leontyev balans tenglamasi:",["X = AX + Y","X = A + Y","Y = AX","X = A⁻¹Y"],0,"Yalpi mahsulot = oraliq iste'mol + yakuniy mahsulot."],
["Yalpi mahsulot formulasi:",["X = (E − A)⁻¹Y","X = AY","X = (E + A)Y","X = A⁻¹Y"],0,"B = (E − A)⁻¹ — to'liq xarajatlar matritsasi."],
["Bir tarmoqli model: a = 0.2, Y = 80. Yalpi mahsulot X = ?",null,"100","X = Y/(1 − a) = 80/0.8 = 100."],
["a<sub>ij</sub> koeffitsientining ma'nosi:",["j-tarmoq birlik mahsulotiga i-tarmoq mahsuloti sarfi","i-tarmoq foydasi","j-tarmoq yakuniy mahsuloti","Narx indeksi"],0,"Bevosita (texnologik) xarajat koeffitsienti."],
["A matritsa samarali bo'lishining yetarli sharti:",["Har bir ustun yig'indisi 1 dan kichik","det A = 0","Barcha elementlar 1 dan katta","A simmetrik"],0,"Shunda (E − A)⁻¹ manfiy bo'lmagan elementlarga ega."],
["To'liq xarajatlar koeffitsienti b<sub>ij</sub> bevosita a<sub>ij</sub> dan:",["Katta yoki teng (bilvosita xarajatlarni ham o'z ichiga oladi)","Har doim kichik","Teng","Manfiy"],0,"Diagonal elementlar b<sub>ii</sub> ≥ 1."],
["Bir tarmoqli model: X = 200, a = 0.25. Yakuniy mahsulot Y = ?",null,"150","Y = X − aX = 200 − 50 = 150."],
["Tarmoqlararo balans modeli muallifi:",["Vasiliy Leontyev","Jon Keyns","Leonid Kantorovich","Pol Samuelson"],0,"1973-yil Nobel mukofoti."]
],o:[]},
{t:"Chiziqli dasturlash masalasi",sub:"Masala qo'yilishi, matematik modeli, grafik usulda yechish, yechimning turg'unlik tahlili",
th:`<ul><li>Chiziqli dasturlash (ChD): chiziqli maqsad funksiyasini chiziqli cheklovlar va x ≥ 0 shartida max yoki min qilish.</li>
<li>Model elementlari: o'zgaruvchilar (qarorlar), maqsad funksiyasi (foyda yoki xarajat), cheklovlar (resurslar).</li>
<li>Joiz yechimlar sohasi — <b>qavariq ko'pburchak</b>. Optimum (agar mavjud bo'lsa) — <b>uchlaridan birida</b>.</li>
<li><b>Grafik usul</b> (2 o'zgaruvchi): cheklovlar to'g'ri chiziqlarini chizish → joiz sohani aniqlash → maqsad funksiyasining sath chizig'ini gradient (c₁, c₂) yo'nalishida surish → oxirgi uch — optimum.</li>
<li>Maxsus holatlar: cheksiz ko'p optimum (sath chizig'i qirraga parallel), chegaralanmagan maqsad funksiyasi, joiz soha bo'sh.</li>
<li>Turg'unlik (sezgirlik) tahlili: koeffitsientlar o'zgarganda optimal yechim qancha saqlanishi.</li></ul>`,
q:[
["ChD masalasida joiz yechimlar sohasi:",["Qavariq ko'pburchak (yoki bo'sh/chegaralanmagan)","Har doim aylana","Bitta nuqta","Botiq soha"],0,"Chiziqli tengsizliklar kesishmasi qavariq."],
["Optimal yechim (agar yagona bo'lsa) qayerda joylashadi?",["Joiz soha uchlaridan birida","Soha markazida","Koordinata boshida doim","Soha tashqarisida"],0,"ChD asosiy teoremasi."],
["max z = 3x + 2y; x + y ≤ 4, x ≤ 3, x, y ≥ 0. z<sub>max</sub> = ?",null,"11","Uchlar: (0,0)→0, (3,0)→9, (3,1)→11, (0,4)→8."],
["Maqsad funksiyasi sath chizig'i joiz soha qirrasiga parallel bo'lsa:",["Cheksiz ko'p optimal yechim bo'lishi mumkin","Yechim yo'q","Optimum koordinata boshida","Masala nochiziqli"],0,"Qirraning barcha nuqtalari optimal."],
["Grafik usul qachon qo'llanadi?",["Ikki o'zgaruvchili masalalarda","Har qanday masalada","Faqat transport masalasida","Faqat butun sonli masalalarda"],0,"Ko'p o'zgaruvchi uchun simpleks usuli."],
["max masalasida sath chizig'i qaysi yo'nalishda suriladi?",["Gradient (c₁, c₂) yo'nalishida","Gradientga teskari","Koordinata boshiga","Ixtiyoriy"],0,"min masalasida — teskari yo'nalishda."],
["min z = x + y; x + 2y ≥ 4, 2x + y ≥ 4, x, y ≥ 0. z<sub>min</sub> qaysi nuqtada?",["(4/3, 4/3)","(0, 0)","(4, 0)","(0, 4)"],0,"Uchlar: (4,0)→4, (0,4)→4, (4/3,4/3)→8/3 — eng kichigi."],
["ChD modelidagi cheklovlar odatda nimani ifodalaydi?",["Resurslar va texnologik imkoniyatlar chegarasini","Foydani","Narxni","Bozor talabini doim"],0,"Masalan, xomashyo, ish vaqti, uskunalar quvvati."]
],o:[]},
{t:"Simpleks usuli",sub:"Boshlang'ich bazis yechim, uni yaxshilash teoremasi, simpleks algoritmi, sun'iy bazis, simpleks jadvallar",
th:`<ul><li>Masala <b>kanonik ko'rinishga</b> keltiriladi: tengsizliklarga <b>qo'shimcha (balans) o'zgaruvchilar</b> qo'shiladi (≤ uchun +s, ≥ uchun −s).</li>
<li><b>Boshlang'ich bazis yechim</b>: erkin o'zgaruvchilar = 0, bazis o'zgaruvchilar = ozod hadlar (b ≥ 0). Bazis o'zgaruvchilar soni = cheklovlar soni m.</li>
<li>Algoritm (max): indeks (baholar) qatorida manfiy baho bo'lsa — yechim yaxshilanadi. <b>Hal qiluvchi ustun</b> — eng manfiy baho; <b>hal qiluvchi satr</b> — b<sub>i</sub>/a<sub>ik</sub> (a<sub>ik</sub> &gt; 0) nisbatlarning eng kichigi; Jordan almashtirishi.</li>
<li><b>Optimallik</b> (max): barcha baholar ≥ 0. Hal qiluvchi ustunda musbat element bo'lmasa — maqsad funksiyasi chegaralanmagan.</li>
<li><b>Sun'iy bazis</b> (M-usul): ≥ yoki = cheklovlarda sun'iy o'zgaruvchilar katta jarima M bilan kiritiladi.</li></ul>`,
q:[
["≤ ko'rinishdagi cheklovni tenglamaga aylantirish uchun:",["Musbat qo'shimcha (balans) o'zgaruvchi qo'shiladi","Manfiy o'zgaruvchi ayiriladi","Cheklov olib tashlanadi","Ikki tomon 2 ga ko'paytiriladi"],0,"x₁ + x₂ ≤ 4 → x₁ + x₂ + s₁ = 4, s₁ ≥ 0."],
["Max masalasida simpleks jadvalda hal qiluvchi ustun:",["Indeks qatoridagi eng manfiy baho ustuni","Eng katta ozod had ustuni","Birinchi ustun","Eng musbat baho ustuni"],0,"Maqsad funksiyasini eng tez oshiradigan o'zgaruvchi bazisga kiradi."],
["Hal qiluvchi satr qanday tanlanadi?",["b<sub>i</sub>/a<sub>ik</sub> (a<sub>ik</sub> &gt; 0) nisbatlarning eng kichigi","Eng katta b<sub>i</sub>","Eng kichik a<sub>ik</sub>","Ixtiyoriy"],0,"Yechim joizligini saqlash uchun."],
["Max masalasida yechim optimal bo'lishi sharti:",["Indeks qatorida manfiy baho qolmaydi","Barcha o'zgaruvchilar musbat","Ozod hadlar nol","Barcha baholar manfiy"],0,"Endi hech qaysi o'zgaruvchi maqsadni oshira olmaydi."],
["3 ta cheklovli masalada bazis o'zgaruvchilar soni:",null,"3","Bazis o'zgaruvchilar soni = cheklovlar soni."],
["Hal qiluvchi ustunda birorta ham musbat element bo'lmasa:",["Maqsad funksiyasi chegaralanmagan","Optimal yechim topildi","Masala birgalikda emas","Yangi bazis tanlanadi"],0,"O'zgaruvchini cheksiz oshirish mumkin."],
["Sun'iy bazis (M-usul) qachon kerak?",["≥ yoki = cheklovlar tufayli boshlang'ich bazis bo'lmaganda","Har doim","Faqat min masalada","Faqat 2 o'zgaruvchida"],0,"Sun'iy o'zgaruvchilar katta jarima M bilan kiritiladi."],
["Boshlang'ich bazis yechimda erkin (bazisga kirmagan) o'zgaruvchilar qiymati:",["0","1","Ozod hadga teng","M"],0,"Bazis o'zgaruvchilar ozod hadlarga teng bo'ladi."]
],o:[]},
{t:"Ikki yoqlama masalalar",sub:"Ikki yoqlama masala tushunchasi, boshlang'ich va ikki yoqlama masala bog'liqligi, iqtisodiy qo'llanish",
th:`<ul><li>Har bir ChD masalasiga <b>ikki yoqlama (dual)</b> masala mos keladi: max ↔ min.</li>
<li>Qurish qoidalari: dual o'zgaruvchilar soni = boshlang'ich cheklovlar soni; koeffitsientlar matritsasi <b>transponirlanadi</b>; ozod hadlar va maqsad koeffitsientlari o'rin almashadi; max (≤) ↔ min (≥).</li>
<li><b>Birinchi duallik teoremasi</b>: biri optimal yechimga ega bo'lsa, ikkinchisi ham, va <b>z<sub>max</sub> = w<sub>min</sub></b>.</li>
<li><b>Ikkinchi teorema</b> (to'ldiruvchi qat'iy emaslik): resurs to'liq ishlatilmasa, uning dual bahosi 0; dual baho musbat bo'lsa, resurs to'liq ishlatilgan.</li>
<li>Iqtisodiy ma'no: dual o'zgaruvchilar — resurslarning <b>yashirin (soya) baholari</b> — resurs 1 birlik oshsa, maqsad funksiyasi qancha o'zgaradi. Kantorovich: \"obyektiv shartlangan baholar\".</li></ul>`,
q:[
["Boshlang'ich masalada 3 cheklov va 2 o'zgaruvchi. Dual masaladagi o'zgaruvchilar soni:",null,"3","Dual o'zgaruvchilar soni = boshlang'ich cheklovlar soni."],
["Boshlang'ich masala max bo'lsa, dual masala:",["min","max","Nochiziqli","Butun sonli"],0,"Maqsad yo'nalishi almashadi."],
["Dual masala koeffitsientlar matritsasi:",["Boshlang'ich matritsaning transponirlangani","Teskari matritsa","Birlik matritsa","O'zgarmaydi"],0,"Satrlar ustunga aylanadi."],
["Birinchi duallik teoremasiga ko'ra optimumda:",["z<sub>max</sub> = w<sub>min</sub>","z<sub>max</sub> &gt; w<sub>min</sub>","z<sub>max</sub> = 0","Bog'liqlik yo'q"],0,"Maqsad funksiyalari qiymatlari teng."],
["Dual o'zgaruvchilarning iqtisodiy ma'nosi:",["Resurslarning yashirin (soya) baholari","Mahsulot narxi","Ish haqi","Transport xarajati"],0,"Resurs 1 birlik ko'payganda foyda o'zgarishi."],
["Resurs optimal rejada to'liq ishlatilmagan bo'lsa, uning dual bahosi:",["0","Maksimal","Manfiy","1"],0,"Ortiqcha resursni ko'paytirish foyda bermaydi."],
["\"Obyektiv shartlangan baholar\" tushunchasi muallifi:",["L. Kantorovich","V. Leontyev","J. Dansig","J. Nesh"],0,"Chiziqli dasturlash asoschilaridan, 1975-yil Nobel mukofoti."],
["max z = 2x₁ + 3x₂ cheklovlari ≤ 10 va ≤ 8. Dual maqsad funksiyasi:",["min w = 10y₁ + 8y₂","max w = 10y₁ + 8y₂","min w = 2y₁ + 3y₂","min w = y₁ + y₂"],0,"Ozod hadlar dual maqsad koeffitsientlariga aylanadi."]
],o:[]},
{t:"Butun sonli dasturlash masalalari",sub:"Butun sonli va binar o'zgaruvchilar, diskret qarorlar, investitsiya loyihalari, resurs taqsimlash, yechish usullari",
th:`<ul><li><b>Butun sonli dasturlash</b> — o'zgaruvchilar (barchasi yoki bir qismi) butun bo'lishi kerak: odamlar, mashinalar, zavodlar soni.</li>
<li><b>Binar (0–1) o'zgaruvchilar</b> — \"ha/yo'q\" qarorlar: loyihani tanlash, zavod qurish. x₁ + x₂ + x₃ ≤ 1 — ko'pi bilan bitta loyiha; x₁ ≤ x₂ — 1-loyiha faqat 2-si tanlansa.</li>
<li>Misollar: investitsiya loyihalarini tanlash (ryukzak masalasi), resurs taqsimlash, ishlab chiqarish rejasi, logistika (joylashtirish).</li>
<li>Uzluksiz ChD yechimini oddiy yaxlitlash joiz bo'lmasligi yoki optimal bo'lmasligi mumkin.</li>
<li>Yechish usullari: <b>tarmoqlar va chegaralar</b> (branch and bound), <b>Gomori kesuvchi tekisliklari</b>, to'liq saralash (kichik masalalar).</li>
<li>Butun sonli masala optimumi tegishli ChD optimumidan (max uchun) katta bo'la olmaydi.</li></ul>`,
q:[
["\"Loyihani tanlash/tanlamaslik\" qarori uchun qanday o'zgaruvchi ishlatiladi?",["Binar (0 yoki 1)","Uzluksiz","Manfiy","Kompleks"],0,"1 — tanlanadi, 0 — tanlanmaydi."],
["x₁ + x₂ + x₃ ≤ 1 (binar) cheklovi nimani bildiradi?",["Ko'pi bilan bitta loyiha tanlanadi","Aniq bitta loyiha","Hamma loyihalar","Kamida bitta loyiha"],0,"Aniq bitta uchun — tenglik = 1."],
["Uzluksiz ChD yechimini yaxlitlash:",["Joiz bo'lmagan yoki optimal bo'lmagan yechim berishi mumkin","Har doim optimal butun yechim beradi","Har doim taqiqlangan","Maqsadni oshiradi"],0,"Shu sabab maxsus usullar kerak."],
["Tarmoqlar va chegaralar usulining mohiyati:",["Masalani kichik qismlarga bo'lib, istiqbolsiz tarmoqlarni kesib tashlash","Simpleks jadvalni transponirlash","Grafik usul","Potensiallar usuli"],0,"Branch and bound."],
["Gomori usuli nimaga asoslanadi?",["Kesuvchi tekisliklar (qo'shimcha cheklovlar) qo'shishga","Potensiallarga","Xos qiymatlarga","Lagranj ko'paytuvchilariga"],0,"Kasr yechimni kesib tashlaydigan cheklovlar."],
["x₁ ≤ x₂ (binar) cheklovi:",["1-loyiha faqat 2-loyiha tanlansa tanlanishi mumkin","Ikkalasi teng","Faqat bittasi","Hech biri"],0,"Bog'liq (shartli) loyihalar."],
["Max masalasida butun sonli optimum tegishli ChD optimumiga nisbatan:",["Katta emas (≤)","Har doim katta","Har doim teng","Taqqoslab bo'lmaydi"],0,"Butunlik sharti qo'shimcha cheklov — sohani toraytiradi."],
["Byudjet 10 mln. Loyihalar: A (6 mln, foyda 8), B (5 mln, foyda 6), C (4 mln, foyda 5). Maksimal foyda (binar tanlov):",null,"13","A+C = 10 mln → 13; B+C = 9 mln → 11; A+B = 11 mln — joiz emas."]
],o:[]},
{t:"Transport masalasi",sub:"Masala qo'yilishi, matematik modeli, boshlang'ich bazis yechim usullari, potensiallar usuli",
th:`<ul><li>m ta ta'minotchi (zaxiralar a<sub>i</sub>) dan n ta iste'molchiga (ehtiyoj b<sub>j</sub>) yukni minimal xarajat bilan tashish. c<sub>ij</sub> — birlik tashish narxi, x<sub>ij</sub> — hajm.</li>
<li><b>Yopiq (balanslangan)</b> masala: Σa<sub>i</sub> = Σb<sub>j</sub>.</li>
<li>Bazis (to'ldirilgan) kataklar soni: <b>m + n − 1</b>; kamroq bo'lsa — aynigan reja, nol \"to'ldirish\" kiritiladi.</li>
<li>Boshlang'ich reja usullari: <b>shimoliy-g'arbiy burchak</b> (xarajatni hisobga olmaydi), <b>minimal element</b>, <b>Fogel</b> (jarima — eng yaxshi boshlang'ich reja).</li>
<li><b>Potensiallar usuli</b>: band kataklar uchun u<sub>i</sub> + v<sub>j</sub> = c<sub>ij</sub>; bo'sh kataklar uchun baho Δ<sub>ij</sub> = c<sub>ij</sub> − (u<sub>i</sub> + v<sub>j</sub>). Hamma Δ ≥ 0 — reja optimal; aks holda manfiy katakka sikl bo'yicha yuk ko'chiriladi.</li></ul>`,
q:[
["3 ta ta'minotchi va 4 ta iste'molchili transport masalasida bazis kataklar soni:",null,"6","m + n − 1 = 3 + 4 − 1 = 6."],
["Yopiq transport masalasi sharti:",["Jami zaxira = jami ehtiyoj","Zaxira &gt; ehtiyoj","Barcha narxlar teng","m = n"],0,"Balanslangan masala."],
["Xarajatlarni hisobga olmaydigan boshlang'ich reja usuli:",["Shimoliy-g'arbiy burchak","Minimal element","Fogel","Potensiallar"],0,"Shu sabab ko'pincha optimaldan uzoq reja beradi."],
["Potensiallar usulida band kataklar uchun tenglama:",["u<sub>i</sub> + v<sub>j</sub> = c<sub>ij</sub>","u<sub>i</sub> − v<sub>j</sub> = c<sub>ij</sub>","u<sub>i</sub> · v<sub>j</sub> = c<sub>ij</sub>","u<sub>i</sub> = v<sub>j</sub>"],0,"Bitta potensialga ixtiyoriy qiymat (odatda u₁ = 0) beriladi."],
["Min masalada reja optimal bo'lishi sharti:",["Barcha bo'sh kataklar uchun Δ<sub>ij</sub> ≥ 0","Barcha Δ<sub>ij</sub> &lt; 0","Barcha kataklar to'ldirilgan","u<sub>i</sub> = 0"],0,"Hech qaysi bo'sh katakka yuk ko'chirish xarajatni kamaytirmaydi."],
["Odatda eng yaxshi boshlang'ich rejani beradigan usul:",["Fogel (jarimalar) usuli","Shimoliy-g'arbiy burchak","Tasodifiy","Grafik"],0,"Har satr va ustun uchun ikki eng kichik narx farqi hisobga olinadi."],
["Band kataklar soni m + n − 1 dan kam bo'lsa, reja:",["Aynigan — nol yuk bilan katak to'ldiriladi","Optimal","Joiz emas","Yopiq"],0,"Potensiallarni hisoblash uchun to'liq bazis kerak."],
["Ta'minotchi 1 → iste'molchi 1: narx 3, hajm 20; 1 → 2: narx 5, hajm 10. Shu qism xarajati:",null,"110","3·20 + 5·10 = 60 + 50 = 110."]
],o:[]},
{t:"Transport masalasining maxsus hollari. Tayinlash masalasi",sub:"Ochiq transport masalalari, yo'l imkoniyati cheklangan masala, tayinlash masalasi va uning modeli",
th:`<ul><li><b>Ochiq masala</b>: zaxira ≠ ehtiyoj. Zaxira ortiq — <b>soxta iste'molchi</b> (narxlar 0) qo'shiladi; ehtiyoj ortiq — <b>soxta ta'minotchi</b> qo'shiladi (yoki taqchillik jarimasi).</li>
<li><b>Yo'l imkoniyati cheklangan</b>: x<sub>ij</sub> ≤ d<sub>ij</sub>; ma'lum yo'nalish taqiqlangan bo'lsa — c<sub>ij</sub> = M (juda katta).</li>
<li><b>Tayinlash masalasi</b>: n ishchi va n ish; har bir ishchi bitta ishga, har bir ish bitta ishchiga; umumiy xarajat minimal (yoki samaradorlik maksimal). x<sub>ij</sub> ∈ {0, 1}; har satr va ustun yig'indisi 1.</li>
<li>Bu barcha a<sub>i</sub> = b<sub>j</sub> = 1 bo'lgan transport masalasining xususiy holi.</li>
<li><b>Venger usuli</b>: satr minimumlarini ayirish → ustun minimumlarini ayirish → nollarni minimal chiziqlar bilan qoplash; chiziqlar soni n bo'lsa — optimal tayinlash nollardan tanlanadi.</li></ul>`,
q:[
["Zaxira 100, ehtiyoj 80. Masalani yopish uchun:",["Ehtiyoji 20 bo'lgan soxta iste'molchi qo'shiladi","Soxta ta'minotchi qo'shiladi","Zaxira kamaytiriladi","Masala yechilmaydi"],0,"Soxta iste'molchiga tashish narxi 0."],
["Soxta iste'molchiga tashish narxi odatda:",["0","M (juda katta)","Eng katta narx","1"],0,"Bu yuk aslida omborda qoladi."],
["Tayinlash masalasi transport masalasining qaysi xususiy holi?",["Barcha zaxira va ehtiyojlar 1 ga teng","Barcha narxlar teng","m + n − 1 = 0","Ochiq masala"],0,"Har bir ishchi — 1 birlik zaxira, har bir ish — 1 birlik ehtiyoj."],
["Tayinlash masalasini yechishning klassik usuli:",["Venger usuli","Fogel usuli","Simpleks grafik","Gauss usuli"],0,"Kun va Egervari g'oyalariga asoslangan."],
["Ma'lum yo'nalish bo'yicha tashish taqiqlangan bo'lsa:",["c<sub>ij</sub> = M (juda katta son) qo'yiladi","c<sub>ij</sub> = 0","Katak o'chiriladi va masala ochiq bo'ladi","x<sub>ij</sub> = 1"],0,"Optimal rejada bu katak bo'sh qoladi."],
["4×4 tayinlash masalasida tanlanadigan kataklar soni:",null,"4","Har satrdan va har ustundan aniq bittadan."],
["Venger usulida optimal tayinlash qachon topiladi?",["Nollarni qoplovchi minimal chiziqlar soni n ga teng bo'lganda","Barcha elementlar nol bo'lganda","Bitta chiziq yetarli bo'lganda","Hech qachon"],0,"Shunda har satr va ustunda mustaqil nol tanlash mumkin."],
["Ishchilar va ishlar soni teng bo'lmasa:",["Soxta qator yoki ustun (nol narxli) qo'shiladi","Masala yechilmaydi","Ortiqcha ishchi ishdan bo'shatiladi","Venger usuli to'g'ridan-to'g'ri qo'llanadi"],0,"Kvadrat matritsa hosil qilinadi."]
],o:[]},
{t:"Nochiziqli dasturlash masalalari",sub:"Masala qo'yilishi, nochiziqli cheklovlar, iqtisodiy masalalarni modellashtirish, ikki o'zgaruvchili masalani grafik yechish",
th:`<ul><li><b>Nochiziqli dasturlash</b>: maqsad funksiyasi yoki cheklovlardan kamida bittasi nochiziqli (kvadrat, ko'paytma, logarifm…).</li>
<li>Iqtisodiy misollar: nochiziqli xarajatlar (miqyos samarasi), foyda = narx(Q)·Q − xarajat, portfel riski (dispersiya), Kobb–Duglas ishlab chiqarish funksiyasi.</li>
<li>Farqi: optimum joiz soha <b>ichida</b> ham, chegarasining <b>ixtiyoriy nuqtasida</b> ham bo'lishi mumkin (faqat uchlarda emas); joiz soha qavariq bo'lmasligi mumkin.</li>
<li><b>Lokal</b> va <b>global</b> optimum: qavariq masalada (qavariq soha + qavariq/botiq maqsad) lokal optimum global hisoblanadi.</li>
<li><b>Grafik usul</b> (2 o'zgaruvchi): joiz sohani chizish → maqsad funksiyasining sath chiziqlari (aylana, giperbola…) → sohaga urinadigan yoki uni oxirgi kesadigan sath chizig'i.</li>
<li>Usullar: Lagranj ko'paytuvchilari, Kun–Takker shartlari, gradient usullari.</li></ul>`,
q:[
["Nochiziqli dasturlash masalasining belgisi:",["Maqsad funksiyasi yoki cheklovlardan biri nochiziqli","Barcha funksiyalar chiziqli","Faqat butun o'zgaruvchilar","O'zgaruvchilar soni 2"],0,"Masalan, z = x² + y²."],
["Nochiziqli masalada optimum qayerda bo'lishi mumkin?",["Joiz soha ichida yoki chegaraning ixtiyoriy nuqtasida","Faqat uchlarda","Faqat koordinata boshida","Faqat soha tashqarisida"],0,"ChD dan asosiy farq."],
["Qavariq dasturlash masalasida:",["Lokal optimum global optimum hisoblanadi","Bir nechta global optimum bo'lmaydi har doim","Optimum mavjud emas","Faqat uchlarda optimum"],0,"Shu sabab qavariq masalalar \"yaxshi\" yechiladi."],
["min z = (x − 2)² + (y − 3)²; x + y ≤ 10, x, y ≥ 0. z<sub>min</sub> = ?",null,"0","(2, 3) nuqta joiz sohaga tegishli — z = 0, optimum soha ichida."],
["z = x² + y² ning sath chiziqlari:",["Markazi koordinata boshidagi aylanalar","To'g'ri chiziqlar","Giperbolalar","Parabolalar"],0,"x² + y² = c."],
["Kobb–Duglas funksiyasi Q = AK<sup>α</sup>L<sup>β</sup> qanday funksiya?",["Nochiziqli","Chiziqli","Kvadratik forma","Konstanta"],0,"Darajali ko'paytma."],
["Nochiziqli cheklovli masalalar uchun optimallik shartlari:",["Kun–Takker shartlari","Potensiallar usuli","Venger usuli","Kramer qoidasi"],0,"Lagranj usulining tengsizliklar uchun umumlashmasi."],
["Grafik usulda optimum qayerda topiladi?",["Sath chizig'i joiz sohaga urinadigan yoki oxirgi kesadigan nuqtada","Har doim soha uchida","Soha markazida","Koordinata boshida"],0,"Sath chizig'i egri bo'lgani uchun urinish nuqtasi ham bo'lishi mumkin."]
],o:[]},
{t:"Kvadratik formalar. Shartsiz ekstremum",sub:"Kvadratik forma, aniqlanganlik, Silvestr mezoni, shartsiz ekstremum masalalari",
th:`<ul><li><b>Kvadratik forma</b>: Q(x) = xᵀAx, A — simmetrik matritsa. Masalan, 2x₁² + 4x₁x₂ + 3x₂² ↔ A = [[2, 2], [2, 3]] (aralash had koeffitsienti teng ikkiga bo'linadi).</li>
<li>Aniqlanganlik: <b>musbat aniqlangan</b> (Q &gt; 0, x ≠ 0), manfiy aniqlangan, noaniq (ishora o'zgaradi).</li>
<li><b>Silvestr mezoni</b>: musbat aniqlangan ⇔ barcha bosh (burchak) minorlar Δ₁, Δ₂, … &gt; 0. Manfiy aniqlangan ⇔ ishoralar almashinadi: Δ₁ &lt; 0, Δ₂ &gt; 0, Δ₃ &lt; 0, …</li>
<li><b>Shartsiz ekstremum</b> f(x, y): zaruriy shart — f'<sub>x</sub> = f'<sub>y</sub> = 0 (statsionar nuqta). Yetarli shart — Gesse matritsasi: musbat aniqlangan → <b>minimum</b>, manfiy aniqlangan → <b>maksimum</b>, noaniq → egar nuqta.</li>
<li>2 o'zgaruvchida: D = f<sub>xx</sub>f<sub>yy</sub> − f<sub>xy</sub>² &gt; 0 va f<sub>xx</sub> &gt; 0 → min; f<sub>xx</sub> &lt; 0 → max; D &lt; 0 → ekstremum yo'q.</li></ul>`,
q:[
["Silvestr mezoni bo'yicha musbat aniqlanganlik sharti:",["Barcha bosh minorlar musbat","Barcha bosh minorlar manfiy","Determinant nol","Iz manfiy"],0,"Δ₁ &gt; 0, Δ₂ &gt; 0, …"],
["A = [[2, 1], [1, 3]] kvadratik formasi:",["Musbat aniqlangan","Manfiy aniqlangan","Noaniq","Aynigan"],0,"Δ₁ = 2 &gt; 0, Δ₂ = 6 − 1 = 5 &gt; 0."],
["Manfiy aniqlangan formada bosh minorlar ishoralari:",["Almashinadi: −, +, −, …","Hammasi manfiy","Hammasi musbat","Hammasi nol"],0,"Δ₁ &lt; 0, Δ₂ &gt; 0, Δ₃ &lt; 0."],
["f(x, y) = x² + y² − 4x − 6y ning minimal qiymati:",null,"-13","f'x = 2x − 4 = 0 → x = 2; f'y = 2y − 6 = 0 → y = 3; f = 4 + 9 − 8 − 18 = −13."],
["Shartsiz ekstremumning zaruriy sharti:",["Barcha birinchi tartibli xususiy hosilalar nolga teng","Gesse matritsasi musbat aniqlangan","Funksiya chiziqli","Ikkinchi hosila nol"],0,"Statsionar nuqta."],
["Statsionar nuqtada Gesse matritsasi manfiy aniqlangan bo'lsa:",["Lokal maksimum","Lokal minimum","Egar nuqta","Ekstremum yo'q aniq"],0,"Funksiya \"tepalik\" shaklida."],
["3x₁² + 4x₁x₂ + x₂² formaning matritsasidagi a₁₂ elementi:",null,"2","Aralash had koeffitsienti 4 teng ikkiga bo'linadi."],
["D = f<sub>xx</sub>f<sub>yy</sub> − f<sub>xy</sub>² &lt; 0 bo'lsa, statsionar nuqta:",["Egar nuqta (ekstremum yo'q)","Minimum","Maksimum","Global minimum"],0,"Gesse matritsasi noaniq."]
],o:[]},
{t:"Shartli ekstremum masalalari",sub:"Shartli ekstremum, yechish usullari, Lagranj ko'paytuvchilari, iqtisodiy qo'llanish",
th:`<ul><li><b>Shartli ekstremum</b>: f(x, y) ni g(x, y) = c cheklovi ostida max/min qilish (masalan, byudjet cheklovida naflilik).</li>
<li>Usullar: <b>o'rniga qo'yish</b> (cheklovdan bitta o'zgaruvchini ifodalash) va <b>Lagranj ko'paytuvchilari</b>.</li>
<li><b>Lagranj funksiyasi</b>: L = f(x, y) + λ(c − g(x, y)). Zaruriy shartlar: L'<sub>x</sub> = 0, L'<sub>y</sub> = 0, L'<sub>λ</sub> = 0.</li>
<li>Yetarli shart — chegaralangan Gesse matritsasi determinanti ishorasi.</li>
<li><b>λ ning iqtisodiy ma'nosi</b>: cheklov (resurs, byudjet) 1 birlik oshsa, maqsad funksiyasi optimal qiymati taxminan λ ga o'zgaradi — resursning soya narxi (masalan, pulning me'yoriy nafliligi).</li>
<li>Iqtisodiy qo'llanish: iste'molchi optimumi (MU<sub>x</sub>/P<sub>x</sub> = MU<sub>y</sub>/P<sub>y</sub> = λ), xarajatni minimallashtirish, foydani maksimallashtirish.</li></ul>`,
q:[
["x + y = 10 shartida f = xy ning maksimal qiymati:",null,"25","x = y = 5 → 25."],
["Lagranj funksiyasi:",["L = f + λ(c − g)","L = f · g","L = f − g","L = λf"],0,"Cheklovni ko'paytuvchi bilan maqsad funksiyasiga qo'shish."],
["λ (Lagranj ko'paytuvchisi) ning iqtisodiy ma'nosi:",["Cheklov 1 birlik oshganda optimal qiymat o'zgarishi (soya narx)","Mahsulot narxi","Foiz stavkasi","Xarajat"],0,"Masalan, byudjet 1 so'm oshganda naflilik o'sishi."],
["Shartli ekstremumning zaruriy shartlari:",["L'<sub>x</sub> = 0, L'<sub>y</sub> = 0, L'<sub>λ</sub> = 0","f'<sub>x</sub> = 0 faqat","g = 0 faqat","λ = 0"],0,"Oxirgisi — cheklovning o'zi."],
["Iste'molchi optimumi Lagranj usulida:",["MU<sub>x</sub>/P<sub>x</sub> = MU<sub>y</sub>/P<sub>y</sub> = λ","MU<sub>x</sub> = MU<sub>y</sub>","P<sub>x</sub> = P<sub>y</sub>","λ = 0"],0,"λ — pulning me'yoriy nafliligi."],
["x + y = 8 shartida f = x² + y² ning minimal qiymati:",null,"32","x = y = 4 → 16 + 16 = 32."],
["Bitta cheklovli ikki o'zgaruvchili masalani boshqa qanday yechish mumkin?",["Cheklovdan bitta o'zgaruvchini ifodalab, o'rniga qo'yish","Faqat simpleks bilan","Potensiallar usuli","Venger usuli"],0,"Masala bir o'zgaruvchili shartsiz ekstremumga keladi."],
["Chegaralangan (bordered) Gesse matritsasi nima uchun ishlatiladi?",["Shartli ekstremumning yetarli shartini tekshirish uchun","Rangni topish uchun","Transport masalasi uchun","Teskari matritsa uchun"],0,"Max yoki min ekanini aniqlaydi."]
],o:[]}
]});
