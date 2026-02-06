 const sections = document.querySelectorAll('section');
  let isScrolling = false;

  window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    isScrolling = true;

    const current = Math.round(window.scrollY / window.innerHeight);
    const next = e.deltaY > 0 ? current + 1 : current - 1;

    if (next >= 0 && sections[next]) {
      sections[next].scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => isScrolling = false, 900);
  }, { passive: true });