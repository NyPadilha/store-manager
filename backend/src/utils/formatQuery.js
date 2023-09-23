const snakeize = require('snakeize');

const formatPlaceholder = (obj) => Object.keys(obj).map(() => '?').join(', ');
const formatColumns = (obj) => Object.keys(snakeize(obj)).join(', ');
const formatUpdate = (obj) => Object.keys(snakeize(obj)).map((key) => `${key} = ?`).join(', ');

module.exports = {
    formatPlaceholder,
    formatColumns,
    formatUpdate,
};