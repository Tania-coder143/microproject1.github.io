const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Load JSON data
const coursesData = require('./data/courses.json');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes for static HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signin.html'));
});


app.get('/courses', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'courses.html'));
});

// API route to send JSON data
app.get('/api/courses', (req, res) => {
  res.json(coursesData);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
