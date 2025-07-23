// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);
  alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  this.reset();
});

// Scroll header effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Intersection observer animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease-out';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .car-card').forEach(card => {
  observer.observe(card);
});
