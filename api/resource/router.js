// build your `/api/resources` router here
const express =  require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const data = await Resource.get()
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const newResource = await Resource.post(req.body)
        res.json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router