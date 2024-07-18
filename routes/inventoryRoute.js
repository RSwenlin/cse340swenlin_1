// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);

module.exports = router;

const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Define a route to handle specific inventory item detail view
router.get('/detail/:id', inventoryController.getInventoryDetail);

module.exports = router;
