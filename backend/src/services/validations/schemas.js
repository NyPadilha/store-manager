const Joi = require('joi');

const salesSchema = Joi.array().items(Joi.object({
    productId: Joi.number().integer().min(1).required(),
    quantity: Joi.number().integer().min(1).required(),
}));

module.exports = {
    salesSchema,
};