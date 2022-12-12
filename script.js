const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const welcome = document.querySelector('.welcome');
const center = document.querySelector('.center');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    welcome.classList.toggle('active');
    center.classList.toggle('active');
});

document.querySelectorAll('.link').forEach(n => {
    n.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        welcome.classList.remove('active');
        center.classList.remove('active');
    })
})