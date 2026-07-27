document.addEventListener('DOMContentLoaded', function () {
  var loadMoreBtn = document.getElementById('portfolio-load-more');
  if (!loadMoreBtn) return;

  loadMoreBtn.addEventListener('click', function () {
    var hidden = document.querySelectorAll('.portfolio-item-hidden');
    hidden.forEach(function (item) {
      item.classList.remove('portfolio-item-hidden');
      item.classList.add('is-visible');
    });
    loadMoreBtn.classList.add('hidden');
  });
});
