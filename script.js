const products = [
    { id: 1, name: "Camisa do Milan", price: 99.99, quantity: 20, image: "https://http2.mlstatic.com/D_NQ_NP_701059-MLB70491344436_072023-O.webp", rating: 4 },
    { id: 2, name: "Camisa do Real Madrid - 2023/2024", price: 149.99, quantity: 15, image: "https://s2-ge.glbimg.com/Xgy8zSIsxkH75tJukY94bJOfBcE=/0x0:1200x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/P/I/WkLDL3Q9W2LVW3YpYzaQ/camisa-reserva-do-real-madrid-2023-2024-adidas-kit-1.jpg", rating: 5 },
    { id: 3, name: "Camisa principal do Flamengo", price: 79.99, quantity: 30, image: "https://static.clube.netshoes.com.br/produtos/camisa-flamengo-i-2425-sn-torcedor-adidas-masculina/68/FBA-1505-068/FBA-1505-068_zoom1.jpg?ts=1726656256&ims=326x", rating: 5 },
    { id: 4, name: "Chuteira Nike Mercurial", price: 539.90, quantity: 10, image: "https://acdn.mitiendanube.com/stores/002/341/698/products/chuteira-de-campo-nike-zoom-mercurial-superfly-9-fg-dream-speed-mds-008-verde-preta-amarela-1-1-b68f75730fc9e2de3d17088103300455-1024-1024.png", rating: 3 },
    { id: 5, name: "Calção Ajax Away Adidas 23/24 Masculino Azul Marinho", price: 119.99, quantity: 5, image: "https://acdn.mitiendanube.com/stores/003/429/422/products/big5-e3f6102e97d4b2fd8a17055755374845-1024-1024.jpeg", rating: 4 },
    { id: 6, name: "Camisa do Barcelona", price: 239.99, quantity: 25, image: "https://acdn.mitiendanube.com/stores/002/322/390/products/camisa-barcelona-home1-916bb87499a265258817234942724547-480-0.jpeg", rating: 5 },
    { id: 7, name: "Chuteira Nike Phantom", price: 459.99, quantity: 35, image: "https://cdnv2.moovin.com.br/palotinaesportes/imagens/produtos/det/chuteira-nike-phantom-gx-club-masculina-b8066180948cb0335385d4aa95ce4be0.jpg", rating: 3 },
    { id: 8, name: "Chuteira Nike", price: 339.99, quantity: 40, image: "https://static.clube.netshoes.com.br/produtos/chuteira-campo-adidas-laceless-x-crazyfast-3-unissex/06/FB9-4095-006/FB9-4095-006_zoom1.jpg?ts=1704296023?ims=400x", rating: 4 },
    { id: 9, name: "Chuteira Nike Vapor 15", price: 329.99, quantity: 12, image: "https://imgmarketplace.lojasrenner.com.br/20001/2764/7010703164215/7510706507849/0.jpeg", rating: 5 },
    { id: 10, name: "Chuteira Phantom Gx", price: 289.99, quantity: 8, image: "https://acdn.mitiendanube.com/stores/002/322/390/products/chuteira-phantom-gx-campo3-53cbc44d2c739c71b017164922200910-1024-1024.png", rating: 4 },
    { id: 11, name: "Calção do Manchester", price: 99.99, quantity: 18, image: "https://acdn.mitiendanube.com/stores/002/011/196/products/calcao-manchester-united-2324-branco-71-bf8f7bd7b719f0051d16890838913944-480-0.jpg", rating: 3 },
    { id: 12, name: "Calção do Real Madrid", price: 79.99, quantity: 6, image: "https://acdn.mitiendanube.com/stores/002/011/196/products/calcao-real-madrid-branco-2324-51-c5eeb1a8641553b5b116890838791112-480-0.jpg", rating: 5 },
    { id: 13, name: "Calção do Flamengo", price: 89.99, quantity: 9, image: "https://acdn.mitiendanube.com/stores/002/322/390/products/shorts-flamengo1-44646625f21ead141817164898000369-480-0.jpeg", rating: 4 },
    { id: 14, name: "Calção do Vasco", price: 49.99, quantity: 50, image: "https://acdn.mitiendanube.com/stores/003/280/123/products/f7862940f84d595f5f496f0ddf5b7072-45ea5c5bb442e0fd3916979366438660-480-0.jpg", rating: 2 },
    { id: 15, name: "Camisa da Inglaterra copa 2022", price: 159.99, quantity: 28, image: "https://cf.shopee.com.br/file/sg-11134201-22110-3ftea6t2jljvfd", rating: 4 },
    { id: 16, name: "Camisa do Al-Hilal", price: 209.99, quantity: 20, image: "https://acdn.mitiendanube.com/stores/001/055/309/products/camisa-al-hilal-puma-2024-2025-home-1-casa-titular-um-i-azul-neymar-masculina-homem-nova-lancamento-temporada-qualidade-oficial-original-comprar-frete-gratis-comprar-em-loja-online-4-e14a10dff9a4dcc66617241724525621-640-0.jpg", rating: 3 },
    { id: 17, name: "Camisa do Bayern de Munique", price: 199.99, quantity: 10, image: "https://down-br.img.susercontent.com/file/cn-11134207-7qukw-lfxk304l7pqg75", rating: 5 },
    { id: 18, name: "Camisa do Palmeiras", price: 139.99, quantity: 14, image: "https://down-br.img.susercontent.com/file/sg-11134201-7r9ac-llj3h62pk70553", rating: 4 }

];


function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    console.log(product.carrinho); // Verifique se o caminho da imagem do carrinho está correto

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" id="imagem-card">
        <h3>${product.name}</h3>
        <p class="price">R$${product.price.toFixed(2)}</p>
        <p class="quantity">Quantidade: ${product.quantity}</p>
        <div class="star-rating">
            ${createStars(product.rating)}
        </div>
        <button class="add-to-cart" data-id="${product.id}">
            <span class="material-icons cart-icon">shopping_cart</span>
        </button>
    `;
    return card;
}


function loadProducts(filterRating = null, searchQuery = '') {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpar produtos existentes

    let filteredProducts = products;

    if (filterRating !== null) {
        filteredProducts = filteredProducts.filter(product => product.rating === filterRating);
    }

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    console.log(filteredProducts); // Verifique se os produtos estão sendo carregados corretamente

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productList.appendChild(card);
    });
}



function createStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star">&#9733;</span>'; // Estrela preenchida
        } else {
            stars += '<span class="star empty">&#9734;</span>'; // Estrela vazia
        }
    }
    return stars;
}

function loadProducts(filterRating = null, searchQuery = '') {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpar produtos existentes

    let filteredProducts = products;

    if (filterRating !== null) {
        filteredProducts = filteredProducts.filter(product => product.rating === filterRating);
    }

    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productList.appendChild(card);
    });
}

function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const whatsappButton = document.getElementById('whatsapp-button');

    cartCount.textContent = cartItems.length;
    cartList.innerHTML = '';

    let total = 0;
    let message = "Olá! Estou interessado nos seguintes produtos:\n\n"; // Cabeçalho da mensagem

    cartItems.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="item-details">
                    <span>${product.name} - R$${product.price.toFixed(2)} x ${item.quantity}</span>
                    <button class="remove-from-cart" data-id="${product.id}">Remover</button>
                </div>
            `;
            cartList.appendChild(listItem);
            total += product.price * item.quantity;

            // Adiciona o item à mensagem do WhatsApp
            message += `${product.name} - R$${product.price.toFixed(2)} x ${item.quantity}\n`;
        }
    });

    cartTotal.textContent = `Total: R$${total.toFixed(2)}`;

    // Adiciona o total final à mensagem do WhatsApp
    message += `\nTotal: R$${total.toFixed(2)}\n\nPor favor, me envie as instruções para o pagamento.`;

    // Substitua '55' e '84996002433' pelo número de WhatsApp real
    const whatsappNumber = '84996002433'; // Substitua pelo número do seu WhatsApp
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Atualiza o atributo href do botão do WhatsApp
    whatsappButton.setAttribute('onclick', `window.open('${whatsappLink}', '_blank');`);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();

    // Atualiza o carrinho quando um item é adicionado
    document.getElementById('cart-items').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'), 10);
            removeFromCart(productId);
        }
    });
});



function addToCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}

function removeFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts(); // Carregar todos os produtos por padrão
    updateCart();

    document.getElementById('product-list').addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'), 10);
            addToCart(productId);
        }
    });

    document.getElementById('cart').addEventListener('click', toggleCart);
    document.querySelector('.close').addEventListener('click', toggleCart);

    document.getElementById('rating-filter').addEventListener('change', (event) => {
        const ratingFilter = parseInt(event.target.value, 10);
        if (isNaN(ratingFilter)) {
            // Se "Todos" for selecionado (valor não numérico)
            loadProducts(); // Carregar todos os produtos
        } else {
            loadProducts(ratingFilter);
        }
    });

    document.getElementById('search-bar').addEventListener('input', (event) => {
        const searchQuery = event.target.value;
        const ratingFilter = parseInt(document.getElementById('rating-filter').value, 10);
        if (isNaN(ratingFilter)) {
            loadProducts(null, searchQuery); // Filtrar apenas pela pesquisa
        } else {
            loadProducts(ratingFilter, searchQuery); // Filtrar por avaliação e pesquisa
        }
    });

    document.getElementById('cart-items').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-from-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'), 10);
            removeFromCart(productId);
        }
    });
});