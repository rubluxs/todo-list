---
name: node-backend
description: Creates and builds the Node.js backend with Express, including project structure, environment variables, CORS, routes, input checks, the Supabase connection and error handling. Use when creating the backend folder, adding or changing API endpoints, configuring the server, or fixing CORS and server errors.
---

# Node.js backend

## Goal
A small, readable server in `backend/` that the frontend can call safely and that is the only part talking to the database.

## Setup
1. Use a current Node.js LTS version. Check with `node --version` and tell the user if it is too old.
2. Create `backend/` as an npm project that uses ES modules.
3. Install Express and the Supabase client library. Ask before adding anything else.
4. Load settings from a `.env` file using Node's built-in env-file support or a tiny loader, whichever the installed Node version supports. Check the current docs.
5. Add npm scripts: `start`, and `dev` with automatic restart on file changes.
6. Create `backend/.env.example` with the names only: `PORT`, `FRONTEND_URL`, `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`.

## Structure
```
backend/src/
  index.js        starts the server
  app.js          builds the Express app
  routes/         one file per resource (todos.js)
  middleware/     error handling
  lib/            the Supabase connection
```

## Server rules
- The port comes from the `PORT` variable, with 3000 as the default.
- **CORS:** allow only the frontend's address, read from `FRONTEND_URL`. Do not allow every address.
- Read JSON bodies, with a small size limit.
- On start-up, stop with a clear message if a required variable is missing, such as `SUPABASE_PUBLISHABLE_KEY`.
- Add a **health route** that replies with a short "server is running" message.
- Create the Supabase connection **once**, in `lib/`, with the project URL and the publishable key from the environment.

## Writing routes
- Follow `build-todo-feature/references/api-contract.md` for paths, status codes and response shapes.
- **Check the input** at the start of every route: type, required fields and maximum length. Reject bad input with 400 and a clear message.
- Wrap async route code so errors reach one central error handler.
- The error handler sends a consistent JSON message and never shows stack traces or database messages to the client.
- Log what happened and which route. Never log keys.

## Constraints
- Do not hardcode keys, URLs or ports.
- Never send the Supabase key to the frontend, in any response.
- Do not leave `console.log` debugging in finished code.
- Keep each route file short and focused.
