const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const hero = document.querySelector('.hero');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    hero.classList.toggle('active');
});

document.querySelectorAll('.link').forEach(n => {
    n.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        hero.classList.remove('active');
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