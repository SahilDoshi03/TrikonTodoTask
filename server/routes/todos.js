const express = require('express')
const router = express.Router()

const {
  getAlltodos,
  createtodo
} = require('../controllers/todos')

router.route('/getAllTodoCards').get(getAlltodos)
router.route("/addtodoCard").post(createtodo)

module.exports = router
