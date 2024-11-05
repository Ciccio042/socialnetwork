export class UserService {
    async createUser(data: { username: string, email: string, password: string }) {
        // Logica per creare un nuovo utente nel database
    }

    //

    import { User } from '../models/user.model'; // Importa il modello User

    export class UserService {
    async findByEmail(email: string): Promise<User | null> {
        const user = await User.findOne({ where: { email } }); // Trova l'utente per email
        return user; // Restituisce l'utente o null se non trovato
    }

    async createUser(userData: { username: string; email: string; password: string }): Promise<User> {
        return await User.create(userData); // Crea e restituisce il nuovo utente
    }
}


    //

    async getUserById(id: number) {
        // Logica per ottenere un utente per ID
    }
}
