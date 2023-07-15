const singleProductContainer = document.getElementById('single-product');
const product = JSON.parse(localStorage.getItem('product'));

// Display single product in the UI
function displaySingleProduct(product) {
  const card = createProductCard(product);
  singleProductContainer.appendChild(card);
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

// Display the single product
displaySingleProduct(product);
