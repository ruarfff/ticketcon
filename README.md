# TicketCon

TicketCon is a static React landing page for a fictional ticketing culture
conference. Vite builds the site and Firebase Hosting serves it at
[ticketculturecon.web.app](https://ticketculturecon.web.app/).

There is no application server, server-side rendering, database, or Cloud
Function. Firebase is used only for static Hosting and optional Analytics.

## Requirements

- Node.js 24
- npm
- Firebase CLI access to the `ticketculturecon` project for deployment

## Local development

```sh
npm install
npm run dev
```

Useful checks:

```sh
npm run typecheck
npm run build
npm run preview
```

To test the production build through the Firebase Hosting emulator:

```sh
npm run emulate -- --project ticketculturecon
```

The Hosting emulator listens on <http://127.0.0.1:5005>.

## Deployment

Every push runs the GitHub Actions workflow in `.github/workflows/main.yml`.
It installs dependencies, builds `dist/`, and deploys that directory to the
live Firebase Hosting channel.

For an authenticated manual deployment:

```sh
npm run deploy -- --project ticketculturecon
```

The deployment script builds first and deploys only Firebase Hosting. It does
not create or update Cloud Functions.
