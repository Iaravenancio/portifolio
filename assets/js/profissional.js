// MENU MOBILE
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.onclick = () => menu.classList.toggle('active');

// MODAL
const modal = document.getElementById('modal');
document.getElementById('openModal').onclick = () => modal.style.display = 'flex';
document.getElementById('openModal2').onclick = () => modal.style.display = 'flex';
modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('active');
    }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();