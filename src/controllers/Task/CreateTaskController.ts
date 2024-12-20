import { Request, Response } from "express";
import { CreateTaskService } from "../../services/Task/CreateTaskService";

class CreateTaskController {
    async handle(req: Request, res: Response) {
        const { description, urgencyId, deadline, categoryId, groupId } = req.body;

        const createTaskService = new CreateTaskService();

        const task = await createTaskService.execute({ description, urgencyId, deadline,
            categoryId, groupId
         });

        return res.json({
            message: "Task created successfully",
            task: task
        });
    }
}

export { CreateTaskController }