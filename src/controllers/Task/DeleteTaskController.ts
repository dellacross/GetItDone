import { Request, Response } from "express";
import { DeleteTaskService } from "../../services/Task/DeletaTaskService";

class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.body

    const deleteTask = new DeleteTaskService()

    const task = await deleteTask.execute({ id })

    return res.json({
        message: 'Task deleted successfully',
        task: task
    })
  }
}

export { DeleteTaskController }