import express from "express"
const router = express.Router()

router.use('/user',require('../controllers/User'))
module.exports = router