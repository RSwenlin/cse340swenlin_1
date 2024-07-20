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

/*  ***********************************
*   Deliver Registration view
*   Unit 4, deliver registration view activity
*   ******************************* */
router.get("/register", utilities.handleErrors(accountController.buildRegister))
/*  ***********************************
*   Process Registration view
*   Unit 4, deliver registration activity
*   ******************************* */
router.post(
    "/register",
    utilities.handleErrors(accountController.registerAccount)
)

module.exports = router;
