// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserGistsResponse } from "@/networking/types";
import client from "@/networking/octokit";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserGistsResponse>
) {
  const { username } = req.query;

  res.status(200).json(
    await client.graphql(
      `
      query gists($username: String!) {
        user(login: $username){
          gists(first: 10) {
            totalCount
            nodes {
              id
              description
              url
              files {
                name
                language {
                  name
                }
              }
              comments {
                totalCount
              }
              forks(last: 3) {
                nodes {
                  owner {
                    login
                    avatarUrl
                  }
                }
              }
            }
          }
        }
      }`,
      {
        username,
      }
    )
  );
}
