import { useQuery } from "react-query";
import { UsersFilters } from "./types";
import client from "./client";

export const useUsers = (filters: UsersFilters) => {
  return useQuery(
    ["users", JSON.stringify(filters)],
    () => client.getUsers(filters),
    {
      enabled: filters.q.length > 0,
    }
  );
};
