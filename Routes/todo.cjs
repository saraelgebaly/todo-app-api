const Router = require('express')
const todoController = require('../Controller/todo.cjs')

const router = Router.Router()

router.post('/', todoController.addNewItem)
router.get('/',todoController.getAllItems)
router.put('/:id',todoController.updateItem)
router.delete('/:id',todoController.deleteItem)

module.exports = router