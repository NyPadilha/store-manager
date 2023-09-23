const snakeize = require('snakeize');

const formatPlaceholder = (obj) => Object.keys(obj).map(() => '?').join(', ');
const formatColumns = (obj) => Object.keys(snakeize(obj)).join(', ');

module.exports = {
    formatPlaceholder,
    formatColumns,
};