const utilities = require('../utilities/index'); // Ensure correct path

exports.handleMyAccount = (req, res, next) => {
    try {
        // Example of using a utility function
        utilities.someUtilityFunction();
        
        // Handle the "My Account" request
        res.send('My Account Page');
    } catch (err) {
        next(err); // Pass errors to the error handler middleware
    }
};
