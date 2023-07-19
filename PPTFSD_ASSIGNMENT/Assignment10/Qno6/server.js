const http = require('http');

// Sample data for men's and women's products
const menProducts = [
  { id: 1, name: 'Product 1 (Men)', category: 'Men' },
  { id: 2, name: 'Product 2 (Men)', category: 'Men' },
  // Add more products as needed
];

const womenProducts = [
  { id: 1, name: 'Product 1 (Women)', category: 'Women' },
  { id: 2, name: 'Product 2 (Women)', category: 'Women' },
  // Add more products as needed
];

const server = http.createServer((req, res) => {
  // Set the content type to JSON
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    res.statusCode = 200;
    res.end(JSON.stringify({ products: menProducts }));
  } else if (req.url === '/women') {
    res.statusCode = 200;
    res.end(JSON.stringify({ products: womenProducts }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
