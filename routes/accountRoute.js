// Needed Resources 
const express = require('express');
const router = new express.Router();
const accountController = require('../controllers/accountController'); // Import the accounts controller
const utilities = require("../utilities");


/* ********************************************
*   Deliver Login View
*   Unit 4, deliver login vew activity
*   ****************************************   */
// Add a "GET" route for the "My Account" path
router.get('/login', utilities.handleErrors(accountController,
    buildLogin))

// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

module.exports = router;
