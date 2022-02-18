// build your `/api/tasks` router here
const express =  require('express')
const Task = require('./model')
const router = express.Router()
const { checkProjectId } = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
        const data = await Task.get()
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.post('/', checkProjectId, async (req, res, next) => {
    try{
        const newTask = await Task.post(req.body)
        res.json(newTask)
    } catch (err) {
        next(err)
    }
})

module.exports = router