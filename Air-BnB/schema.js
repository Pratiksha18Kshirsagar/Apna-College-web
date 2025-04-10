const Joi = require("joi");

const listingSchema = Joi.object({
    title: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.string().allow("",null)
})

module.exports.listingSchema = listingSchema; // export the schema