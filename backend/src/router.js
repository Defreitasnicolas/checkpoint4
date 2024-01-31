const express = require("express");

const router = express.Router();

const tattooControllers = require("./controllers/tattooControllers");
// const validateTattoo = require("./validators/validateTattoo");

router.get("/tattoos", tattooControllers.browse);
router.get("/tattoos/:id", tattooControllers.read);
// router.post("/tattoos", validateTattoo, tattooControllers.add);
// router.put("/tattoos/:id", validateTattoo, tattooControllers.edit);
// router.delete("/tattoos/:id", tattooControllers.destroy);

const artistControllers = require("./controllers/artistControllers");
// const validateArtist = require("./validators/validateArtist");

router.get("/artists", artistControllers.browse);
router.get("/artists/:id", artistControllers.read);
// router.post("/artists", validateArtist, artistControllers.add);
// router.put("/artists/:id", validateArtist, artistControllers.edit);
// router.delete("/artists/:id", artistControllers.destroy);

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
