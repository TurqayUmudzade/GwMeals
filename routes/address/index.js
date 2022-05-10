const express = require('express')
const router = express.Router()
const { Address } = require('../../models')

router.get('/', async (req, res, next) => {

    try {
        res.json(await Address.findAll());
    } catch (err) {
        console.error(`Error while getting address`, err.message);
        next(err);
    }

})

router.post('/', async (req, res, next) => {

    try {
        const { street, userId } = req.body
        let adress = await Adress.create({ street, userId })
        return res.json(adress);

    } catch (err) {
        console.error(`Error while getting adress`, err.message);
        next(err);
    }

})

module.exports = router