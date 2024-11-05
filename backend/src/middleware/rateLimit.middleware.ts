import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minuti
    max: 100, // Limita a 100 richieste per finestra
    message: 'Troppe richieste dal tuo IP, riprova più tardi.'
});
