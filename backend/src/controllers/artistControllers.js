// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all artists from the database
    const artists = await tables.artist.readAll();

    // Respond with the artists in JSON format
    res.status(200).json(artists);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific artist from the database based on the provided ID
    const artist = await tables.artist.read(req.params.id);

    // If the artist is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the artist in JSON format
    if (artist == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(artist);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// // The E of BREAD - Edit (Update) operation
// // This operation is not yet implemented
// const edit = async (req, res, next) => {
//   // Extract the artist data from the request body
//   const artist = req.body;

//   try {
//     // Insert the artist into the database
//     await tables.artist.update(artist, req.params.id);

//     // Respond with HTTP 204 (No Content)
//     res.sendStatus(204);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// // The A of BREAD - Add (Create) operation
// const add = async (req, res, next) => {
//   // Extract the artist data from the request body
//   const artist = req.body;

//   try {
//     // Insert the artist into the database
//     const insertId = await tables.artist.create(artist);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted artist
//     res.status(201).json({ ...req.body, id: insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// // The D of BREAD - Destroy (Delete) operation
// // This operation is not yet implemented
// const destroy = async (req, res, next) => {
//   // Extract the artist data from the request body
//   try {
//     // Insert the artist into the database
//     await tables.artist.delete(req.params.id);

//     // Respond with HTTP 204 (No Content)
//     res.sendStatus(204);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  // add,
  // destroy,
};
