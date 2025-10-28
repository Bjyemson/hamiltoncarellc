# Hamilton Care — Ready Starter (Windows-friendly)

This project is a ready-to-run frontend with a simple local "apply" API that saves submissions to `data/applications.json` (no DB required).

## Quick start (Windows)

1. Unzip the downloaded archive.
2. Open PowerShell **(as normal user)** and set script execution if you haven't already:
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```
3. `cd` into the project folder and install dependencies:
   ```powershell
   cd path\to\hamilton_care_ready
   npm install
   ```
4. Run the dev server:
   ```powershell
   npm run dev
   ```
5. Open http://localhost:3000

## Notes
- The Apply form posts to `/api/apply` and writes to `data/applications.json`.
- This build intentionally does **not** include node_modules in the ZIP.
- If port 3000 is in use, use `npm run dev -- -p 3001` or free the port.
