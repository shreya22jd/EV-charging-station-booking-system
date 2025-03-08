const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware.js'); // Middleware for authentication
require('dotenv').config();

const router = express.Router();

// Email Validation Function
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Password Validation Function
const isValidPassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{6,}$/.test(password);
};

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, email, contactNumber, password } = req.body;

    // Validate Contact Number (Must be 10 digits)
    if (!/^\d{10}$/.test(contactNumber)) {
        return res.status(400).json({ message: 'Contact number must be exactly 10 digits' });
    }

    // Validate Email Format
    if (!isValidEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Validate Password
    if (!isValidPassword(password)) {
        return res.status(400).json({ message: 'Password must contain at least one special character (@), one uppercase letter, one digit, and be at least 6 characters long' });
    }

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ username, email, contactNumber, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Validate Email Format
    if (!isValidEmail(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid Credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get User Route (Protected)
router.get('/user', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // Exclude password
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
