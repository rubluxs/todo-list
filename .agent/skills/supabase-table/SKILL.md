---
name: supabase-table
description: Designs the Supabase table, columns and migration for the to-do app, with the access the backend needs. Use when creating or changing a table, adding a column, or when the backend cannot read or write data.
---

# Supabase table

## Goal
Create or change the database table in a migration, so that the backend can read and write it.

## Instructions
1. **Read the `supabase` skill first.**
2. **Describe the design in plain words and get approval** before writing any migration:
   - the table name and its purpose
   - each column, its type, whether it is required, and its default value
3. **Create a new migration.** Apply it with the Supabase migration tool after the user says yes, and save the same change as a file in `supabase/migrations/`. One migration per change. Never edit a migration that was already applied; add a new one. If the tools are not available, use the Supabase CLI instead (check `--help`).
4. **In the same migration**, do all of these:
   - create the table or change it
   - leave RLS off
   - give the `anon` role permission to read, add, change and delete rows in the table with an explicit grant, so the backend can use the publishable key
5. **Add basic data rules** in the database: the title is required, has a sensible maximum length, and `done` starts as false.
6. **Test it.** Using the publishable key, the backend must be able to read a row, add one, change one and delete one.
7. **Run the Supabase advisors** and read what they report. A warning that RLS is off is expected here. Do not turn RLS on to remove it. Fix anything else.
8. **Explain in one plain sentence** what the table stores and how the backend reaches it.

## Gotchas
- If the backend gets a "permission denied" error (code 42501), the `anon` grant is missing. Add it in a new migration.
- Changing a table does not change the data that is already in it. Test again after every change.
- Because RLS is off, whatever you grant to `anon` is open to everyone who has the key. Grant only what the app needs, on this table only.

## Constraints
- Do not turn RLS on.
- Do not run destructive changes (dropping or emptying tables) without clear approval.
- Do not store personal or private information.
