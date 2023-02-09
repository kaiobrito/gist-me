import { Gist } from "@/networking/graphql";
import { render } from "@testing-library/react";
import { GistCard } from "./card";

const GIST: Gist = {
  id: "gist-id",
  description: "This is a description",
  url: "http://example.com",
  files: [
    {
      name: "file1.js",
      language: {
        name: "Js",
      },
    },
    {
      name: "file2.js",
      language: {
        name: "Js",
      },
    },
    {
      name: "readme.md",
      language: {
        name: "Markdown",
      },
    },
  ],
  comments: {
    totalCount: 1,
  },
  forks: {},
};

describe("<GistCard />", () => {
  it("Should render GistCard", () => {
    const { getByText } = render(<GistCard gist={GIST} />);

    const description = getByText(GIST.description!);

    expect(description).toBeInTheDocument();
  });

  it("Should display language chips", () => {
    const { getByText } = render(<GistCard gist={GIST} />);
    const js = getByText("Js"); //It should crash if Js appears twice
    expect(js).toBeInTheDocument();

    const markdown = getByText("Markdown");
    expect(markdown).toBeInTheDocument();
  });

  it("Should show first file name when there is no description", () => {
    const noDescGist = {
      ...GIST,
      description: "",
    };
    const { findAllByText, getByText } = render(<GistCard gist={noDescGist} />);

    const description = findAllByText(GIST.description!);
    expect(description).resolves.toReturnWith({});

    const title = getByText(noDescGist.files![0].name);
    expect(title).toBeInTheDocument();
  });
});
