// Basic small enhancements: current year and smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  document.getElementById('year').textContent = y;

  // Smooth scrolling for anchor links
  document.querySelectorAll('a.nav-link, a.btn[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
