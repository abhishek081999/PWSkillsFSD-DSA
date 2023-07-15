const productContainer = document.getElementById('product-container');

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

  return card;
}

// Display error message
function displayError(error) {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = 'Error loading products. Please try again later.';
  productContainer.appendChild(errorMessage);
}
