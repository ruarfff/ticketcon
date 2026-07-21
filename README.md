# TicketCon

TicketCon is a web application built using **Remix** (React 18) and deployed on **Firebase** (Hosting + Cloud Functions). It is a landing page and dashboard for a fun ticketing culture conference.

## Current Project State

The project has been modernized and cleaned up for compatibility with modern Node.js versions and security standards:

*   **Node.js Version**: Configured for **Node 20 (LTS)** (defined in `.nvmrc` and `package.json` engines).
*   **Frameworks & Libraries**:
    *   **Remix**: Upgraded to the latest stable v1 release (`^1.19.3`).
    *   **React**: Upgraded to React 18 (`^18.2.0`).
    *   **Firebase**: Upgraded to client SDK v9 (`^9.23.0`), Admin SDK v11 (`^11.11.1`), Functions v4 (`^4.9.0`), and tools v12 (`^12.9.0`).
    *   **TypeScript**: Configured to `^4.9.5` for stable Remix v1 type checking.
*   **Patches & Bug Fixes**:
    *   **Hydration Bug Fix**: Fixed a client-side crash in `video.js` caused by query selecting DOM elements before hydration/rendering occurred.
    *   **Navigation Bug Fix**: Patched `jquery.nav.js` to prevent `TypeError: Cannot read properties of undefined (reading 'top')` crashes when accessing sections that aren't present on secondary pages (like sub-routes or 404 pages).
    *   **macOS Port Conflict Fix**: Re-mapped the Firebase Hosting Emulator port from `5000` to `5005` to prevent conflicts with native Apple AirPlay Receiver services running on macOS.
    *   **Vulnerability Mitigation**: Embedded package overrides in `package.json` to resolve transitive dependency vulnerabilities (e.g., `axios`, `cookie`, `ip`, `semver`, etc.) without requiring a major framework rewrite to Remix v2.

---

## Local Development

### Prerequisites

*   **Node.js**: `v20.x` (recommended to use `nvm` or equivalent to match `.nvmrc`).
*   **Firebase CLI**: Installed globally or via npx (`npm install -g firebase-tools`).

### Getting Started

1.  Clone the repository and navigate to the directory:
    ```sh
    cd ticketcon
    ```

2.  Install dependencies:
    ```sh
    npm install
    ```

3.  Build the Remix application once to generate server and client assets:
    ```sh
    npm run build
    ```

4.  Start the development environment:
    ```sh
    npm start
    ```
    *This runs **PM2** under the hood (configured via `pm2.config.js`) to spin up the Remix file compiler/watcher and the Firebase Emulator Suite simultaneously.*

### Local Port Mappings

Once running, the following local services are active:
*   **Remix watch compiler**: Continuously recompiles source files into `build/`
*   **Firebase Hosting Emulator**: [http://127.0.0.1:5005](http://127.0.0.1:5005)
*   **Firebase Functions Emulator**: [http://127.0.0.1:5001](http://127.0.0.1:5001)
*   **Firebase Emulator Suite UI**: [http://127.0.0.1:5002](http://127.0.0.1:5002)

---

## Deploying to Production

The application is hosted under the Firebase project **`ticketculturecon`**.

### 1. Automated Deployment (CI/CD)

Every push to the `main` branch triggers a deployment via GitHub Actions (configured in `.github/workflows/main.yml`). 

The workflow runs the following steps:
1.  Checks out the code and sets up Node 20.
2.  Installs dependencies using `npm ci` (leveraging GitHub caching for speed).
3.  Runs `npm run build` to build server-side and client-side Remix assets.
4.  Deploys the static assets to **Firebase Hosting** using the official deployment action.
5.  Authenticates to Google Cloud and deploys the backend **Cloud Functions** via `npx firebase-tools deploy --only functions`.

*Requirements: The GitHub repository must have `FIREBASE_SERVICE_ACCOUNT` set as an Action Secret, containing a GCP Service Account JSON key with the necessary IAM roles (Cloud Functions Developer, Service Account User, Cloud Build Developer, Artifact Registry Administrator, and Service Usage Admin).*

### 2. Manual Deployment

If you need to deploy directly from your local machine:

1.  Make sure you are logged in to the correct Firebase account:
    ```sh
    firebase login
    ```

2.  Run the deployment script:
    ```sh
    npm run deploy
    ```
    *This runs `firebase deploy`, uploading both the static Hosting assets and the server-side Cloud Function (`app`) to production.*
