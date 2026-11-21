---
name: build-todo-feature
description: Builds one complete to-do feature from the database to the backend to the screen, in the right order, such as listing, adding, completing or deleting tasks. Use when asked to add or change anything users can do with their tasks.
---

# Build a to-do feature (start to finish)

## Goal
Build one feature at a time, so that it works from the screen all the way down to the database. Then test it and save it to GitHub.

## Instructions
1. **Describe the feature in one sentence.** List what is needed in each part: the database, the backend route and the screen. Show this to the user and wait for approval.
2. **Database** (only if the data changes): use the `supabase-table` skill. Test that the backend can read and write the table before moving on.
3. **Backend:** use the `node-backend` skill and follow the API rules in `references/api-contract.md`. Add the route, check the input, and test the route with a request before touching the screen.
4. **Frontend:** use the `html-tailwind-frontend` skill. Build the screen, including what the user sees while loading, when there is nothing to show, and when something goes wrong. Connect it to the backend through the shared API file.
5. **Test:** use the `verify-work` skill. Test it once when everything goes right and once when something goes wrong.
6. **Save:** use the `github-workflow` skill to commit the feature on its own branch and open a pull request.
7. **Summarize** in a few lines: what you built, what you tested, and what the next feature should be.

## Order for building the whole app
1. Set up the frontend and backend folders
2. Put the project on GitHub
3. Create the database table
4. Show the list of tasks
5. Add a task
6. Mark a task as done or not done
7. Delete a task
8. Final touches: empty list message, error messages, phone layout
9. Put the app online with the `render-deploy` skill

## Rules
- Build one feature at a time. Do not mix in unrelated changes.
- Do not build the screen for a feature until its backend route works.
- Do not change the API rules without telling the user first.
