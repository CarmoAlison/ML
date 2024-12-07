const product = {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição completa do produto.',
    price: 99.99,
    image: 'product1.jpg',
    carrinho: "https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade.png",
    images: ['product1.jpg', 'product2.jpg', 'product3.jpg'],
    reviews: [
        { author: 'Cliente 1', comment: 'Excelente produto!' },
        { author: 'Cliente 2', comment: 'Muito satisfeito com a compra.' }
    ]
};

// const carrinho = 'imagens/carrinho.png';

// Atualizar detalhes do produto
function updateProductDetails() {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `R$ ${product.price.toFixed(2)}`;
    document.getElementById('main-image').src = product.image;

    const thumbnails = document.querySelector('.thumbnail-gallery');
    thumbnails.innerHTML = product.images.map(img => `
        <img src="${img}" alt="Thumbnail" class="thumbnail" data-image="${img}">
    `).join('');

    const reviews = document.querySelector('.product-reviews');
    reviews.innerHTML = product.reviews.map(review => `
        <div class="review">
            <p><strong>${review.author}:</strong> ${review.comment}</p>
        </div>
    `).join('');
}

// Inicializar detalhes do produto
updateProductDetails();

// Atualizar imagem principal ao clicar em uma miniatura
document.querySelector('.thumbnail-gallery').addEventListener('click', (event) => {
    if (event.target.classList.contains('thumbnail')) {
        document.getElementById('main-image').src = event.target.dataset.image;
    }
});