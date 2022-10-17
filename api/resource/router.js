// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.find()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const resource = req.body

    Resources.add(resource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Problem in the resources router',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router
