/** @format */

"use server";

import { cookies } from "next/headers";
import { authService } from "../services/auth.service";
import { IUser } from "../types/interfaces/user.interface";
import { redirect } from "next/navigation";
import { IAuthResponse } from "../types/interfaces/auth-response.interface";
import { IRegisterRequest } from "../types/interfaces/register-request.interface";

export const login = async (email: string, password: string) => {
  const res = await authService.login(email, password);

  if (res.data) {
    return handleAuthResponse(res.data);
  }

  return res;
};

export const register = async (body: IRegisterRequest) => {
  const res = await authService.register(body);

  if (res.ok) {
    return handleAuthResponse(res.data);
  }

  return res;
};

const handleAuthResponse = async (authResp: IAuthResponse) => {
  await Promise.all([setUser(authResp.user), setToken(authResp.token)]);
  redirect("/");
};

const setUser = async (user: IUser) => {
  const cookiesStore = await cookies();

  cookiesStore.set("user", JSON.stringify(user), {
    httpOnly: true,
  });
};

const setToken = async (token: string) => {
  const cookiesStore = await cookies();
  cookiesStore.set("token", token);
};

export const getUser = async (): Promise<IUser | null> => {
  const cookiesStore = await cookies();
  const userString = cookiesStore.get("user")?.value;
  if (!userString) return null;

  return JSON.parse(decodeURIComponent(userString)) as IUser;
};

export const getToken = async (): Promise<string | null> => {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  return token?.value ?? null;
};
