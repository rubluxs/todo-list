---
trigger: model_decision
description: Design system for the app. Apply when building or changing anything the user sees on screen, such as pages, components, colors, fonts, spacing, buttons, layout, wording or responsive behavior.
---

# Design system

How the app should look and feel. Style with Tailwind CSS only, using these values as theme tokens.

## Style

Clean, calm and simple. Lots of white space. Nothing flashy.

## Colors

| Use | Color |
|---|---|
| Page background | Light gray `#F5F6F8` |
| Cards and task rows | White `#FFFFFF` |
| Main text | Dark navy `#14213D` |
| Secondary text | Gray `#5B6478` |
| Buttons and links | Blue `#2F5BEA` |
| Completed tasks | Green `#4F8A6B` |
| Errors and delete | Red `#B93815` |

## Fonts

- Page title: bold, 32px
- Body text: regular, 16px
- One clean sans-serif font throughout

## Layout

- One centered column, no wider than 640px
- Page title at the top
- An input box and an "Add task" button below it
- The list of tasks underneath

```
+------------------------------+
|  My To-Do List               |
|  [ Add a task...   ] [Add]   |
|                              |
|  ( ) Buy groceries           |
|  ( ) Call the bank           |
|  (x) Finish homework         |
+------------------------------+
```

## Components

- **Task row:** a checkbox, the task text, and a delete button
- **Completed task:** text is crossed out and turned gray
- **Buttons:** rounded corners, blue background, white text

## Wording

- Short, clear words: "Add task", "Delete", "Done"
- Empty list message: "No tasks yet. Add your first one above."
- Sentence case, not ALL CAPS

## Basics

- Works on a phone screen and a desktop screen
- Text is easy to read against its background
- Buttons are big enough to tap

## Code structure

The page is one file, but write it in a modular way: small, separate pieces that each do one job.

- Split the script into labeled sections: settings, API functions, display functions, event handlers and start-up. Put a short comment above each.
- Give each function one job, such as `fetchTodos`, `addTodo`, `renderTodoList` and `renderTodoRow`.
- Keep logic apart from looks. API functions never change the page, and display functions never call the API.
- Reuse instead of copying. Build every task row with the same function.
- Keep colors, fonts and spacing in the Tailwind theme block, not repeated in the markup.
- Use clear names and keep functions short.
