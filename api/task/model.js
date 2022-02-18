// build your `Task` model here
const db = require('../../data/dbConfig')

const get = async () => {
    const data = await db('tasks')
    
    return data
}

const post = async (task) => {
    await db('tasks').insert(task)
    
    return
}

module.exports = {
    get,
    post,
}