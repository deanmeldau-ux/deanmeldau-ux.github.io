/* DryCape — site interactions (mobile nav). Tiny, no dependencies. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }
  // Pre-fill the quote form service/suburb when arriving from a landing page (?service=&suburb=)
  try {
    var p = new URLSearchParams(window.location.search);
    var svc = p.get('service');
    var sub = p.get('suburb');
    if (svc) { var s = document.getElementById('service'); if (s) setSelect(s, svc); }
    if (sub) { var b = document.getElementById('suburb'); if (b) setSelect(b, sub); }
  } catch (e) {}
  function setSelect(sel, val) {
    val = val.toLowerCase();
    for (var i = 0; i < sel.options.length; i++) {
      if (sel.options[i].value.toLowerCase() === val) { sel.selectedIndex = i; return; }
    }
  }
})();
