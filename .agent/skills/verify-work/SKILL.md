---
name: verify-work
description: Tests the running app and reports honestly what works and what does not, before declaring any task done. Use at the end of every task, after any code change, and whenever the user asks if something works.
---

# Verify work

## Goal
Only claim something works when it has been run and observed.

## Instructions
1. **Backend** (if touched)
   - start the server and call the health route
   - call each changed route with good input, with bad input (expect 400), and with an ID that does not exist (expect 404)
2. **Frontend** (if touched)
   - open the page from the local server and fix any errors
   - open the page and check the browser console for errors
   - try the feature as a user would, then try one failure (for example, stop the backend)
   - record each browser test as set out in the project rules
   - check loading, empty and error states
   - check phone width (about 375px) and desktop width
3. **Database** (if touched)
   - confirm the table has the expected columns and that the backend can read, add, change and delete rows
   - read the advisor results. A warning that RLS is off is expected
   - run the Supabase advisors if available and report their findings
4. **Live app** (only if it was deployed)
   - open the live backend health address and the live site
   - add a task, mark it done and delete it on the live site
   - read the recent error logs of both services with the Render tools
5. **Fix and rerun** anything that fails. Do not remove or weaken a check to make it pass.
6. **Report** in this format:
   - **Changed:** the files and what changed
   - **Tested:** each thing you ran, and the result
   - **Not tested:** anything you could not check, and why
   - **Next step:** the smallest sensible follow-up

## Constraints
- Never write "works" for something you did not run.
- If a command could not run (missing keys, no browser), say so plainly.
- Do not hide failures in the summary.
