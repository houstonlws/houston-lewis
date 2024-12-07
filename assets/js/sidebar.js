document
  .getElementById('sidebar-toggle')
  .addEventListener('click', function () {
    const content = document.getElementById('sidebar-content');
    const header = document.getElementById('sidebar-header');
    if (content.classList.contains('open')) {
      content.style.height = '0';
      content.classList.remove('open');
      header.classList.remove('open');
    } else {
      const scrollHeight = content.scrollHeight;
      content.style.height = scrollHeight + 'px';
      content.classList.add('open');
      header.classList.add('open');
    }
  });

window.addEventListener('resize', function () {
  const mediaQuery = window.matchMedia('(max-width: 1250px)');
  const content = document.getElementById('sidebar-content');
  if (!mediaQuery.matches) {
    content.style = '';
  }
});
