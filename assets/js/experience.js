var clicked = false;

document.getElementById('expander').addEventListener('click', function () {
  const content = document.getElementById('content');
  const expander = document.getElementById('expander');
  if (!clicked) {
    clicked = true;
    const scrollHeight = content.scrollHeight;
    content.style.maxHeight = scrollHeight + 'px';
    expander.innerHTML = 'Show Less';
  } else {
    clicked = false;
    content.style = 'none';
    expander.innerHTML = 'Show More';
  }
});
