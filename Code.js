/* ============================================
   ARKAN TANDEL — PORTFOLIO CSS
   Dark Tech Theme | Syne + JetBrains Mono
   ============================================ */

:root {
  --bg:        #050a0f;
  --bg2:       #080f17;
  --bg3:       #0d1821;
  --surface:   #0f1e2e;
  --surface2:  #162436;
  --border:    rgba(0, 212, 255, 0.12);
  --accent:    #00d4ff;
  --accent2:   #0099ff;
  --accent3:   #ff6b35;
  --text:      #e8f4fd;
  --text2:     #8ab4d0;
  --text3:     #4a7a99;
  --green:     #00ff88;
  --yellow:    #ffd700;
  --font-head: 'Syne', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --glow:      0 0 30px rgba(0,212,255,0.15);
  --glow2:     0 0 60px rgba(0,212,255,0.1);
  --radius:    12px;
  --radius2:   20px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== RESET ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-mono);
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  line-height: 1.7;
  cursor: none;
}
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
img { max-width: 100%; }

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

/* ===== CUSTOM CURSOR ===== */
.cursor {
  position: fixed; pointer-events: none; z-index: 9999;
  width: 12px; height: 12px;
  background: var(--accent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s, height 0.2s, opacity 0.2s;
  mix-blend-mode: screen;
}
.cursor-trail {
  position: fixed; pointer-events: none; z-index: 9998;
  width: 32px; height: 32px;
  border: 1px solid rgba(0,212,255,0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: left 0.15s ease, top 0.15s ease;
}
body:has(a:hover) .cursor { width: 20px; height: 20px; }
@media (pointer: coarse) { .cursor, .cursor-trail { display: none; } body { cursor: auto; } }

/* ===== TYPOGRAPHY ===== */
.section-title {
  font-family: var(--font-head);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 1rem;
}
.accent { color: var(--accent); }
.section-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: flex; align-items: center; gap: 0.5rem;
}
.section-tag::before {
  content: '';
  display: inline-block; width: 30px; height: 1px;
  background: var(--accent);
}

/* ===== LAYOUT ===== */
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.section { padding: 100px 0; position: relative; }
.section::before {
  content: '';
  position: absolute; left: 0; top: 0;
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
}

/* ===== BUTTONS ===== */
.btn-primary {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.85rem 1.8rem;
  background: var(--accent);
  color: var(--bg);
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: var(--radius);
  transition: var(--transition);
  border: 2px solid var(--accent);
  cursor: none;
}
.btn-primary svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 2.5; }
.btn-primary:hover { background: transparent; color: var(--accent); box-shadow: var(--glow); transform: translateY(-2px); }
.btn-primary.full-width { width: 100%; justify-content: center; }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.85rem 1.5rem;
  background: transparent;
  color: var(--text2);
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: var(--radius);
  border: 2px solid var(--border);
  transition: var(--transition);
  cursor: none;
}
.btn-ghost svg { width: 18px; height: 18px; }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); box-shadow: var(--glow); transform: translateY(-2px); }

/* ===== NAV ===== */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  display: flex; align-items: center; gap: 2rem;
  padding: 1rem 2rem;
  background: rgba(5,10,15,0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}
.nav-logo {
  font-family: var(--font-head);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text);
  margin-right: auto;
}
.dot { color: var(--accent); }
.nav-links { display: flex; gap: 1.5rem; }
.nav-links a {
  font-size: 0.85rem;
  color: var(--text2);
  transition: var(--transition);
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute; left: 0; bottom: -3px;
  width: 0; height: 1px;
  background: var(--accent);
  transition: width 0.3s;
}
.nav-links a:hover { color: var(--accent); }
.nav-links a:hover::after { width: 100%; }
.nav-cta {
  padding: 0.5rem 1.2rem;
  background: var(--accent);
  color: var(--bg);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: var(--font-head);
  transition: var(--transition);
}
.nav-cta:hover { background: transparent; color: var(--accent); outline: 2px solid var(--accent); }

.hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: none; padding: 4px; }
.hamburger span { display: block; width: 24px; height: 2px; background: var(--text); transition: var(--transition); }
.mobile-menu {
  display: none; position: fixed; top: 0; right: 0; bottom: 0;
  width: 260px; background: var(--surface); z-index: 999;
  padding: 5rem 2rem;
  border-left: 1px solid var(--border);
  transform: translateX(100%); transition: transform 0.3s ease;
}
.mobile-menu.open { transform: translateX(0); display: block; }
.mobile-menu ul { display: flex; flex-direction: column; gap: 1.5rem; }
.mobile-menu a { font-size: 1.2rem; font-family: var(--font-head); font-weight: 700; color: var(--text); }
.mobile-menu a:hover { color: var(--accent); }

/* ===== HERO ===== */
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 120px 2rem 80px;
  max-width: 1200px; margin: 0 auto;
  position: relative;
}
.hero-bg {
  position: fixed; inset: 0; z-index: -1; pointer-events: none;
}
.grid-overlay {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}
.orb {
  position: absolute; border-radius: 50%;
  filter: blur(80px); pointer-events: none;
}
.orb1 { width: 600px; height: 600px; top: -200px; right: -100px; background: radial-gradient(circle, rgba(0,212,255,0.08), transparent 70%); }
.orb2 { width: 400px; height: 400px; bottom: 0; left: -100px; background: radial-gradient(circle, rgba(255,107,53,0.06), transparent 70%); }
.orb3 { width: 300px; height: 300px; top: 40%; left: 40%; background: radial-gradient(circle, rgba(0,153,255,0.05), transparent 70%); }

.hero-badge {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.4rem 1rem;
  background: rgba(0,255,136,0.1);
  border: 1px solid rgba(0,255,136,0.3);
  border-radius: 50px;
  font-size: 0.78rem;
  color: var(--green);
  margin-bottom: 1.5rem;
  animation: pulse-badge 2s infinite;
}
.badge-dot { width: 8px; height: 8px; background: var(--green); border-radius: 50%; animation: blink 1.5s infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
@keyframes pulse-badge { 0%,100%{box-shadow:0 0 0 0 rgba(0,255,136,0.2)} 50%{box-shadow:0 0 15px rgba(0,255,136,0.15)} }

.hero-title {
  font-family: var(--font-head);
  font-size: clamp(3.5rem, 7vw, 6rem);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 1.2rem;
  display: flex; flex-direction: column;
}
.hero-title .line { overflow: hidden; }
.hero-title .accent {
  color: var(--accent);
  text-shadow: 0 0 40px rgba(0,212,255,0.3);
}

.hero-role {
  display: flex; align-items: center; gap: 0.7rem;
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin-bottom: 1.5rem;
  color: var(--text2);
}
.role-prefix { font-family: var(--font-mono); color: var(--accent); }
.role-rotator {
  position: relative; height: 1.5em; overflow: hidden;
  min-width: 220px;
}
.role-rotator span {
  position: absolute; top: 0; left: 0; font-family: var(--font-head); font-weight: 700;
  color: var(--text);
  animation: rotate-text 8s infinite;
  white-space: nowrap;
}
.role-rotator span:nth-child(1) { animation-delay: 0s; }
.role-rotator span:nth-child(2) { animation-delay: 2s; }
.role-rotator span:nth-child(3) { animation-delay: 4s; }
.role-rotator span:nth-child(4) { animation-delay: 6s; }
@keyframes rotate-text {
  0%   { opacity: 0; transform: translateY(100%); }
  8%   { opacity: 1; transform: translateY(0); }
  22%  { opacity: 1; transform: translateY(0); }
  30%  { opacity: 0; transform: translateY(-100%); }
  100% { opacity: 0; transform: translateY(-100%); }
}

.hero-desc { color: var(--text2); font-size: 0.95rem; max-width: 500px; margin-bottom: 2rem; line-height: 1.8; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }

.hero-stats { display: flex; align-items: center; gap: 1.5rem; }
.stat { text-align: center; }
.stat-num { display: block; font-family: var(--font-head); font-size: 2rem; font-weight: 800; color: var(--accent); }
.stat-label { font-size: 0.7rem; color: var(--text3); text-transform: uppercase; letter-spacing: 0.1em; }
.stat-divider { width: 1px; height: 40px; background: var(--border); }

/* Hero Visual */
.hero-visual { display: flex; flex-direction: column; gap: 2rem; align-items: center; }

/* Terminal */
.terminal {
  width: 100%; max-width: 420px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius2);
  overflow: hidden;
  box-shadow: var(--glow2);
  animation: float 4s ease-in-out infinite;
}
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
.terminal-header {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.8rem 1rem;
  background: var(--surface2);
  border-bottom: 1px solid var(--border);
}
.t-dot { width: 12px; height: 12px; border-radius: 50%; }
.t-dot.red { background: #ff5f57; }
.t-dot.yellow { background: #febc2e; }
.t-dot.green { background: #28c840; }
.t-title { font-size: 0.75rem; color: var(--text3); margin-left: 0.5rem; }
.terminal-body { padding: 1rem; font-size: 0.78rem; min-height: 120px; }
.t-line { display: flex; gap: 0.5rem; align-items: center; }
.t-prompt { color: var(--green); }
.t-cmd { color: var(--accent); }
.t-cursor { color: var(--accent); animation: blink 1s infinite; }
.t-output { margin-top: 0.5rem; color: var(--text2); white-space: pre; line-height: 1.6; }

/* Tech Orbit */
.tech-orbit {
  position: relative; width: 280px; height: 280px;
}
.orbit-ring {
  position: absolute; border: 1px dashed var(--border);
  border-radius: 50%;
  animation: spin 20s linear infinite;
}
.ring1 { inset: 20px; animation-duration: 20s; }
.ring2 { inset: 0; animation-duration: 30s; animation-direction: reverse; }
.orbit-icon {
  position: absolute; width: 40px; height: 40px;
  transform: rotate(var(--angle)) translateX(calc(50% + 10px)) rotate(calc(-1 * var(--angle)));
  top: 50%; left: 50%;
  margin-top: -20px; margin-left: -20px;
  background: var(--surface2); border: 1px solid var(--border);
  border-radius: 10px; display: flex; align-items: center; justify-content: center;
  padding: 6px;
}
.orbit-icon img { width: 100%; height: 100%; object-fit: contain; }
@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
.orbit-center {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;
}
.orbit-avatar {
  width: 70px; height: 70px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-head); font-size: 1.4rem; font-weight: 800;
  color: var(--bg);
  box-shadow: 0 0 30px rgba(0,212,255,0.4);
}

/* Scroll hint */
.scroll-hint {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  font-size: 0.7rem; color: var(--text3); text-transform: uppercase; letter-spacing: 0.2em;
  animation: bounce 2s infinite;
}
.scroll-line { width: 1px; height: 50px; background: linear-gradient(var(--accent), transparent); }
@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(5px)} }

/* ===== ABOUT ===== */
.about { background: var(--bg2); }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; margin-top: 3rem; }
.about-left p { color: var(--text2); font-size: 0.95rem; margin-bottom: 1rem; }
.about-left em { color: var(--accent); font-style: normal; }
.about-details { margin-top: 2rem; display: flex; flex-direction: column; gap: 0.8rem; }
.detail-item { display: flex; align-items: center; gap: 0.8rem; font-size: 0.9rem; color: var(--text2); }
.detail-item a { color: var(--accent); }
.detail-item a:hover { text-decoration: underline; }

/* About Card Stack */
.about-card-stack { position: relative; width: 320px; height: 380px; margin: 0 auto; }
.about-card {
  position: absolute; inset: 0; border-radius: 20px; transition: var(--transition);
}
.card-back { background: rgba(0,212,255,0.05); border: 1px solid rgba(0,212,255,0.1); transform: rotate(6deg) translateY(10px); }
.card-mid { background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.15); transform: rotate(3deg) translateY(5px); }
.card-front {
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 2rem;
  display: flex; flex-direction: column; gap: 1.5rem;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), var(--glow);
}
.card-header { display: flex; align-items: center; gap: 1rem; }
.card-avatar {
  width: 52px; height: 52px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  border-radius: 14px; display: flex; align-items: center; justify-content: center;
  font-family: var(--font-head); font-weight: 800; color: var(--bg); font-size: 1.1rem;
}
.card-name { font-family: var(--font-head); font-weight: 700; font-size: 1.1rem; }
.card-role { font-size: 0.78rem; color: var(--accent); }
.card-divider { height: 1px; background: var(--border); }
.card-skills-preview { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.card-skills-preview span {
  padding: 0.25rem 0.6rem; background: var(--surface2); border: 1px solid var(--border);
  border-radius: 6px; font-size: 0.72rem; color: var(--text2);
}
.card-footer { display: flex; align-items: center; gap: 0.6rem; font-size: 0.8rem; color: var(--text3); }
.status-dot { width: 8px; height: 8px; background: var(--green); border-radius: 50%; animation: blink 1.5s infinite; }

/* ===== SKILLS ===== */
.skills-categories { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px,1fr)); gap: 1.5rem; margin-top: 3rem; }
.skill-category {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius2);
  padding: 1.8rem;
  transition: var(--transition);
}
.skill-category:hover { border-color: var(--accent); box-shadow: var(--glow); transform: translateY(-3px); }
.skill-cat-header { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1.2rem; }
.skill-cat-icon { font-size: 1.4rem; }
.skill-cat-header h3 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.skill-tags span {
  padding: 0.3rem 0.7rem;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.75rem;
  color: var(--text2);
  transition: var(--transition);
}
.skill-tags span:hover { background: rgba(0,212,255,0.1); border-color: var(--accent); color: var(--accent); }

.methodology {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius2);
}
.methodology h3 { font-family: var(--font-head); font-size: 1rem; font-weight: 700; margin-bottom: 1.2rem; color: var(--text2); }
.method-items { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.method-item {
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.85rem; color: var(--text2);
}
.method-icon { font-size: 1.2rem; }

/* ===== PROJECTS ===== */
.projects { background: var(--bg2); }
.projects-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 3rem; }
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius2);
  padding: 2.5rem;
  display: grid; grid-template-columns: 1fr 1.8fr;
  gap: 2.5rem; align-items: start;
  position: relative;
  transition: var(--transition);
  overflow: hidden;
}
.project-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  opacity: 0; transition: opacity 0.3s;
}
.project-card:hover { border-color: rgba(0,212,255,0.3); box-shadow: var(--glow), 0 20px 60px rgba(0,0,0,0.3); transform: translateY(-4px); }
.project-card:hover::before { opacity: 1; }
.project-card.featured { border-color: rgba(0,212,255,0.25); }
.project-card.featured::before { opacity: 1; }

.project-num {
  position: absolute; top: 2rem; right: 2.5rem;
  font-family: var(--font-head); font-size: 3.5rem; font-weight: 800;
  color: rgba(0,212,255,0.06); line-height: 1;
}
.project-badge {
  position: absolute; top: 1.5rem; left: 2.5rem;
  padding: 0.25rem 0.7rem;
  background: rgba(0,212,255,0.15); border: 1px solid rgba(0,212,255,0.3);
  border-radius: 50px; font-size: 0.7rem; color: var(--accent);
  text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;
}
.project-arch { display: flex; align-items: center; justify-content: center; }
.arch-diagram {
  display: flex; flex-direction: column; align-items: center; gap: 0.8rem;
  padding: 1.5rem;
  background: var(--bg3); border: 1px solid var(--border); border-radius: 16px;
  width: 100%; min-height: 180px; justify-content: center;
}
.arch-diagram.compact { min-height: 140px; }
.arch-row { display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; justify-content: center; }
.arch-node {
  padding: 0.5rem 1rem;
  background: var(--surface2); border: 1px solid var(--border);
  border-radius: 8px; font-size: 0.78rem; color: var(--text2);
  font-weight: 500;
}
.arch-node.primary { background: rgba(0,212,255,0.15); border-color: var(--accent); color: var(--accent); font-weight: 700; }
.arch-node.small { font-size: 0.7rem; padding: 0.3rem 0.6rem; }
.arch-arrow { color: var(--accent); font-size: 1rem; }

.project-content { padding-top: 3rem; }
.project-content h3 { font-family: var(--font-head); font-size: 1.4rem; font-weight: 700; margin-bottom: 0.8rem; }
.project-content p { color: var(--text2); font-size: 0.88rem; line-height: 1.8; margin-bottom: 1rem; }
.project-highlights { margin-bottom: 1.2rem; }
.project-highlights li {
  font-size: 0.83rem; color: var(--text2); padding: 0.3rem 0;
  padding-left: 1rem; position: relative;
}
.project-highlights li::before { content: '▸'; position: absolute; left: 0; color: var(--accent); }
.project-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.project-tech span {
  padding: 0.25rem 0.65rem;
  background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.2);
  border-radius: 6px; font-size: 0.72rem; color: var(--accent);
}

/* ===== CERTS ===== */
.certs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap: 1.5rem; margin-top: 3rem; }
.cert-card {
  background: var
