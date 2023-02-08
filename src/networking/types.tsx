import { RestEndpointMethodTypes } from "@octokit/rest";
import { Gists } from "./graphql";

export type UsersFilters =
  RestEndpointMethodTypes["search"]["users"]["parameters"];

export type UserSearchResponse =
  RestEndpointMethodTypes["search"]["users"]["response"];

export type UserGistsResponse = {
  user: {
    gists: Gists;
  };
};

export * from "./graphql";
