import express from 'express'

var router = express.Router()
router.use("/api/v1",require('./router'))

module.exports = router