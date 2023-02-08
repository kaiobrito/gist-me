import { UsersFilters, UserSearchResponse } from "./types";

async function request<Response>(
  url: string,
  params?: Record<string, any>
): Promise<Response> {
  const queryParams = new URLSearchParams(params);
  const response = await fetch(`${url}?${queryParams.toString()}`);
  if (response.ok) {
    return response.json();
  }
  throw response;
}

const getUsers = (filters: UsersFilters) =>
  request<UserSearchResponse>("/api/users", filters);

const getUserGists = (username: string) =>
  request<UserSearchResponse>(`/api/users/${username}`);

export default {
  getUsers,
  getUserGists,
};
