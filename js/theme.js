(function () {
  var key = 'dlentrodt-theme';
  function apply(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(key, t); } catch (e) {}
  }
  try {
    var saved = localStorage.getItem(key);
    if (saved === 'dark' || saved === 'light') apply(saved);
  } catch (e) {}
  var btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') || 'light';
      apply(cur === 'dark' ? 'light' : 'dark');
    });
  }
})();