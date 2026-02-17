/* ===================== DATA ===================== */
const produtos = [
    {id:1, nome:"Maiô", preco:189, img:"assets/img/maio_listras.png", categoria: "beachwear"},
    {id:2, nome:"Vestido Linen", preco:329, img:"assets/img/vestido_florido.png", categoria: "vestidos"},
    {id:3, nome:"Vestido Listrado", preco:129, img:"assets/img/vestido_listras.png", categoria:"vestidos"},
    {id:4, nome:"Conjunto Amarelo", preco:359, img:"assets/img/conjunto_amarelo.png", categoria: "conjuntos"},
    {id:5, nome:"Macacão Branco Midi", preco:399, img:"assets/img/macacao_branco.png", categoria: "conjuntos"},
    {id:6, nome:"Vestido Midi Folhas", preco:199, img:"assets/img/vestido_folhas_azul.png", categoria: "vestidos"},
    {id:7, nome:"Saída Casual Natural", preco:279, img:"assets/img/saida_praia.png", categoria: "beachwear"}
];

let cart = [];

renderProducts(produtos);

function showSection(id) {
    document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function openProduct(id) {
    const p = produtos.find(x => x.id === id);
    showSection("detail");
    document.getElementById("productDetail").innerHTML = `
    <img src="${p.img}">
    <div>
        <h2>${p.nome}</h2>
        <p>R$ ${p.preco}</p>
        <div class="sizes">
            <button>P</button><button>M</button><button>G</button>
        </div>
        <button class="add-cart" onclick="addToCart(${p.id})">Adicionar à Sacola</button>
    </div>`;
}

function renderProducts(lista) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    lista.forEach(p => {
        grid.innerHTML += `
        <div class="product-card" onclick="openProduct(${p.id})">
            <img src="${p.img}">
            <div class="product-info">
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco}</p>
            </div>
        </div>
        `;
    });
}


function filterProducts(event, categoria) {
    document.querySelectorAll(".category-filter button")
        .forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");

    if (categoria === "all") {
        renderProducts(produtos);
    } else {
        renderProducts(produtos.filter(p => p.categoria === categoria));
    }
}



function addToCart(id) {
    const p = produtos.find(x => x.id === id);
    cart.push(p);
    document.getElementById("cartCount").innerText = cart.length;
    alert("Item adicionado à sacola");
}

function goHome() {
    document.getElementById("cartSidebar").classList.remove("active");
    showSection("home");
}

function toggleCart() {
    const cartEl = document.getElementById("cartSidebar");
    cartEl.classList.toggle("active");
    renderCart();
}

function renderCart() {
    const items = document.getElementById("cartItems");
    const total = document.getElementById("cartTotal");
    items.innerHTML = "";
    let sum = 0;
    cart.forEach(i => {
    sum += i.preco;
    items.innerHTML += `<div class="cart-item">${i.nome} - R$ ${i.preco}</div>`;
    });
    total.innerText = sum;
}

function scrollToProducts() {
    window.scrollTo({ top: 600, behavior: "smooth" });
}