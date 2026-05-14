// ========== MENU HAMBURGER (MOBILE) ==========
const hamburger = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ========== SCROLL SUAVE PARA TODOS OS LINKS ÂNCORA ==========
// Agora incluímos também o link "Onde Estamos" (#mapa)
const allAnchorLinks = document.querySelectorAll(
  '.nav-links a[href^="#"], .btn-primary[href^="#"], .btn-outline[href^="#"], .btn-quero[href^="#"], footer a[href^="#"]'
);

allAnchorLinks.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 70;
      const top = target.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ========== BOTÃO VOLTAR AO TOPO COM FADE IN/OUT ==========
const btnTopo = document.getElementById('btnTopo');

function toggleTopoButton() {
  if (window.scrollY > 300) {
    btnTopo.classList.add('visible');
  } else {
    btnTopo.classList.remove('visible');
  }
}

window.addEventListener('scroll', toggleTopoButton);
btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

toggleTopoButton();

// ========== EFEITO PARALLAX ==========
const heroBg = document.getElementById('heroBg');
const porqueBg = document.getElementById('porqueBg');

function updateParallax() {
  const scrollY = window.scrollY;
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
  if (porqueBg) {
    const porqueOffset = document.getElementById('porque-miluli').offsetTop;
    const relativeScroll = Math.max(0, scrollY - porqueOffset);
    porqueBg.style.transform = `translateY(${relativeScroll * 0.2}px)`;
  }
}

window.addEventListener('scroll', updateParallax);
window.addEventListener('resize', updateParallax);
updateParallax();