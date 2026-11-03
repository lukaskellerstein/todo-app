# Todo App

A small, dark-themed todo app built with React 19, TypeScript and Vite. Use it as a
starting point: the whole add / complete / filter loop already works, in one component,
with plain `useState` and no runtime dependency besides `react` and `react-dom`.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173.

| Script | Does |
|---|---|
| `npm run dev` | Vite dev server with Fast Refresh |
| `npm run build` | type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | serve the production build |
| `npm run lint` | ESLint with the React Hooks and React Refresh rules |

## What it does

- Add a todo with the input and **Add** (or Enter). Empty input is ignored.
- Complete a todo with its checkbox; delete it with the × that appears on hover.
- Filter by **All**, **Active** or **Completed**; **Clear completed** removes finished items.
- The footer shows how many items are left.

State lives in memory only. A page reload resets the list to the sample data.

## Where things are

| File | What is in it |
|---|---|
| `src/App.tsx` | the app: state, handlers, and markup |
| `src/todos.ts` | the `Todo` type and the sample data |
| `src/App.css` | layout and component styles |
| `src/index.css` | theme colors and the page background |

The "items left" count and the filtered list are computed from the `todos` array on every
render. Nothing derived is stored, so a new field on `Todo` needs no extra sync code.

## Making it yours

1. Change the `Todo` type and the sample data in `src/todos.ts`.
2. Change the handlers and markup in `src/App.tsx`.
3. Change the brand name and avatar in the header of `src/App.tsx`.

An edit to `src/todos.ts` reloads the page in the dev server, because Fast Refresh keeps
component state and would otherwise hide the new sample data.
