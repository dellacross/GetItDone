import prismaClient from "../../prisma";

interface TaskRequest {
    description: string;
    urgencyId: number;
    deadline: Date;
    id: string;
}

class UpdateTaskService {
    async execute({ id, description, urgencyId, deadline }: TaskRequest) {
        const task = await prismaClient.task.update({
            where: {
                id: id
            },
            data: {
                description: description,
                urgencyId: urgencyId,
                deadline: deadline
            }
        })

        if(!task) throw new Error('Task not found')

        return task
    }
}

export { UpdateTaskService }