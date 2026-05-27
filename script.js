const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 28, 220)}ms`;
  observer.observe(el);
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const typedWord = document.querySelector('#typed-word');
const words = ['Excel VBA', 'Data analytics', 'Business insights'];

if (typedWord) {
  let wordIndex = 0;
  let charIndex = typedWord.textContent.length;
  let isDeleting = false;

  const type = () => {
    const word = words[wordIndex];
    typedWord.textContent = word.slice(0, charIndex);

    if (!isDeleting && charIndex < word.length) {
      charIndex += 1;
      setTimeout(type, 105);
      return;
    }

    if (!isDeleting && charIndex === word.length) {
      isDeleting = true;
      setTimeout(type, 1700);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(type, 58);
      return;
    }

    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 280);
  };

  setTimeout(type, 700);
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const submitButton = contactForm.querySelector('#submit-btn');
    const status = contactForm.querySelector('#form-status');
    const initialText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = 'Wysyłanie...';
    status.className = 'form-status';
    status.textContent = '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
      });
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Nie udało się wysłać formularza.');
      }

      status.textContent = 'Wiadomość wysłana. Odezwę się wkrótce.';
      status.className = 'form-status success';
      contactForm.reset();
    } catch (error) {
      status.textContent = `Nie udało się wysłać wiadomości. Napisz bezpośrednio na filiplodyga@gmail.com.`;
      status.className = 'form-status error';
      console.error('Web3Forms error:', error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = initialText;
    }
  });
}
