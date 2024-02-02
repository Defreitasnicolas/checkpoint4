// Import access to database tables
const tables = require("../tables");

// // The B of BREAD - Browse (Read All) operation
// const browse = async (req, res, next) => {
//   try {
//     // Fetch all tattoos from the database
//     const tattoos = await tables.tattoo.readAll();

//     // Respond with the tattoos in JSON format
//     res.status(200).json(tattoos);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

const browse = async (req, res, next) => {
  try {
    let tattoo = [];
    if (req.query.search) {
      tattoo = await tables.tattoo.searchByTattoosName(req.query.search);
    } else {
      // Fetch all items from the database
      tattoo = await tables.tattoo.readAll();
    }
    // Respond with the items in JSON format
    res.status(200).json(tattoo);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific tattoo from the database based on the provided ID
    const tattoo = await tables.tattoo.read(req.params.id);

    // If the tattoo is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the tattoo in JSON format
    if (tattoo == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(tattoo);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// // The E of BREAD - Edit (Update) operation
// // This operation is not yet implemented
// const edit = async (req, res, next) => {
//   // Extract the tattoo data from the request body
//   const tattoo = req.body;

//   try {
//     // Insert the tattoo into the database
//     await tables.tattoo.update(tattoo, req.params.id);

//     // Respond with HTTP 204 (No Content)
//     res.sendStatus(204);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// // The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the tattoo data from the request body
  const tattoo = req.body;
  try {
    // Insert the tattoo into the database
    const insertId = await tables.tattoo.create(tattoo);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted tattoo
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// // The D of BREAD - Destroy (Delete) operation
// // This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the tattoo data from the request body
  try {
    // Insert the tattoo into the database
    await tables.tattoo.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  destroy,
  // edit,
  add,
};
