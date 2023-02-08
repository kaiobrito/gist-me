import { Octokit } from "@octokit/rest";

const DEFAULT_PAT = process.env.GH_PAT!;

export default new Octokit({
  auth: DEFAULT_PAT,
});
