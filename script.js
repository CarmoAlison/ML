// URL da API do SheetDB
const API_URL = "https://sheetdb.io/api/v1/x06x83pnb1w3d";

// Função assíncrona para buscar os produtos da API
async function fetchProducts() {
    try {
        // Faz uma requisição para a URL da API
        const response = await fetch(API_URL);
        // Converte a resposta para JSON
        const products = await response.json();
        // Mapeia os produtos recebidos para um formato específico
        return products.map(product => ({
            id: parseInt(product.id, 10), // Converte o ID para número inteiro
            name: product.nome, // Obtém o nome do produto
            descricao: product.descricao, // Obtém a descrição do produto
            price: parseFloat(product.preco), // Converte o preço para número decimal
            quantity: parseInt(product.estoque, 10), // Converte o estoque para número inteiro
            image: product.imagem, // URL da imagem do produto
        }));
    } catch (error) {
        // Trata erros que possam ocorrer durante a requisição
        console.error("Erro ao buscar produtos:", error);
        return []; // Retorna uma lista vazia em caso de erro
    }
}

// Função para criar o card de um produto
function createProductCard(product) {
    // Cria um elemento 'div' para o card do produto
    const card = document.createElement('div');
    card.className = 'product-card'; // Adiciona a classe CSS

    // Define o conteúdo HTML do card
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" id="imagem-card">
        <h3>${product.name}</h3>
        <p class="descricao">${product.descricao}</p>
        <div class="informaCart">
        <p class="price">R$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">
            <span class="material-icons cart-icon">shopping_cart</span>
        </button>
        </div>
    `;
    return card; // Retorna o card criado
}

// Função para carregar e exibir os produtos na página
async function loadProducts(filterRating = null, searchQuery = '') {
    const productList = document.getElementById('product-list'); // Obtém o container de produtos
    productList.innerHTML = ''; // Limpa os produtos existentes

    let products = await fetchProducts(); // Busca os produtos da API

    // Filtra os produtos por classificação, se necessário
    if (filterRating !== null) {
        products = products.filter(product => product.rating === filterRating);
    }

    // Filtra os produtos pelo termo de busca, se necessário
    if (searchQuery) {
        products = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Adiciona cada produto ao container
    products.forEach(product => {
        const card = createProductCard(product);
        productList.appendChild(card);
    });
}

// Função para atualizar o carrinho de compras
function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Obtém os itens do carrinho do localStorage
    const cartCount = document.getElementById('cart-count'); // Contador de itens no carrinho
    const cartList = document.getElementById('cart-items'); // Lista de itens no carrinho
    const cartTotal = document.getElementById('cart-total'); // Total do carrinho
    const whatsappButton = document.getElementById('whatsapp-button'); // Botão para enviar pedido via WhatsApp
    const products = JSON.parse(localStorage.getItem('products')) || []; // Produtos disponíveis

    // Atualiza o número total de itens no carrinho
    cartCount.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0); 
    cartList.innerHTML = ''; // Limpa a lista de itens no carrinho

    let total = 0; // Variável para o total do carrinho
    let message = "Olá! Estou interessado nos seguintes produtos:\n\n"; // Mensagem para WhatsApp

    // Gera a lista de itens no carrinho
    cartItems.forEach(item => {
        const product = products.find(p => p.id === item.id); // Encontra o produto correspondente
        if (product) {
            const listItem = document.createElement('li'); // Cria um item de lista
            listItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="item-details">
                    <span>${product.name} - R$${product.price.toFixed(2)}</span>
                    <div class="controls">
                    <div class="quantity-controls">
                        <button class="decrease-quantity" data-id="${product.id}">-</button>
                        <span id="quantidadeCart">${item.quantity}</span>
                        <button class="increase-quantity" data-id="${product.id}">+</button>
                    </div>
                    <button class="remove-from-cart" data-id="${product.id}">Remover</button>
                    </div>
                </div>
            `;
            cartList.appendChild(listItem); // Adiciona o item ao DOM
            total += product.price * item.quantity; // Calcula o total do carrinho

            message += `${product.name} - R$${product.price.toFixed(2)} x ${item.quantity}\n`; // Adiciona ao texto do WhatsApp
        }
    });

    cartTotal.textContent = `Total: R$${total.toFixed(2)}`; // Atualiza o total do carrinho
    message += `\nTotal: R$${total.toFixed(2)}\n\nPor favor, me envie as instruções para o pagamento.`;

    // Configura o link do WhatsApp
    const whatsappNumber = '84996002433';
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(message)}`;
    whatsappButton.setAttribute('onclick', `window.open('${whatsappLink}', '_blank');`);
}

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Obtém os itens do carrinho do localStorage
    const existingItem = cartItems.find(item => item.id === productId); // Verifica se o produto já está no carrinho

    if (existingItem) {
        existingItem.quantity += 1; // Incrementa a quantidade
    } else {
        cartItems.push({ id: productId, quantity: 1 }); // Adiciona um novo produto
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Salva os itens atualizados no localStorage
    updateCart(); // Atualiza o carrinho
}

// Função para alterar a quantidade de um produto no carrinho
function changeCartQuantity(productId, change) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Obtém os itens do carrinho
    const item = cartItems.find(item => item.id === productId); // Encontra o item correspondente

    if (item) {
        item.quantity += change; // Altera a quantidade

        if (item.quantity <= 0) { // Remove o item se a quantidade for zero ou negativa
            const index = cartItems.indexOf(item);
            cartItems.splice(index, 1);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Salva as alterações no localStorage
        updateCart(); // Atualiza o carrinho
    }
}

// Função para alternar a exibição do carrinho
function toggleCart() {
    const modal = document.getElementById('cart-modal'); // Obtém o modal do carrinho
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block'; // Alterna a visibilidade
}

// Evento acionado quando a página é carregada
document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts(); // Busca os produtos da API
    localStorage.setItem('products', JSON.stringify(products)); // Salva os produtos no localStorage
    loadProducts(); // Carrega os produtos na página
    updateCart(); // Atualiza o carrinho

    // Adiciona evento para adicionar ao carrinho
    document.getElementById('product-list').addEventListener('click', (event) => {
        const button = event.target.closest('.add-to-cart'); // Verifica se o clique ocorreu no botão ou em um elemento dentro dele
        if (button) {
            const productId = parseInt(button.getAttribute('data-id'), 10); // Obtém o ID do produto
            addToCart(productId); // Adiciona o produto ao carrinho
        }
    });
    
    // Adiciona evento para abrir/fechar o carrinho
    document.getElementById('cart').addEventListener('click', toggleCart);
    document.querySelector('.close').addEventListener('click', toggleCart);

    // Eventos para alterar quantidade ou remover itens do carrinho
    document.getElementById('cart-items').addEventListener('click', (event) => {
        const productId = parseInt(event.target.getAttribute('data-id'), 10);

        if (event.target.classList.contains('increase-quantity')) {
            changeCartQuantity(productId, 1);
        } else if (event.target.classList.contains('decrease-quantity')) {
            changeCartQuantity(productId, -1);
        } else if (event.target.classList.contains('remove-from-cart')) {
            changeCartQuantity(productId, -9999); // Remove o item
        }
    });
});
