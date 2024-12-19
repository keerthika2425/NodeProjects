const User = require('../models/UserModel');

// Controller to add a user
const addUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields (name, email, password) are required.' });
    }

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).json({ message: 'Duplicate user!' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User added successfully!', user: { name, email } });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

// Controller to check if a user exists
const checkUser = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(200).json({ message: 'User found!', user });
        } else {
            return res.status(404).json({ message: 'User not found!' });
        }
    } catch (error) {
        console.error('Error checking user:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = { addUser, checkUser };
