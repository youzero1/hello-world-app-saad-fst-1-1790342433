---
status: pending
title: Minimal Hello World Home Page
---

Current state: the project contains only `README.md` and `env.example`. The entire application scaffold must be created.

1. Create `package.json` with ESM (`"type": "module"`), npm scripts for dev/build/preview, and dependencies: `react`, `react-dom`, `@tanstack/react-router`; dev dependencies: `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`, `tailwindcss`, `@tailwindcss/vite`, `@tanstack/router-plugin`. Outcome: installable project manifest.
2. Create `tsconfig.json` (and `tsconfig.node.json` if needed) with strict mode, `jsx: react-jsx`, bundler module resolution, and a `@/*` path alias mapping to `src/*`. Outcome: TypeScript resolves `@/` imports.
3. Create `vite.config.ts` registering `@tanstack/router-plugin/vite` (before the React plugin), `@vitejs/plugin-react`, and `@tailwindcss/vite`, plus a resolve alias for `@` → `src`. Outcome: dev server generates `src/routeTree.gen.ts` automatically and compiles Tailwind.
4. Create `index.html` at the project root with a `#root` div and a module script pointing at `src/main.tsx`. Outcome: Vite entry document exists.
5. Create `src/styles/global.css` containing exactly `@import "tailwindcss";` as its first line. Outcome: Tailwind v4 utilities available app-wide.
6. Create `src/main.tsx` that imports `@/styles/global.css` once, builds the router from the generated `routeTree.gen.ts`, and renders `RouterProvider` into `#root` inside `StrictMode`. Outcome: app boots with routing.
7. Create `src/routes/__root.tsx` defining the root route with a full-height white background wrapper and an `Outlet`. Outcome: shared app shell with clean base styling.
8. Create `src/routes/index.tsx` for the `/` route: a centered flex column filling the viewport, an `h1` reading "Hello World" in large, medium-weight, dark neutral type, and an optional smaller muted subtext line beneath it. Outcome: home page renders "Hello World" centered on a white background.
9. Create `.gitignore` covering `node_modules`, `dist`, and local env files; leave `src/routeTree.gen.ts` untracked or generated as the plugin produces it — never edit it by hand. Outcome: clean repository.
10. Verify by running the dev server: `/` shows centered "Hello World", no console errors, no extra routes or interactivity. Outcome: requirements met.
