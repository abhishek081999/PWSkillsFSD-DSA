const productContainer = document.getElementById('product-container');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const closeButton = document.getElementsByClassName('close')[0];

// Fetch products from the API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => displayProducts(products))
  .catch(error => displayError(error));

// Display products in the UI
function displayProducts(products) {
  products.forEach(product => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
  });
}

// Create a product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  const image = document.createElement('img');
  image.src = product.image;
  card.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = product.title;
  card.appendChild(title);

  const price = document.createElement('p');
  price.textContent = `$${product.price}`;
  card.appendChild(price);

  card.addEventListener('click', () => {
    addToCart(product);
    saveProduct(product);
    redirectToSingleProductPage();
  });

  return card;
}

// Add product to the cart
function addToCart(product) {
  const cartItem = createCartItem(product);
  cartItems.appendChild(cartItem);
}

// Create a cart item element
function createCartItem(product) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');

  const image = document.createElement('img');
  image.src = product.image;
  cartItem.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = product.title;
  cartItem.appendChild(title);

  const price = document.createElement('p');
  price.textContent = `$${product.price}`;
  cartItem.appendChild(price);

  return cartItem;
}

// Open the cart modal
function openCartModal() {
  cartModal.style.display = 'block';
}

// Close the cart modal
function closeCartModal() {
  cartModal.style.display = 'none';
}

// Event listeners for cart modal
window.addEventListener('click', event => {
  if (event.target === cartModal) {
    closeCartModal();
  }
});

closeButton.addEventListener('click', closeCartModal);

// Display error message
function displayError(error) {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Error loading products. Please try again later.';
  productContainer.appendChild(errorMessage);
}

// Save the selected product to localStorage
function saveProduct(product) {
  localStorage.setItem('product', JSON.stringify(product));
}

// Redirect to single product page
function redirectToSingleProductPage() {
  window.location.href = 'single-product.html';
}
