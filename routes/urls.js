const route = require('express').Router();
const { handleUrl, saveUrl, visitUrl } = require('../controllers/urls');

route.get('/', handleUrl)
route.get('/:url', visitUrl)
route.post('/', saveUrl)

route.get()

module.exports = route