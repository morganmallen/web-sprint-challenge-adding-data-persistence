const projects = [
    { project_id: 1, project_name: 'World Domination', project_description: 'number1', project_completed: 0 },
    { project_id: 2, project_name: 'Get Rich Quick', project_description: 'number2', project_completed: 1 },
    { project_id: 3, project_name: 'Revenge', project_description: 'number3', project_completed: 0 },
    { project_id: 4, project_name: 'More Instagram Followers', project_description: 'number4', project_completed: 1 },
    { project_id: 5, project_name: 'Find the Holy Grail', project_description: 'number5', project_completed: 0 },
    { project_id: 6, project_name: 'Steal Coworker\'s Identity', project_description: 'number6', project_completed: 1 },
    { project_id: 7, project_name: 'Have fun!', project_description: 'number7', project_completed: 0 },
  ]
  
  exports.projects = projects
  
  exports.seed = function (knex) {
    return knex('projects').insert(projects)
  }