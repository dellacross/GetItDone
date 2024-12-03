import prismaClient from "../src/prisma";
import { CreateTaskService } from "../src/services/Task/CreateTaskService";
import { CreateTaskController } from "../src/controllers/Task/CreateTaskController";
import { Request, Response } from "express";

jest.mock("../../prisma", () => ({
    task: {
        create: jest.fn(),
    },
}));

describe("CreateTaskService", () => {
    it("should create a task successfully", async () => {
        const service = new CreateTaskService();

        const mockTask = {
            id: 1,
            description: "Test Task",
            urgencyId: 2,
            deadline: "2024-12-10",
        };

        // Mock implementation for prismaClient.task.create
        prismaClient.task.create.mockResolvedValue(mockTask);

        const result = await service.execute({
            description: "Test Task",
            urgencyId: 2,
            deadline: "2024-12-10",
            groupId: "1"
        });

        expect(result).toEqual(mockTask);
        expect(prismaClient.task.create).toHaveBeenCalledWith({
            data: {
                description: "Test Task",
                urgencyId: 2,
                deadline: "2024-12-10",
                groupId: "1"
            },
        });
    });

    it("should throw an error when prismaClient fails", async () => {
        const service = new CreateTaskService();

        prismaClient.task.create.mockRejectedValue(new Error("Database error"));

        await expect(
            service.execute({
                description: "Test Task",
                urgencyId: 2,
                deadline: "2024-12-10",
                groupId: "1"
            })
        ).rejects.toThrow("Database error");
    });
});

jest.mock("../../services/Task/CreateTaskService");

describe("CreateTaskController", () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;
    let createTaskService: CreateTaskService;

    beforeEach(() => {
        mockRequest = {
            body: {
                description: "Test Task",
                urgencyId: 2,
                deadline: "2024-12-10",
                groupId: "1"
            },
        };

        mockResponse = {
            json: jest.fn(),
        };

        createTaskService = new CreateTaskService();
        jest.clearAllMocks();
    });

    it("should return 200 and the created task", async () => {
        const mockTask = {
            id: 1,
            description: "Test Task",
            urgencyId: 2,
            deadline: "2024-12-10",
            groupId: "1"
        };

        (createTaskService.execute as jest.Mock).mockResolvedValue(mockTask);

        const controller = new CreateTaskController();
        await controller.handle(mockRequest as Request, mockResponse as Response);

        expect(createTaskService.execute).toHaveBeenCalledWith({
            description: "Test Task",
            urgencyId: 2,
            deadline: "2024-12-10",
            groupId: "1"
        });

        expect(mockResponse.json).toHaveBeenCalledWith({
            message: "Task created successfully",
            task: mockTask,
        });
    });

    it("should handle errors gracefully", async () => {
        (createTaskService.execute as jest.Mock).mockRejectedValue(
            new Error("Service error")
        );

        const controller = new CreateTaskController();

        await expect(
            controller.handle(mockRequest as Request, mockResponse as Response)
        ).rejects.toThrow("Service error");

        expect(mockResponse.json).not.toHaveBeenCalled();
    });
});
