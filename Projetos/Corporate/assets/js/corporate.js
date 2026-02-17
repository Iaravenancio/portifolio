// HEADER STICKY
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
});

// MENU MOBILE
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.onclick = () => menu.classList.toggle('active');

// CONTADOR NUMÉRICO
const counters = document.querySelectorAll('.numero');
let started = false;

function startCounter() {
    if (started) return;
    counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const increment = target / 120;

    const update = () => {
        count += increment;
        if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
        } else {
        counter.innerText = target;
        }
    };
    update();
    });
    started = true;
}

window.addEventListener('scroll', () => {
    const section = document.getElementById('numeros');
    if (section.getBoundingClientRect().top < window.innerHeight) {
    startCounter();
    }
});