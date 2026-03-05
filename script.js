/* ============================================
   ARKAN TANDEL — PORTFOLIO JS
   ============================================ */

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    cursorTrail.style.left = e.clientX + 'px';
    cursorTrail.style.top = e.clientY + 'px';
  }, 80);
});

// ===== NAV SCROLL EFFECT =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.padding = '0.6rem 2rem';
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
  } else {
    nav.style.padding = '1rem 2rem';
    nav.style.boxShadow = 'none';
  }
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.style.display = 'block';
  }
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// Close on outside click
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});

// ===== TERMINAL TYPEWRITER =====
const sequences = [
  {
    cmd: 'kubectl get pods --all-namespaces',
    output: `NAMESPACE   NAME              READY   STATUS
default     app-pod-1         3/3     Running
default     app-pod-2         3/3     Running
monitoring  prometheus-0      1/1     Running`
  },
  {
    cmd: 'terraform plan -out=prod.tfplan',
    output: `Plan: 12 to add, 0 to change, 0 to destroy.
✓ VPC created
✓ Subnets provisioned
✓ EKS cluster ready`
  },
  {
    cmd: 'aws eks update-kubeconfig --name prod',
    output: `Updated context arn:aws:eks:ap-south-1:...
✓ kubeconfig updated
✓ Connected to cluster`
  },
  {
    cmd: 'docker build -t arkan/app:latest .',
    output: `[+] Building 8.2s (12/12) FINISHED
✓ Step 1/6 : FROM node:18-alpine
✓ Step 6/6 : CMD ["node", "server.js"]`
  }
];

let seqIdx = 0;
let charIdx = 0;
let isTyping = false;

function typeCmd() {
  const seq = sequences[seqIdx];
  const termCmd = document.getElementById('termCmd');
  const termOutput = document.getElementById('termOutput');

  if (!termCmd || !termOutput) return;

  if (charIdx < seq.cmd.length) {
    termCmd.textContent += seq.cmd[charIdx];
    charIdx++;
    setTimeout(typeCmd, 55);
  } else {
    setTimeout(() => {
      termOutput.textContent = seq.output;
      setTimeout(() => {
        termCmd.textContent = '';
        termOutput.textContent = '';
        charIdx = 0;
        seqIdx = (seqIdx + 1) % sequences.length;
        typeCmd();
      }, 3000);
    }, 400);
  }
}

// Start terminal after load
setTimeout(typeCmd, 1000);

// ===== SCROLL REVEAL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add fade-in to all major elements
document.querySelectorAll(
  '.skill-category, .project-card, .cert-card, .about-left, .about-right, .contact-link, .edu-item'
).forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 50}ms`;
  observer.observe(el);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => sectionObserver.observe(section));

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-primary');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span>Message Sent! ✓</span>';
    btn.style.background = 'var(--green)';
    btn.style.borderColor = 'var(--green)';
    btn.style.color = 'var(--bg)';
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
      contactForm.reset();
    }, 3000);
  });
}

// ===== SKILL TAGS GLOW ON HOVER =====
document.querySelectorAll('.skill-tags span').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.boxShadow = '0 0 12px rgba(0,212,255,0.25)';
  });
  tag.addEventListener('mouseleave', () => {
    tag.style.boxShadow = '';
  });
});

// ===== SMOOTH SCROLL FOR NAV =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== PARALLAX ORB =====
window.addEventListener('mousemove', (e) => {
  const orb1 = document.querySelector('.orb1');
  const orb2 = document.querySelector('.orb2');
  if (!orb1 || !orb2) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  orb1.style.transform = `translate(${x}px, ${y}px)`;
  orb2.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
});

// ===== MOBILE MENU DISPLAY FIX =====
mobileMenu.style.display = 'none';
mobileMenu.style.transition = 'transform 0.3s ease';
const originalToggle = mobileMenu.classList.toggle.bind(mobileMenu);
mobileMenu.style.display = 'block';
mobileMenu.style.transform = 'translateX(100%)';

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.style.transform === 'translateX(0%)';
  mobileMenu.style.transform = isOpen ? 'translateX(100%)' : 'translateX(0%)';
});

function closeMobileFixed() {
  mobileMenu.style.transform = 'translateX(100%)';
}
// Override closeMobile globally
window.closeMobile = closeMobileFixed;

// ===== CONSOLE EASTER EGG =====
console.log(`
%c╔══════════════════════════════════════╗
║   👋 Hey! I'm Arkan Tandel           ║
║   Cloud DevOps Engineer              ║
║   📧 arkantandel@gmail.com           ║
║   🔗 linkedin.com/in/arkantandel     ║
╚══════════════════════════════════════╝
`, 'color: #00d4ff; font-family: monospace; font-size: 12px;');
