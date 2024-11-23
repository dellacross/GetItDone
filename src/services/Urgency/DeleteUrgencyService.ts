import prismaClient from "../../prisma";

interface UrgencyRequest {
    id: number;
}

class DeleteUrgencyService {
    async execute({ id }: UrgencyRequest) {
        const urgency = await prismaClient.urgency.delete({
            where: {
                id: id
            }
        });

        if(!urgency) throw new Error('Urgency not found')

        return urgency;
    }
}

export { DeleteUrgencyService }