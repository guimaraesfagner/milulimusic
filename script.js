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

const allAnchorLinks = document.querySelectorAll(
  '.nav-links a[href^="#"], .btn-primary[href^="#"], .btn-outline[href^="#"], .btn-quero[href^="#"]'
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