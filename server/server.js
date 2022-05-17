require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use((req, res, next) => {
	console.log('something');
	next();
});

// Get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			restaurants: ['mcdonalds', 'wendys']
		}
	});
});

// Get a restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
	console.log(req.params);
});

// Create a restaurant
app.post('/api/v1/restaurants', (req, res) => {
	console.log(req);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`server is up and listening on port ${port}`);
});
