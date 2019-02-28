//Toggle sidebar
const sideBar = document.getElementById('sideBar');
const container = document.getElementById('container');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', event => {
  sideBar.classList.toggle('visible');
  //click dosen't spread on content
  event.stopPropagation();
});

container.addEventListener('click', () => sideBar.classList.remove('visible'));
