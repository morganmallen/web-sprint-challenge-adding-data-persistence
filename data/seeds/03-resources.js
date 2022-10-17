const resources = [
    { resource_id: 1, resource_name: 'wood', resource_description: 'number11'},
    { resource_id: 2, resource_name: 'steal', resource_description: 'number12'},
    { resource_id: 3, resource_name: 'wheat', resource_description: 'number13'},
    { resource_id: 4, resource_name: 'men', resource_description: 'number14'},
    { resource_id: 5, resource_name: 'ore', resource_description: 'number15'},
    { resource_id: 6, resource_name: 'sheep', resource_description: 'number16'},
    { resource_id: 7, resource_name: 'brick', resource_description: 'number17'},
  ]
  
  exports.resources = resources

  exports.seed = function (knex) {
    return knex('resources').insert(resources)
  }