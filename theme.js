(function () {
  var KEY = 'theme';

  function apply(theme) {
    var root = document.documentElement;
    if (theme === 'dark') {
      root.dataset.theme = 'dark';
    } else {
      delete root.dataset.theme;
    }
  }

  try {
    apply(localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light');
  } catch (e) {
    apply('light');
  }

  window.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;

    function sync() {
      var dark = document.documentElement.dataset.theme === 'dark';
      btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    }

    sync();
    btn.addEventListener('click', function () {
      var dark = document.documentElement.dataset.theme !== 'dark';
      apply(dark ? 'dark' : 'light');
      try {
        localStorage.setItem(KEY, dark ? 'dark' : 'light');
      } catch (e) {}
      sync();
    });
  });
})();
