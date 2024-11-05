import prisma from '../config/db.config';

export class PostModel {
    static async createPost(data: { content: string; authorId: number }) {
        return await prisma.post.create({ data });
    }

    static async getPosts() {
        return await prisma.post.findMany({ include: { author: true } });
    }
}
