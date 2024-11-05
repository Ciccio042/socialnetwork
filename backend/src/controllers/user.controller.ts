import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
    private userService = new UserService();

    async getUser(req: Request, res: Response) {
        const user = await this.userService.getUserById(req.userId);
        res.json(user);
    }
}
