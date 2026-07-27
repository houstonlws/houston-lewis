document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-experience-card]').forEach(function (card) {
    var summary = card.querySelector('.experience-card-summary');
    var details = card.querySelector('.experience-card-details');

    summary.addEventListener('click', function () {
      var isOpen = card.classList.toggle('is-open');
      summary.setAttribute('aria-expanded', isOpen);
      details.hidden = !isOpen;
    });
  });
});
