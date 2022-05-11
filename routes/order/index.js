const express = require("express")
const router = express.Router()
const { Order, Menu, MenuOrder, Payment, Address } = require("../../models")

router.get("/", async (req, res, next) => {
  try {
    return res.json(await Order.findAll())
  } catch (err) {
    console.error(`Error while getting order`, err.message)
    next(err)
  }
})

router.get("/me", async (req, res, next) => {
  try {
    return res.json(
      await Order.findAll({
        where: {
          user_id: 1,
        },
        include: [
          Payment,
          Address,
          {
            model: Menu,
            through: { attributes: ["quantity"] },
          },
        ],
      })
    )
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
      items,
    } = req.body

    let order = await Order.create({
      order_status,
      user_id,
      payment_id,
      address_id,
      ordertype_id,
    })

    let out = []
    for (const item of items) {
      let menuOrder = await MenuOrder.create({
        order_id: order.id,
        menu_id: item.menu_id,
        quantity: item.quantity,
      })
      out.push(menuOrder)
    }
    return res.json({ order, out })
  } catch (err) {
    console.error(`Error while getting order`, err.message)
    next(err)
  }
})

module.exports = router
