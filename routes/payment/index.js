const express = require("express")
const router = express.Router()
const { Payment } = require("../../models")

router.get("/", async (req, res, next) => {
    try {
        return res.json(await Payment.findAll())
    } catch (err) {
        console.error(`Error while getting payment`, err.message)
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { amount } = req.body
        let payment = await Payment.create({
            amount,
        })
        return res.json(payment)
    } catch (err) {
        console.error(`Error while getting payment`, err.message)
        next(err)
    }
})

module.exports = router
