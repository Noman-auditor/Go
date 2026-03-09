// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔧 SITES LIST — Add or remove URLs here
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SITES = [
  { url: 'https://www.google.com',    label: 'GOOGLE'    },
  { url: 'https://www.youtube.com',   label: 'YOUTUBE'   },
  { url: 'https://www.github.com',    label: 'GITHUB'    },
  { url: 'https://www.reddit.com',    label: 'REDDIT'    },
  { url: 'https://www.wikipedia.org', label: 'WIKIPEDIA' },
  { url: 'https://www.twitter.com',   label: 'TWITTER'   },
  { url: 'https://www.netflix.com',   label: 'NETFLIX'   },
  { url: 'https://www.discord.com',   label: 'DISCORD'   },
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
