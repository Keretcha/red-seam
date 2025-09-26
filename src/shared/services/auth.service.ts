import { baseFetch } from "../api/base/base-fetch";
import { IAuthResponse } from "../types/interfaces/auth-response.interface";

class AuthService {
    public async login(email: string, password: string) {
        return await baseFetch<IAuthResponse>("login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        })
    }
}

export const authService = new AuthService();