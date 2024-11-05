export class UserService {
    async createUser(data: { username: string, email: string, password: string }) {
        // Logica per creare un nuovo utente nel database
    }

    async findByEmail(email: string) {
        // Logica per trovare un utente in base all'email
    }

    async getUserById(id: number) {
        // Logica per ottenere un utente per ID
    }
}
