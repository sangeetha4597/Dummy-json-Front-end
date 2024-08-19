const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;

app.use(cors());
const data = require('../frontend/public/data')

// Get all users or filter by query parameters==USERS  FILTERS
// app.get('/api/user', (req, res) => {
//   let users = data.users;

//   // Filtering by query parameters
//   if (req.query.id) {
//     users = users.filter(user => user.id == req.query.id);
//   }
//   if (req.query.name) {
//     users = users.filter(user => user.name.toLowerCase().includes(req.query.name.toLowerCase()));
//   }

//   res.json(users);
// });

// Get all posts or filter by query parameters === POSTS FILTER 
app.get('/api/posts', (req, res) => {
  let posts = data.posts;

  // Filtering by query parameters
  if (req.query.id) {
    posts = posts.filter(post => post.id == req.query.id);
  }
  if (req.query.title) {
    posts = posts.filter(post => post.title.toLowerCase().includes(req.query.title.toLowerCase()));
  }

  res.json(posts);
});

// Get all users or filter by query parameters==ANIMALS  FILTERS
app.get('/api/animals', (req, res) => {
    let animals = data.animals;
  
    // Filtering by query parameters
    if (req.query.id) {
      animals = animals.filter(animal => animal.id == req.query.id);
    }
    if (req.query.name) {
      animals = animals.filter(animal =>animal.name.toLowerCase().includes(req.query.name.toLowerCase()));
    }
  
    res.json(animals);
  });
  


// Generic function to handle queries
function filterData(data, query) {
    return data.filter(item => {
        return Object.keys(query).every(key => {
            return String(item[key]).toLowerCase() === String(query[key]).toLowerCase();
        });
    });
}

// Users endpoint
app.get('/api/users', (req, res) => {
    const filteredUsers = filterData(data.users, req.query);
    res.json(filteredUsers);
});

// Posts endpoint
app.get('/api/posts', (req, res) => {
    const filteredPosts = filterData(data.posts , req.query);
    res.json(filteredPosts);
});

// Animals endpoint
app.get('/api/animals', (req, res) => {
    const filteredAnimals = filterData(data.animals, req.query);
    res.json(filteredAnimals);
});
// cars endpoint
app.get('/api/cars', (req, res) => {
  const filteredcars = filterData(data.cars, req.query);
  res.json(filteredcars);
});
  // books endpoint
app.get('/api/books', (req, res) => {
  const filteredbooks = filterData(data.books, req.query);
  res.json(filteredbooks);
});

// cities endpoint
app.get('/api/cities', (req, res) => {
  const filteredcities = filterData(data.cities, req.query);
  res.json(filteredcities);
});

// comments endpoint
app.get('/api/comments', (req, res) => {
  const filteredcomments = filterData(data.comments, req.query);
  res.json(filteredcomments);
});

// countries endpoint
app.get('/api/countries', (req, res) => {
  const filteredcountries = filterData(data.countries, req.query);
  res.json(filteredcountries);
});

// countries endpoint
app.get('/api/countries', (req, res) => {
  const filteredcountries = filterData(data.countries, req.query);
  res.json(filteredcountries);
});

// currencies endpoint
app.get('/api/currencies', (req, res) => {
  const filteredcurrencies = filterData(data.currencies, req.query);
  res.json(filteredcurrencies);
});

// movies endpoint
app.get('/api/movies', (req, res) => {
  const filteredmovies = filterData(data.movies, req.query);
  res.json(filteredmovies);
});

// products endpoint
app.get('/api/products', (req, res) => {
  const filteredproducts = filterData(data.products, req.query);
  res.json(filteredproducts);
});

// quotes endpoint
app.get('/api/quotes', (req, res) => {
  const filteredquotes = filterData(data.quotes, req.query);
  res.json(filteredquotes);
});

// recipes endpoint
app.get('/api/recipes', (req, res) => {
  const filteredrecipes = filterData(data.recipes, req.query);
  res.json(filteredrecipes);
});

// universities endpoint
app.get('/api/universities', (req, res) => {
  const filtereduniversities = filterData(data.universities, req.query);
  res.json(filtereduniversities);
});

// weather endpoint
app.get('/api/weather', (req, res) => {
  const filteredweather = filterData(data.weather, req.query);
  res.json(filteredweather);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server   running on port ${PORT}`));

