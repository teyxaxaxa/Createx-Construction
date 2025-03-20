
const sideMenu = document.querySelector('.left');

const menuBtn = document.querySelector('#menu_btn');

const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
