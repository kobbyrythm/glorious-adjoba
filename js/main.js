// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Scroll-triggered fade-up animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.section-header, .amenity, .rate-card, .event-type, .trust-pillar, .contact-item, .venue-enquiry-card, .venue-feature-list'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Stagger children with delay
document.querySelectorAll('.amenities-grid, .rate-cards, .event-types, .trust-pillars').forEach(grid => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.07}s`;
  });
});

// Ticker divider — duplicate text for seamless loop
const dividerText = document.querySelector('.divider-text');
if (dividerText) {
  dividerText.textContent = dividerText.textContent.repeat(6);
}

// Form submission via Formspree — show confirmation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        btn.textContent = 'Sent! We\'ll be in touch shortly.';
        btn.style.background = '#1E3A2F';
        form.reset();
      } else {
        throw new Error('Form error');
      }
    } catch {
      btn.textContent = 'Something went wrong — please WhatsApp us directly.';
      btn.disabled = false;
    }

    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.background = '';
    }, 5000);
  });
}
