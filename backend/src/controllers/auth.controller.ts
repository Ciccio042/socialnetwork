import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export class AuthController {
    private userService = new UserService();

    async register(req: Request, res: Response) {
        try {
            const { username, email, password } = req.body;

            // Hashing della password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Creazione dell'utente
            const user = await this.userService.createUser({ username, email, password: hashedPassword });

            // Risposta con lo stato 201 (creato) e i dati dell'utente
            res.status(201).json(user);
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ message: 'Server error during registration' });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await this.userService.findByEmail(email);

            // Controllo se l'utente esiste e confronto delle password
            if (user && bcrypt.compareSync(password, user.password)) {
                // Generazione del token JWT
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ message: 'Server error during login' });
        }
    }
}

