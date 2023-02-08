import { RestEndpointMethodTypes } from "@octokit/rest";

export type UsersFilters =
  RestEndpointMethodTypes["search"]["users"]["parameters"];

export type UserSearchResponse =
  RestEndpointMethodTypes["search"]["users"]["response"];

export type GistResponse = RestEndpointMethodTypes["gists"]["list"]["response"];
