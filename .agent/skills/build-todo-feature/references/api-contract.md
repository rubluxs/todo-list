# API rules

The backend and frontend both follow these. If they need to change, tell the user first.

## Task shape (what the API returns)

| Field | Meaning |
|---|---|
| `id` | Unique ID of the task |
| `title` | The task text, 1 to 200 characters |
| `done` | `true` when completed |
| `createdAt` | When the task was created |

There is no login, so tasks have no owner. Everyone sees the same list.

## Endpoints

| Method and path | Purpose | Success | Common errors |
|---|---|---|---|
| GET `/health` | Check the server is up | 200 | None |
| GET `/todos` | List all tasks, newest first | 200 with a list | 500 |
| POST `/todos` | Add a task; body has `title` | 201 with the new task | 400 |
| PATCH `/todos/:id` | Change `title` and/or `done` | 200 with the updated task | 400, 404 |
| DELETE `/todos/:id` | Delete a task | 204 with no body | 404 |

## Rules
- A task that does not exist returns **404**.
- Reject an empty or whitespace-only title with 400. Trim titles before saving.
- Reject a title longer than 200 characters with 400.
- Error responses always have a short `error` message the user can understand.
- Never include internal details (stack traces, database messages) in errors.
