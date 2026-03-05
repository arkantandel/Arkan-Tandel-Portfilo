<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Arkan Tandel | Cloud & DevOps Engineer</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg: #050a0f;
      --surface: #0a1520;
      --surface2: #0d1e2e;
      --border: #1a3a5c;
      --accent: #00d4ff;
      --accent2: #00ff88;
      --accent3: #ff6b35;
      --text: #e8f4fd;
      --muted: #6a9ab8;
      --mono: 'Space Mono', monospace;
      --sans: 'Syne', sans-serif;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--sans);
      overflow-x: hidden;
      cursor: none;
    }

    /* Custom cursor */
    .cursor {
      width: 12px; height: 12px;
      background: var(--accent);
      border-radius: 50%;
      position: fixed; top: 0; left: 0;
      pointer-events: none; z-index: 9999;
      transition: transform 0.1s, background 0.2s;
      mix-blend-mode: screen;
    }
    .cursor-ring {
      width: 36px; height: 36px;
      border: 1px solid var(--accent);
      border-radius: 50%;
      position: fixed; top: 0; left: 0;
      pointer-events: none; z-index: 9998;
      transition: transform 0.25s cubic-bezier(0.2,1,0.5,1), opacity 0.2s;
      opacity: 0.5;
    }

    /* Grid background */
    body::before {
      content: '';
      position: fixed; inset: 0;
      background-image:
        linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      pointer-events: none; z-index: 0;
    }

    /* NAV */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      padding: 20px 60px;
      display: flex; justify-content: space-between; align-items: center;
      background: rgba(5,10,15,0.85);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0,212,255,0.1);
    }
    .nav-logo {
      font-family: var(--mono);
      font-size: 14px;
      color: var(--accent);
      letter-spacing: 3px;
      text-transform: uppercase;
    }
    .nav-logo span { color: var(--accent2); }
    .nav-links { display: flex; gap: 40px; list-style: none; }
    .nav-links a {
      color: var(--muted);
      text-decoration: none;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: color 0.3s;
      font-family: var(--mono);
    }
    .nav-links a:hover { color: var(--accent); }

    /* HERO */
    #hero {
      min-height: 100vh;
      display: flex; align-items: center;
      padding: 120px 60px 80px;
      position: relative;
      overflow: hidden;
    }
    .hero-glow {
      position: absolute;
      width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
      top: 50%; left: 50%; transform: translate(-50%,-50%);
      animation: pulse 4s ease-in-out infinite;
    }
    .hero-glow2 {
      position: absolute;
      width: 400px; height: 400px;
      background: radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%);
      top: 20%; right: 10%;
      animation: pulse 6s ease-in-out infinite reverse;
    }
    @keyframes pulse {
      0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
      50% { transform: translate(-50%,-50%) scale(1.1); opacity: 0.7; }
    }

    .hero-content { position: relative; z-index: 1; max-width: 900px; }

    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: var(--mono); font-size: 12px;
      color: var(--accent2); letter-spacing: 3px;
      text-transform: uppercase; margin-bottom: 32px;
      padding: 8px 16px;
      border: 1px solid rgba(0,255,136,0.3);
      background: rgba(0,255,136,0.05);
      border-radius: 2px;
      animation: fadeInUp 0.6s ease both;
    }
    .hero-badge::before {
      content: ''; width: 6px; height: 6px;
      background: var(--accent2); border-radius: 50%;
      animation: blink 1.5s infinite;
    }
    @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.2; } }

    h1.hero-name {
      font-size: clamp(52px, 8vw, 110px);
      font-weight: 800;
      line-height: 0.95;
      letter-spacing: -3px;
      margin-bottom: 24px;
      animation: fadeInUp 0.7s 0.1s ease both;
    }
    h1.hero-name .first { color: var(--text); }
    h1.hero-name .last {
      color: transparent;
      -webkit-text-stroke: 2px var(--accent);
    }

    .hero-role {
      font-family: var(--mono);
      font-size: 16px; color: var(--accent);
      letter-spacing: 2px;
      margin-bottom: 28px;
      animation: fadeInUp 0.7s 0.2s ease both;
    }

    .hero-desc {
      font-size: 18px; line-height: 1.7;
      color: var(--muted); max-width: 600px;
      margin-bottom: 48px;
      animation: fadeInUp 0.7s 0.3s ease both;
    }

    .hero-stats {
      display: flex; gap: 48px; margin-bottom: 56px;
      animation: fadeInUp 0.7s 0.35s ease both;
    }
    .stat-item { text-align: left; }
    .stat-num {
      font-size: 36px; font-weight: 800;
      color: var(--accent); font-family: var(--mono);
      line-height: 1;
    }
    .stat-num .accent2 { color: var(--accent2); }
    .stat-label { font-size: 12px; color: var(--muted); letter-spacing: 2px; text-transform: uppercase; margin-top: 4px; }

    .hero-actions {
      display: flex; gap: 20px; flex-wrap: wrap;
      animation: fadeInUp 0.7s 0.4s ease both;
    }

    .btn {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 14px 32px; font-family: var(--mono);
      font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
      text-decoration: none; border-radius: 2px;
      transition: all 0.3s; cursor: none;
      position: relative; overflow: hidden;
    }
    .btn-primary {
      background: var(--accent); color: var(--bg); font-weight: 700;
    }
    .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,212,255,0.3); }
    .btn-outline {
      border: 1px solid var(--border); color: var(--text);
    }
    .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

    .hero-right {
      position: absolute; right: 60px; top: 50%; transform: translateY(-50%);
      display: flex; flex-direction: column; gap: 16px;
      animation: fadeInRight 0.8s 0.5s ease both;
    }
    .terminal-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 20px 24px;
      width: 320px;
      font-family: var(--mono);
      font-size: 12px;
    }
    .terminal-header {
      display: flex; gap: 6px; margin-bottom: 16px;
    }
    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot-red { background: #ff5f56; }
    .dot-yellow { background: #ffbd2e; }
    .dot-green { background: #27c93f; }
    .terminal-line { color: var(--muted); margin-bottom: 6px; line-height: 1.6; }
    .terminal-line .cmd { color: var(--accent2); }
    .terminal-line .val { color: var(--accent); }
    .terminal-line .tag { color: var(--accent3); }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translate(30px,-50%); }
      to { opacity: 1; transform: translate(0,-50%); }
    }

    /* SECTIONS */
    section { padding: 100px 60px; position: relative; }
    .section-label {
      font-family: var(--mono); font-size: 12px;
      color: var(--accent); letter-spacing: 4px;
      text-transform: uppercase; margin-bottom: 16px;
      display: flex; align-items: center; gap: 12px;
    }
    .section-label::after {
      content: ''; flex: 1; height: 1px; background: var(--border); max-width: 60px;
    }
    h2.section-title {
      font-size: clamp(36px, 5vw, 60px);
      font-weight: 800; line-height: 1.1; letter-spacing: -2px;
      margin-bottom: 60px;
    }

    /* ABOUT */
    #about { background: var(--surface); }
    .about-grid {
      display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center;
    }
    .about-text p {
      font-size: 17px; line-height: 1.8; color: var(--muted);
      margin-bottom: 20px;
    }
    .about-text p strong { color: var(--text); }
    .about-highlights {
      display: flex; flex-direction: column; gap: 20px;
    }
    .highlight-card {
      background: var(--bg);
      border: 1px solid var(--border);
      border-left: 3px solid var(--accent);
      padding: 20px 24px;
      border-radius: 2px;
      transition: border-color 0.3s, transform 0.3s;
    }
    .highlight-card:hover { border-left-color: var(--accent2); transform: translateX(4px); }
    .highlight-card h4 { font-family: var(--mono); font-size: 12px; color: var(--accent); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 6px; }
    .highlight-card p { font-size: 15px; color: var(--muted); line-height: 1.5; }
    .highlight-card .big { font-size: 28px; font-weight: 800; color: var(--accent2); font-family: var(--mono); }

    /* SKILLS */
    #skills {}
    .skills-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 24px;
    }
    .skill-category {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 4px; padding: 28px;
      transition: border-color 0.3s, transform 0.3s;
    }
    .skill-category:hover { border-color: var(--accent); transform: translateY(-4px); }
    .skill-category-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 14px;
    }
    .skill-icon { font-size: 22px; }
    .skill-category-name { font-size: 14px; font-weight: 700; letter-spacing: 1px; }
    .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .tag {
      font-family: var(--mono); font-size: 11px;
      padding: 5px 12px;
      border-radius: 2px; letter-spacing: 1px;
      transition: all 0.2s;
    }
    .tag:hover { transform: scale(1.05); }
    .tag-cyan { background: rgba(0,212,255,0.1); color: var(--accent); border: 1px solid rgba(0,212,255,0.2); }
    .tag-green { background: rgba(0,255,136,0.1); color: var(--accent2); border: 1px solid rgba(0,255,136,0.2); }

    /* PROJECTS */
    #projects .grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;
    }
    .card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 6px; padding: 16px;
      display: flex; flex-direction: column; gap: 8px;
    }
    .card h3 { font-size: 16px; }
    .card p { color: var(--muted); font-size: 13.5px; line-height: 1.6; }
    .card .tag { margin-top: auto; }

    /* CONTACT */
    #contact form {
      display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
    }
    #contact input, #contact textarea {
      width: 100%; padding: 12px 14px; border-radius: 4px;
      border: 1px solid var(--border); background: rgba(6,10,20,0.8);
      color: var(--text);
    }
    #contact textarea { grid-column: 1 / -1; min-height: 120px; resize: vertical; }
    #contact button {
      justify-self: start;
      padding: 12px 28px; border-radius: 4px;
      border: 1px solid var(--border); background: var(--accent);
      color: #041018; font-family: var(--mono); text-transform: uppercase;
      cursor: pointer;
    }

    @media (max-width: 900px) {
      .about-grid { grid-template-columns: 1fr; }
      #contact form { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- Custom cursor (hidden by default in many contexts; enable via CSS/JS if desired) -->
  <div class="cursor" aria-hidden="true"></div>
  <div class="cursor-ring" aria-hidden="true"></div>

  <!-- NAV -->
  <nav>
    <div class="nav-logo">ARKAN TANDel <span>• Cloud & DevOps</span></div>
    <ul class="nav-links" aria-label="Main">
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section id="hero" aria-label="Hero">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="hero-glow2" aria-hidden="true"></div>

    <div class="hero-content">
      <div class="hero-badge">
        <span>Cloud • DevOps • Automation</span>
      </div>

      <h1 class="hero-name" aria-label="Name">
        <span class="first">Arkan</span> <span class="last" aria-hidden="true">Tandel</span>
      </h1>

      <div class="hero-role">Cloud & DevOps Engineer</div>

      <p class="hero-desc">
        I design and operate scalable, secure, and automated infrastructure across cloud platforms.
        Focused on CI/CD, IaC, observability, and resilient architectures with a bias toward
        GitOps and automation.
      </p>

      <div class="hero-stats" aria-label="Key stats">
        <div class="stat-item">
          <div class="stat-num">9+ <span class="accent2">yrs</span></div>
          <div class="stat-label">Experience</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">AWS <span class="accent2">Certified</span></div>
          <div class="stat-label">Cloud Expertise</div>
        </div>
        <div class="stat-item">
          <div class="stat-num">Kubernetes <span class="accent2">Pro</span></div>
          <div class="stat-label">Container Orchestration</div>
        </div>
      </div>

      <div class="hero-actions" aria-label="Actions">
        <a class="btn btn-primary" href="#projects">View Projects</a>
        <a class="btn btn-outline" href="#contact">Let's Talk</a>
      </div>
    </div>

    <div class="hero-right" aria-label="Terminal">
      <div class="terminal-card">
        <div class="terminal-header">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="terminal-line"><span class="tag">$</span> <span class="cmd">kubectl get nodes</span> <span class="val">-A</span></div>
        <div class="terminal-line">NAME <span class="val">STATUS</span> AGE</div>
        <div class="terminal-line"><span class="val">worker-1</span> <span class="val">Ready</span> <span class="val">30d</span></div>
        <div class="terminal-line"><span class="val">worker-2</span> <span class="val">Ready</span> <span class="val">28d</span></div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" aria-labelledby="about-title">
    <div class="section-label">Overview</div>
    <h2 class="section-title" id="about-title">About Me</h2>
    <div class="about-grid">
      <div class="about-text">
        <p>
          I architect and operate robust cloud environments with a strong emphasis on automation,
          reliability, and security. My approach blends software engineering practices with
          infrastructure as code to deliver repeatable, auditable, and scalable systems.
        </p>
        <p>
          Key strengths include designing resilient CI/CD pipelines, implementing IaC with Terraform
          and Pulumi, building monitoring and incident response ecosystems, and enabling fast,
          secure software delivery.
        </p>
        <p><strong>Core Principles:</strong> repeatable automation, least privilege, versioned configurations, and observable systems.</p>
      </div>

      <div class="about-highlights" aria-label="Highlights">
        <div class="highlight-card">
          <h4>Delivery Velocity</h4>
          <p>Cut lead time with automated CI/CD, automated testing, and blue/green deployments.</p>
          <div class="big">+200%</div>
        </div>
        <div class="highlight-card">
          <h4>Reliability</h4>
          <p>Design for failure with error budgets, chaos testing, and resilient architecture patterns.</p>
          <div class="big">99.99%</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" aria-labelledby="skills-title">
    <div class="section-label">Capabilities</div>
    <h2 class="section-title" id="skills-title">Skills & Technologies</h2>

    <div class="skills-grid">
      <!-- Cloud & Platform -->
      <div class="skill-category">
        <div class="skill-category-header">
          <span class="skill-icon" aria-label="cloud">☁️</span>
          <span class="skill-category-name">Cloud & Platforms</span>
        </div>
        <div class="skill-tags">
          <span class="tag tag-cyan">AWS</span>
          <span class="tag tag-cyan">Azure</span>
          <span class="tag tag-cyan">GCP</span>
          <span class="tag tag-cyan">Multi-Cloud</span>
        </div>
      </div>

      <!-- CI/CD -->
      <div class="skill-category">
        <div class="skill-category-header">
          <span class="skill-icon" aria-label="ci-cd">⚙️</span>
          <span class="skill-category-name">CI/CD & Pipelines</span>
        </div>
        <div class="skill-tags">
          <span class="tag tag-green">GitOps</span>
          <span class="tag tag-green">Jenkins</span>
          <span class="tag tag-green">GitLab CI</span>
          <span class="tag tag-green">Argo CD</span>
        </div>
      </div>

      <!-- IaC -->
      <div class="skill-category">
        <div class="skill-category-header">
          <span class="skill-icon" aria-label="iac">🧰</span>
          <span class="skill-category-name">Infrastructure as Code</span>
        </div>
        <div class="skill-tags">
          <span class="tag tag-cyan">Terraform</span>
          <span class="tag tag-cyan">Pulumi</span>
          <span class="tag tag-cyan">CloudFormation</span>
        </div>
      </div>

      <!-- Observability -->
      <div class="skill-category">
        <div class="skill-category-header">
          <span class="skill-icon" aria-label="observability">🔭</span>
          <span class="skill-category-name">Observability</span>
        </div>
        <div class="skill-tags">
          <span class="tag tag-cyan">Prometheus</span>
          <span class="tag tag-cyan">Grafana</span>
          <span class="tag tag-cyan">OpenTelemetry</span>
        </div>
      </div>

      <!-- Containers -->
      <div class="skill-category">
        <div class="skill-category-header">
          <span class="skill-icon" aria-label="containers">🧪</span>
          <span class="skill-category-name">Containers & Orchestration</span>
        </div>
        <div class="skill-tags">
          <span class="tag tag-green">Kubernetes</span>
          <span class="tag tag-green">Docker</span>
          <span class="tag tag-green">Helm</span>
        </div>
      </div>

      <!-- Security -->
      <div class="skill-category">
        <div class="skill-category-header">
          <span class="skill-icon" aria-label="security">🔒</span>
          <span class="skill-category-name">Security & Compliance</span>
        </div>
        <div class="skill-tags">
          <span class="tag tag-cyan">IAM</span>
          <span class="tag tag-cyan">Policy as Code</span>
          <span class="tag tag-cyan">Secrets Management</span>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" aria-labelledby="projects-title">
    <div class="section-label">Portfolio</div>
    <h2 class="section-title" id="projects-title">Projects</h2>

    <div class="grid" aria-label="Projects grid">
      <article class="card">
        <h3>Cloud Infrastructure Modernization</h3>
        <p>Led migration to a multi-region, highly available AWS setup with IaC (Terraform) and
