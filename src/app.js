const express = require('express');
const path = require('path');
const raffleRoutes = require('./routes/raffleRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/raffle', raffleRoutes);

// Error handling
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

module.exports = app;