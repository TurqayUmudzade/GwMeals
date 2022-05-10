const express = require('express')
const router = express.Router()
const { OrderType } = require('../../models')

router.get('/', async (req, res, next) => {

    try {
        return res.json(await OrderType.findAll());
    } catch (err) {
        console.error(`Error while getting user`, err.message);
        next(err);
    }

})


router.post('/', async (req, res, next) => {

    try {
        const { name } = req.body
        let orderType = await OrderType.create({ name })
        return res.json(orderType);

    } catch (err) {
        console.error(`Error while getting user`, err.message);
        next(err);
    }

})

module.exports = router