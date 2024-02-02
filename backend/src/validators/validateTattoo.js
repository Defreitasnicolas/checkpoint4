const Joi = require("joi");

const getTattooSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    style: Joi.string().max(255).presence("required"),
    image: Joi.string().max(255).presence("required"),
    artist_id: Joi.number().presence("optional"),
  });
};

const validateTattoo = (req, res, next) => {
  const schema = getTattooSchema();

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

module.exports = validateTattoo;
