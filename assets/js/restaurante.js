/* =====================
    SISTEMA DE ABAS
===================== */
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.menu-section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

/* =====================
    MODAL RESERVA
===================== */
const modal = document.querySelector('.modal-overlay');
const openBtn = document.querySelector('.reserve-btn');
const closeBtn = document.querySelector('.close');

openBtn.onclick = () => modal.style.display = 'flex';
closeBtn.onclick = () => modal.style.display = 'none';
modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

document.getElementById('submit').onclick = () => {
    alert("Sua mesa foi reservada!");
    modal.style.display = 'none';
};