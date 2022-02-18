// build your `Project` model here
const db = require('../../data/dbConfig')

const get = async () => {
    const data = await db('projects')
    
    return data
}

const post = async (project) => {
    await db('projects').insert(project)
    
    return
}

module.exports = {
    get,
    post,
}