// build your `/api/projects` router here
const express =  require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const data = await Project.get()
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const newProject = await Project.post(req.body)
        res.json(newProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router