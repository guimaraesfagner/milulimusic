// ========== MENU HAMBURGER (MOBILE) ==========
// Seleciona o botão hamburger e a lista de links do menu
const hamburger = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

// Ao clicar no ícone do hamburger, alterna a classe "active" para mostrar/esconder o menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Fecha o menu automaticamente quando o usuário clicar em qualquer link do menu
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ========== SCROLL SUAVE PARA LINKS ÂNCORA ==========
// Para todos os links que começam com "#" (âncoras internas)
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Evita o comportamento padrão de pular bruscamente
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80; // Altura da navbar fixa
      const top = target.offsetTop - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  });
});

// ========== EFEITO PARALLAX REAL (movimento diferencial da imagem de fundo) ==========
const heroBg = document.getElementById('heroBg');
const porqueBg = document.getElementById('porqueBg');

function updateParallax() {
  const scrollY = window.scrollY; // Quantos pixels o usuário rolou
  
  // Para o hero: move a imagem a 30% da velocidade do scroll
  if (heroBg) {
    heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
  
  // Para a seção "Por que Miluli": movimento mais suave (20%)
  if (porqueBg) {
    const porqueOffset = document.getElementById('porque-miluli').offsetTop;
    const relativeScroll = Math.max(0, scrollY - porqueOffset);
    porqueBg.style.transform = `translateY(${relativeScroll * 0.2}px)`;
  }
}

// Atualiza o parallax sempre que o usuário rolar a página ou redimensionar a janela
window.addEventListener('scroll', updateParallax);
window.addEventListener('resize', updateParallax);
updateParallax(); // Chamada inicial para posicionar corretamente