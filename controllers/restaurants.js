const { User, Restaurant, Review } = require('../models');
const { avgFromObject } = require('../utils/Functions');

const index = (req, res) => {
	
	Promise.all([Restaurant.find({}).lean()])
		.then(result => {
			const [restaurants] = result;
			const page = {
				title: "Restaurants"
			};

			res.status(200).render('restaurants/index', { 
				page: page,
				restaurants: restaurants,
			});
		});
};

const show = (req, res) => {

	Promise.all([Restaurant.findOne({slug: req.params.slug}).lean(), User.find({}).lean(), Review.find({ restaurant_slug: req.params.slug}).lean() ])
		.then(result => {
			const [restaurant, users, reviews] = result;

			const page = {
				title: restaurant.name
			};

			const avg = avgFromObject(reviews, 'rating').toFixed(1);
				
			res.status(200).render('restaurants/show', { 
				page: page,
				restaurant: restaurant,
				users: users,
				avg: avg,
			});
		});
};

module.exports = {
	index: index,
	show: show,
};