const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
		// This creates the schema for username where trim is basically trimming off the whitespaces at the end
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3
		},
	},{
		timestamps: true,
});


const User = mongoose.model('User',userSchema);

module.exports = User;
