const express = require('express')
const user = require('./user')
const address = require('./address')
const router = express.Router()

router.use('/users', user)
router.use('/address', address)

module.exports = router