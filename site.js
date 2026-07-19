/* Jo D'or — shared behavior: scroll reveals + waitlist form */

// Scroll reveals (skipped entirely under prefers-reduced-motion)
(function () {
  var els = document.querySelectorAll('[data-reveal]');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
      setTimeout(function () {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
      io.unobserve(el);
    });
  }, { threshold: 0.18 });
  els.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) return; // already visible on load — don't hide
    el.style.opacity = '0';
    el.style.transform = 'translateY(26px)';
    var dur = el.getAttribute('data-reveal-duration') || '1.1s';
    el.style.transition = 'opacity ' + dur + ' cubic-bezier(0.22, 1, 0.36, 1), transform ' + dur + ' cubic-bezier(0.22, 1, 0.36, 1)';
    io.observe(el);
  });
})();

// Waitlist form — posts to Mailchimp via hidden iframe, then swaps in the success message
(function () {
  var form = document.getElementById('waitlist-form');
  var iframe = document.getElementById('hidden_iframe');
  if (!form || !iframe) return;
  var submitted = false;
  form.addEventListener('submit', function () { submitted = true; });
  iframe.addEventListener('load', function () {
    if (!submitted) return;
    form.style.display = 'none';
    document.querySelector('.success-msg').style.display = 'block';
  });
})();
