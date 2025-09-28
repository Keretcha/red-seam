/** @format */

import { getToken } from "@/shared/actions/user.actions";
import {
  IData,
  IPaginatedData,
} from "@/shared/api/types/interfaces/data.interface";
import { API_CONFIG } from "@/shared/config/config";

export const baseFetch = async <T, P extends boolean = false>(
  url: string,
  data?: RequestInit,
  isFormData = false
): Promise<P extends true ? IPaginatedData<T> : IData<T>> => {
  const accessToken = await getToken();

  const headers = {
    Accept: "application/json",
    ...(data?.headers ?? {}),
  };

  if (!isFormData) {
    Object.assign(headers, {
      "Content-Type": "application/json",
    });
  } else {
    Object.assign(headers, {
      "Content-Type": "multipart/form-data",
    });
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

  let body: { data?: T } = {};

  try {
    body = await res.json();
  } catch (e) {
    console.error(e);
  }

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
