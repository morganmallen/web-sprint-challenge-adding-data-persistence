// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const Projects = require('./model')

router.get('/', (req, res, next) => {
    Projects.find()
        .then(projects => {
            projects.forEach((project) => project.project_completed === 0 ? project.project_completed = false : project.project_completed = true);
            return res.json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const project = req.body
    Projects.add(project)
    .then(project => {
        project.project_completed === 0 ? project.project_completed = false : project.project_completed = true;
        return res.json(project);
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Problem in the projects router',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router