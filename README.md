This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project uses [GitHub Octokit](https://github.com/octokit/octokit.js) to fetch data from the GitHub API. You're going to need to [generate a PAT token](https://github.com/settings/tokens/new?scopes=repo) and use it as an environment variable. The [.env.example](./.env.example) contains all the env variables required for the project to work. To run the development server:

```bash
cp .env.example .env.local

# Update the variables

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Decisions

The project uses Next.js as framework with TypeScript, one of the most popular React framework nowadays with several built-in features when compared to create-react-app or custom webpack configuration. The project uses the Next.js app directory folder released in the version 13.

The project is organized in 4 main folders - app, components, networking, pages. App and pages are part of Next.js, the first one contains the application while the pages contains the api endpoints. To protect the GitHub PAT token, all the API request to GH happens via this APIs that fetches the data, parses it and return without exposing the token.

The components folder contains the custom UI components, that must be designed for reuse. Last but not least, the networking folder contains the types representing the GitHub models, the Octokit client and hooks abstracting the access to the data. The pages and components must use the hooks to fetch the data, facilitating possible changes in way data is fetched (for example, replace a rest request to GraphQL).

[Material design](https://material.io/) is a design system maintained by Google and was used in the project. Using the [mui React package](https://mui.com/) it's possible to use and customize the material components. The [theme](./src/components/theme.tsx) provider contains the primary color used by the components. The custom components live at [/src/components](./src/components).


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
