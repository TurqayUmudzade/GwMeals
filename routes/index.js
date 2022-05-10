const express = require('express')
const user = require('./user')
const address = require('./address')
const menu = require('./menu')
const router = express.Router()

router.use('/users', user)
router.use('/address', address)
router.use('/menus', menu)

module.exports = router