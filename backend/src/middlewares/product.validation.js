const mapStatusHTTP = require('../utils/mapStatusHTTP');

const productValidation = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(mapStatusHTTP('BAD_REQUEST'))
            .json({ message: '"name" is required' });
    }
    return next();
};

module.exports = {
    productValidation,
};