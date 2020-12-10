const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
	User.find() // 
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));

		// Finds the List of Users in DB and the find method returns a "Promise"

		// Results are returned in JSON by res.json(users)	

});

router.route('/add').post((req,res) => {
	console.log("Initiating Process...");
	const username = req.body.username;
	console.log("Fetching Username");
	const newUser = new User({username});
	console.log(`Username Came: ${username}`);
	
	newUser.save()
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: ' + err));
		
});

module.exports = router;