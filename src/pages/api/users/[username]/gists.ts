// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GistResponse } from "@/networking/types";
import client from "@/networking/octokit";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GistResponse>
) {
  const { username, ...params } = req.query;

  res
    .status(200)
    .json(
      await client.request("GET /users/{username}/gists", {
        username: username as string,
      })
    );
}
