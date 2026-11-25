{
/* ================= utilities ================= */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmtIn = s => s.replace(/`([^`]+)`/g, (m, c) => "<code>" + esc(c).replace(/\n/g, "<br>") + "</code>");
const fmt = s => String(s).split(/```\n?/).map((p, i) => i % 2 ? '<pre class="cb">' + esc(p.replace(/\n$/, "")) + "</pre>" : fmtIn(p).replace(/\n/g, " ")).join("");
const plain = s => String(s).replace(/<[^>]+>/g, "").replace(/`/g, "").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&");
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const DAY = 864e5;
const pad = n => String(n).padStart(2, "0");
const iso = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const parseD = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
const MON = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
const WD = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
const dstr = d => d.getDate() + "-" + MON[d.getMonth()];
const daysTo = d => Math.round((d - today()) / DAY);
const L = "ABCD";
const ICON = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5zM4 19.5A1.5 1.5 0 0 0 5.5 21H20"/>',
  cal: '<rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>',
  rep: '<path d="M4 12a8 8 0 0 1 13.7-5.6L20 9M20 4v5h-5M20 12a8 8 0 0 1-13.7 5.6L4 15M4 20v-5h5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'
};
const ic = n => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[n] + "</svg>";

/* ================= data model ================= */
PX.ext.forEach(([id, m]) => { const s = PX.list.find(x => x.id === id); if (!s) return; Object.keys(m).forEach(k => { const t = s.topics[+k - 1]; if (!t) return; t.q = (t.q || []).concat(m[k].q || []); t.o = (t.o || []).concat(m[k].o || []); }); });
const SUBJ = PX.list;
const SM = {}; SUBJ.forEach(s => SM[s.id] = s);
const ITEMS = [], IM = {};
SUBJ.forEach(s => s.topics.forEach((t, ti) => {
  (t.q || []).forEach((x, j) => { const it = { id: s.id + "." + ti + "." + j, s: s.id, ti, type: x[1] ? "mc" : "num", text: x[0], opts: x[1], ans: x[2], exp: x[3] }; ITEMS.push(it); IM[it.id] = it; });
  (t.o || []).forEach((x, j) => { const it = { id: s.id + "." + ti + ".o" + j, s: s.id, ti, type: "oral", text: x[0], keys: x[1] }; ITEMS.push(it); IM[it.id] = it; });
}));
const tItems = (s, ti, oral) => ITEMS.filter(x => x.s === s && x.ti === ti && (oral ? x.type === "oral" : x.type !== "oral"));

/* ================= state & persistence ================= */
const KEY = "prepexams_v1";
const fresh = () => ({ v: 1, t: 0, name: "", start: "2026-08-31", goal: 20, hide: {}, dates: {}, q: {}, read: {}, days: {}, ex: [] });
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch (e) {}
let remote = null, saveTimer = null, writing = false, pending = false;
function save() {
  S.t = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  clearTimeout(saveTimer); saveTimer = setTimeout(pushRemote, 1500);
}
async function pushRemote() {
  if (!remote) return;
  if (writing) { pending = true; return; }
  writing = true;
  try { await remote.set({ json: JSON.stringify(S), t: S.t }); setSync("Hisobingizga saqlandi"); }
  catch (e) { setSync("Shu qurilmada saqlanmoqda"); }
  writing = false; if (pending) { pending = false; pushRemote(); }
}
const setSync = t => { const el = $("#sync"); if (el) el.textContent = t; };
(async () => {
  try {
    if (!window.claude || !claude.use) return;
    const [db, user] = await Promise.all([claude.use("db"), claude.use("user")]);
    if (!db || !user) return;
    const id = await user.id(); if (!id) return;
    const ref = db.collection("data/users/" + id).doc("prepexams");
    let snap = await ref.get();
    const data = snap && typeof snap.data === "function" ? snap.data() : snap;
    remote = ref;
    if (data && data.json && (data.t || 0) > (S.t || 0)) {
      S = Object.assign(fresh(), JSON.parse(data.json));
      try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
      route();
    } else if (S.t) pushRemote();
    setSync("Hisobingizga saqlanmoqda");
  } catch (e) {}
})();

/* ================= FSRS (v4.5 parameters) ================= */
const W = [0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61];
const R = (t, s) => Math.pow(1 + 19 / 81 * t / s, -0.5);
const clampD = d => Math.min(10, Math.max(1, d));
function schedule(st, g, now) {
  if (!st.S) { st.S = W[g - 1]; st.D = clampD(W[4] - Math.exp(W[5] * (g - 1)) + 1); }
  else {
    const t = Math.max(0, (now - st.lr) / DAY), r = R(t, st.S);
    if (g === 1) st.S = Math.min(st.S, W[11] * Math.pow(st.D, -W[12]) * (Math.pow(st.S + 1, W[13]) - 1) * Math.exp((1 - r) * W[14]));
    else st.S = st.S * (1 + Math.exp(W[8]) * (11 - st.D) * Math.pow(st.S, -W[9]) * (Math.exp((1 - r) * W[10]) - 1) * (g === 2 ? W[15] : 1) * (g === 4 ? W[16] : 1));
    const d0 = W[4] - Math.exp(W[5] * 2) + 1;
    st.D = clampD(W[7] * d0 + (1 - W[7]) * (st.D - W[6] * (g - 3)));
  }
  st.S = Math.max(0.1, st.S);
  let ivl = g === 1 ? 10 / 1440 : Math.max(1, Math.round(st.S));
  const nx = nextControlDate(IM[st.id] ? IM[st.id].s : null, IM[st.id] ? IM[st.id].ti : null);
  if (nx && g > 1) { const left = (nx - now) / DAY; if (left > 1 && ivl > left - 1) ivl = Math.max(1, Math.floor(left - 1)); }
  st.lr = now; st.due = now + ivl * DAY;
}
function record(it, ok, g, ms) {
  const st = S.q[it.id] || (S.q[it.id] = { id: it.id, n: 0, c: 0 });
  st.n++; if (ok) st.c++; st.last = ok ? 1 : 0; st.ms = ms || st.ms;
  schedule(st, g, Date.now());
  const k = iso(today()); const d = S.days[k] || (S.days[k] = { a: 0, r: 0 }); d.a++;
  save();
}
const retention = st => st && st.S ? R(Math.max(0, (Date.now() - st.lr) / DAY), st.S) : 0;

/* ================= calendar ================= */
const semStart = () => { const d = parseD(S.start); const wd = (d.getDay() + 6) % 7; return new Date(d - wd * DAY); };
function ctrlDate(s, c) {
  const o = S.dates[s.id + ":" + c.k]; if (o) return parseD(o);
  if (c.date) return parseD(c.date);
  return new Date(+semStart() + (c.week * 7 - 1) * DAY);
}
const visible = () => SUBJ.filter(s => !S.hide[s.id]);
function allControls() {
  const out = [];
  visible().forEach(s => s.controls.forEach(c => out.push({ s, c, d: ctrlDate(s, c), topics: c.topics === "all" ? s.topics.map((x, i) => i + 1) : c.topics })));
  return out.sort((a, b) => a.d - b.d);
}
const upcoming = () => allControls().filter(x => daysTo(x.d) >= 0);
function nextControlDate(sid, ti) {
  if (!sid) return null; const s = SM[sid]; let best = null;
  s.controls.forEach(c => { const tp = c.topics === "all" ? null : c.topics; if (tp && !tp.includes(ti + 1)) return; const d = ctrlDate(s, c); if (d >= today() && (!best || d < best)) best = d; });
  return best ? +best : null;
}
const currentWeek = () => Math.floor((today() - semStart()) / DAY / 7) + 1;

/* ================= mastery ================= */
const LV = [0, 0.25, 0.5, 0.8, 1], LVN = ["Boshlanmagan", "Urinilgan", "Tanish", "Yaxshi", "O'zlashtirilgan"];
function topicStat(sid, ti) {
  const its = tItems(sid, ti); let tried = 0, right = 0, sS = 0, rr = 0;
  its.forEach(it => { const st = S.q[it.id]; if (st) { tried++; right += st.last; sS += st.S || 0; rr += retention(st); } });
  const acc = tried ? right / tried : 0, cov = its.length ? tried / its.length : 0;
  let lv = 0;
  if (tried) { lv = 1; if (acc >= 0.7 && cov >= 0.4) lv = 2; if (acc >= 0.85 && cov >= 0.8) lv = 3; if (lv === 3 && sS / tried >= 7) lv = 4; }
  const ret = tried ? rr / tried : 0;
  return { total: its.length, tried, acc, cov, lv, ret, ready: Math.round(100 * (0.7 * LV[lv] + 0.3 * ret * cov)), read: !!S.read[sid + "-" + ti] };
}
const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : 0;
const subjReady = sid => Math.round(avg(SM[sid].topics.map((t, i) => topicStat(sid, i).ready)));
const ctrlReady = x => Math.round(avg(x.topics.map(n => topicStat(x.s.id, n - 1).ready)));
const lvHtml = lv => '<span class="lv" aria-label="' + LVN[lv] + '">' + [1, 2, 3, 4].map(n => "<i" + (lv >= n ? ' class="on"' : "") + "></i>").join("") + "</span>";
const dueItems = () => { const now = Date.now(); return ITEMS.filter(it => !S.hide[it.s] && S.q[it.id] && S.q[it.id].due <= now).sort((a, b) => S.q[a.id].due - S.q[b.id].due); };
const wrongItems = () => ITEMS.filter(it => !S.hide[it.s] && it.type !== "oral" && S.q[it.id] && S.q[it.id].last === 0);

/* ================= shell ================= */
const view = $("#view");
const FIN = SUBJ.find(s => s.final);
const NAV = [["bugun", "Bugun", "home"]].concat(FIN ? [["yakuniy", "Yakuniy", "target"]] : [], [["fanlar", "Fanlar", "book"], ["kalendar", "Kalendar", "cal"], ["takror", "Takrorlash", "rep"]]);
function shell(active) {
  const due = dueItems().length;
  const b = k => k === "takror" && due ? '<span class="badge">' + due + "</span>" : "";
  $("#railnav").innerHTML = NAV.map(([k, n, i]) => '<a class="nav" href="#' + k + '"' + (active === k ? ' aria-current="page"' : "") + ">" + ic(i) + n + b(k) + "</a>").join("");
  $("#tabbar").innerHTML = NAV.filter(([k]) => !(FIN && k === "kalendar")).map(([k, n, i]) => '<a href="#' + k + '"' + (active === k ? ' aria-current="page"' : "") + ">" + ic(i) + n + b(k) + "</a>").join("") + '<a href="#sozlama">' + ic("gear") + "Sozlama</a>";
  $("#setBtn").innerHTML = ic("gear") + "Sozlamalar";
}
function toast(t) { const el = document.createElement("div"); el.className = "toast"; el.textContent = t; document.body.appendChild(el); setTimeout(() => el.remove(), 2200); }
let P = null, E = null, O = null, LAST = null, timerId = null;

function route() {
  const h = (location.hash || "#bugun").slice(1);
  clearInterval(timerId);
  if (h === "sozlama") { openSettings(); history.replaceState(null, "", "#bugun"); return route(); }
  if (h.startsWith("fan-") && SM[h.slice(4)]) { shell("fanlar"); return vSubject(h.slice(4)); }
  if (h.startsWith("mavzu-")) { const m = h.match(/^mavzu-(\w+)-(\d+)$/); if (m && SM[m[1]] && SM[m[1]].topics[m[2] - 1]) { shell("fanlar"); return vTopic(m[1], +m[2] - 1); } }
  if (h === "mashq" && P) { shell(""); return vPractice(); }
  if (h === "imtihon" && E) { shell(""); return vExam(); }
  if (h === "ogzaki" && O) { shell(""); return vOral(); }
  if (h === "natija" && LAST) { shell(""); return vResult(); }
  const k = ["fanlar", "kalendar", "takror"].concat(FIN ? ["yakuniy"] : []).includes(h) ? h : "bugun";
  shell(k);
  ({ bugun: vToday, yakuniy: vFinal, fanlar: vSubjects, kalendar: vCalendar, takror: vReview })[k]();
}
window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });
const go = h => { if (location.hash === "#" + h) route(); else location.hash = h; };

/* ================= TODAY ================= */
function plan() {
  const tasks = [], dk = iso(today()), day = S.days[dk] || { a: 0, r: 0 };
  const due = dueItems();
  if (due.length) tasks.push({ t: "Takrorlash navbati", s: due.length + " ta savol · ~" + Math.max(2, Math.ceil(due.length * 0.4)) + " daq", run: () => startPractice(due.slice(0, 40), "Takrorlash", "takror") });
  else if (day.r) tasks.push({ t: "Takrorlash navbati", s: "Bugungi takrorlash bajarildi", done: true });
  const up = upcoming().filter(x => x.topics.length);
  const nx = up[0];
  if (nx) {
    const ranked = nx.topics.map(n => ({ n, st: topicStat(nx.s.id, n - 1) })).sort((a, b) => a.st.ready - b.st.ready);
    const w = ranked[0];
    if (w && w.st.ready < 85) {
      const tt = nx.s.topics[w.n - 1].t;
      if (!w.st.read) tasks.push({ t: nx.s.short + " — " + tt, s: "Nazariya · ~6 daq · " + nx.c.k + " uchun", run: () => go("mavzu-" + nx.s.id + "-" + w.n) });
      else tasks.push({ t: nx.s.short + " — " + tt, s: "Mavzu testi · " + w.st.total + " savol · " + nx.c.k + " uchun", run: () => startTopic(nx.s.id, w.n - 1) });
    }
    const w2 = ranked[1];
    if (w2 && w2.st.ready < 85) tasks.push({ t: nx.s.short + " — " + nx.s.topics[w2.n - 1].t, s: "Mavzu testi · " + w2.st.total + " savol", run: () => startTopic(nx.s.id, w2.n - 1) });
    if (/og'zaki|kollokvium|oral/i.test(nx.c.form)) {
      const or = ITEMS.filter(it => it.type === "oral" && it.s === nx.s.id && nx.topics.includes(it.ti + 1));
      if (or.length) tasks.push({ t: nx.s.short + " — og'zaki mashq", s: "3 ta savol, namuna fikrlar bilan · " + nx.c.k, run: () => startOral(shuffle(or).slice(0, 3), nx.s.short + " · " + nx.c.k) });
    }
    if (daysTo(nx.d) <= 7 && !S.ex.some(e => e.s === nx.s.id && e.k === nx.c.k && Date.now() - e.at < 3 * DAY)) tasks.push({ t: nx.c.k + " simulyatsiyasi", s: nx.s.short + " · " + Math.min(25, nx.topics.length * 3) + " savol, taymer bilan", run: () => startExam(nx.s.id, nx.c.k) });
  }
  const weak = [];
  visible().forEach(s => s.topics.forEach((t, i) => { const st = topicStat(s.id, i); if (st.tried >= 3 && st.acc < 0.6) weak.push({ s, i, st }); }));
  weak.sort((a, b) => a.st.acc - b.st.acc);
  if (weak[0] && tasks.length < 5) { const w = weak[0]; tasks.push({ t: "Kuchsiz mavzu: " + w.s.topics[w.i].t, s: w.s.short + " · aniqlik " + Math.round(w.st.acc * 100) + "%", run: () => startTopic(w.s.id, w.i) }); }
  return tasks.slice(0, 5);
}
function streak() {
  let n = 0, d = today(); const ok = k => (S.days[k] || {}).a >= 10;
  if (!ok(iso(d))) d = new Date(+d - DAY);
  while (ok(iso(d))) { n++; d = new Date(+d - DAY); }
  return n;
}
function vToday() {
  const d = today(), day = S.days[iso(d)] || { a: 0 }, up = upcoming(), nx = up[0];
  const ready = Math.round(avg(visible().map(s => subjReady(s.id))));
  const tasks = plan(); let firstOpen = tasks.findIndex(t => !t.done);
  const wk = [...Array(7)].map((_, i) => { const x = new Date(+d - ((d.getDay() + 6) % 7 - i) * DAY); const a = (S.days[iso(x)] || {}).a || 0; return '<div><i class="' + (a >= 10 ? "on" : a ? "part" : "") + '"></i>' + ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"][i] + "</div>"; }).join("");
  const soon = up.slice(0, 4).map(x => { const n = daysTo(x.d); return '<a class="ev" href="#fan-' + x.s.id + '" style="text-decoration:none;color:inherit"><span class="tx"><b>' + esc(x.s.short) + " · " + esc(x.c.k) + '</b><span class="muted small"> ' + esc(x.c.form) + "</span></span>" + '<span class="pill ' + (n <= 3 ? "ba" : n <= 7 ? "wa" : "mu") + '">' + (n === 0 ? "bugun" : n + " kun") + '</span><span class="small muted num">' + ctrlReady(x) + "%</span></a>"; }).join("");
  view.innerHTML = '<div class="top"><div><div class="eyebrow">' + WD[d.getDay()] + ", " + dstr(d) + " · " + currentWeek() + '-hafta</div><h1 class="h1">' + (S.name ? "Salom, " + esc(S.name) : "Bugungi reja") + '</h1></div><button class="btn gh sm" type="button" data-act="settings">' + ic("gear") + "Sozlamalar</button></div>" +
    '<div class="grid g3 stats">' +
    (nx ? '<div class="card hero"><div class="lab">' + esc(nx.s.short) + " · " + esc(nx.c.k) + ' gacha</div><div class="big" style="margin:8px 0 6px">' + daysTo(nx.d) + '<span class="unit">kun</span></div><div class="lab">' + dstr(nx.d) + " · " + esc(nx.c.form) + " · " + nx.c.ball + " ball</div></div>" : '<div class="card hero"><div class="lab">Yaqin nazorat yo\'q</div><div class="big" style="margin:8px 0">—</div></div>') +
    '<div class="card"><div class="muted small">Umumiy tayyorlik</div><div class="big num" style="margin:8px 0 0;color:var(--br)">' + ready + '<span class="unit" style="color:var(--mut)">/100</span></div><div class="meter"><i style="width:' + ready + '%"></i></div></div>' +
    '<div class="card"><div class="muted small">Kunlik maqsad</div><div class="big num" style="margin:8px 0 0">' + Math.min(day.a, 999) + '<span class="unit" style="color:var(--mut)">/' + S.goal + ' savol</span></div><div class="meter"><i style="width:' + Math.min(100, day.a / S.goal * 100) + '%;background:var(--ok)"></i></div></div></div>' +
    (FIN && daysTo(parseD(FIN.final.date)) >= 0 && daysTo(parseD(FIN.final.date)) <= 21 ? '<a class="task now" href="#yakuniy" style="margin-top:12px;text-decoration:none"><span class="n">' + daysTo(parseD(FIN.final.date)) + '</span><span class="tx"><b>Python yakuniy nazorati — ' + dstr(parseD(FIN.final.date)) + '</b><span class="muted small">' + FIN.final.n + " savol · maqsad " + FIN.final.target + "+ ball. Kunlik reja va simulyatsiyalar →</span></span><span class=\"go\">Ochish →</span></a>" : "") +
    '<h2 class="h2">Bugun nima qilamiz</h2>' +
    (tasks.length ? tasks.map((t, i) => '<button type="button" class="task ' + (t.done ? "done" : i === firstOpen ? "now" : "") + '" data-task="' + i + '"' + (t.done ? " disabled" : "") + '><span class="n">' + (t.done ? "✓" : i + 1) + '</span><span class="tx"><b>' + esc(t.t) + '</b><span class="muted small">' + esc(t.s) + "</span></span>" + (t.done ? "" : '<span class="go">Boshlash →</span>') + "</button>").join("") : '<div class="empty">Hammasi bajarildi. Xohlasangiz, istalgan fandan aralash mashq qiling.</div>') +
    '<div class="grid g2" style="margin-top:20px"><div class="card"><div class="row" style="justify-content:space-between"><b>Yaqin nazoratlar</b><a href="#kalendar" class="small" style="color:var(--br);font-weight:700">Kalendar →</a></div><div style="margin-top:12px">' + (soon || '<div class="muted">Nazoratlar yo\'q</div>') + "</div></div>" +
    '<div class="card"><b>Faollik</b><div class="row" style="margin-top:10px;gap:22px"><div><div class="big num" style="font-size:32px">' + streak() + '</div><div class="muted tiny">kunlik seriya</div></div><div><div class="big num" style="font-size:32px">' + Object.keys(S.q).length + '</div><div class="muted tiny">savol ishlangan</div></div></div><div class="week">' + wk + '</div><div class="muted tiny" style="margin-top:8px">Seriya kuniga kamida 10 ta savol ishlaganda o\'sadi.</div></div></div>';
  view.onclick = e => { const b = e.target.closest("[data-task]"); if (b) tasks[+b.dataset.task].run(); if (e.target.closest('[data-act="settings"]')) openSettings(); };
}


/* ================= FINAL EXAM (yakuniy) ================= */
function pickFor(sid, tps, per) {
  const out = [];
  tps.forEach(t => {
    const its = tItems(sid, t - 1), rank = it => { const st = S.q[it.id]; return !st ? 1 : st.last === 0 ? 0 : st.due <= Date.now() ? 2 : 3; };
    const g = [0, 1, 2, 3].map(r => shuffle(its.filter(it => rank(it) === r)));
    out.push(...[].concat(...g).slice(0, per));
  });
  return shuffle(out);
}
function binomTail(n, k, p) { let s = 0; for (let i = k; i <= n; i++) { let c = 1; for (let j = 0; j < i; j++) c = c * (n - j) / (j + 1); s += c * Math.pow(p, i) * Math.pow(1 - p, n - i); } return s; }
function finalPlan(F) {
  const ed = parseD(F.final.date), k = daysTo(ed), N = F.topics.length, all = F.topics.map((x, i) => i + 1);
  if (k <= 0) return [];
  const days = [], learn = Math.max(1, k - 1);
  for (let d = 0; d < k; d++) {
    const date = new Date(+today() + d * DAY);
    if (k > 1 && d === k - 1) { days.push({ date, last: true, tps: [], mock: true }); continue; }
    const a = Math.floor(d * N / learn), b = Math.floor((d + 1) * N / learn);
    days.push({ date, tps: k === 1 ? [] : all.slice(a, b), mock: k === 1 || d % 2 === 1 });
  }
  return days;
}
function vFinal() {
  const F = FIN, sid = F.id, fi = F.final, ed = parseD(fi.date), k = daysTo(ed), need = Math.ceil(fi.target / fi.ball * fi.n);
  const sts = F.topics.map((t, i) => topicStat(sid, i));
  const triedAll = sts.reduce((a, x) => a + x.tried, 0), totalQ = sts.reduce((a, x) => a + x.total, 0);
  const pT = sts.map(x => x.tried >= 3 ? x.acc : null), known = pT.filter(x => x !== null);
  const pEst = known.length ? avg(pT.map(x => x === null ? Math.min(0.5, avg(known)) : x)) : null;
  const mocks = S.ex.filter(e => e.s === sid && e.tag === "full");
  const lastM = mocks[mocks.length - 1];
  const estBall = pEst === null ? null : Math.round(pEst * fi.ball * 10) / 10;
  const prob = pEst === null ? null : Math.round(binomTail(fi.n, need, Math.min(0.999, pEst)) * 100);
  const wrong = wrongItems().filter(it => it.s === sid);
  const weak = sts.map((x, i) => ({ i, x })).sort((a, b) => (a.x.tried ? a.x.acc : -1) - (b.x.tried ? b.x.acc : -1) || a.x.cov - b.x.cov).slice(0, 3).map(o => o.i + 1);
  const plan = finalPlan(F);
  const dayDone = d => d.tps.length ? d.tps.every(t => { const st = sts[t - 1]; return st.tried >= Math.min(12, st.total) && st.acc >= 0.85; }) : false;
  const col = v => v >= 0.95 ? "var(--ok)" : v >= 0.8 ? "var(--wa)" : "var(--ba)";
  const head = '<div class="top"><div><div class="eyebrow">Yakuniy nazorat · ' + WD[ed.getDay()] + ", " + dstr(ed) + '</div><h1 class="h1">Python — yakuniy nazorat</h1><p class="lead">' + fi.n + " ta savol · " + fi.ball + " ball. Maqsad — <b>" + fi.target + "+ ball</b>, ya'ni kamida <b>" + need + " ta</b> to'g'ri javob (" + Math.round(need / fi.n * 100) + "%). Xatoga atigi " + (fi.n - need) + " ta joy bor.</p></div></div>";
  const stats = '<div class="grid g3 stats">' +
    '<div class="card hero"><div class="lab">Imtihongacha</div><div class="big" style="margin:8px 0 6px">' + (k > 0 ? k + '<span class="unit">kun</span>' : k === 0 ? "Bugun" : "O'tdi") + '</div><div class="lab">' + dstr(ed) + " · " + fi.min + " daqiqa (taxminiy)</div></div>" +
    '<div class="card"><div class="muted small">Prognoz ball</div><div class="big num" style="margin:8px 0 0;color:var(--br)">' + (estBall === null ? "—" : estBall) + '<span class="unit" style="color:var(--mut)">/' + fi.ball + '</span></div><div class="meter"><i style="width:' + (estBall === null ? 0 : estBall / fi.ball * 100) + '%;background:' + (estBall === null ? "var(--br)" : col(estBall / fi.ball)) + '"></i></div><div class="tiny muted" style="margin-top:8px">' + (pEst === null ? "Prognoz uchun har mavzudan kamida 3 tadan savol ishlang." : known.length < F.topics.length ? "Taxminiy: " + (F.topics.length - known.length) + " ta mavzu hali ishlanmagan." : "Mavzular bo'yicha oxirgi javoblaringizdan hisoblangan.") + "</div></div>" +
    '<div class="card"><div class="muted small">' + fi.target + '+ olish ehtimoli</div><div class="big num" style="margin:8px 0 0">' + (prob === null ? "—" : prob + '<span class="unit" style="color:var(--mut)">%</span>') + '</div><div class="tiny muted" style="margin-top:8px">' + (lastM ? "Oxirgi to'liq simulyatsiya: <b>" + Math.round(lastM.sc / lastM.n * fi.ball * 10) / 10 + " ball</b> (" + lastM.sc + "/" + lastM.n + ")" : "Hali to'liq simulyatsiya topshirilmagan.") + " · Ishlangan: " + triedAll + "/" + totalQ + "</div></div></div>";
  const acts = '<div class="grid g2" style="margin-top:12px">' +
    '<button type="button" class="task now" data-full><span class="n">60</span><span class="tx"><b>To\'liq simulyatsiya</b><span class="muted small">' + fi.n + " savol · " + fi.min + " daqiqa · ball bilan baholanadi</span></span><span class=\"go\">Boshlash →</span></button>" +
    '<button type="button" class="task" data-quick><span class="n">20</span><span class="tx"><b>Tezkor aralash test</b><span class="muted small">14 mavzudan 20 savol · 20 daqiqa</span></span><span class="go">Boshlash →</span></button>' +
    '<button type="button" class="task" data-weak><span class="n">!</span><span class="tx"><b>Kuchsiz mavzular</b><span class="muted small">' + weak.map(t => esc(F.topics[t - 1].t)).join(" · ") + "</span></span><span class=\"go\">Mashq →</span></button>" +
    '<button type="button" class="task" data-wrong' + (wrong.length ? "" : " disabled") + '><span class="n">' + wrong.length + '</span><span class="tx"><b>Xatolarim</b><span class="muted small">' + (wrong.length ? "Oxirgi marta xato qilingan savollar" : "Hozircha xato yo'q") + "</span></span>" + (wrong.length ? '<span class="go">Qayta ishlash →</span>' : "") + "</button></div>";
  const planH = plan.length ? '<h2 class="h2">' + k + ' kunlik reja</h2><div class="list">' + plan.map((d, j) => { const isT = j === 0, done = dayDone(d);
    const what = d.last ? "Kuchsiz mavzular, xatolar va yakuniy simulyatsiya" : d.tps.length ? d.tps.map(t => t + ". " + F.topics[t - 1].t).join(" · ") : "To'liq simulyatsiya va xatolar ustida ishlash";
    const prog = d.tps.length ? Math.round(avg(d.tps.map(t => Math.min(1, sts[t - 1].tried / Math.min(12, sts[t - 1].total)))) * 100) : null;
    return '<div class="li' + (isT ? " now" : "") + '" style="' + (isT ? "border-color:var(--br)" : "") + '"><div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:10px"><div style="min-width:0;flex:1"><div class="small muted">' + (isT ? "<b style=\"color:var(--br)\">Bugun</b> · " : "") + WD[d.date.getDay()] + ", " + dstr(d.date) + (done ? ' · <span style="color:var(--okt)">✓ bajarildi</span>' : "") + '</div><div style="font-weight:600;margin:4px 0">' + esc(what) + "</div>" + (prog !== null ? '<div class="meter" style="max-width:320px"><i style="width:' + prog + '%"></i></div>' : "") + '</div><div class="row" style="gap:6px">' + (d.tps.length ? '<button type="button" class="btn sm' + (isT ? "" : " gh") + '" data-day="' + j + '">Mashq · ' + d.tps.length * 12 + "</button>" : "") + (d.last ? '<button type="button" class="btn sm gh" data-weak>Kuchsizlar</button>' : "") + (d.mock ? '<button type="button" class="btn sm' + (d.tps.length ? " gh" : "") + '" data-full>Simulyatsiya</button>' : "") + "</div></div></div>"; }).join("") + "</div>" : "";
  const rows = F.topics.map((t, i) => { const st = sts[i], a = st.tried ? Math.round(st.acc * 100) : null;
    return '<div class="li"><div class="row" style="justify-content:space-between;gap:12px;flex-wrap:wrap"><div style="min-width:0;flex:1"><div style="font-weight:600">' + (i + 1) + ". " + esc(t.t) + '</div><div class="small muted">' + st.tried + "/" + st.total + " ishlangan" + (a !== null ? ' · aniqlik <b style="color:' + col(st.acc) + '">' + a + "%</b>" : "") + '</div><div class="meter" style="max-width:320px"><i style="width:' + Math.round(st.cov * 100) + "%;background:" + (a === null ? "var(--br)" : col(st.acc)) + '"></i></div></div><div class="row" style="gap:6px"><a class="btn sm gh" href="#mavzu-' + sid + "-" + (i + 1) + '">Nazariya</a><button type="button" class="btn sm" data-tp="' + (i + 1) + '">Mashq</button></div></div></div>'; }).join("");
  const hist = mocks.length ? '<div class="card" style="margin-top:12px"><b>Simulyatsiyalar tarixi</b><div class="spark" style="margin-top:14px;height:70px">' + mocks.slice(-12).map(m => { const b = m.sc / m.n * fi.ball; return '<i title="' + Math.round(b * 10) / 10 + ' ball" style="height:' + Math.max(6, b / fi.ball * 100) + "%;background:" + (b >= fi.target ? "var(--ok)" : b >= fi.target - 4 ? "var(--wa)" : "var(--ba)") + '"></i>'; }).join("") + '</div><div class="tiny muted" style="margin-top:8px">Yashil — ' + fi.target + "+ ball. Ketma-ket 3 ta yashil — tayyorlik belgisi.</div></div>" : "";
  const tips = '<div class="card" style="margin-top:12px"><b>38+ uchun qoidalar</b><ul class="small" style="margin:8px 0 0;padding-left:18px;line-height:1.7"><li>Kod natijasini so\'ragan savolda kodni boshidan oxirigacha qatorma-qator o\'zingiz "bajaring" — o\'zgaruvchilar qiymatini qog\'ozga yozib boring.</li><li>Eng ko\'p xato: <code>range</code> oxiri kirmasligi, <code>//</code> va <code>%</code>, <code>sort()</code> → <code>None</code>, kesish chegaralari, <code>input()</code> → <code>str</code>.</li><li>Ishonchingiz komil bo\'lmagan savolni belgilab, oxirida qayting — vaqtni bir savolga sarflamang.</li><li>Har kuni kechqurun xatolaringizni qayta ishlang: ular takrorlansa, imtihonda ham takrorlanadi.</li></ul></div>';
  view.innerHTML = head + stats + acts + planH + '<h2 class="h2">14 mavzu bo\'yicha holat</h2><div class="list">' + rows + "</div>" + hist + tips;
  const full = () => startExam(sid, "YN", { n: fi.n, min: fi.min, ball: fi.ball, target: fi.target, tag: "full", title: "Python YN · to'liq simulyatsiya" });
  view.onclick = e => {
    if (e.target.closest("[data-full]")) return full();
    if (e.target.closest("[data-quick]")) return startExam(sid, "YN", { n: 20, min: 20, ball: fi.ball, target: fi.target, tag: "quick", title: "Python YN · tezkor test (20)" });
    if (e.target.closest("[data-weak]")) return startPractice(pickFor(sid, weak, 8), "Kuchsiz mavzular", "mashq");
    if (e.target.closest("[data-wrong]")) return startPractice(shuffle(wrong), "Xatolar ustida ishlash", "mashq");
    const d = e.target.closest("[data-day]"); if (d) { const pl = plan[+d.dataset.day]; return startPractice(pickFor(sid, pl.tps, 12), "Reja · " + dstr(pl.date), "mashq"); }
    const tp = e.target.closest("[data-tp]"); if (tp) { const t = +tp.dataset.tp; return startPractice(pickFor(sid, [t], 15), F.short + " · " + t + "-mavzu", "mashq"); }
  };
}

/* ================= SUBJECTS ================= */
function vSubjects() {
  view.innerHTML = '<div class="top"><div><div class="eyebrow">' + visible().length + ' ta fan · sillabus asosida</div><h1 class="h1">Fanlar</h1></div></div><div class="grid g2">' +
    visible().map(s => { const r = subjReady(s.id), nx = upcoming().find(x => x.s.id === s.id); const nq = ITEMS.filter(x => x.s === s.id && x.type !== "oral").length;
      return '<a class="subj" href="#fan-' + s.id + '"><div class="row" style="justify-content:space-between"><span class="pill mu">' + esc(s.code) + '</span><span class="num" style="font-weight:800;color:var(--br)">' + r + '%</span></div><h3>' + esc(s.name) + '</h3><div class="muted small">' + s.topics.length + " mavzu · " + nq + " savol" + (nx ? " · keyingisi: " + esc(nx.c.k) + ", " + dstr(nx.d) : "") + '</div><div class="meter"><i style="width:' + r + '%"></i></div></a>'; }).join("") + "</div>" +
    (SUBJ.length > visible().length ? '<p class="muted small" style="margin-top:16px">Yashirilgan fanlar bor — Sozlamalardan qaytarish mumkin.</p>' : "");
  view.onclick = null;
}
function vSubject(id) {
  const s = SM[id], r = subjReady(id);
  const ctr = s.controls.map(c => { const d = ctrlDate(s, c), n = daysTo(d), tp = c.topics === "all" ? s.topics.map((x, i) => i + 1) : c.topics; const nxt = upcoming().find(x => x.s.id === id);
    return '<div class="cc ' + (n < 0 ? "past" : nxt && nxt.c.k === c.k ? "next" : "") + '"><b>' + esc(c.k) + ' <span class="muted tiny" style="font-weight:600">' + c.ball + ' ball</span></b><div class="muted tiny">' + dstr(d) + " · " + esc(c.form) + '</div><div class="tiny" style="margin-top:4px">' + (tp.length ? "Tayyorlik " + ctrlReady({ s, topics: tp }) + "%" : "&nbsp;") + "</div>" + (tp.length && n >= 0 ? '<button type="button" class="btn sm gh" style="margin-top:8px;width:100%" data-exam="' + esc(c.k) + '">Simulyatsiya</button>' : "") + "</div>"; }).join("");
  view.innerHTML = '<a href="#fanlar" class="small" style="color:var(--mut);text-decoration:none">← Fanlar</a><div class="top" style="margin-top:8px"><div><div class="eyebrow">' + esc(s.code) + " · " + esc(s.credits) + " · " + esc(s.teacher) + '</div><h1 class="h1">' + esc(s.name) + '</h1><p class="lead">' + esc(s.note) + '</p></div><div style="text-align:right"><div class="muted small">Tayyorlik</div><div class="big num" style="color:var(--br)">' + r + "%</div></div></div>" +
    '<h2 class="h2" style="margin-top:6px">Nazoratlar</h2><div class="ctrl">' + ctr + "</div>" +
    '<div class="row" style="justify-content:space-between;flex-wrap:wrap;margin:26px 0 12px"><h2 class="h2" style="margin:0">Mavzular</h2><div class="row" style="flex-wrap:wrap;gap:8px"><button type="button" class="btn sm" data-mix="20">Aralash mashq · 20</button>' + (ITEMS.some(x => x.s === id && x.type === "oral") ? '<button type="button" class="btn sm gh" data-oral>Og\'zaki savollar</button>' : "") + "</div></div>" +
    '<div class="grid g3">' + s.topics.map((t, i) => { const st = topicStat(id, i); return '<a class="topic" href="#mavzu-' + id + "-" + (i + 1) + '"><span class="num">' + (i + 1) + "-mavzu" + (st.read ? " · o'qilgan" : "") + "</span><b>" + esc(t.t) + '</b><span class="ft">' + lvHtml(st.lv) + "<span>" + (st.tried ? Math.round(st.acc * 100) + "% · " + st.tried + "/" + st.total : st.total + " savol") + "</span></span></a>"; }).join("") + "</div>" +
    '<p class="muted tiny" style="margin-top:16px">Sanalar sillabusdagi haftalar asosida taxminiy hisoblangan. Aniq sanani Kalendar bo\'limida kiritishingiz mumkin.</p>';
  view.onclick = e => {
    const ex = e.target.closest("[data-exam]"); if (ex) return startExam(id, ex.dataset.exam);
    const mx = e.target.closest("[data-mix]"); if (mx) return startPractice(mixPick(ITEMS.filter(x => x.s === id && x.type !== "oral"), 20), s.short + " · aralash", "mashq");
    if (e.target.closest("[data-oral]")) return startOral(shuffle(ITEMS.filter(x => x.s === id && x.type === "oral")).slice(0, 5), s.short + " · og'zaki");
  };
}
function mixPick(pool, n) {
  const now = Date.now();
  const score = it => { const st = S.q[it.id]; if (!st) return 2 + Math.random(); if (st.last === 0) return 3 + Math.random(); if (st.due <= now) return 2.5 + Math.random(); return Math.random(); };
  return pool.map(it => [score(it), it]).sort((a, b) => b[0] - a[0]).slice(0, n).map(x => x[1]);
}
function vTopic(id, ti) {
  const s = SM[id], t = s.topics[ti], st = topicStat(id, ti), or = tItems(id, ti, true);
  S.read[id + "-" + ti] = 1; save();
  view.innerHTML = '<a href="#fan-' + id + '" class="small" style="color:var(--mut);text-decoration:none">← ' + esc(s.name) + '</a><div class="top" style="margin-top:8px"><div><div class="eyebrow">' + (ti + 1) + "-mavzu · " + LVN[st.lv] + '</div><h1 class="h1">' + esc(t.t) + '</h1><p class="lead">' + esc(t.sub) + "</p></div></div>" +
    '<div class="grid" style="grid-template-columns:minmax(0,1fr) 260px;align-items:start" id="tg"><article class="card th">' + t.th + '</article><aside class="card" style="position:sticky;top:20px"><b>O\'zingizni tekshiring</b><p class="muted small" style="margin:6px 0 14px">O\'qigandan keyin darhol test — xotirani eng kuchli mustahkamlaydi.</p>' +
    '<button type="button" class="btn" style="width:100%" data-t>Mavzu testi · ' + st.total + " savol</button>" + (or.length ? '<button type="button" class="btn gh" style="width:100%;margin-top:8px" data-o>Og\'zaki savollar · ' + or.length + "</button>" : "") +
    '<div class="bars" style="margin-top:16px"><div class="bar"><div class="t"><span class="muted">O\'zlashtirish</span><b class="num">' + st.ready + '%</b></div><div class="m"><i style="width:' + st.ready + '%"></i></div></div></div>' +
    '<div class="row" style="justify-content:space-between;margin-top:16px">' + (ti > 0 ? '<a class="small" style="color:var(--br);font-weight:700" href="#mavzu-' + id + "-" + ti + '">← Oldingi</a>' : "<span></span>") + (ti < s.topics.length - 1 ? '<a class="small" style="color:var(--br);font-weight:700" href="#mavzu-' + id + "-" + (ti + 2) + '">Keyingi →</a>' : "") + "</div></aside></div>";
  if (innerWidth < 860) $("#tg").style.gridTemplateColumns = "minmax(0,1fr)";
  view.onclick = e => { if (e.target.closest("[data-t]")) startTopic(id, ti); if (e.target.closest("[data-o]")) startOral(or, s.short + " · " + (ti + 1) + "-mavzu"); };
}
const startTopic = (id, ti) => startPractice(shuffle(tItems(id, ti)), SM[id].short + " · " + (ti + 1) + "-mavzu", "mashq");

/* ================= PRACTICE ================= */
function startPractice(items, title, mode) {
  if (!items.length) return toast("Bu yerda hozircha savol yo'q");
  P = { title, mode, i: 0, items: items.map(it => ({ it, ord: it.type === "mc" ? shuffle([0, 1, 2, 3]) : null, pick: null, inp: "", tries: 0, hint: false, gone: [], conf: "sure", t0: 0, done: false, ok: false, err: "" })) };
  go("mashq");
}
function numEq(a, b) {
  const p = s => { s = String(s).trim().replace(/\s/g, "").replace(/−/g, "-").replace(",", "."); if (/^-?\d+(\.\d+)?\/-?\d+(\.\d+)?$/.test(s)) { const [x, y] = s.split("/").map(Number); return y ? x / y : NaN; } return s === "" ? NaN : Number(s); };
  const x = p(a), y = p(b); if (isNaN(x) || isNaN(y)) return false;
  return Math.abs(x - y) <= Math.max(0.01, Math.abs(y) * 0.005);
}
function vPractice() {
  const x = P.items[P.i], it = x.it, s = SM[it.s], n = P.items.length;
  if (!x.t0) x.t0 = Date.now();
  const cor = it.type === "mc" ? x.ord.indexOf(0) : -1;
  let body;
  if (it.type === "mc") body = '<div class="opts">' + x.ord.map((oi, k) => { let c = ""; if (x.done) { if (k === cor) c = "ok"; else if (k === x.pick && !x.ok) c = "ba"; } else if (x.gone.includes(k)) c = "gone"; else if (k === x.pick) c = "sel"; return '<button type="button" class="opt ' + c + '" data-k="' + k + '"' + (x.done || x.gone.includes(k) ? " disabled" : "") + '><span class="k">' + L[k] + "</span><span>" + fmt(it.opts[oi]) + "</span></button>"; }).join("") + "</div>";
  else body = '<label class="muted small" for="ans">Javobni kiriting (son, 0,25 yoki 1/4)</label><div style="margin-top:6px"><input id="ans" class="ans num" inputmode="decimal" autocomplete="off" value="' + esc(x.inp) + '"' + (x.done ? " disabled" : "") + "></div>" + (x.err ? '<div class="small" style="color:var(--ba);margin-top:6px">' + x.err + "</div>" : "");
  let fb = "";
  if (x.done) fb = '<div class="fb ' + (x.ok ? "ok" : "ba") + '"><b>' + (x.ok ? (x.tries > 1 || x.hint ? "To'g'ri — maslahat bilan" : "To'g'ri") : "Javob: " + (it.type === "mc" ? L[cor] : esc(it.ans))) + "</b>" + fmt(it.exp) + "</div>" + (x.ok ? "" : '<div class="tiny muted" style="margin-top:8px">Xatolar daftariga qo\'shildi — tez orada takrorlash navbatida qaytadi.</div>');
  else if (x.tries === 1) fb = '<div class="fb wa"><b>Hali emas — yana bir urinish bor</b>' + (it.type === "mc" ? "Bitta noto'g'ri variant olib tashlandi. " : "") + "Mavzu: " + esc(s.topics[it.ti].t) + ".</div>";
  const can = it.type === "mc" ? x.pick !== null : true;
  view.innerHTML = '<div class="qhead"><button type="button" class="btn gh sm" data-quit>✕</button><span class="small muted num">' + (P.i + 1) + " / " + n + '</span><div class="prog"><i style="width:' + ((P.i + (x.done ? 1 : 0)) / n * 100) + '%"></i></div><span class="small" style="font-weight:700">' + esc(P.title) + "</span></div>" +
    '<article class="qcard"><span class="pill">' + esc(s.short) + " · " + esc(s.topics[it.ti].t) + '</span><div class="qtext">' + fmt(it.text) + "</div>" + body + fb +
    (x.done ? "" : '<div class="conf">Ishonchingiz: <button type="button" class="chip" data-conf="guess" aria-pressed="' + (x.conf === "guess") + '">Taxmin</button><button type="button" class="chip" data-conf="sure" aria-pressed="' + (x.conf === "sure") + '">Ishonaman</button></div>') +
    '<div class="acts">' + (x.done ? "<span></span>" : '<button type="button" class="btn gh" data-hint' + (x.hint || x.tries ? " disabled" : "") + ">Maslahat</button>") +
    (x.done ? '<button type="button" class="btn" data-next>' + (P.i === n - 1 ? "Yakunlash" : "Keyingi savol →") + "</button>" : '<button type="button" class="btn" data-check' + (can ? "" : " disabled") + ">Tekshirish</button>") + "</div>" +
    '<div class="kbd">Klaviatura: 1–4 yoki A–D — tanlash · Enter — tekshirish/keyingi · H — maslahat</div></article>';
  const inp = $("#ans"); if (inp && !x.done) { inp.focus(); inp.oninput = () => { x.inp = inp.value; if (x.err) { x.err = ""; } }; }
  view.onclick = e => {
    const k = e.target.closest("[data-k]"); if (k && !x.done) { x.pick = +k.dataset.k; return vPractice(); }
    const c = e.target.closest("[data-conf]"); if (c) { x.conf = c.dataset.conf; return vPractice(); }
    if (e.target.closest("[data-hint]")) return hint();
    if (e.target.closest("[data-check]")) return check();
    if (e.target.closest("[data-next]")) return next();
    if (e.target.closest("[data-quit]")) { finishPractice(); }
  };
}
function hint() {
  const x = P.items[P.i]; if (x.done || x.hint) return; x.hint = true;
  if (x.it.type === "mc") { const cor = x.ord.indexOf(0); const cand = [0, 1, 2, 3].filter(k => k !== cor && !x.gone.includes(k)); x.gone.push(cand[Math.floor(Math.random() * cand.length)]); if (x.gone.includes(x.pick)) x.pick = null; }
  else toast("Maslahat: " + plain(SM[x.it.s].topics[x.it.ti].sub).slice(0, 80));
  vPractice();
}
function check() {
  const x = P.items[P.i], it = x.it; if (x.done) return;
  let ok;
  if (it.type === "mc") { if (x.pick === null) return; ok = x.ord[x.pick] === 0; }
  else { const v = ($("#ans") || {}).value || x.inp; if (!String(v).trim()) { x.err = "Avval javobni kiriting"; return vPractice(); } x.inp = v; ok = numEq(v, it.ans); }
  x.tries++;
  if (!ok && x.tries < 2) { if (it.type === "mc") { if (!x.gone.includes(x.pick)) x.gone.push(x.pick); x.pick = null; } return vPractice(); }
  x.done = true; x.ok = ok;
  const ms = Date.now() - x.t0; x.ms = ms;
  const g = !ok ? 1 : (x.tries > 1 || x.hint || x.conf === "guess") ? 2 : ms < 20000 ? 4 : 3;
  record(it, ok && x.tries === 1 && !x.hint, g, ms);
  if (P.mode === "takror") { const dk = iso(today()); (S.days[dk] || (S.days[dk] = { a: 0, r: 0 })).r = 1; save(); }
  vPractice();
}
function next() { if (P.i < P.items.length - 1) { P.i++; vPractice(); window.scrollTo(0, 0); } else finishPractice(); }
function finishPractice() {
  const done = P.items.filter(x => x.done); if (!done.length) { P = null; return go("bugun"); }
  LAST = { kind: "mashq", title: P.title, items: done.map(x => ({ it: x.it, ok: x.ok, conf: x.conf, ms: x.ms || 0, pickTxt: x.it.type === "mc" && x.pick !== null ? x.it.opts[x.ord[x.pick]] : x.inp, flag: false })), at: Date.now() };
  P = null; go("natija");
}
document.addEventListener("keydown", e => {
  if (e.target.matches("input,textarea,select") && e.key !== "Enter") return;
  if (location.hash === "#mashq" && P) {
    const x = P.items[P.i], key = e.key.toUpperCase(), idx = "1234".indexOf(key) >= 0 ? "1234".indexOf(key) : L.indexOf(key);
    if (x.it.type === "mc" && key.length === 1 && idx >= 0 && !x.done && !x.gone.includes(idx)) { x.pick = idx; vPractice(); e.preventDefault(); }
    else if (e.key === "Enter") { e.preventDefault(); x.done ? next() : check(); }
    else if (key === "H" && !e.target.matches("input")) hint();
  }
});

/* ================= ORAL ================= */
function startOral(items, title) { if (!items.length) return toast("Og'zaki savollar yo'q"); O = { title, i: 0, items: items.map(it => ({ it, txt: "", open: false, got: [] })) }; go("ogzaki"); }
function vOral() {
  const x = O.items[O.i], it = x.it, s = SM[it.s], n = O.items.length;
  view.innerHTML = '<div class="qhead"><button type="button" class="btn gh sm" data-quit>✕</button><span class="small muted num">' + (O.i + 1) + " / " + n + '</span><div class="prog"><i style="width:' + (O.i / n * 100) + '%"></i></div><span class="small" style="font-weight:700">' + esc(O.title) + "</span></div>" +
    '<article class="qcard"><span class="pill">' + esc(s.short) + " · og'zaki / yozma</span><div class=\"qtext\">" + fmt(it.text) + "</div>" +
    '<label class="muted small" for="otx">Javobingizni yozing yoki ovoz chiqarib ayting — keyin namuna fikrlar bilan solishtiring</label><textarea id="otx" class="txt" style="margin-top:6px">' + esc(x.txt) + "</textarea>" +
    (x.open ? '<div class="fb ne"><b>Javobda bo\'lishi kerak bo\'lgan asosiy fikrlar — o\'zingizda borlarini belgilang</b>' + it.keys.map((k, j) => '<label class="check"><input type="checkbox" data-g="' + j + '"' + (x.got.includes(j) ? " checked" : "") + "><span>" + fmt(k) + "</span></label>").join("") + '<div class="small" style="margin-top:10px;font-weight:700">Natija: ' + x.got.length + " / " + it.keys.length + "</div></div>" : "") +
    '<div class="acts"><span></span>' + (x.open ? '<button type="button" class="btn" data-next>' + (O.i === n - 1 ? "Yakunlash" : "Keyingi savol →") + "</button>" : '<button type="button" class="btn" data-open>Namuna fikrlarni ko\'rish</button>') + "</div></article>";
  const ta = $("#otx"); ta.oninput = () => x.txt = ta.value;
  view.onclick = e => {
    if (e.target.closest("[data-open]")) { x.open = true; return vOral(); }
    const g = e.target.closest("[data-g]"); if (g) { const j = +g.dataset.g; x.got = g.checked ? [...x.got, j] : x.got.filter(v => v !== j); $(".fb .small").textContent = "Natija: " + x.got.length + " / " + it.keys.length; return; }
    if (e.target.closest("[data-next]")) { const r = x.got.length / it.keys.length; record(it, r >= 0.7, r >= 0.9 ? 4 : r >= 0.7 ? 3 : r >= 0.4 ? 2 : 1, 0); if (O.i < n - 1) { O.i++; vOral(); window.scrollTo(0, 0); } else { toast("Og'zaki mashq yakunlandi"); O = null; go("bugun"); } }
    if (e.target.closest("[data-quit]")) { O = null; go("bugun"); }
  };
}

/* ================= EXAM ================= */
function startExam(sid, k, op) {
  op = op || {};
  const s = SM[sid], c = s.controls.find(x => x.k === k); const tp = op.topics || (c.topics === "all" ? s.topics.map((x, i) => i + 1) : c.topics);
  if (!tp.length) return toast("Bu nazorat uchun test yo'q");
  const pool = ITEMS.filter(x => x.s === sid && x.type !== "oral" && tp.includes(x.ti + 1));
  const n = op.n ? Math.min(op.n, pool.length) : Math.min(c.topics === "all" ? 40 : 25, Math.max(10, tp.length * 3), pool.length);
  const per = {}; tp.forEach(t => per[t] = shuffle(pool.filter(x => x.ti + 1 === t)));
  const pick = []; let r = 0; while (pick.length < n) { let added = false; for (const t of tp) { if (per[t][r]) { pick.push(per[t][r]); added = true; if (pick.length >= n) break; } } if (!added) break; r++; }
  E = { s: sid, k, ball: op.ball || 0, target: op.target || 0, tag: op.tag || "", title: op.title || (s.short + " · " + k + " simulyatsiyasi"), i: 0, items: shuffle(pick).map(it => ({ it, ord: it.type === "mc" ? shuffle([0, 1, 2, 3]) : null, pick: null, inp: "", flag: false, conf: "sure", ms: 0 })), end: Date.now() + (op.min ? op.min * 60000 : n * 90000), mark: Date.now(), confirm: false };
  go("imtihon");
}
const clock = s => Math.floor(s / 60) + ":" + pad(s % 60);
function tick() { const left = Math.max(0, Math.round((E.end - Date.now()) / 1000)); const el = $("#tm"); if (el) { el.textContent = clock(left); el.classList.toggle("low", left < 120); } if (left <= 0) submitExam(); }
function vExam() {
  clearInterval(timerId); timerId = setInterval(tick, 1000);
  const x = E.items[E.i], it = x.it, n = E.items.length, answered = y => y.it.type === "mc" ? y.pick !== null : String(y.inp).trim() !== "";
  const nav = E.items.map((y, j) => '<button type="button" data-go="' + j + '" class="' + (y.flag ? "f " : answered(y) ? "a " : "") + (j === E.i ? "cur" : "") + '">' + (j + 1) + "</button>").join("");
  let body;
  if (E.confirm) {
    const un = E.items.filter(y => !answered(y)).length, fl = E.items.filter(y => y.flag).length;
    body = '<article class="qcard"><h2 style="font-size:22px">Yakunlashni tasdiqlang</h2><p class="muted">' + (un ? un + " ta savolga javob berilmagan. " : "Barcha savollarga javob berilgan. ") + (fl ? fl + " ta savol \"keyinroq\" deb belgilangan." : "") + '</p><p class="small muted">Topshirgandan keyin javoblarni o\'zgartirib bo\'lmaydi.</p><div class="acts"><button type="button" class="btn gh" data-back>Davom etish</button><button type="button" class="btn" data-submit>Topshirish va tekshirish</button></div></article>';
  } else {
    const opts = it.type === "mc" ? '<div class="opts">' + x.ord.map((oi, k) => '<button type="button" class="opt ' + (x.pick === k ? "sel" : "") + '" data-k="' + k + '"><span class="k">' + L[k] + "</span><span>" + fmt(it.opts[oi]) + "</span></button>").join("") + "</div>" : '<label class="muted small" for="eans">Javob (son, 0,25 yoki 1/4)</label><div style="margin-top:6px"><input id="eans" class="ans num" inputmode="decimal" autocomplete="off" value="' + esc(x.inp) + '"></div>';
    body = '<article class="qcard"><div class="row" style="justify-content:space-between"><b>' + (E.i + 1) + '-savol</b><button type="button" class="chip" data-flag aria-pressed="' + x.flag + '">⚑ Keyinroq qaytish</button></div><div class="qtext">' + fmt(it.text) + "</div>" + opts +
      '<div class="conf">Ishonchingiz: <button type="button" class="chip" data-conf="guess" aria-pressed="' + (x.conf === "guess") + '">Taxmin</button><button type="button" class="chip" data-conf="sure" aria-pressed="' + (x.conf === "sure") + '">Ishonaman</button></div>' +
      '<div class="acts"><button type="button" class="btn gh" data-prev' + (E.i ? "" : " disabled") + '>← Oldingi</button><button type="button" class="btn" data-nx>' + (E.i === n - 1 ? "Yakunlash…" : "Keyingi →") + "</button></div></article>";
  }
  view.innerHTML = '<div class="qhead"><b>' + esc(E.title) + '</b><span style="margin-left:auto" class="small muted">Javob: ' + E.items.filter(answered).length + "/" + n + '</span><span class="timer" id="tm">' + clock(Math.max(0, Math.round((E.end - Date.now()) / 1000))) + "</span></div>" +
    '<div class="exam"><aside class="card" style="padding:14px"><div class="small" style="font-weight:700;margin-bottom:10px">Savollar</div><div class="navg">' + nav + '</div><div class="tiny muted" style="margin:10px 0">■ javob · ⚑ keyinroq</div><button type="button" class="btn gh sm" style="width:100%" data-fin>Yakunlash…</button></aside>' + body + "</div>";
  const inp = $("#eans"); if (inp) { inp.focus(); inp.oninput = () => { x.inp = inp.value; }; }
  const move = j => { E.items[E.i].ms += Date.now() - E.mark; E.mark = Date.now(); E.i = j; E.confirm = false; vExam(); };
  view.onclick = e => {
    const k = e.target.closest("[data-k]"); if (k) { x.pick = +k.dataset.k; return vExam(); }
    const g = e.target.closest("[data-go]"); if (g) return move(+g.dataset.go);
    const c = e.target.closest("[data-conf]"); if (c) { x.conf = c.dataset.conf; return vExam(); }
    if (e.target.closest("[data-flag]")) { x.flag = !x.flag; return vExam(); }
    if (e.target.closest("[data-prev]")) return move(E.i - 1);
    if (e.target.closest("[data-nx]")) { if (E.i < n - 1) return move(E.i + 1); E.confirm = true; return vExam(); }
    if (e.target.closest("[data-fin]")) { E.confirm = true; return vExam(); }
    if (e.target.closest("[data-back]")) { E.confirm = false; return vExam(); }
    if (e.target.closest("[data-submit]")) submitExam();
  };
}
function submitExam() {
  if (!E) return; clearInterval(timerId);
  E.items[E.i].ms += Date.now() - E.mark;
  const res = E.items.map(x => { const ok = x.it.type === "mc" ? x.pick !== null && x.ord[x.pick] === 0 : numEq(x.inp, x.it.ans); const ans = x.it.type === "mc" ? x.pick !== null : String(x.inp).trim() !== "";
    if (ans) record(x.it, ok, !ok ? 1 : x.conf === "guess" ? 2 : 3, x.ms);
    return { it: x.it, ok, ans, conf: x.conf, ms: x.ms, flag: x.flag, pickTxt: x.it.type === "mc" ? (x.pick !== null ? x.it.opts[x.ord[x.pick]] : "") : x.inp }; });
  const sc = res.filter(r => r.ok).length;
  S.ex.push({ s: E.s, k: E.k, tag: E.tag, sc, n: res.length, pct: Math.round(sc / res.length * 100), at: Date.now() }); if (S.ex.length > 80) S.ex = S.ex.slice(-80); save();
  LAST = { kind: "imtihon", title: E.title, s: E.s, k: E.k, tag: E.tag, ball: E.ball, target: E.target, items: res, at: Date.now() };
  E = null; go("natija");
}

/* ================= RESULT ================= */
let RF = "all";
function vResult() {
  const R0 = LAST, n = R0.items.length, sc = R0.items.filter(r => r.ok).length, pct = Math.round(sc / n * 100);
  const by = {}; R0.items.forEach(r => { const k = r.it.s + "." + r.it.ti; (by[k] = by[k] || { s: r.it.s, ti: r.it.ti, n: 0, ok: 0 }); by[k].n++; if (r.ok) by[k].ok++; });
  const topics = Object.values(by).sort((a, b) => a.ok / a.n - b.ok / b.n);
  const sureWrong = R0.items.filter(r => !r.ok && r.conf === "sure" && (r.ans !== false)).length, guessRight = R0.items.filter(r => r.ok && r.conf === "guess").length;
  const C = 2 * Math.PI * 62, col = pct >= 90 ? "var(--ok)" : pct >= 60 ? "var(--br)" : "var(--ba)";
  const grade = pct >= 90 ? "5 (a'lo)" : pct >= 70 ? "4 (yaxshi)" : pct >= 60 ? "3 (qoniqarli)" : "2";
  const prev = R0.kind === "imtihon" ? S.ex.filter(e => e.s === R0.s && e.k === R0.k && (e.tag || "") === (R0.tag || "")).slice(-2, -1)[0] : null;
  const bl = R0.ball ? Math.round(sc / n * R0.ball * 10) / 10 : null;
  const maxMs = Math.max(...R0.items.map(r => r.ms || 0), 1), avgMs = avg(R0.items.map(r => r.ms || 0));
  const weakest = topics[0];
  const list = R0.items.map((r, j) => ({ r, j })).filter(({ r }) => RF === "all" || (RF === "wrong" && !r.ok) || (RF === "flag" && r.flag));
  view.innerHTML = '<div class="top"><div><div class="eyebrow">' + esc(R0.title) + '</div><h1 class="h1">Natija va tahlil</h1></div><div class="row"><a class="btn gh" href="#' + (R0.ball ? "yakuniy" : "bugun") + '">' + (R0.ball ? "Yakuniy bo'lim" : "Bosh sahifa") + '</a>' + (R0.items.some(r => !r.ok) ? '<button type="button" class="btn" data-redo>Xatolarni qayta ishlash</button>' : "") + "</div></div>" +
    '<div class="grid g3"><div class="card" style="text-align:center"><svg class="ring" viewBox="0 0 150 150"><circle cx="75" cy="75" r="62" fill="none" stroke="var(--line)" stroke-width="12"/><circle cx="75" cy="75" r="62" fill="none" stroke="' + col + '" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + (C * pct / 100) + " " + C + '" transform="rotate(-90 75 75)"/><text x="75" y="84" text-anchor="middle" font-size="30" font-weight="800" fill="currentColor">' + pct + '%</text></svg><div style="font-weight:700">' + sc + " / " + n + ' to\'g\'ri</div>' + (bl !== null ? '<div class="small" style="margin-top:4px"><b class="num">' + bl + " / " + R0.ball + ' ball</b> ' + (R0.target ? (bl >= R0.target ? '<span class="pill ok">maqsad bajarildi</span>' : '<span class="pill ' + (bl >= R0.target - 4 ? "wa" : "ba") + '">maqsadgacha ' + Math.round((R0.target - bl) * 10) / 10 + "</span>") : "") + "</div>" : '<div class="muted small">Sillabus shkalasi bo\'yicha: ' + grade + "</div>") + (prev ? '<div class="small" style="margin-top:6px">Oldingi urinish: ' + prev.pct + "% → " + pct + "% " + (pct >= prev.pct ? '<span class="pill ok">+' + (pct - prev.pct) + "</span>" : '<span class="pill ba">' + (pct - prev.pct) + "</span>") + "</div>" : "") + "</div>" +
    '<div class="card"><b>Mavzular bo\'yicha</b><div class="bars" style="margin-top:12px">' + topics.slice(0, 6).map(t => { const p = Math.round(t.ok / t.n * 100); return '<div class="bar"><div class="t"><span>' + esc(SM[t.s].topics[t.ti].t) + '</span><b class="num">' + t.ok + "/" + t.n + '</b></div><div class="m"><i style="width:' + p + "%;background:" + (p < 60 ? "var(--ba)" : p < 85 ? "var(--wa)" : "var(--ok)") + '"></i></div></div>'; }).join("") + "</div></div>" +
    '<div class="card"><b>Vaqt</b><div class="spark" style="margin-top:14px">' + R0.items.map(r => '<i class="' + ((r.ms || 0) > avgMs * 1.8 ? "t" : "") + '" style="height:' + Math.max(6, (r.ms || 0) / maxMs * 100) + '%"></i>').join("") + '</div><div class="muted small" style="margin-top:8px">O\'rtacha ' + Math.round(avgMs / 1000) + " soniya. To'q ustunlar — o'rtachadan ancha sekin savollar.</div></div></div>" +
    '<div class="grid g2" style="margin-top:12px"><div class="card"><b>Ishonch kalibrovkasi</b><p class="small" style="margin:8px 0 0">' + (sureWrong ? '<span class="pill ba">' + sureWrong + "</span> ta \"ishonchli xato\" — eng xavflisi: noto'g'ri tushuncha mustahkamlangan. Ular takrorlash navbatida birinchi bo'lib qaytadi." : "Ishonch bilan berilgan javoblarda xato yo'q — zo'r.") + (guessRight ? " " + guessRight + " ta savolni taxmin bilan topdingiz — ular ham takrorlanadi." : "") + "</p></div>" +
    '<div class="card"><b>Tavsiya</b><p class="small" style="margin:8px 0 12px">' + (weakest && weakest.ok / weakest.n < 0.85 ? "Eng kuchsiz mavzu — <b>" + esc(SM[weakest.s].topics[weakest.ti].t) + "</b>. Nazariyani qayta o'qib, mavzu testini ishlang." : "Natija yaxshi. Bilim saqlanib qolishi uchun takrorlashni o'tkazib yubormang.") + "</p>" + (weakest ? '<a class="btn sm" href="#mavzu-' + weakest.s + "-" + (weakest.ti + 1) + '">Mavzuni ochish</a>' : "") + "</div></div>" +
    '<div class="row" style="justify-content:space-between;flex-wrap:wrap;margin:26px 0 12px"><h2 class="h2" style="margin:0">Savollar tahlili</h2><div class="row" style="gap:6px;flex-wrap:wrap">' + [["all", "Hammasi " + n], ["wrong", "Xato " + (n - sc)], ["flag", "Belgilangan " + R0.items.filter(r => r.flag).length]].map(([k, t]) => '<button type="button" class="chip" data-f="' + k + '" aria-pressed="' + (RF === k) + '">' + t + "</button>").join("") + "</div></div>" +
    '<div class="list">' + (list.length ? list.map(({ r, j }) => { const it = r.it; const right = it.type === "mc" ? it.opts[0] : it.ans; return '<div class="li ' + (r.ok ? "ok" : "ba") + '"><div class="small muted">' + (j + 1) + "-savol · " + esc(SM[it.s].topics[it.ti].t) + '</div><div style="font-weight:600;margin:4px 0">' + fmt(it.text) + '</div><div class="small">' + (r.ok ? '<span style="color:var(--okt)">✓ ' + fmt(right) + "</span>" : '<span style="color:var(--bat)">Sizning javob: ' + (r.pickTxt !== "" && r.pickTxt != null ? fmt(r.pickTxt) : "berilmagan") + '</span><br><span style="color:var(--okt)">To\'g\'ri: ' + fmt(right) + "</span>") + '<div class="muted" style="margin-top:4px">' + fmt(it.exp) + "</div></div></div>"; }).join("") : '<div class="empty">Bu filtrda savol yo\'q</div>') + "</div>";
  view.onclick = e => {
    const f = e.target.closest("[data-f]"); if (f) { RF = f.dataset.f; return vResult(); }
    if (e.target.closest("[data-redo]")) startPractice(shuffle(R0.items.filter(r => !r.ok).map(r => r.it)), "Xatolar ustida ishlash", "mashq");
  };
}

/* ================= REVIEW ================= */
function vReview() {
  const due = dueItems(), wr = wrongItems(), now = Date.now();
  const fc = [...Array(7)].map((_, i) => { const a = +today() + i * DAY, b = a + DAY; return ITEMS.filter(it => !S.hide[it.s] && S.q[it.id] && (i === 0 ? S.q[it.id].due < b : S.q[it.id].due >= a && S.q[it.id].due < b)).length; });
  const mx = Math.max(...fc, 1);
  const groups = {}; wr.forEach(it => (groups[it.s] = groups[it.s] || []).push(it));
  view.innerHTML = '<div class="top"><div><div class="eyebrow">FSRS algoritmi — unutishdan oldin takrorlash</div><h1 class="h1">Takrorlash</h1></div></div>' +
    '<div class="grid g2"><div class="card hero"><div class="lab">Hozir navbatda</div><div class="big" style="margin:8px 0 14px">' + due.length + '<span class="unit">savol</span></div>' + (due.length ? '<button type="button" class="btn" style="background:#fff;color:var(--br)" data-due>Takrorlashni boshlash</button>' : '<div class="lab">Navbat bo\'sh. Yangi mavzular ishlang — ular avtomatik shu yerga tushadi.</div>') + "</div>" +
    '<div class="card"><b>Keyingi 7 kun</b><div class="spark" style="height:90px;margin-top:14px">' + fc.map((v, i) => '<i class="' + (i === 0 ? "t" : "") + '" style="height:' + Math.max(4, v / mx * 100) + '%" title="' + v + '"></i>').join("") + '</div><div class="week" style="margin-top:6px">' + fc.map((v, i) => { const d = new Date(+today() + i * DAY); return "<div>" + (i === 0 ? "Bugun" : ["Ya", "Du", "Se", "Ch", "Pa", "Ju", "Sh"][d.getDay()]) + "<br><b>" + v + "</b></div>"; }).join("") + "</div></div></div>" +
    '<div class="row" style="justify-content:space-between;flex-wrap:wrap;margin:28px 0 12px"><h2 class="h2" style="margin:0">Xatolar daftari</h2>' + (wr.length ? '<button type="button" class="btn sm" data-allw>Barcha xatolarni yechish · ' + wr.length + "</button>" : "") + "</div>" +
    (wr.length ? Object.keys(groups).map(sid => '<h3 style="font-size:16px;margin:18px 0 8px">' + esc(SM[sid].name) + ' <span class="pill ba">' + groups[sid].length + '</span></h3><div class="list">' + groups[sid].slice(0, 30).map(it => { const st = S.q[it.id]; return '<div class="li ba"><div class="small muted">' + esc(SM[sid].topics[it.ti].t) + " · " + st.n + " marta ishlangan · " + (st.due <= now ? "takrorlash vaqti keldi" : "keyingisi " + dstr(new Date(st.due))) + '</div><div style="font-weight:600;margin:4px 0 8px">' + fmt(it.text) + '</div><button type="button" class="btn sm gh" data-one="' + it.id + '">Qayta yechish</button></div>'; }).join("") + "</div>").join("") : '<div class="empty">Xatolar daftari bo\'sh. Testlarda xato qilgan savollaringiz shu yerga yig\'iladi.</div>');
  view.onclick = e => {
    if (e.target.closest("[data-due]")) return startPractice(due.slice(0, 40), "Takrorlash", "takror");
    if (e.target.closest("[data-allw]")) return startPractice(shuffle(wr).slice(0, 40), "Xatolar daftari", "mashq");
    const o = e.target.closest("[data-one]"); if (o) startPractice([IM[o.dataset.one]], "Xatoni qayta yechish", "mashq");
  };
}

/* ================= CALENDAR ================= */
function vCalendar() {
  const all = allControls(), cw = currentWeek(); const weeks = {};
  all.forEach(x => { const w = Math.floor((x.d - semStart()) / DAY / 7) + 1; (weeks[w] = weeks[w] || []).push(x); });
  view.innerHTML = '<div class="top"><div><div class="eyebrow">Semestr boshlanishi: ' + dstr(parseD(S.start)) + " · hozir " + cw + '-hafta</div><h1 class="h1">Nazoratlar kalendari</h1><p class="lead">Barcha fanlarning JN, ON va YN muddatlari sillabuslardagi haftalar asosida. Aniq sana ma\'lum bo\'lsa — uni kiriting, reja va takrorlash shunga moslashadi.</p></div></div>' +
    (() => { const ks = Object.keys(weeks).map(Number).sort((a, b) => a - b); const past = ks.filter(w => weeks[w].every(x => daysTo(x.d) < 0)), cur = ks.filter(w => !past.includes(w)); return (past.length ? '<details class="card" style="margin-bottom:14px"><summary style="cursor:pointer;font-weight:700">O\'tgan nazoratlar · ' + past.reduce((n, w) => n + weeks[w].length, 0) + ' ta</summary>' + wkHtml(past) + '</details>' : '') + wkHtml(cur); })();
  function wkHtml(list) { return list.map(w => { const ws = new Date(+semStart() + (w - 1) * 7 * DAY), we = new Date(+ws + 6 * DAY);
      return '<div class="wk"><div class="d">' + (w >= 16 ? "Sessiya" : w + "-hafta") + (w === cw ? ' <span class="pill">hozir</span>' : "") + "<span>" + dstr(ws) + " – " + dstr(we) + "</span></div><div>" + weeks[w].map(x => { const n = daysTo(x.d), key = x.s.id + ":" + x.c.k;
        return '<div class="ev ' + (n < 0 ? "past" : "") + '"><span class="tx"><b>' + esc(x.s.short) + " · " + esc(x.c.k) + '</b> <span class="muted small">' + esc(x.c.form) + " · " + x.c.ball + ' ball</span><br><span class="small muted">' + esc(x.c.desc) + '</span></span><span class="small num">' + (x.topics.length ? "Tayyorlik " + ctrlReady(x) + "%" : "") + '</span><input type="date" class="txt" style="max-width:160px;min-height:38px;font-size:14px;padding:6px 10px" aria-label="' + esc(x.s.short + " " + x.c.k) + ' sanasi" data-date="' + esc(key) + '" value="' + iso(x.d) + '">' + (x.topics.length && n >= 0 ? '<button type="button" class="btn sm" data-sim="' + esc(key) + '">Simulyatsiya</button>' : "") + "</div>"; }).join("") + "</div></div>"; }).join(""); }
  view.onclick = e => { const b = e.target.closest("[data-sim]"); if (b) { const [sid, k] = b.dataset.sim.split(":"); startExam(sid, k); } };
  view.onchange = e => { const i = e.target.closest("[data-date]"); if (i && i.value) { S.dates[i.dataset.date] = i.value; save(); toast("Sana saqlandi"); vCalendar(); } };
}

/* ================= SETTINGS ================= */
function openSettings() {
  const lay = $("#layer");
  lay.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="stt"><div class="card"><div class="row" style="justify-content:space-between;margin-bottom:16px"><h2 id="stt" style="font-size:22px">Sozlamalar</h2><button type="button" class="btn gh sm" data-close aria-label="Yopish">✕</button></div>' +
    '<div class="field"><label for="sname">Ismingiz</label><input id="sname" class="txt" value="' + esc(S.name) + '" placeholder="Og\'abek"></div>' +
    '<div class="field"><label for="sstart">Semestr boshlangan sana</label><input id="sstart" type="date" class="txt" value="' + esc(S.start) + '"><span class="tiny muted">Barcha nazorat sanalari shu sanadan haftalar bo\'yicha hisoblanadi.</span></div>' +
    '<div class="field"><label for="sgoal">Kunlik maqsad</label><select id="sgoal" class="txt">' + [10, 20, 30, 50].map(v => "<option" + (S.goal === v ? " selected" : "") + ' value="' + v + '">' + v + " ta savol</option>").join("") + "</select></div>" +
    '<div class="field"><label>Fanlar</label>' + SUBJ.map(s => '<label class="check"><input type="checkbox" data-sub="' + s.id + '"' + (S.hide[s.id] ? "" : " checked") + "><span>" + esc(s.name) + "</span></label>").join("") + "</div>" +
    '<div class="acts"><button type="button" class="btn gh" data-reset>Progressni tozalash</button><button type="button" class="btn" data-save>Saqlash</button></div><div id="rz"></div></div></div>';
  const close = () => { lay.innerHTML = ""; };
  lay.onclick = e => {
    if (e.target.classList.contains("modal") || e.target.closest("[data-close]")) return close();
    if (e.target.closest("[data-save]")) { S.name = $("#sname").value.trim().slice(0, 40); if ($("#sstart").value) S.start = $("#sstart").value; S.goal = +$("#sgoal").value; lay.querySelectorAll("[data-sub]").forEach(c => { if (c.checked) delete S.hide[c.dataset.sub]; else S.hide[c.dataset.sub] = 1; }); if (!visible().length) { S.hide = {}; } save(); close(); toast("Saqlandi"); route(); }
    if (e.target.closest("[data-reset]")) { $("#rz").innerHTML = '<div class="fb ba"><b>Barcha natijalar, takrorlash tarixi va xatolar o\'chadi.</b>Buni qaytarib bo\'lmaydi.<div class="acts" style="margin-top:10px"><button type="button" class="btn gh sm" data-no>Bekor qilish</button><button type="button" class="btn sm" style="background:var(--ba)" data-yes>Ha, tozalash</button></div></div>'; }
    if (e.target.closest("[data-no]")) $("#rz").innerHTML = "";
    if (e.target.closest("[data-yes]")) { const keep = { name: S.name, start: S.start, goal: S.goal, hide: S.hide, dates: S.dates }; S = Object.assign(fresh(), keep); save(); close(); toast("Progress tozalandi"); route(); }
  };
  document.addEventListener("keydown", function esck(ev) { if (ev.key === "Escape") { close(); document.removeEventListener("keydown", esck); } });
}
$("#setBtn").onclick = openSettings;

route();
}
