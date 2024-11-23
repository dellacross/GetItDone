import { Router } from 'express'
import { CreateTaskController } from './controllers/Task/CreateTaskController'
import { DeleteTaskController } from './controllers/Task/DeleteTaskController'
import { UpdateTaskController } from './controllers/Task/UpdateTaskController'

const router = Router()

//task routes
router.post('/createtask', new CreateTaskController().handle)
router.delete('/deletetask', new DeleteTaskController().handle)
router.put('/updatetask', new UpdateTaskController().handle)

export { router }