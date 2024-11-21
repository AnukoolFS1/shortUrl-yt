const route = require('express').Router();
const { handleUrl, saveUrl } = require('../controllers/urls');

route.get('/', handleUrl)
route.post('/', saveUrl)

module.exports = route