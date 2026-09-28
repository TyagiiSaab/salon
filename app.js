/* VELOURA · app v2 — renders everything from SITE config */
(function () {
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const C = window.SITE || window.__SITE || { services: [], transformations: [], stylists: [], gallery: [], reviews: [] };
  /* image safety net — no broken visuals ever: swap any failed photo for a house fallback */
  const FALLBACK = "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop";
  document.addEventListener("error", (e) => {
    const t = e.target;
    if (t && t.tagName === "IMG" && !t.dataset.fb) { t.dataset.fb = "1"; t.src = FALLBACK; }
  }, true);

  /* marquee */
  const words = ["CUT", "COLOUR", "CONFIDENCE", "BALAYAGE", "SKIN FADE", "GLOW", "EDITORIAL", "BEARD SCULPT"];
  const seq = words.map((w) => `<span>${w} &nbsp;<i>✦</i></span>`).join("");
  const mq = $("#marquee"); if (mq) mq.innerHTML = seq + seq;

  /* services */
  const cats = ["All", ...new Set((C.services || []).map((s) => s.cat))];
  let active = "All";
  const tabsEl = $("#svcTabs"), listEl = $("#svcList"), float = $("#floatImg"), floatImg = $("#floatImg img");
  function renderTabs() {
    if (!tabsEl) return;
    tabsEl.innerHTML = cats.map((c) => `<button class="${c === active ? "active" : ""}" data-c="${c}">${c}</button>`).join("");
    $$("button", tabsEl).forEach((b) => (b.onclick = () => { active = b.dataset.c; renderTabs(); renderList(); }));
  }
  function renderList() {
    if (!listEl) return;
    const items = (C.services || []).filter((s) => active === "All" || s.cat === active);
    listEl.innerHTML = items.map((s, i) => `
      <div class="svc-row" data-img="${s.img}">
        <span class="svc-num">/${String(i + 1).padStart(2, "0")}</span>
        <img class="svc-thumb" src="${s.img}" alt="${s.name}" loading="lazy">
        <div><span class="svc-cat">${s.cat}</span><h3>${s.name}</h3><p class="svc-desc">${s.desc}</p></div>
        <div class="svc-price">${s.price}<small>${s.duration}</small></div>
        <span class="svc-go">→</span>
      </div>`).join("");
    $$(".svc-row", listEl).forEach((r) => {
      r.addEventListener("click", () => { location.hash = "#booking"; const fs = $("#fService"); if (fs) { [...fs.options].forEach((o, k) => { if (o.text.includes(r.querySelector("h3").textContent.trim())) fs.selectedIndex = k; }); } });
      r.addEventListener("mouseenter", () => { if (floatImg) floatImg.src = r.dataset.img; float.classList.add("show"); });
      r.addEventListener("mouseleave", () => float.classList.remove("show"));
    });
  }
  renderTabs(); renderList();
  document.addEventListener("mousemove", (e) => { if (float && float.classList.contains("show")) { float.style.left = e.clientX + 24 + "px"; float.style.top = e.clientY - 140 + "px"; } });

  /* honest results — finished work cards, no fake before/afters */
  const tg = $("#transGrid");
  if (tg) {
    tg.innerHTML = (C.transformations || []).map((t) => `
      <div class="tcard">
        <div class="tcomp">
          <img src="${t.img}" alt="${t.service} by ${t.stylist}" loading="lazy">
          <span class="tprice">${t.price}</span>
        </div>
        <div class="tinfo"><span>${t.service}</span><span>· ${t.stylist}</span></div>
      </div>`).join("");
  }

  /* stylists */
  const sg = $("#stylistGrid");
  if (sg) sg.innerHTML = (C.stylists || []).map((s, i) => `
    <div class="art"><div class="ph"><img src="${s.img}" alt="${s.name}" loading="lazy"><span class="num">0${i + 1}</span><a class="ig" href="${s.insta}" target="_blank" rel="noopener">Instagram ↗</a></div>
    <div class="art-body"><h3>${s.name}</h3><p>${s.role} · <b>${s.exp}</b></p></div></div>`).join("");

  /* gallery */
  const caps = ["Signature cut", "Lived-in colour", "On the chair", "The studio", "Sharp fade", "Editorial colour", "Nail art", "Makeup detail", "Spa ritual", "Skin glow", "Texture", "Beard work"];
  const gg = $("#galleryGrid");
  if (gg) gg.innerHTML = (C.gallery || []).map((src, i) => `
    <figure class="${i === 0 ? "wide" : i === 1 || i === 5 ? "tall" : i === 7 ? "wide" : ""}" data-i="${i}">
      <img src="${src}" alt="${caps[i % caps.length]}" loading="lazy"><figcaption>${caps[i % caps.length].toUpperCase()}</figcaption>
    </figure>`).join("");
  const lb = $("#lightbox"), lbImg = $("#lbImg"); let li = 0;
  const open = (i) => { li = (i + C.gallery.length) % C.gallery.length; lbImg.src = C.gallery[li]; lb.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
  if (gg) $$("figure", gg).forEach((f) => (f.onclick = () => open(+f.dataset.i)));
  if (lb) {
    $("#lbClose").onclick = close; $("#lbPrev").onclick = (e) => { e.stopPropagation(); open(li - 1); };
    $("#lbNext").onclick = (e) => { e.stopPropagation(); open(li + 1); };
    lb.onclick = (e) => { if (e.target === lb) close(); };
    document.addEventListener("keydown", (e) => { if (!lb.classList.contains("open")) return; if (e.key === "Escape") close(); if (e.key === "ArrowRight") open(li + 1); if (e.key === "ArrowLeft") open(li - 1); });
  }

  /* reviews slider */
  const big = $("#revBig"), strip = $("#revStrip"), idx = $("#revIdx"); let ri = 0;
  function renderRev() {
    const r = C.reviews[ri]; if (!r || !big) return;
    big.innerHTML = `<div class="stars">${"★".repeat(r.stars)}</div><q>${r.quote}</q><div class="who"><img src="${r.img}" alt="${r.name}" loading="lazy"><span>${r.name} — ${r.meta}</span></div>`;
    idx.textContent = String(ri + 1).padStart(2, "0") + " / " + String(C.reviews.length).padStart(2, "0");
    strip.innerHTML = C.reviews.map((x, k) => `<button class="${k === ri ? "active" : ""}" data-k="${k}"><img src="${x.img}" alt="${x.name}" loading="lazy"><span><b>${x.name}</b><em>${x.meta} · ${"★".repeat(x.stars)}</em></span></button>`).join("");
    $$("button", strip).forEach((b) => (b.onclick = () => { ri = +b.dataset.k; renderRev(); }));
  }
  if (big) { renderRev(); $("#revPrev").onclick = () => { ri = (ri - 1 + C.reviews.length) % C.reviews.length; renderRev(); }; $("#revNext").onclick = () => { ri = (ri + 1) % C.reviews.length; renderRev(); }; setInterval(() => { ri = (ri + 1) % C.reviews.length; renderRev(); }, 6000); }

  /* booking */
  const fS = $("#fService"), fSt = $("#fStylist"), fD = $("#fDate");
  if (fS) fS.innerHTML = (C.services || []).map((s) => `<option>${s.name} — ${s.price} · ${s.duration}</option>`).join("");
  if (fSt) fSt.innerHTML = `<option>No preference — match me</option>` + (C.stylists || []).map((s) => `<option>${s.name} (${s.role})</option>`).join("");
  if (fD) fD.min = new Date().toISOString().split("T")[0];
  const form = $("#bookForm");
  if (form) form.addEventListener("submit", (e) => {
    e.preventDefault();
    const wa = (C.contact && C.contact.whatsapp ? C.contact.whatsapp.split("?")[0] : "https://wa.me/919896012345");
    const msg = `Hi VELOURA, I'd like to book:%0A• Service: ${encodeURIComponent(fS.value)}%0A• Artist: ${encodeURIComponent(fSt.value)}%0A• Date: ${encodeURIComponent(fD.value)}%0A• Time: ${encodeURIComponent($("#fTime").value)}%0A• Name/Phone: ${encodeURIComponent($("#fName").value)}`;
    $("#bookOk").style.display = "block";
    window.open(wa + "?text=" + msg, "_blank");
  });

  /* nav / menu / reveal / counters */
  const nav = $("#nav");
  const onS = () => { nav.classList.toggle("scrolled", window.scrollY > 24); const sb = $("#stickyBook"); if (sb) sb.style.display = window.scrollY > innerHeight * 0.7 ? "block" : ""; };
  window.addEventListener("scroll", onS, { passive: true }); onS();
  const mm = $("#mmenu");
  $("#burger").onclick = () => mm.classList.add("open");
  $("#mclose").onclick = () => mm.classList.remove("open");
  $$("#mmenu a").forEach((a) => (a.onclick = () => mm.classList.remove("open")));

  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.1 });
  $$(".rv").forEach((el) => io.observe(el));

  const cio = new IntersectionObserver((es) => es.forEach((en) => {
    if (!en.isIntersecting) return; cio.unobserve(en.target);
    const el = en.target, end = +el.dataset.count, t0 = performance.now();
    const tick = (t) => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN") + "+"; if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }), { threshold: 0.5 });
  $$("[data-count]").forEach((el) => cio.observe(el));
})();
