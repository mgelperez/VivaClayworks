const hamMenu = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const offScreenMenu = document.querySelector('.off-screen-menu');
const body = document.querySelector('body')


function toggleMenu() {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    cross.classList.toggle('active');
    body.classList.toggle('active');
}


hamMenu.addEventListener('click', toggleMenu);


cross.addEventListener('click', toggleMenu); 