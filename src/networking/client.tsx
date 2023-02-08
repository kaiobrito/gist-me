import { UsersFilters, UserSearchResponse, UserGistsResponse } from "./types";

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
  request<UserGistsResponse>(`/api/users/${username}/gists`);

export default {
  getUsers,
  getUserGists,
};
