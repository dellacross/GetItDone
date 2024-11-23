import prismaClient from "../../prisma";

interface TaskRequest {
    description: string;
    urgencyId: number;
    deadline: Date;
}

class CreateTaskService {
    async execute({ description, urgencyId, deadline }: TaskRequest) {
        const task = await prismaClient.task.create({
            data: {
                description: description,
                urgencyId: urgencyId,
                deadline: deadline
            }
        })

        return task
    }
}

export { CreateTaskService }