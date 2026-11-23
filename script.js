// The Italian Reset — mobile nav toggle
// Mobile menu
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });
});

// Photos: if an image file is missing, hide it gracefully instead of showing a broken icon.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('img.js-photo').forEach(function (img) {
    function hide() {
      var slot = img.closest('.photo-slot');
      if (slot) { slot.classList.add('photo-missing'); } else { img.style.display = 'none'; }
    }
    img.addEventListener('error', hide);
    if (img.loading !== 'lazy' && img.complete && img.naturalWidth === 0) { hide(); }
  });
});

// Venue video: if the video file isn't uploaded yet, hide the section instead of showing an empty player.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.venue-video video source').forEach(function (src) {
    src.addEventListener('error', function () {
      var section = src.closest('.venue-video');
      if (section) { section.classList.add('video-missing'); }
    });
  });
});
