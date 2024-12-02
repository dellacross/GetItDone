import { Task } from "@prisma/client";

interface CategoryRequest {
    id: string;
}

export const GetTasksOfCategory = ({ id }: CategoryRequest, tasks: Task[]) => {
    const amount = tasks.filter(task => task.categoryId === id).length;

    return amount;
}