const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const linkNav = document.querySelectorAll('.link-nav');
const welcome = document.querySelector('.welcome');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    welcome.classList.toggle('active');
    linkNav.classList.toggle('active');
});

document.querySelectorAll('.link').forEach(n => {
    n.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        welcome.classList.remove('active');
        linkNav.classList.remove('active');
    })
})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenEmelents = document.querySelectorAll('.hidden');
hiddenEmelents.forEach((el) => observer.observe(el));