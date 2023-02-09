import { Gist } from "@/networking/graphql";
import { render, screen } from "@testing-library/react";
import { GistCard } from "./card";

const GIST: Gist = {
  id: "gist-id",
  description: "This is a description",
  url: "http://example.com",
  comments: {
    totalCount: 1,
  },
  forks: {},
};

describe("<GistCard />", () => {
  it("Should render GistCard", () => {
    render(<GistCard gist={GIST} />);

    const description = screen.getByText(GIST.description!);

    expect(description).toBeInTheDocument();
  });
});
