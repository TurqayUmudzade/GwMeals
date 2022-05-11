const express = require("express")
const router = express.Router()
const { Order } = require("../../models")

router.get("/", async (req, res, next) => {
  try {
    return res.json(await Order.findAll())
  } catch (err) {
    console.error(`Error while getting order`, err.message)
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const {
      order_status,
      user_id,
      payment_id,
      address_id,
      ordertype_id,
    } = req.body

    let order = await Order.create({
      order_status,
      user_id,
      payment_id,
      address_id,
      ordertype_id,
    })
    return res.json(order)
  } catch (err) {
    console.error(`Error while getting order`, err.message)
    next(err)
  }
})

module.exports = router
