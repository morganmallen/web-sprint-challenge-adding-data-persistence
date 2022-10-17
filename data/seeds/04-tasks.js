const tasks = [
    { task_id: 1, task_notes: 'scott', task_description: 'number21', task_completed: false, project_id: 1 },
    { task_id: 2, task_notes: 'kaori', task_description: 'number22', task_completed: true, project_id: 2 },
    { task_id: 3, task_notes: 'brandon', task_description: 'number23', task_completed: true, project_id: 3 },
    { task_id: 4, task_notes: 'austin', task_description: 'number24', task_completed: false, project_id: 4 },
    { task_id: 5, task_notes: 'christian', task_description: 'number25', task_completed: false, project_id: 5 },
    { task_id: 6, task_notes: 'maryanne', task_description: 'number26', task_completed: false, project_id: 6 },
    { task_id: 7, task_notes: 'morgan', task_description: 'number27', task_completed: true, project_id: 7 },
  ]
  
  exports.tasks = tasks
  
  exports.seed = function (knex) {
    return knex('tasks').insert(tasks)
  }