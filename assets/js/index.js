const niches = {
fashion: {
category: 'Luxury E-commerce',
title: 'Bella Moura Boutique',
desc: 'Interface minimalista e luxuosa focada em despertar desejo de compra imediato.',
features: ['Checkout em 1 Clique', 'Vitrine Inteligente', 'Guia de Medidas VIP'],
demoUrl: './Projetos/Moda_Feminina/index.html?niche=fashion'
},

lp: {
category: 'Landing Page',
title: 'Conversão Direta',
desc: 'Página estratégica focada em geração de leads.',
features: ['CTA Estratégico', 'Copy Persuasiva', 'SEO'],
demoUrl: './Projetos/Landing_Page/index.html?niche=lp'
},

restaurant: {
category: 'Gastronomia',
title: 'D ALBA TRATTORIA',
desc: 'Cardápio digital e reservas online.',
features: ['Cardápio Interativo', 'Reservas', 'Delivery'],
demoUrl: './Projetos/Restaurante/index.html?niche=restaurant'
},

corporate: {
category: 'Empresarial',
title: 'Empresa Moderna',
desc: 'Site institucional profissional.',
features: ['Autoridade', 'SEO', 'Performance'],
demoUrl: '.Projetos/Corporate/index.html?niche=corporate'
},

professional: {
category: 'Profissional',
title: 'Especialista',
desc: 'Posicionamento pessoal e autoridade.',
features: ['Branding', 'Contato Direto', 'Credibilidade'],
demoUrl: './Projetos/Profissional/index.html?niche=professional'
}
};


let currentNiche = 'fashion';

function switchNiche(niche) {
currentNiche = niche;
const data = niches[niche];

// Tabs
document.querySelectorAll('.niche-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.niche === niche);
});

// Textos
document.getElementById('niche-cat').innerText = data.category;
document.getElementById('niche-title').innerText = data.title;
document.getElementById('niche-desc').innerText = data.desc;
document.getElementById('open-demo').href = data.demoUrl;

const features = document.getElementById('niche-features');
features.innerHTML = '';
data.features.forEach(f => {
    features.innerHTML += `
    <div class="flex items-center gap-3">
        <div class="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-[10px] font-bold">✓</div>
        <span class="text-sm font-poppins-bold text-gray-700">${f}</span>
    </div>`;
});

// DEMONSTRAÇÃO REAL
document.getElementById('simulation-viewport').innerHTML = `
    <iframe
    src="${data.demoUrl}"
    class="w-full h-full border-0 rounded-inner"
    loading="lazy">
    </iframe>
`;
}

const params = new URLSearchParams(window.location.search);
const nicheFromUrl = params.get('niche');

if (nicheFromUrl && niches[nicheFromUrl]) {
switchNiche(nicheFromUrl);
} else {
switchNiche('fashion');
}
