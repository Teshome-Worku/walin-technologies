# Walin Technologies

Walin Technologies is a Next.js web application scaffold for the Walin Technologies brand. The project is currently set up as a lightweight App Router site with Tailwind CSS styling, TypeScript support, and a branded homepage entry point.

## Overview

- Framework: Next.js 16
- UI library: React 19
- Language: TypeScript
- Styling: Tailwind CSS 4
- Linting: ESLint

## Current Status

The application is in an early setup stage. At the moment, the homepage renders a branded `Walin Technologies` heading and the project already includes the core tooling needed to continue building out the site.

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Runs the production server |
| `npm run lint` | Runs ESLint checks |

## Project Structure

```text
walin-technologies/
|-- public/
|-- src/
|   `-- app/
|       |-- favicon.ico
|       |-- globals.css
|       |-- layout.tsx
|       |-- page.module.css
|       `-- page.tsx
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
|-- tailwind.config.ts
`-- tsconfig.json
```

## Main Files To Edit

- `src/app/page.tsx`: homepage content
- `src/app/layout.tsx`: shared layout and metadata
- `src/app/globals.css`: global styles
- `tailwind.config.ts`: custom theme colors and Tailwind content paths

## Styling Notes

The project already defines a small custom color palette in `tailwind.config.ts`:

- `primary`
- `secondary`
- `dark`
- `light`

These can be extended as the design system for Walin Technologies grows.

## Build For Production

```bash
npm run build
npm run start
```

## Deployment

This app can be deployed on platforms that support Next.js, including:

- Vercel
- Netlify
- A custom Node.js server environment

## Next Steps

- Replace the placeholder homepage with full company content
- Update site metadata in `src/app/layout.tsx`
- Add reusable sections or components as the site expands
- Introduce assets such as logos, imagery, and brand copy under `public/`

## License

Add your preferred license details here if the project will be shared publicly.
