const express = require('express')
const router = express.Router()
const { Menu } = require('../../models')

router.get('/', async (req, res, next) => {
    const menus = await Menu.findAll()
    res.json(menus);

})

router.post('/', async (req, res, next) => {

    try {
        const { mealName, price, is_available } = req.body
        let menu = await Menu.create({ mealName, price, is_available })
        return res.json(menu);

    } catch (err) {
        console.error(`Error while getting menu`, err.message);
        next(err);
    }

})

module.exports = router