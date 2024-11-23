import prismaClient from "../../prisma";

interface TaskRequest {
    id: string
}

class DeleteTaskService {
    async execute({ id }: TaskRequest) {
        const task = await prismaClient.task.delete({
            where: {
                id: id
            }
        })
        
        if(!task) throw new Error('Task not found')

        return task
    }
}

export { DeleteTaskService }