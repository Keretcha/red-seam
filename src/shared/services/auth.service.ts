/** @format */

import { baseFetch } from "../api/base/base-fetch";
import { IAuthResponse } from "../types/interfaces/auth-response.interface";
import { IRegisterRequest } from "../types/interfaces/register-request.interface";

class AuthService {
  public async login(email: string, password: string) {
    return await baseFetch<IAuthResponse>("login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  public async register(data: IRegisterRequest) {
    const res = await baseFetch<IAuthResponse>(
      "register",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
    );

    return res;
  }
}

export const authService = new AuthService();
