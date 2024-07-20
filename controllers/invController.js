const inventoryModel = require('../models/inventoryModel');
const utilities = require('../utilities/index');

const invCont = {};

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
    const classificationId = req.params.classificationId;
    try {
        const data = await inventoryModel.getInventoryByClassificationId(classificationId);
        if (data.length === 0) {
            return res.status(404).send('No vehicles found for this classification');
        }
        const grid = await utilities.buildClassificationGrid(data);
        const nav = await utilities.getNav();
        const className = data[0].classification_name;
        res.render('inventory/classification', {
            title: `${className} vehicles`,
            nav,
            grid,
        });
    } catch (error) {
        console.error(error);
        next(error); // Passes the error to the error-handling middleware
    }
};

/* ***************************
 *  Get inventory item details
 * ************************** */
invCont.getInventoryDetail = async function (req, res, next) {
    const inventoryId = req.params.id;
    try {
        const vehicle = await inventoryModel.getVehicleById(inventoryId);
        if (!vehicle) {
            return res.status(404).send('Vehicle not found');
        }
        const vehicleHTML = utilities.wrapVehicleDetails(vehicle);
        res.render('inventory/detail', {
            title: `${vehicle.make} ${vehicle.model}`,
            content: vehicleHTML
        });
    } catch (error) {
        console.error(error);
        next(error); // Passes the error to the error-handling middleware
    }
};

module.exports = invCont;

