---
name: html-tailwind-frontend
description: Builds the frontend as one plain index.html page with Tailwind CSS and vanilla JavaScript, including layout, backend calls, and loading, empty and error messages. Use when creating or changing the frontend, styling it, or connecting it to the backend.
---

# Single-page HTML frontend

## Goal
One normal web page, `frontend/index.html`, that follows the design rule (`.agent/rules/design.md`) and talks to the backend. No framework and no build step.

## Setup
1. Create `frontend/index.html`. That is the whole frontend. Do not create an npm project, a bundler or a framework setup.
2. **Check the current Tailwind docs first.** Follow the official Play CDN setup for the current Tailwind version. Do not set it up from memory.
3. Put the colors, fonts and widths from the design rule into Tailwind's theme block in the `<head>`, so the page uses named values and no raw color codes.
4. Run the page through a small local server on port 5173, for example `npx serve frontend -l 5173`. Tell the user before the first run, because it downloads a small tool. Do not open the file by double-clicking it: the backend only allows requests from the server address.
5. Open the page and confirm it loads with a Tailwind class visibly applied.
6. Tell the user in one sentence that the Tailwind CDN script is meant for learning and quick projects, which suits this one.

## Structure of the file
1. **Head:** title, viewport tag, the Tailwind script and the theme block.
2. **Body:** page title, the add-task form, the task list and the message area.
3. **One script at the end,** split into labeled sections with a short comment above each:
   - settings
   - API functions (talk to the backend)
   - display functions (change the page)
   - event handlers (react to clicks and typing)
   - start-up

## Building the page
- Follow the design rule for layout, colors and wording.
- Use real HTML elements: `form`, `label`, `button`, `ul` and `li`. Give every button a type, and keep the focus ring visible.
- Show what the user sees while loading, when the list is empty, and when something goes wrong. Use the wording from the design rule.
- Check the layout at phone width (about 375px) and on desktop.

## Talking to the backend
- Keep one `API_URL` setting at the top of the script. Use `http://localhost:3000` when the page is opened from localhost, and the live backend address otherwise. Leave a clear placeholder until the backend is deployed.
- Keep every request in the API functions. Event handlers never build URLs.
- When a request fails, show a clear message to the user.
- Put task text on the page with `textContent`, never `innerHTML`, so nobody can inject code through a task.

## Constraints
- No frameworks, no npm packages and no build tools without asking.
- The page is public. Never put keys or secrets in it. The backend address is the only setting it needs.
- Do not use Supabase in the frontend. The page only talks to the backend.
- Keep it one file. If it passes about 300 lines, tell the user before splitting it.
