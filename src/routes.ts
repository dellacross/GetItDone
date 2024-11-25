import { Router } from 'express'
import { CreateTaskController } from './controllers/Task/CreateTaskController'
import { DeleteTaskController } from './controllers/Task/DeleteTaskController'
import { UpdateTaskController } from './controllers/Task/UpdateTaskController'
import { CreateUrgencyController } from './controllers/Urgency/CreateUrgencyController'
import { UpdateUrgencyController } from './controllers/Urgency/UpdateUrgencyController'
import { DeleteUrgencyController } from './controllers/Urgency/DeleteUrgencyController'
import { ListUrgencyController } from './controllers/Urgency/ListUrgencyController'
import { ListTaskController } from './controllers/Task/ListTaskController'

const router = Router()

//task routes
router.post('/createtask', new CreateTaskController().handle)
router.delete('/deletetask', new DeleteTaskController().handle)
router.put('/updatetask', new UpdateTaskController().handle)
router.get('/listtasks', new ListTaskController().handle)

//urgency routes
router.post('/createurgency', new CreateUrgencyController().handle)
router.put('/updateurgency', new UpdateUrgencyController().handle)
router.delete('/deleteurgency', new DeleteUrgencyController().handle)
router.get('/listurgencies', new ListUrgencyController().handle)

export { router }