const express = require("express")
const user = require("./user")
const address = require("./address")
const menu = require("./menu")
const order = require("./order")
const ordertype = require("./ordertype")
const payment = require("./payment")
const router = express.Router()

router.use("/users", user)
router.use("/addresses", address)
router.use("/menus", menu)
router.use("/ordertypes", ordertype)
router.use("/payments", payment)
router.use("/orders", order)

module.exports = router
