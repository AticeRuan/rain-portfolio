# Rain Portfolio

A personal portfolio website built with Next.js, React and MongoDB. The site showcases portfolio work and includes a MongoDB-backed API for portfolio content.

## Tech Stack

- Next.js 15
- React 19
- NextUI
- Tailwind CSS
- Framer Motion
- MongoDB and Mongoose
- Vercel for hosting and deployment
- GitHub Actions for CI validation
- Dependabot for automated dependency updates

## Getting Started

Install dependencies:

```bash
npm ci
```

Create a local `.env` file and add the MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

Do not commit `.env` or database credentials to Git.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

Run a production build locally with:

```bash
npm run build
```

Then start the production server with:

```bash
npm run start
```

## Environment Variables

The application requires:

| Variable | Purpose |
| --- | --- |
| `MONGODB_URI` | Server-side connection string for the MongoDB portfolio database |

`MONGODB_URI` is intentionally server-only and should not use the `NEXT_PUBLIC_` prefix.

For deployment, configure this variable in Vercel. For GitHub Actions validation, configure it as a GitHub Actions secret and a Dependabot secret when dependency PRs need to run the production build.

## Dependency Upgrade Automation

The repository uses Dependabot and GitHub Actions to help keep dependencies current.

- Patch updates can be automatically merged after required CI checks pass.
- Minor updates create a pull request for review and can be tested using the Vercel preview deployment before merging.
- Major version upgrades are excluded from routine Dependabot version updates and should be reviewed manually.

The CI workflow validates dependency installation, reports security findings, blocks critical vulnerabilities and verifies that the Next.js production build succeeds.

## Deployment

The project is deployed with Vercel and connected to the GitHub repository. Changes merged into the production branch are deployed automatically, while pull requests can receive isolated preview deployments for testing.

## Project Notes

This repository is actively maintained as both a personal portfolio and a practical project for improving modern web development, deployment and dependency-management workflows.
