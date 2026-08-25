(() => {
  const menu = document.querySelector('[data-menu-toggle]');
  const links = document.querySelector('[data-nav-links]');
  menu?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });

  const form = document.querySelector('[data-project-form]');
  const message = document.querySelector('[data-form-message]');
  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    message.textContent = 'Sending…';
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error();
      form.reset();
      message.textContent = 'Thanks — we will be in touch.';
    } catch {
      message.innerHTML = 'Please email <a href="mailto:creator@webcanbe.com">creator@webcanbe.com</a>.';
    }
  });
})();
