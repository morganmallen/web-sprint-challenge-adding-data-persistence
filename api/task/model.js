// build your `Task` model here

const db = require('../../data/dbConfig')

function find() {
    return db('tasks as t')
        .leftJoin('projects as p', 'p.project_id', 't.project_id')
        .select('t.*', 'project_name', 'project_description')
}


async function add(project) {
    const [task_id] = await db('tasks').insert(project)
    return find().where({ task_id }).first();
}

module.exports = { 
    find,
    add
}