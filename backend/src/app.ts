import express from 'express';
import dotenv from 'dotenv';
import { AuthController } from './controllers/auth.controller';
import { PostController } from './controllers/post.controller';
import { UserController } from './controllers/user.controller';
import { authMiddleware } from './middleware/auth.middleware';
import { rateLimiter } from './middleware/rateLimit.middleware';
import { errorMiddleware } from './middleware/error.middleware';
import logger from './config/logger.config';

dotenv.config();

const app = express();
app.use(express.json());
app.use(rateLimiter);

const authController = new AuthController();
const postController = new PostController();
const userController = new UserController();

app.post('/register', authController.register.bind(authController));
app.post('/login', authController.login.bind(authController));
app.post('/posts', authMiddleware, postController.createPost.bind(postController));
app.get('/posts', postController.getPosts.bind(postController));
app.get('/user', authMiddleware, userController.getUser.bind(userController));

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
