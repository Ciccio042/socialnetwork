import { Request, Response } from 'express';
import { PostService } from '../services/post.service';

export class PostController {
    private postService = new PostService();

    async createPost(req: Request, res: Response) {
        const { content } = req.body;
        const post = await this.postService.createPost({ content, authorId: req.userId });
        res.status(201).json(post);
    }

    async getPosts(req: Request, res: Response) {
        const posts = await this.postService.getPosts();
        res.json(posts);
    }
}
