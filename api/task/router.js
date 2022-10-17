// build your `/api/tasks` router here

const express = require('express')
const router = express.Router()
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.find()
    .then(tasks => {
      tasks.forEach((task) => task.task_completed === 0 ? task.task_completed = false : task.task_completed = true);
      return res.json(tasks)
  })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const task = req.body
    Tasks.add(task)
    .then(task => {
        task.task_completed === 0 ? task.task_completed = false : task.task_completed = true;
        return res.json(task);
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Problem in the tasks router',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router
