const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const port = 3004;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));




// Home Page (GET /)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home Page</title>
    </head>
    <body>
      <h1>G00417413</h1>
      <nav>
        <ul>
          <li><a href="/students">Students</a></li>
          <li><a href="/grades">Grades</a></li>
        </ul>
      </nav>
    </body>
    </html>
  `);
});

// Students Page (GET /students)
app.get('/students', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Students Page</title>
    </head>
    <body>
      <h1>Students Page</h1>
      <nav>
        <a href="/">Back to Home</a>
      </nav>
      <p>List of students will be shown here.</p>
    </body>
    </html>
  `);
});

// Grades Page (GET /grades)
app.get('/grades', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Grades Page</title>
    </head>
    <body>
      <h1>Grades Page</h1>
      <nav>
        <a href="/">Back to Home</a>
      </nav>
      <p>Grades data will be shown here.</p>
    </body>
    </html>
  `);
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
