// Keep the footer year up to date
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight the nav link of the section currently in view
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => {
        const active = link.getAttribute('href') === '#' + entry.target.id;
        link.style.color = active ? 'var(--accent)' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));
