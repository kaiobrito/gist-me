// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserSearchResponse, UsersFilters } from "@/networking/types";
import client from "@/networking/octokit";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserSearchResponse>
) {
  const filters: UsersFilters = {
    q: "",
    ...req.query,
  };
  res.status(200).json(await client.rest.search.users(filters));
}
