//Toggle sidebar
const sideBar = document.getElementById('sideBar');
const container = document.getElementById('container');
const hamburger = document.getElementById('hamburger');
const main = document.getElementById('main');
const favoriteList = document.getElementById('favoriteList');
const historyList = document.getElementById('historyList');

hamburger.addEventListener('click', event => {
  sideBar.classList.toggle('visible');
  //click dosen't spread on content
  event.stopPropagation();
});

container.addEventListener('click', () => sideBar.classList.remove('visible'));

//Sidebar buttons

sideBar.addEventListener('click', event => {
  if (event.target.getAttribute('data-type') === 'btn-main') {
    favoriteList.classList.add('hidden');
    historyList.classList.add('hidden');
    main.classList.remove('hidden');
  } else if (event.target.getAttribute('data-type') === 'btn-favorite') {
    main.classList.add('hidden');
    historyList.classList.add('hidden');
    favoriteList.classList.remove('hidden');
  } else if (event.target.getAttribute('data-type') === 'btn-history') {
    main.classList.add('hidden');
    favoriteList.classList.add('hidden');
    historyList.classList.remove('hidden');
  } else if (event.target.getAttribute('data-type') === 'btn-celcius') {
    console.log('celcius');
  } else if (event.target.getAttribute('data-type') === 'btn-fahrenheit') {
    console.log('fahrenheit');
  }
});
