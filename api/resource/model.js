// build your `Resource` model here
const db = require('../../data/dbConfig')

function find() {
    return db('resources');
}

async function add(project) {
    const [resource_id] = await db('resources').insert(project)
    return find().where({ resource_id }).first();
}

module.exports = { 
    find,
    add
}