const mapStatusHTTP = require('../utils/mapStatusHTTP');

const salesValidation = (req, res, next) => {
    const { body } = req;
    const missingFields = body.reduce((_acc, { productId, quantity }) => {
        let field;
        if (typeof productId === 'undefined') field = 'productId';
        if (typeof quantity === 'undefined') field = 'quantity';
        return field;
    }, undefined);

    if (missingFields) {
        return res.status(mapStatusHTTP('BAD_REQUEST'))
            .json({ message: `"${missingFields}" is required` });
    }

    return next();
};

module.exports = {
    salesValidation,
};