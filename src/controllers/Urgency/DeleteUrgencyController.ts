import { Request, Response } from "express";
import { DeleteUrgencyService } from "../../services/Urgency/DeleteUrgencyService";


class DeleteUrgencyController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const deleteUrgencyService = new DeleteUrgencyService();

    const urgency = await deleteUrgencyService.execute({ id });

    if(!urgency) throw new Error('Urgency not found')

    return res.json({
        message: 'Urgency deleted successfully',
        urgency: urgency
    })
  }
}

export { DeleteUrgencyController }