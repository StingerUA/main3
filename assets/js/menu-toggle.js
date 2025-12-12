(function initBurger() {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');

  // Хедер может подгружаться include.js — ждём, если его ещё нет
  if (!toggle || !nav) {
    setTimeout(initBurger, 300);
    return;
  }

  // Защита от повторной инициализации
  if (toggle.dataset.burgerInit === '1') return;
  toggle.dataset.burgerInit = '1';

  var label = toggle.querySelector('.menu-label');

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (label) {
      label.textContent = isOpen ? 'CLOSE' : 'MENU';
    }
  });

  // Закрываем меню при клике по пункту
  nav.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      nav.classList.remove('nav-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (label) {
        label.textContent = 'MENU';
      }
    }
  });
})();
