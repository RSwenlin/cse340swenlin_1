const utilities = require("../utilities/")
const baseController = {}
/*  ******************************
 *  Build Home view with MVC
 * Unit 3, Activities
 *  ****************************** */
baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
}

module.exports = baseController
