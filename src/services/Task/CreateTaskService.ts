import prismaClient from "../../prisma";

interface TaskRequest {
    description: string;
    urgencyId: number;
    deadline: string;
    categoryId: string;
    groupId: string;
}

class CreateTaskService {
    async execute({ description, urgencyId, deadline, categoryId, groupId }: TaskRequest) {
        const task = await prismaClient.task.create({
            data: {
                description: description,
                urgencyId: urgencyId,
                deadline: deadline,
                categoryId: categoryId,
                groupId: groupId
            }
        })

        return task
    }
}

export { CreateTaskService }