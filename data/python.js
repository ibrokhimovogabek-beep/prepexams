PX.add({
id:"py", name:"Python-dasturlash asoslari", short:"Python", code:"PYTH13C6", teacher:"Python kafedrasi", credits:"4 ECTS",
note:"Yakuniy nazorat — kompyuterda test: bazadan 60 ta savol. ON-1 va ON-2 ham test shaklida.",
controls:[
 {k:"JN-1",week:3,ball:7,form:"Amaliy",topics:[1,2,3],desc:"Masala yechish algoritmi va uning Python dasturini yaratish."},
 {k:"ON-1",week:5,ball:15,form:"Test",topics:[1,2,3,4,5,6,7],desc:"1–7 mavzular bo'yicha test."},
 {k:"JN-2",week:6,ball:7,form:"Amaliy",topics:[13],desc:"NumPy bilan matematik va statistik usullar — masala va dastur."},
 {k:"JN-3",week:8,ball:6,form:"Amaliy",topics:[14,15],desc:"Pandas: DataFrame, filtrlash, iqtisodiy hisob-kitob."},
 {k:"ON-2",week:9,ball:15,form:"Test",topics:[8,9,10,11,12,13,14,15],desc:"8–15 mavzular bo'yicha test."},
 {k:"JN-4",week:10,ball:10,form:"Faollik",topics:[],desc:"Amaliy mashg'ulotlardagi faollik; har sababsiz qoldirilgan dars uchun −1 ball."},
 {k:"YN",week:16,date:"2026-12-01",ball:40,form:"Kompyuter testi",topics:"all",desc:"Test bazasidan 60 ta savol."}
],
topics:[
{t:"Python tili va dasturlash muhiti. O'zgaruvchilar",sub:"Python tavsifi, muhit, ishga tushirish, o'zgaruvchilar va ular ustida amallar",
th:`<ul><li><b>Python</b> — yuqori darajali, interpretatsiya qilinadigan, dinamik tiplashgan til (G. van Rossum, 1991). Muhitlar: IDLE, VS Code, PyCharm, Jupyter, Google Colab.</li>
<li>Bloklar <b>chekinish</b> (odatda 4 bo'sh joy) bilan ajratiladi, qavslar emas.</li>
<li><b>O'zgaruvchi</b> qiymatga berilgan nom: <code>x = 5</code>. Turi qiymatdan aniqlanadi; keyin boshqa turdagi qiymat berish mumkin.</li>
<li>Nomlash: harf yoki <code>_</code> bilan boshlanadi, raqam bilan emas; katta-kichik harf farqlanadi (<code>Ism</code> ≠ <code>ism</code>); kalit so'zlar (<code>if</code>, <code>for</code>, <code>class</code>) ishlatilmaydi.</li>
<li><code>print()</code> — chiqarish, <code>input()</code> — kiritish (doim <b>str</b> qaytaradi), <code>type()</code> — tur, <code>#</code> — izoh.</li>
<li>Bir nechta qiymat berish: <code>a, b = 1, 2</code>; almashtirish: <code>a, b = b, a</code>.</li></ul>`,
q:[
["`input()` funksiyasi qaysi turdagi qiymat qaytaradi?",["`str`","`int`","Kiritilgan qiymatga qarab","`float`"],0,"Son kerak bo'lsa `int(input())` qilinadi."],
["Qaysi o'zgaruvchi nomi XATO?",["`2ism`","`ism2`","`_ism`","`ism_2`"],0,"Nom raqam bilan boshlana olmaydi."],
["Python'da kod bloklari nima bilan ajratiladi?",["Chekinish (indentatsiya)","Figurali qavslar `{}`","`begin`/`end`","Nuqtali vergul"],0,"Chekinish xatosi `IndentationError` beradi."],
["`a, b = 3, 7` keyin `a, b = b, a`. `a` nimaga teng?",["`7`","`3`","`(7, 3)`","Xato"],0,"Kortej orqali qiymatlar almashadi."],
["`x = 5` keyin `x = \"salom\"`. Bu kod:",["Xatosiz ishlaydi — dinamik tiplash","`TypeError` beradi","`SyntaxError` beradi","`x` ni 5 qoldiradi"],0,"Python'da o'zgaruvchi turi qiymat bilan birga o'zgaradi."],
["Bir qatorli izoh qaysi belgi bilan boshlanadi?",["`#`","`//`","`/*`","`--`"],0,"Ko'p qatorli matn uchun uch qo'shtirnoq ishlatiladi."],
["`Ism` va `ism` o'zgaruvchilari:",["Ikki xil o'zgaruvchi","Bir xil o'zgaruvchi","Xato beradi","Faqat funksiyada farqlanadi"],0,"Python katta-kichik harfni farqlaydi."],
["`type(3.0)` natijasi:",["`<class 'float'>`","`<class 'int'>`","`<class 'str'>`","`<class 'number'>`"],0,"Nuqtali son — `float`."]
],o:[]},
{t:"Ma'lumot turlari va operatorlar",sub:"Sonlar, matnlar, mantiqiy qiymatlar; arifmetik, taqqoslash, mantiqiy operatorlar",
th:`<ul><li>Asosiy turlar: <code>int</code>, <code>float</code>, <code>complex</code>, <code>str</code>, <code>bool</code> (True/False), <code>NoneType</code>.</li>
<li>Tur o'zgartirish: <code>int("5")</code>, <code>float(2)</code>, <code>str(3.5)</code>, <code>bool(0)</code> → False. <code>int(3.9)</code> → 3 (kesadi, yaxlitlamaydi).</li>
<li>Arifmetik: <code>+ - * /</code> (doim float), <code>//</code> (butun bo'lish, pastga yaxlitlaydi), <code>%</code> (qoldiq), <code>**</code> (daraja).</li>
<li>Taqqoslash: <code>== != &lt; &gt; &lt;= &gt;=</code>. Mantiqiy: <code>and</code>, <code>or</code>, <code>not</code>. Tegishlilik: <code>in</code>. Ayniylik: <code>is</code>.</li>
<li>Ustuvorlik: <code>**</code> → <code>* / // %</code> → <code>+ -</code> → taqqoslash → <code>not</code> → <code>and</code> → <code>or</code>. <code>**</code> o'ngdan chapga: <code>2**3**2</code> = 512.</li>
<li>Qisqartma: <code>x += 1</code>. Bo'sh qiymatlar (<code>0, "", [], None</code>) — False.</li></ul>`,
q:[
["`7 // 2` natijasi:",["`3`","`3.5`","`4`","`1`"],0,"Butun bo'lish kasr qismini tashlaydi."],
["`-7 // 2` natijasi:",["`-4`","`-3`","`-3.5`","`3`"],0,"`//` pastga (manfiy cheksizlik tomon) yaxlitlaydi."],
["`10 % 3` natijasi:",["`1`","`3`","`0`","`3.33`"],0,"Qoldiq."],
["`2 ** 3 ** 2` natijasi:",["`512`","`64`","`36`","`12`"],0,"Daraja o'ngdan hisoblanadi: 3**2 = 9, 2**9 = 512."],
["`type(6 / 3)` natijasi:",["`float`","`int`","`str`","`bool`"],0,"`/` doim float qaytaradi: 2.0."],
["`int(3.9)` natijasi:",["`3`","`4`","`3.9`","Xato"],0,"`int()` kasr qismini kesadi, yaxlitlamaydi."],
["`True and not False or False` natijasi:",["`True`","`False`","`None`","Xato"],0,"`not False` = True → True and True = True → True or False = True."],
["`bool(\"0\")` natijasi:",["`True`","`False`","`0`","Xato"],0,"Bo'sh bo'lmagan har qanday satr True, hatto \"0\" ham."],
["`print(3 + 4 * 2)` nima chiqaradi?",null,"11","Avval ko'paytirish: 4*2 = 8, keyin 3 + 8 = 11."]
],o:[]},
{t:"Tarmoqlanuvchi va takrorlanish operatorlari",sub:"if, if-else, if-elif-else; for va while sikllari, break, continue",
th:`<ul><li><b>Shart</b>: <code>if shart:</code> … <code>elif</code> … <code>else:</code>. Faqat birinchi rost shart bloki bajariladi.</li>
<li>Uchlik operator: <code>x = "juft" if n % 2 == 0 else "toq"</code>.</li>
<li><b>for</b> — ketma-ketlik bo'ylab: <code>for i in range(5)</code> → 0..4. <code>range(start, stop, step)</code> — stop kirmaydi; <code>range(10, 0, -2)</code> → 10, 8, 6, 4, 2.</li>
<li><b>while</b> — shart rost ekan takrorlanadi (cheksiz siklga ehtiyot bo'ling).</li>
<li><code>break</code> — sikldan butunlay chiqish; <code>continue</code> — joriy qadamni o'tkazib yuborish; <code>pass</code> — hech narsa qilmaslik.</li>
<li><code>for ... else</code>: <code>else</code> bloki sikl <code>break</code>siz tugaganda bajariladi.</li></ul>`,
q:[
["`list(range(1, 10, 3))` natijasi:",["`[1, 4, 7]`","`[1, 4, 7, 10]`","`[1, 3, 6, 9]`","`[3, 6, 9]`"],0,"Stop (10) kirmaydi."],
["`range(5)` qaysi sonlarni beradi?",["0, 1, 2, 3, 4","1, 2, 3, 4, 5","0, 1, 2, 3, 4, 5","1, 2, 3, 4"],0,"0 dan boshlanadi, 5 kirmaydi."],
["Sikldan butunlay chiqish operatori:",["`break`","`continue`","`pass`","`exit`"],0,"`continue` faqat joriy iteratsiyani o'tkazib yuboradi."],
["`s = 0` va `for i in range(1, 5): s += i`. `s` = ?",null,"10","1 + 2 + 3 + 4 = 10."],
["`n = 7; print(\"juft\" if n % 2 == 0 else \"toq\")` natijasi:",["`toq`","`juft`","`7`","Xato"],0,"7 % 2 = 1."],
["Quyidagi kod necha marta \"Salom\" chiqaradi? `i = 0` / `while i < 3: print(\"Salom\"); i += 1`",null,"3","i = 0, 1, 2 da bajariladi."],
["`for i in range(5): if i == 3: continue; print(i)` qaysi sonlarni chiqaradi?",["0 1 2 4","0 1 2","0 1 2 3 4","3"],0,"i = 3 da `print` o'tkazib yuboriladi."],
["`x = 15`: `if x > 10: print(\"A\") elif x > 5: print(\"B\") else: print(\"C\")` natijasi:",["`A`","`B`","`A` va `B`","`C`"],0,"Birinchi rost shart bajariladi, qolganlari tekshirilmaydi."]
],o:[]},
{t:"Satrlar bilan ishlash. String funksiyalari",sub:"Satr yaratish, indekslash, kesish (slicing), len, upper, lower, split, join, replace",
th:`<ul><li>Satr — o'zgarmas (immutable) belgilar ketma-ketligi: <code>'...'</code>, <code>"..."</code>, <code>"""..."""</code>.</li>
<li>Indeks 0 dan: <code>s[0]</code> birinchi, <code>s[-1]</code> oxirgi belgi.</li>
<li><b>Kesish</b>: <code>s[start:stop:step]</code> — stop kirmaydi. <code>s[::-1]</code> — teskari satr.</li>
<li>Amallar: <code>+</code> (qo'shish), <code>*</code> (takrorlash), <code>in</code>, <code>len()</code>.</li>
<li>Metodlar: <code>upper()</code>, <code>lower()</code>, <code>title()</code>, <code>strip()</code>, <code>replace(a, b)</code>, <code>split(sep)</code> → ro'yxat, <code>"-".join(list)</code> → satr, <code>find()</code> (yo'q bo'lsa −1), <code>count()</code>, <code>startswith()</code>, <code>isdigit()</code>.</li>
<li>Formatlash: <code>f"Ism: {ism}, yosh: {yosh}"</code>, <code>f"{x:.2f}"</code>.</li></ul>`,
q:[
["`\"abcdef\"[1:4]` natijasi:",["`\"bcd\"`","`\"abcd\"`","`\"bcde\"`","`\"cde\"`"],0,"4-indeks kirmaydi."],
["`\"Python\"[-1]` natijasi:",["`\"n\"`","`\"P\"`","`\"o\"`","Xato"],0,"Manfiy indeks oxiridan sanaydi."],
["`\"salom\"[::-1]` natijasi:",["`\"molas\"`","`\"salom\"`","`\"s\"`","Xato"],0,"Qadam −1 — teskari tartib."],
["`\"a,b,c\".split(\",\")` natijasi:",["`['a', 'b', 'c']`","`'abc'`","`('a', 'b', 'c')`","`['a,b,c']`"],0,"`split` ro'yxat qaytaradi."],
["`\"-\".join([\"2026\", \"11\", \"25\"])` natijasi:",["`\"2026-11-25\"`","`[\"2026-11-25\"]`","`\"20261125\"`","Xato"],0,"Ajratgich — `join` chaqirilgan satr."],
["`len(\"Toshkent\")` = ?",null,"8","8 ta belgi."],
["`s = \"abc\"; s[0] = \"X\"` natijasi:",["`TypeError` — satr o'zgarmas","`\"Xbc\"`","`\"X\"`","`\"abcX\"`"],0,"Yangi satr yaratish kerak: `\"X\" + s[1:]`."],
["`\"ko'k\".replace(\"k\", \"K\")` natijasi:",["`\"Ko'K\"`","`\"Ko'k\"`","`\"ko'K\"`","`\"K\"`"],0,"`replace` barcha moslarni almashtiradi."],
["`\"banan\".count(\"a\")` = ?",null,"2","\"a\" ikki marta uchraydi."]
],o:[]},
{t:"Ro'yxatlar (list) va to'plamlar (set)",sub:"List yaratish, murojaat, append, remove, sort, len; set, add, discard, union, intersection",
th:`<ul><li><b>list</b> — tartiblangan, o'zgaruvchan: <code>a = [3, 1, 2]</code>. Indekslash va kesish satr kabi.</li>
<li>Metodlar: <code>append(x)</code> (oxiriga), <code>insert(i, x)</code>, <code>extend(lst)</code>, <code>remove(x)</code> (birinchi mosini), <code>pop()</code> (oxirgisini olib qaytaradi), <code>sort()</code> (joyida, None qaytaradi), <code>reverse()</code>, <code>index()</code>, <code>count()</code>.</li>
<li><code>sorted(a)</code> — yangi tartiblangan ro'yxat qaytaradi; <code>sum()</code>, <code>min()</code>, <code>max()</code>, <code>len()</code>.</li>
<li>List comprehension: <code>[x**2 for x in range(5) if x % 2 == 0]</code>.</li>
<li><b>set</b> — tartibsiz, takrorlanmas elementlar: <code>{1, 2, 3}</code>; bo'sh to'plam — <code>set()</code> (<code>{}</code> — bo'sh lug'at!).</li>
<li>Set metodlari: <code>add()</code>, <code>discard()</code> (yo'q bo'lsa xato bermaydi), <code>remove()</code> (yo'q bo'lsa KeyError), <code>union()</code> |, <code>intersection()</code> &amp;, <code>difference()</code> −.</li></ul>`,
q:[
["`a = [1, 2]; a.append(3)`. `a` = ?",["`[1, 2, 3]`","`[3, 1, 2]`","`[1, 2, [3]]`","`None`"],0,"`append` oxiriga qo'shadi."],
["`len({1, 1, 2, 2, 3})` = ?",null,"3","To'plam takrorlarni saqlamaydi: {1, 2, 3}."],
["`a = [3, 1, 2]; b = a.sort()`. `b` = ?",["`None`","`[1, 2, 3]`","`[3, 1, 2]`","Xato"],0,"`sort()` joyida tartiblaydi va None qaytaradi. Yangi ro'yxat uchun `sorted(a)`."],
["`[x * 2 for x in range(3)]` natijasi:",["`[0, 2, 4]`","`[2, 4, 6]`","`[0, 1, 2]`","`[1, 2, 3]`"],0,"0, 1, 2 har biri 2 ga ko'paytiriladi."],
["`{1, 2, 3} & {2, 3, 4}` natijasi:",["`{2, 3}`","`{1, 2, 3, 4}`","`{1, 4}`","`{1}`"],0,"`&` — kesishma."],
["Bo'sh to'plam qanday yaratiladi?",["`set()`","`{}`","`[]`","`()`"],0,"`{}` bo'sh lug'at (dict) yaratadi."],
["`s = {1, 2}; s.discard(5)` natijasi:",["Xatosiz, `s` o'zgarmaydi","`KeyError`","`{1, 2, 5}`","`None` xatosi"],0,"`remove(5)` esa KeyError beradi."],
["`a = [10, 20, 30]; a.pop()` qaytaradigan qiymat:",["`30`","`10`","`[10, 20]`","`None`"],0,"Oxirgi elementni olib tashlaydi va qaytaradi."],
["`sum([2, 4, 6]) / len([2, 4, 6])` = ?",null,"4","12 / 3 = 4.0."]
],o:[]},
{t:"Massivlar: bir va ikki o'lchovli",sub:"Bir o'lchovli massiv, qo'shish, o'chirish, qidirish, saralash; ikki o'lchovli massiv, indeks, satr va ustun bo'yicha amallar",
th:`<ul><li>Python'da massiv vazifasini odatda <b>ro'yxat</b> bajaradi (yoki <code>array</code> moduli / NumPy).</li>
<li>Qidirish: <code>x in a</code>, <code>a.index(x)</code>; chiziqli qidiruv — sikl bilan.</li>
<li>Saralash: <code>a.sort()</code>, <code>a.sort(reverse=True)</code>, <code>sorted(a, key=...)</code>. Algoritmlar: pufakcha (bubble), tanlash.</li>
<li><b>Ikki o'lchovli</b> massiv — ro'yxatlar ro'yxati: <code>m = [[1, 2, 3], [4, 5, 6]]</code>. Murojaat: <code>m[satr][ustun]</code>; <code>m[1][2]</code> → 6.</li>
<li>Satrlar soni <code>len(m)</code>, ustunlar <code>len(m[0])</code>. Ichma-ich sikl: <code>for r in m: for x in r:</code>.</li>
<li>Ehtiyot: <code>[[0] * 3] * 2</code> — bir xil ichki ro'yxatga ikki havola! To'g'risi: <code>[[0] * 3 for _ in range(2)]</code>.</li>
<li>Ustun yig'indisi: <code>sum(r[j] for r in m)</code>; transpozitsiya: <code>list(zip(*m))</code>.</li></ul>`,
q:[
["`m = [[1, 2, 3], [4, 5, 6]]`. `m[1][2]` = ?",null,"6","1-satr (ikkinchi), 2-ustun (uchinchi)."],
["`m = [[1, 2], [3, 4], [5, 6]]`. `len(m)` va `len(m[0])`:",["3 va 2","2 va 3","6 va 2","3 va 3"],0,"3 satr, har birida 2 ustun."],
["`a = [5, 2, 8]; a.sort(reverse=True)`. `a` = ?",["`[8, 5, 2]`","`[2, 5, 8]`","`[5, 2, 8]`","`None`"],0,"Kamayish tartibi."],
["`m = [[1, 2], [3, 4]]`. Barcha elementlar yig'indisi: `sum(sum(r) for r in m)` = ?",null,"10","3 + 7 = 10."],
["`a = [[0] * 2] * 2; a[0][0] = 9`. `a` = ?",["`[[9, 0], [9, 0]]`","`[[9, 0], [0, 0]]`","`[[9, 9], [0, 0]]`","Xato"],0,"Ikkala satr bitta ro'yxatga havola — biri o'zgarsa ikkalasi o'zgaradi."],
["`[r[0] for r in [[1, 2], [3, 4], [5, 6]]]` natijasi:",["`[1, 3, 5]`","`[1, 2]`","`[2, 4, 6]`","`[[1], [3], [5]]`"],0,"Har satrning 0-ustuni — birinchi ustun."],
["`a = [4, 7, 1]`. `a.index(7)` = ?",null,"1","7 ning indeksi 1."],
["Ro'yxatda element bor-yo'qligini tekshirish:",["`x in a`","`a.has(x)`","`a.contains(x)`","`exists(a, x)`"],0,"`in` operatori True yoki False qaytaradi."]
],o:[]},
{t:"Funksiyalar. Rekursiv funksiyalar",sub:"def, parametrlar, return, standart va ixtiyoriy argumentlar, rekursiya: faktorial, Fibonachchi",
th:`<ul><li>Funksiya: <code>def nom(a, b=2): ... return natija</code>. <code>return</code> bo'lmasa — <code>None</code> qaytadi.</li>
<li>Argumentlar: pozitsion, nomlangan (<code>f(b=3, a=1)</code>), standart qiymatli, <code>*args</code> (kortej), <code>**kwargs</code> (lug'at).</li>
<li>Ko'rinish sohasi: lokal va global (<code>global x</code>).</li>
<li><code>lambda x: x + 1</code> — qisqa anonim funksiya; <code>map</code>, <code>filter</code>, <code>sorted(key=...)</code> bilan ishlatiladi.</li>
<li><b>Rekursiya</b> — funksiya o'zini chaqiradi. Shart: <b>asosiy holat</b> (to'xtash) bo'lishi kerak, aks holda <code>RecursionError</code>.</li>
<li>Faktorial: <code>def f(n): return 1 if n &lt;= 1 else n * f(n - 1)</code>. Fibonachchi: F(0)=0, F(1)=1, F(n)=F(n−1)+F(n−2).</li></ul>`,
q:[
["Python'da funksiya qaysi kalit so'z bilan e'lon qilinadi?",["`def`","`function`","`func`","`lambda` faqat"],0,"`def nom():`"],
["`return` operatori bo'lmagan funksiya nima qaytaradi?",["`None`","`0`","`\"\"`","Xato"],0,"Avtomatik None."],
["`def f(a, b=2): return a * b`. `f(5)` = ?",null,"10","b standart qiymat 2 ni oladi."],
["`(lambda x: x + 1)(2)` = ?",null,"3","lambda 2 ni oladi va 3 qaytaradi."],
["`def f(n): return 1 if n <= 1 else n * f(n - 1)`. `f(5)` = ?",null,"120","5! = 5·4·3·2·1 = 120."],
["Rekursiv funksiyada asosiy holat (base case) nima uchun kerak?",["Rekursiyani to'xtatish uchun","Tezlikni oshirish uchun","Global o'zgaruvchi uchun","Majburiy emas"],0,"Aks holda cheksiz chaqiruv — RecursionError."],
["Fibonachchi: F(0)=0, F(1)=1. F(6) = ?",null,"8","0, 1, 1, 2, 3, 5, 8."],
["`def f(*args): return len(args)`. `f(1, 2, 3)` = ?",null,"3","`args` — kortej (1, 2, 3)."]
],o:[]},
{t:"Windows OT fayllari bilan ishlash",sub:"open, read, write, close, with; os va shutil modullari, kataloglar, filtrlash",
th:`<ul><li><code>f = open("fayl.txt", "r", encoding="utf-8")</code>. Rejimlar: <code>"r"</code> o'qish, <code>"w"</code> yozish (eski mazmun o'chadi), <code>"a"</code> oxiriga qo'shish, <code>"x"</code> yangi yaratish, <code>"b"</code> ikkilik.</li>
<li><code>read()</code> — hammasi, <code>readline()</code> — bitta qator, <code>readlines()</code> — qatorlar ro'yxati; <code>write(s)</code>, <code>close()</code>.</li>
<li><b>with</b> bloki faylni avtomatik yopadi: <code>with open(...) as f:</code>.</li>
<li>Mavjud bo'lmagan faylni <code>"r"</code> bilan ochish — <code>FileNotFoundError</code>.</li>
<li><b>os</b>: <code>os.listdir()</code>, <code>os.mkdir()</code>, <code>os.rename()</code>, <code>os.remove()</code>, <code>os.path.exists()</code>, <code>os.path.join()</code>, <code>os.getcwd()</code>.</li>
<li><b>shutil</b>: <code>shutil.copy()</code>, <code>shutil.move()</code>, <code>shutil.rmtree()</code>. Kengaytma bo'yicha filtr: <code>[f for f in os.listdir() if f.endswith(".txt")]</code>.</li></ul>`,
q:[
["Faylning eski mazmunini o'chirib, yangidan yozish rejimi:",["`\"w\"`","`\"a\"`","`\"r\"`","`\"x\"`"],0,"`\"a\"` esa oxiriga qo'shadi."],
["`with open(...) as f:` blokining afzalligi:",["Fayl avtomatik yopiladi","Fayl tezroq o'qiladi","Faqat o'qish mumkin","Fayl o'chiriladi"],0,"Xato bo'lsa ham fayl yopiladi."],
["Mavjud bo'lmagan faylni `\"r\"` rejimida ochish:",["`FileNotFoundError`","Bo'sh fayl yaratiladi","`None` qaytaradi","`ValueError`"],0,"O'qish uchun fayl mavjud bo'lishi shart."],
["Katalogdagi fayllar ro'yxatini qaytaruvchi funksiya:",["`os.listdir()`","`os.files()`","`shutil.list()`","`open.dir()`"],0,"Fayl va papka nomlari ro'yxati."],
["Faylni nusxalash uchun:",["`shutil.copy()`","`os.copy()`","`file.copy()`","`os.rename()`"],0,"`os.rename()` — nomini o'zgartirish yoki ko'chirish."],
["`readlines()` nima qaytaradi?",["Qatorlar ro'yxatini","Bitta satrni","Birinchi qatorni","Fayl hajmini"],0,"Har bir element — `\\n` bilan tugaydigan qator."],
["Fayl mavjudligini tekshirish:",["`os.path.exists(nom)`","`os.exists(nom)`","`open(nom).exists()`","`shutil.check(nom)`"],0,"True yoki False qaytaradi."],
["Faqat `.txt` fayllarni tanlash ifodasi:",["`[f for f in os.listdir() if f.endswith(\".txt\")]`","`os.listdir(\".txt\")`","`os.filter(\"txt\")`","`shutil.txt()`"],0,"`endswith` kengaytmani tekshiradi."]
],o:[]},
{t:"Python standart kutubxonasi",sub:"Standart kutubxona tarkibi; math, datetime, os, sys, random; import usullari",
th:`<ul><li><b>Standart kutubxona</b> — Python bilan birga keladigan modullar (\"batteries included\"): o'rnatish shart emas.</li>
<li>Import: <code>import math</code> → <code>math.sqrt(16)</code>; <code>from math import sqrt</code> → <code>sqrt(16)</code>; <code>import numpy as np</code> (taxallus); <code>from math import *</code> (tavsiya etilmaydi).</li>
<li><b>sys</b>: <code>sys.argv</code> (buyruq qatori argumentlari), <code>sys.version</code>, <code>sys.exit()</code>, <code>sys.path</code>.</li>
<li><b>os</b> — operatsion tizim bilan ishlash; <b>datetime</b> — sana va vaqt; <b>random</b> — tasodifiy sonlar; <b>math</b> — matematika; <b>statistics</b>, <b>json</b>, <b>csv</b>, <b>collections</b>.</li>
<li>Uchinchi tomon paketlari (NumPy, Pandas) <code>pip install</code> bilan o'rnatiladi.</li></ul>`,
q:[
["`from math import sqrt` dan keyin to'g'ri chaqiruv:",["`sqrt(16)`","`math.sqrt(16)`","`math(sqrt(16))`","`sqrt.math(16)`"],0,"`from ... import` nomni to'g'ridan-to'g'ri olib keladi."],
["Buyruq qatori argumentlari qaysi o'zgaruvchida?",["`sys.argv`","`os.args`","`sys.path`","`os.argv`"],0,"`sys.argv[0]` — skript nomi."],
["`import numpy as np` qatoridagi `np`:",["Taxallus (alias)","Yangi modul","Funksiya","Xato"],0,"Keyin `np.array(...)` deb yoziladi."],
["Standart kutubxonaga KIRMAYDIGAN modul:",["`pandas`","`math`","`datetime`","`random`"],0,"Pandas `pip install pandas` bilan o'rnatiladi."],
["Python versiyasini bilish:",["`sys.version`","`os.version`","`python.ver()`","`math.version`"],0,"Masalan '3.12.1 ...'."],
["`import math; print(math.floor(3.7))` natijasi:",null,"3","`floor` pastga yaxlitlaydi."],
["Uchinchi tomon paketini o'rnatish buyrug'i:",["`pip install paket`","`import install paket`","`python get paket`","`sys.install(paket)`"],0,"Terminalda bajariladi."],
["`from math import *` nima uchun tavsiya etilmaydi?",["Nomlar to'qnashuvi va kod tushunarsizligi","Ishlamaydi","Sekin ishlaydi","Faqat Windows'da ishlaydi"],0,"Qaysi funksiya qayerdan kelgani noaniq bo'ladi."]
],o:[]},
{t:"math, datetime va random modullari",sub:"Matematik funksiyalar, sana va vaqt, formatlash, tasodifiy sonlar",
th:`<ul><li><b>math</b>: <code>sqrt</code>, <code>pow</code>, <code>ceil</code> (yuqoriga), <code>floor</code> (pastga), <code>factorial</code>, <code>log</code>, <code>log10</code>, <code>sin/cos</code> (radian), <code>pi</code>, <code>e</code>, <code>gcd</code>. O'rnatilgan <code>round(2.5)</code> → 2 (bankcha yaxlitlash), <code>abs()</code>.</li>
<li><b>datetime</b>: <code>date.today()</code>, <code>datetime.now()</code>, <code>timedelta(days=7)</code>; sanalar ayirmasi — <code>timedelta</code>; formatlash <code>strftime("%d.%m.%Y")</code>, matndan o'qish <code>strptime</code>.</li>
<li><b>random</b>: <code>random()</code> [0, 1), <code>randint(a, b)</code> — a va b <b>kiradi</b>, <code>uniform(a, b)</code>, <code>choice(lst)</code>, <code>shuffle(lst)</code> (joyida), <code>sample(lst, k)</code>, <code>seed(n)</code> — takrorlanuvchi natija.</li></ul>`,
q:[
["`math.ceil(4.1)` = ?",null,"5","`ceil` yuqoriga yaxlitlaydi."],
["`random.randint(1, 6)` qaysi qiymatlarni berishi mumkin?",["1 dan 6 gacha (6 ham kiradi)","1 dan 5 gacha","0 dan 6 gacha","Faqat 1 yoki 6"],0,"`randint` da ikkala chegara kiradi (`range`dan farqli)."],
["`math.factorial(4)` = ?",null,"24","4! = 24."],
["Ro'yxat elementlarini joyida aralashtirish:",["`random.shuffle(lst)`","`random.choice(lst)`","`random.sample(lst)`","`lst.random()`"],0,"`shuffle` None qaytaradi, ro'yxatni o'zgartiradi."],
["Bugungi sanani olish:",["`date.today()`","`date.now.day()`","`datetime.today.date`","`time.date()`"],0,"`from datetime import date`."],
["`date(2026, 12, 8) - date(2026, 11, 25)` natijasining `.days` qiymati:",null,"13","25-noyabrdan 8-dekabrgacha 13 kun."],
["`round(2.5)` natijasi:",["`2`","`3`","`2.5`","Xato"],0,"Python \"bankcha\" yaxlitlaydi: .5 da eng yaqin juft songa."],
["`random.seed(42)` nima uchun ishlatiladi?",["Tasodifiy sonlar ketma-ketligini takrorlanuvchi qilish","Tezlikni oshirish","Butun son berish","Xatolarni yashirish"],0,"Bir xil seed — bir xil natijalar."]
],o:[]},
{t:"Sinflar va obyektlar",sub:"class, atributlar, __init__, self, metodlar, obyekt yaratish",
th:`<ul><li><b>Sinf</b> — obyektlar uchun shablon; <b>obyekt</b> — sinf nusxasi (instance).</li>
<li><code>class Talaba:</code> / <code>def __init__(self, ism, ball): self.ism = ism; self.ball = ball</code> — konstruktor, obyekt yaratilganda chaqiriladi.</li>
<li><b>self</b> — joriy obyektga havola, metodning birinchi parametri.</li>
<li>Obyekt yaratish: <code>t = Talaba("Ali", 85)</code>; murojaat: <code>t.ism</code>, <code>t.baho()</code>.</li>
<li>Nusxa atributi (har obyektda alohida) va sinf atributi (hammaga umumiy).</li>
<li>Maxsus metodlar: <code>__str__</code> (print uchun), <code>__len__</code>, <code>__eq__</code>. Inkapsulyatsiya: <code>_himoyalangan</code>, <code>__yopiq</code>.</li></ul>`,
q:[
["Obyekt yaratilganda avtomatik chaqiriladigan metod:",["`__init__`","`__str__`","`__call__`","`__new_obj__`"],0,"Konstruktor — atributlarni boshlang'ich qiymatlaydi."],
["Metoddagi `self` parametri:",["Joriy obyektga havola","Sinf nomi","Global o'zgaruvchi","Majburiy emas"],0,"Python uni avtomatik uzatadi."],
["`class A: x = 5` / `a = A(); b = A()`. `x` qanday atribut?",["Sinf atributi — ikkala obyekt uchun umumiy","Nusxa atributi","Lokal o'zgaruvchi","Xato"],0,"`self.x` orqali berilsa — nusxa atributi bo'lardi."],
["`print(obj)` chaqirilganda qaysi maxsus metod ishlatiladi?",["`__str__`","`__init__`","`__len__`","`__print__`"],0,"Obyektning matn ko'rinishini qaytaradi."],
["`class T: def __init__(self, n): self.n = n` / `t = T(7)`. `t.n` = ?",null,"7","Konstruktor 7 ni `self.n` ga yozadi."],
["Sinf va obyektning farqi:",["Sinf — shablon, obyekt — uning aniq nusxasi","Farqi yo'q","Obyekt — shablon","Sinf faqat funksiya"],0,"Masalan, `Talaba` sinfi va `Ali` obyekti."],
["Atribut nomi oldidagi ikki pastki chiziq (`__ball`) nimani bildiradi?",["Yopiq (private) atribut — nom o'zgartiriladi","Sinf atributi","Maxsus metod","Statik metod"],0,"Inkapsulyatsiya: tashqaridan to'g'ridan-to'g'ri murojaat qiyinlashadi."],
["`class K: def salom(self): return \"Hi\"` / `K().salom()` = ?",["`\"Hi\"`","`None`","Xato — self berilmagan","`K`"],0,"`self` avtomatik uzatiladi."]
],o:[]},
{t:"Vorislash. Ko'pmerosxo'rlik",sub:"Vorislash tushunchasi, asosiy va voris sinflar, super(), metodni qayta aniqlash, ko'p vorislik va MRO",
th:`<ul><li><b>Vorislash</b> — yangi sinf mavjud sinf xususiyat va metodlarini oladi: <code>class Talaba(Inson):</code>.</li>
<li><b>Ota (asosiy)</b> va <b>voris (bola)</b> sinf. Voris metodni <b>qayta aniqlashi</b> (override) mumkin — polimorfizm.</li>
<li><code>super().__init__(...)</code> — ota sinf konstruktorini chaqirish.</li>
<li><code>isinstance(obj, Sinf)</code>, <code>issubclass(B, A)</code>.</li>
<li><b>Ko'pmerosxo'rlik</b>: <code>class C(A, B):</code>. Metod qidirish tartibi — <b>MRO</b> (C3 algoritmi): avval C, keyin A, keyin B, keyin <code>object</code>. <code>C.__mro__</code> bilan ko'riladi.</li>
<li>Barcha sinflar oxir-oqibat <code>object</code> sinfidan meros oladi.</li></ul>`,
q:[
["`class B(A):` yozuvi nimani bildiradi?",["B sinfi A dan meros oladi","A sinfi B dan meros oladi","B va A bir xil","B — A ning obyekti"],0,"A — ota, B — voris."],
["Ota sinf konstruktorini chaqirish:",["`super().__init__()`","`parent.__init__()`","`self.super()`","`base()`"],0,"Voris konstruktorida ishlatiladi."],
["Voris sinfda ota metodini o'z versiyasi bilan almashtirish:",["Qayta aniqlash (override)","Ortiqcha yuklash (overload)","Inkapsulyatsiya","Abstraksiya"],0,"Polimorfizmning asosi."],
["`class C(A, B):` da ikkala ota ham `salom()` metodiga ega. `C().salom()` qaysini chaqiradi?",["A ning metodini","B ning metodini","Ikkalasini","Xato beradi"],0,"MRO: C → A → B → object."],
["Barcha Python sinflarining umumiy ajdodi:",["`object`","`type`","`base`","`class`"],0,"Python 3 da avtomatik."],
["`isinstance(Talaba(), Inson)` (Talaba Inson'dan meros olgan) natijasi:",["`True`","`False`","Xato","`None`"],0,"Voris obyekti ota sinf nusxasi ham hisoblanadi."],
["Metod qidirish tartibini ko'rish:",["`Sinf.__mro__`","`Sinf.__order__`","`Sinf.parents()`","`mro(Sinf)`"],0,"Yoki `Sinf.mro()`."],
["`class A: def f(self): return 1` / `class B(A): def f(self): return 2` / `B().f()` = ?",null,"2","B o'z f metodini qayta aniqlagan."]
],o:[]},
{t:"NumPy: matematik va statistik usullar",sub:"NumPy afzalliklari, massivlar, sum, mean, median, std, sqrt, numpy.random",
th:`<ul><li><b>NumPy</b> — tez sonli hisoblash kutubxonasi: <code>import numpy as np</code>. Massiv (<code>ndarray</code>) bir turdagi elementlardan iborat, vektorlashgan amallar sikldan ancha tez.</li>
<li>Yaratish: <code>np.array([1, 2, 3])</code>, <code>np.zeros((2, 3))</code>, <code>np.ones()</code>, <code>np.arange(0, 10, 2)</code>, <code>np.linspace(0, 1, 5)</code>.</li>
<li>Atributlar: <code>.shape</code>, <code>.ndim</code>, <code>.size</code>, <code>.dtype</code>; <code>.reshape()</code>.</li>
<li>Amallar elementma-element: <code>a * 2</code>, <code>a + b</code>; matritsa ko'paytmasi <code>a @ b</code> yoki <code>np.dot</code>.</li>
<li>Statistika: <code>np.sum</code>, <code>np.mean</code>, <code>np.median</code>, <code>np.std</code>, <code>np.var</code>, <code>np.min/max</code>, <code>np.sqrt</code>; <code>axis=0</code> — ustunlar, <code>axis=1</code> — satrlar bo'yicha.</li>
<li><b>np.random</b>: <code>rand</code>, <code>randint</code>, <code>normal(m, s, n)</code>, <code>choice</code>, <code>seed</code>.</li>
<li>Mantiqiy filtrlash: <code>a[a &gt; 2]</code>.</li></ul>`,
q:[
["`np.array([1, 2, 3]) * 2` natijasi:",["`[2 4 6]`","`[1 2 3 1 2 3]`","`12`","Xato"],0,"NumPy'da amal har bir elementga qo'llanadi (ro'yxatda esa takrorlanardi)."],
["`np.mean([2, 4, 6, 8])` = ?",null,"5","20 / 4 = 5."],
["`np.median([1, 3, 9])` = ?",null,"3","Tartiblangan qatorning o'rtadagi qiymati."],
["`np.zeros((2, 3)).shape` natijasi:",["`(2, 3)`","`(3, 2)`","`6`","`(6,)`"],0,"2 satr, 3 ustun."],
["`a = np.array([[1, 2], [3, 4]])`. `a.sum(axis=0)` natijasi:",["`[4 6]`","`[3 7]`","`10`","`[1 2]`"],0,"axis=0 — ustunlar bo'yicha yig'indi."],
["`np.arange(0, 10, 3)` natijasi:",["`[0 3 6 9]`","`[0 3 6 9 12]`","`[3 6 9]`","`[0 10 3]`"],0,"`range` kabi, stop kirmaydi."],
["`a = np.array([1, 5, 2, 8]); a[a > 2]` natijasi:",["`[5 8]`","`[1 2]`","`[False True False True]`","`2`"],0,"Mantiqiy maska bo'yicha filtrlash."],
["NumPy massivlarining Python ro'yxatidan asosiy afzalligi:",["Tez vektorlashgan hisob va kam xotira","Har xil turdagi elementlar","Cheksiz o'lcham","O'rnatish shart emas"],0,"Hisob C tilida, sikllarsiz bajariladi."]
],o:[]},
{t:"Pandas: Series va DataFrame",sub:"Pandas qo'llanilishi, o'rnatish, Series va DataFrame farqi, DataFrame yaratish, CSV/Excel",
th:`<ul><li><b>Pandas</b> — jadval ma'lumotlarini tahlil qilish kutubxonasi: <code>pip install pandas</code>, <code>import pandas as pd</code>.</li>
<li><b>Series</b> — bir o'lchovli, indeksli massiv (bitta ustun). <b>DataFrame</b> — ikki o'lchovli jadval (ustunlar — Series).</li>
<li>Yaratish: lug'atdan <code>pd.DataFrame({"ism": ["Ali", "Vali"], "ball": [85, 90]})</code>, ro'yxatlardan, fayldan: <code>pd.read_csv("f.csv")</code>, <code>pd.read_excel("f.xlsx")</code>.</li>
<li>Saqlash: <code>df.to_csv("f.csv", index=False)</code>, <code>df.to_excel()</code>.</li>
<li>Ustun: <code>df["ball"]</code> (Series), bir nechta: <code>df[["ism", "ball"]]</code> (DataFrame).</li>
<li><code>df.shape</code>, <code>df.columns</code>, <code>df.dtypes</code>, <code>df.index</code>.</li></ul>`,
q:[
["Pandas'ning bir o'lchovli ma'lumot tuzilmasi:",["`Series`","`DataFrame`","`Panel`","`Array`"],0,"DataFrame — ikki o'lchovli."],
["CSV faylni o'qish:",["`pd.read_csv(\"f.csv\")`","`pd.open(\"f.csv\")`","`pd.load_csv(\"f.csv\")`","`open(\"f.csv\").pandas()`"],0,"Natija — DataFrame."],
["`df[\"ball\"]` qanday turdagi obyekt qaytaradi?",["`Series`","`DataFrame`","`list`","`dict`"],0,"Ikki qavs `df[[\"ball\"]]` esa DataFrame qaytaradi."],
["`pd.DataFrame({\"a\": [1, 2, 3], \"b\": [4, 5, 6]}).shape` natijasi:",["`(3, 2)`","`(2, 3)`","`6`","`(3,)`"],0,"3 qator, 2 ustun."],
["Pandas'ni o'rnatish buyrug'i:",["`pip install pandas`","`import install pandas`","`pd.install()`","O'rnatish shart emas"],0,"Standart kutubxonaga kirmaydi."],
["DataFrame'ni indekssiz CSV ga saqlash:",["`df.to_csv(\"f.csv\", index=False)`","`df.save(\"f.csv\")`","`pd.write(df)`","`df.csv()`"],0,"index=False — chap tomondagi raqamlar yozilmaydi."],
["DataFrame ustunlari nomlarini ko'rish:",["`df.columns`","`df.names`","`df.headers()`","`df.keys_list`"],0,"Index obyekti qaytaradi."],
["Series va DataFrame farqi:",["Series — bitta ustun, DataFrame — ustunlar jadvali","Farqi yo'q","DataFrame — bir o'lchovli","Series faqat matn saqlaydi"],0,"DataFrame'ning har bir ustuni — Series."]
],o:[]},
{t:"Pandas: ma'lumotlarni manipulyatsiya qilish",sub:"head, tail, info, describe; qo'shish, o'chirish, tahrirlash; filtrlash, saralash, guruhlash, statistika",
th:`<ul><li>Ko'rish: <code>df.head(n)</code> (dastlabki 5), <code>df.tail()</code>, <code>df.info()</code> (turlar, bo'sh qiymatlar), <code>df.describe()</code> (count, mean, std, min, kvartillar, max).</li>
<li>Ustun qo'shish: <code>df["jami"] = df["a"] + df["b"]</code>; o'chirish: <code>df.drop(columns=["a"])</code>, qator: <code>df.drop(index=0)</code>.</li>
<li>Tanlash: <code>df.loc[qator_nomi, "ustun"]</code> (nom bo'yicha), <code>df.iloc[0, 1]</code> (pozitsiya bo'yicha).</li>
<li>Filtrlash: <code>df[df["ball"] &gt; 80]</code>; bir nechta shart: <code>df[(df.a &gt; 1) &amp; (df.b &lt; 5)]</code> (qavslar shart!).</li>
<li>Saralash: <code>df.sort_values("ball", ascending=False)</code>.</li>
<li>Guruhlash: <code>df.groupby("guruh")["ball"].mean()</code>. Bo'sh qiymatlar: <code>isna()</code>, <code>dropna()</code>, <code>fillna()</code>.</li>
<li>Statistika: <code>df["ball"].mean()</code>, <code>.sum()</code>, <code>.max()</code>, <code>.value_counts()</code>.</li></ul>`,
q:[
["`df.head()` standart bo'yicha nechta qator ko'rsatadi?",null,"5","`head(n)` bilan sonini o'zgartirish mumkin."],
["Ustunlar bo'yicha asosiy statistika (mean, std, min, max) beruvchi metod:",["`df.describe()`","`df.info()`","`df.head()`","`df.stats()`"],0,"`info()` — turlar va bo'sh qiymatlar."],
["Balli 80 dan yuqori qatorlarni tanlash:",["`df[df[\"ball\"] > 80]`","`df.filter(ball > 80)`","`df[\"ball\" > 80]`","`df.where(80)`"],0,"Mantiqiy maska bo'yicha filtrlash."],
["Ball bo'yicha kamayish tartibida saralash:",["`df.sort_values(\"ball\", ascending=False)`","`df.sort(\"ball\")`","`df.order_by(\"ball\")`","`df.sort_values(\"ball\")`"],0,"Standart — o'sish tartibi."],
["Ikki shartni birlashtirishda to'g'ri yozuv:",["`df[(df.a > 1) & (df.b < 5)]`","`df[df.a > 1 and df.b < 5]`","`df[df.a > 1 & df.b < 5]`","`df[(df.a > 1) and (df.b < 5)]`"],0,"Pandas'da `&` va `|` ishlatiladi, har bir shart qavsda."],
["Pozitsiya (raqam) bo'yicha tanlash:",["`df.iloc[0, 1]`","`df.loc[0, 1]`","`df.at_pos(0, 1)`","`df[0][1]`"],0,"`loc` — nom (label) bo'yicha."],
["Guruh bo'yicha o'rtacha ballni hisoblash:",["`df.groupby(\"guruh\")[\"ball\"].mean()`","`df.mean(\"guruh\")`","`df.group(\"ball\")`","`df[\"guruh\"].mean()`"],0,"Split–apply–combine."],
["Bo'sh qiymatlarni 0 bilan to'ldirish:",["`df.fillna(0)`","`df.dropna(0)`","`df.isna(0)`","`df.replace(None)`"],0,"`dropna()` esa bo'sh qiymatli qatorlarni o'chiradi."]
],o:[]}
]});
