const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const server = express();

// Init middleware
server.use(express.json({ extended: false }));

// Declare routes
const usersRoute = require('./routes/api/users');
const profileRoute = require('./routes/api/profile');
const postsRoute = require('./routes/api/posts');
const authRoute = require('./routes/api/auth');

// Use routes
server.use('/api/users', usersRoute);
server.use('/api/profile', profileRoute);
server.use('/api/posts', postsRoute);
server.use('/api/auth', authRoute);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  server.use(express.static('client/build'));

  server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
