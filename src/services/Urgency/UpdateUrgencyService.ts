import prismaClient from "../../prisma";

interface UrgencyRequest {
    id: number;
    name: string;
    backgroundColor: string,
    textColor: string;
}

class UpdateUrgencyService {
    async execute({ id, name, backgroundColor, textColor }: UrgencyRequest) {
        const urgency = await prismaClient.urgency.update({
            where: {
                id: id
            },
            data: {
                name: name,
                backgroundColor: backgroundColor,
                textColor: textColor
            }
        });

        return urgency;
    }
}

export { UpdateUrgencyService }