import { Response, Request } from "express";
import { ListTasksService } from "../../services/Task/ListTasksService";

class ListTaskController {
  async handle(req: Request, res: Response) {
    const listTaskService = new ListTasksService();

    const tasks = await listTaskService.execute();

    return res.json(tasks);
  }
}

export { ListTaskController };