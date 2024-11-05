import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export class AuthController {
    private userService = new UserService();

    async register(req: Request, res: Response) {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userService.createUser({ username, email, password: hashedPassword });
        res.status(201).json(user);
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = await this.userService.findByEmail(email);

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
}
