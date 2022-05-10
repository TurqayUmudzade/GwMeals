const express = require('express')
const router = express.Router()
const { User } = require('../../models')

router.get('/', async (req, res, next) => {

    try {
        return res.json(await User.findAll());
    } catch (err) {
        console.error(`Error while getting user`, err.message);
        next(err);
    }

})


router.post('/', async (req, res, next) => {

    try {
        const { username, email, phone_number, password } = req.body
        let user = await User.create({ username, email, phone_number, password })
        return res.json(user);

    } catch (err) {
        console.error(`Error while getting user`, err.message);
        next(err);
    }

})

module.exports = router