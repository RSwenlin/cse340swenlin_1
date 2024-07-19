// Needed Resources 
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController'); // Import the accounts controller

// Add a "GET" route for the "My Account" path
router.get('/my-account', accountController.handleMyAccount);

// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

module.exports = router;
