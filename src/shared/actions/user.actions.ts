/** @format */

"use server";

import { cookies } from "next/headers";
import { authService } from "../services/auth.service";
import { IUser } from "../types/interfaces/user.interface";
import { redirect } from "next/navigation";

export const login = async (email: string, password: string) => {
  const res = await authService.login(email, password);

  if (res.data) {
    await Promise.all([setUser(res.data.user), setToken(res.data.token)]);
    redirect("/");
    return;
  }

  return res;
};

const setUser = async (user: IUser) => {
  const cookiesStore = await cookies();
  console.log(JSON.stringify(user));

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
