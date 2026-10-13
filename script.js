// The Italian Reset — mobile nav toggle
// Minimal mobile nav toggle — expand/collapse nav-links on small screens
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var isOpen = links.style.display === 'flex';
        links.style.display = isOpen ? 'none' : 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '100%';
        links.style.left = '0';
        links.style.right = '0';
        links.style.background = 'var(--bg)';
        links.style.padding = '20px';
        links.style.borderBottom = '1px solid var(--line)';
        toggle.setAttribute('aria-expanded', String(!isOpen));
      });
    }
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
