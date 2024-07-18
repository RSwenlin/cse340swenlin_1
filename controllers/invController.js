const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

module.exports = invCont

const inventoryModel = require('../models/inventoryModel');
const utilities = require('../utilities/index');

exports.getInventoryDetail = async (req, res) => {
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
        res.status(500).send('Server error');
    }
};
