// All styles live in this string and are embedded in the HTML as a <style> tag.
// No stylesheet file, no Tailwind, no external fetch: it renders even if /_next/static fails.
export const CSS = `
.lb{--o:#FF6600;--o2:#E55A00;--bg:#0B0F17;--card:#1E293B;--tx:#F8FAFC;--mut:#CBD5E1;--line:#334155;
  margin:0;background:var(--bg);color:var(--tx);font-family:"Avenir Next","Segoe UI","Helvetica Neue",Arial,sans-serif;
  line-height:1.55;-webkit-text-size-adjust:100%;box-sizing:border-box;min-height:100vh;overflow-x:hidden}
.lb *,.lb *::before,.lb *::after{box-sizing:border-box}
.lb a{color:var(--o)}
.lb h1,.lb h2,.lb h3,.lb p,.lb ul{margin:0}
.lb img{display:block;max-width:100%;height:auto}
.lb a:focus-visible,.lb summary:focus-visible{outline:3px solid var(--o);outline-offset:2px}
.lb-wrap{max-width:1120px;margin:0 auto;padding:0 16px}
.lb-sec{padding:44px 0}
.lb-h2{font-size:28px;line-height:1.15;font-weight:800;letter-spacing:-.02em}
.lb-sub{margin-top:8px;color:var(--mut);max-width:640px}

/* header */
.lb-head{position:sticky;top:0;z-index:40;background:var(--bg);border-bottom:1px solid var(--line);padding-top:env(safe-area-inset-top,0px)}
.lb-head .lb-wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:60px}
.lb-brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--tx)!important;font-weight:800;font-size:18px;min-height:44px}
.lb-brand img{width:40px;height:40px;border-radius:8px}
.lb-brand small{color:var(--mut);font-weight:500}
.lb-nav{display:none;gap:22px;font-weight:600;font-size:14px}
.lb-nav a{color:var(--tx);text-decoration:none;padding:10px 0}
.lb-nav a:hover{color:var(--o)}

/* buttons */
.lb-btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:48px;padding:12px 22px;border-radius:10px;
  background:var(--o);color:#0B0F17!important;font-weight:800;font-size:16px;text-align:center;text-decoration:none;border:2px solid var(--o)}
.lb-btn:hover{background:var(--o2);border-color:var(--o2)}
.lb-btn.ghost{background:transparent;color:var(--tx)!important;border-color:var(--line)}
.lb-btn.ghost:hover{border-color:var(--o);background:transparent}
.lb-btn.auto{width:auto}

/* hero */
.lb-hero{padding:32px 0 40px;background:
  radial-gradient(circle at center,rgba(255,102,0,.22) 0 4px,transparent 4.5px) 0 0/28px 28px,var(--bg);border-bottom:1px solid var(--line)}
.lb-hero-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:24px;align-items:center}
.lb-h1{font-size:36px;line-height:1.06;font-weight:900;letter-spacing:-.03em}
.lb-lead{margin-top:14px;font-size:17px;color:var(--mut);max-width:560px}
.lb-points{margin-top:18px;padding:0;list-style:none;display:grid;gap:8px;grid-template-columns:minmax(0,1fr)}
.lb-points li{background:var(--card);border-radius:10px;padding:10px 12px;font-size:14px;font-weight:600}
.lb-imgbox{position:relative;width:100%;max-width:440px;margin:0 auto;aspect-ratio:1/1;background:#F8FAFC;border-radius:14px;overflow:hidden;display:flex;align-items:center;justify-content:center}
.lb-imgbox img{width:100%;height:100%;object-fit:contain}
.lb-ctabox{width:100%;max-width:440px;margin:14px auto 0;background:var(--card);border-radius:14px;padding:16px;display:grid;gap:10px}
.lb-ctabox strong{display:block;line-height:1.3}
.lb-meta{font-size:13px;color:var(--mut)}

/* cards */
.lb-grid{margin-top:24px;display:grid;gap:18px;grid-template-columns:minmax(0,1fr)}
.lb-card{background:var(--card);border:1px solid var(--line);border-radius:14px;overflow:hidden;display:flex;flex-direction:column;min-width:0}
.lb-card .lb-imgbox{max-width:none;border-radius:0}
.lb-card-body{padding:16px;display:flex;flex-direction:column;gap:6px;flex:1}
.lb-card h3{font-size:18px;line-height:1.3;font-weight:800}
.lb-card-cta{padding:0 16px 16px}
.lb-price{font-size:14px;color:var(--mut)}
.lb-price b{color:var(--tx);font-size:18px}
.lb-price s{margin-left:8px;opacity:.7}
.lb-alt{background:#111827}
.lb-info{margin-top:20px;display:grid;gap:12px;grid-template-columns:minmax(0,1fr)}
.lb-info>div{background:var(--card);border-radius:12px;padding:16px;font-size:14px;color:var(--mut)}
.lb-info h3{color:var(--tx);font-size:16px;margin-bottom:6px}

/* faq */
.lb-faq{margin-top:20px;border:1px solid var(--line);border-radius:14px;overflow:hidden;background:var(--card)}
.lb-faq details{padding:0 16px;border-top:1px solid var(--line)}
.lb-faq details:first-child{border-top:0}
.lb-faq summary{list-style:none;cursor:pointer;min-height:52px;display:flex;align-items:center;justify-content:space-between;gap:12px;font-weight:700}
.lb-faq summary::-webkit-details-marker{display:none}
.lb-faq summary::after{content:"+";color:var(--o);font-size:22px}
.lb-faq details[open] summary::after{content:"\\2212"}
.lb-faq details p{padding:0 0 16px;color:var(--mut)}

.lb-final{text-align:center;background:var(--card);border-top:1px solid var(--line)}
.lb-final .lb-btn{max-width:360px;margin:20px auto 0}
.lb-fine{margin-top:14px;font-size:12px;color:var(--mut)}

/* sticky mobile cta */
.lb-sticky{position:fixed;left:0;right:0;bottom:0;z-index:50;background:var(--bg);border-top:1px solid var(--line);padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px))}
.lb-pad{height:84px}

/* footer */
.lb-foot{background:#080B11;border-top:1px solid var(--line);padding:36px 0 28px;color:var(--mut);font-size:14px}
.lb-foot p{max-width:760px;margin-bottom:14px}
.lb-foot strong{color:var(--tx)}
.lb-foot nav{display:flex;flex-wrap:wrap;gap:4px 22px;margin:8px 0 14px}
.lb-foot nav a{color:var(--tx);font-weight:600;text-decoration:none;padding:10px 0;display:inline-block}
.lb-foot nav a:hover{color:var(--o)}

/* legal */
.lb-legal{max-width:760px;margin:0 auto;padding:36px 16px 56px}
.lb-legal h1{font-size:32px;font-weight:900;letter-spacing:-.02em;margin:10px 0 4px}
.lb-legal h2{font-size:20px;margin:28px 0 8px}
.lb-legal p,.lb-legal li{color:var(--mut);margin-bottom:12px}
.lb-legal ul{padding-left:22px}
.lb-back{display:inline-flex;align-items:center;min-height:44px;font-weight:700}

@media (min-width:640px){.lb-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.lb-points{grid-template-columns:repeat(2,minmax(0,1fr))}.lb-info{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:768px){.lb-nav{display:flex}.lb-sticky,.lb-pad{display:none}.lb-h1{font-size:46px}.lb-sec{padding:60px 0}.lb-hero{padding:56px 0}}
@media (min-width:1024px){.lb-hero-grid{grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:48px}.lb-grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}.lb-info.three{grid-template-columns:repeat(3,minmax(0,1fr))}.lb-h1{font-size:54px}}
@media (prefers-reduced-motion:reduce){.lb *{transition:none!important;scroll-behavior:auto!important}}
`;
