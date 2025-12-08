(function initBurger() {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');

  // если хедер ещё не подгружен include.js – ждём
  if (!toggle || !nav) {
    setTimeout(initBurger, 300);
    return;
  }

  // уже инициализировали – второй раз не надо
  if (toggle.dataset.burgerInit === '1') return;
  toggle.dataset.burgerInit = '1';

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      nav.classList.remove('nav-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();
