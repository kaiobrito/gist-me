import { renderHook, waitFor } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { useGists } from "./useGists";
import client from "./client";
import { UserGistsResponse } from "./types";

const queryClient = new QueryClient({});

const EMPTY_RESPONSE: UserGistsResponse = {
  user: {
    gists: {
      totalCount: 0,
    },
  },
};

describe("useGists()", () => {
  it("Shouldn't fetch when username is empty", () => {
    const { result } = renderHook(() => useGists(""), {
      wrapper: (props) => (
        <QueryClientProvider client={queryClient} {...props} />
      ),
    });

    expect(result.current.isIdle).toBeTruthy();
    expect(result.current.isLoading).toBeFalsy();
  });

  it("Shouldn't fetch when username is empty", async () => {
    const mockFetch = jest
      .spyOn(client, "getUserGists")
      .mockResolvedValueOnce(EMPTY_RESPONSE);

    const { result } = renderHook(() => useGists("github"), {
      wrapper: (props) => (
        <QueryClientProvider client={queryClient} {...props} />
      ),
    });
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(mockFetch).toBeCalledWith("github");

    expect(result.current.data).toEqual(EMPTY_RESPONSE);
  });
});
