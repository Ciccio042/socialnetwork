import prisma from '../config/db.config';

export class UserModel {
    static async createUser(data: { username: string; email: string; password: string }) {
        return await prisma.user.create({ data });
    }

    static async findByEmail(email: string) {
        return await prisma.user.findUnique({ where: { email } });
    }

    static async getUserById(id: number) {
        return await prisma.user.findUnique({ where: { id } });
    }
}
