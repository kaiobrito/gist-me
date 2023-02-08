// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserSearchResponse, UsersFilters } from "@/networking/types";
import { Octokit } from "@octokit/rest";
import type { NextApiRequest, NextApiResponse } from "next";

const DEFAULT_PAT = process.env.GH_PAT!;

const octokit = new Octokit({
  auth: DEFAULT_PAT,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserSearchResponse>
) {
  const filters: UsersFilters = {
    q: "",
    ...req.query,
  };
  res.status(200).json(await octokit.rest.search.users(filters));
}
