import { Response, Request } from "express";
import { ListUrgencyService } from "../../services/Urgency/ListUrgencyService";

class ListUrgencyController {
  async handle(req: Request, res: Response) {
    const listUrgencyService = new ListUrgencyService();

    const urgencies = await listUrgencyService.execute();

    return res.json(urgencies);
  }
}

export { ListUrgencyController };