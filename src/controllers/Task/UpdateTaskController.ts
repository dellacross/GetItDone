import { Request, Response } from "express";
import { UpdateTaskService } from "../../services/Task/UpdateTaskService";

class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const { id, description, urgencyId, deadline } = req.body;

    const updateTaskService = new UpdateTaskService();

    const task = await updateTaskService.execute({ id, description, urgencyId, deadline });

    return res.json({
      message: "Task updated successfully",
      task: task
    });
  }
}

export { UpdateTaskController }