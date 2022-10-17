// build your `Project` model here
const db = require('../../data/dbConfig')

function find() {
    return db('projects');
}

async function add(project) {
    const [project_id] = await db('projects').insert(project)
    return find().where({ project_id }).first();
}

module.exports = { 
    find,
    add
}