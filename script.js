// Realça o link do menu correspondente à seção visível na tela
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.topnav a');

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => observer.observe(section));
