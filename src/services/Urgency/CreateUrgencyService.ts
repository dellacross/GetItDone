import prismaClient from "../../prisma";

interface UrgencyRequest {
    name: string;
    backgroundColor: string,
    textColor: string;
}

class CreateUrgencyService {
    async execute({ name, backgroundColor, textColor }: UrgencyRequest) {
        const urgency = await prismaClient.urgency.create({
            data: {
                name: name,
                backgroundColor: backgroundColor,
                textColor: textColor
            }
        });

        return urgency;
    }
}

export { CreateUrgencyService }