import { useQuery } from "react-query";

import client from "./client";

export const useGists = (username: string) => {
  return useQuery(["gists", username], () => client.getUserGists(username), {
    enabled: username.length > 0,
  });
};
