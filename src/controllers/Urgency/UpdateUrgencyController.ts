import { Request, Response } from "express";
import { UpdateUrgencyService } from "../../services/Urgency/UpdateUrgencyService";

class UpdateUrgencyController {
  async handle(req: Request, res: Response) {
    const { id, name, backgroundColor, textColor } = req.body;

    const updateUrgencyService = new UpdateUrgencyService()

    const urgency = await updateUrgencyService.execute({ id, name, backgroundColor, textColor });

    if(!urgency) throw new Error('Urgency not found');

    return res.json({
        message: "Urgency updated successfully",
        urgency: urgency
    });
  }
}

export { UpdateUrgencyController }