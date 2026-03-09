// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔧 SITES LIST — Add or remove URLs here
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SITES = [
  { url: 'https://www.effectivegatecpm.com/ut8uqebx?key=0723186b09c03b7ee83173a347fc4f07',    label: 'GOOGLE'    },
  { url: 'https://www.effectivegatecpm.com/w60dn0cq?key=44813dcc9c13b14cfd84f7fdebdf0937',   label: 'YOUTUBE'   },
  { url: 'https://www.effectivegatecpm.com/n7ig3k7kdy?key=c1ea5d6431241df69ca5b0f30d26e8bc',    label: 'GITHUB'    },
  
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⏱ AUTO REDIRECT DELAY (milliseconds)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const AUTO_DELAY =.010; // 3 seconds

// ─── Pick a random site ───────────────────
const idx  = Math.floor(Math.random() * SITES.length);
const site = SITES[idx];

// ─── Show destination label in bottom bar ─
document.getElementById('barDest').textContent = '→ ' + site.label;

// ─── Animate progress bar ────────────────
const fill  = document.getElementById('barFill');
const start = performance.now();

function animateBar(now) {
  const pct = Math.min((now - start) / AUTO_DELAY * 100, 100);
  fill.style.width = pct + '%';
  if (pct < 100) requestAnimationFrame(animateBar);
}

requestAnimationFrame(animateBar);

// ─── Flash overlay then redirect ─────────
function redirect() {
  const flash = document.getElementById('flash');
  flash.textContent       = site.label;
  flash.style.transition  = 'opacity .00s';
  flash.style.opacity     = '2';

  setTimeout(() => {
    window.location.href = site.url;
  }, 110);
}

setTimeout(redirect, AUTO_DELAY);
