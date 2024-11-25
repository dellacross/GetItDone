import prismaClient from "../../prisma";

class ListUrgencyService {
  async execute() {
    const urgencies = await prismaClient.urgency.findMany();

    return urgencies;
  }
}

export { ListUrgencyService };