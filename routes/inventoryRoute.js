// Needed Resources 
const express = require("express");
const router = new express.Router();
const invController = require("../controllers/invController");
const utilities = require('../utilities');
const invChecks = require("../utilities/inventory-validation")


// Route to build inventory by classification view
// unit 3 activities
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
 


// Define a route to handle specific inventory item detail view
router.get('/detail/:id', invController.getInventoryDetail);

// Route to display delete confirmation view
router.get("/delete/:inv_id", utilities.checkLogin, utilities.checkAdmin, utilities.handleErrors(invController.buildDeleteConfirmationView));
router.get("/add/:inv_id", utilities.checkLogin, utilities.checkAdmin, utilities.handleErrors(invController.buildAddInventory));
router.post('/add-classification', utilities.handleErrors(inventoryController.addClassification))


module.exports = router;
