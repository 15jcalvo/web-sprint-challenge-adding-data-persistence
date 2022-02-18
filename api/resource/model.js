// build your `Resource` model here
const db = require('../../data/dbConfig')

const get = async () => {
    const data = await db('resources')
    
    return data
}

const post = async (resource) => {
    await db('resources').insert(resource)
    
    return
}

module.exports = {
    get,
    post,
}