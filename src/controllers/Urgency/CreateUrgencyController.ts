import { Request, Response } from "express";
import { CreateUrgencyService } from "../../services/Urgency/CreateUrgencyService";

class CreateUrgencyController {
  async handle(req: Request, res: Response) {
    const { name, backgroundColor, textColor } = req.body;

    if (!name) return res.status(400).json({ error: "Name is required" });
    if (!backgroundColor) return res.status(400).json({ error: "BackgroundColor is required" });
    if (!textColor) return res.status(400).json({ error: "TextColor is required" });

    const createUrgency = new CreateUrgencyService()

    const urgency = await createUrgency.execute({ name, backgroundColor, textColor });

    return res.json({
      message: "Urgency created successfully",
      urgency: urgency
    });
  }
}

export { CreateUrgencyController }