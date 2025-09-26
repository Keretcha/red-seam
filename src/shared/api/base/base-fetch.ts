/** @format */

import {
  IData,
  IPaginatedData,
} from "@/shared/api/types/interfaces/data.interface";
import { API_CONFIG } from "@/shared/config/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const baseFetch = async <T, P extends boolean = false>(
  url: string,
  data?: RequestInit,
  isFormData = false
): Promise<P extends true ? IPaginatedData<T> : IData<T>> => {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;

  const headers = {
    ...(data?.headers ?? {}),
  };

  if (!isFormData) {
    Object.assign(headers, {
      "Content-Type": "application/json",
    });
  } else {
    Object.assign(headers, {
      "Content-Type": "multipart/form-data",
    })
  }

  if (accessToken) {
    Object.assign(headers, {
      Authorization: `Bearer ${accessToken}`,
    });
  }

  const res = await fetch(`${API_CONFIG.baseUrl}/${url}`, {
    ...(data ?? {}),
    headers,
  });

  if (res.status === 401 && accessToken) {
    return redirect("/logout");
  }

  let body: { data?: T } = {};

  try {
    body = await res.json();
  } catch (e) {
    console.error(e);
  }

  console.log(res, 'base-res')

  let returnable = {
    ok: res.ok,
  };

  if (!body["data"]) {
    Object.assign(returnable, {
      data: body,
    });
  } else {
    returnable = { ...returnable, ...body };
  }

  return returnable as P extends true ? IPaginatedData<T> : IData<T>;
};
