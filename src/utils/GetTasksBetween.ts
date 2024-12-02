import { Task } from "@prisma/client";

interface DatesRequest {
    startDate: string;
    endDate: string;
}

export const GetTasksBetween = ({ startDate, endDate }: DatesRequest, tasks: Task[]) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return tasks.filter((task) => {
        const taskDate = new Date(task.deadline);
        return taskDate >= start && taskDate <= end;
    })
}