const Joi = require("joi");

const getArtistSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    name: Joi.string().max(255).presence("required"),
    speciality: Joi.string().max(255).presence("required"),
    biography: Joi.string().max(500).presence("required"),
    contact: Joi.string().max(255).presence("required"),
  });
};

const validateArtist = (req, res, next) => {
  const schema = getArtistSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateArtist;
