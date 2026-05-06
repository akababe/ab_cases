# Analytics Case Hub

Analytics Case Hub is a React + Vite application for exploring a set of analytics case studies. It includes responsive navigation, search, dark mode, scroll progress, smooth transitions, and accessibility improvements.

## Features

- Keyboard navigation with `←` `→`, `j` `k`, `Ctrl+K`, `Ctrl+D`, and `Shift+?`
- Real-time search and filtering across case titles
- Dark mode with system preference detection and localStorage persistence
- Scroll progress bar that tracks reading position
- Smooth page transitions and staggered section reveals
- Mobile-friendly drawer sidebar and top navigation bar
- Accessible controls with ARIA labels and focus-visible states

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| `←` / `→` | Previous or next case |
| `j` / `k` | Previous or next case |
| `/` / `Ctrl+K` | Focus search |
| `Ctrl+D` | Toggle dark mode |
| `Shift+?` | Show keyboard help |

## Project Structure

- `src/App.jsx` - Main app shell and interactive logic
- `src/App.css` - Theme, layout, animation, and responsive styles
- `src/components/cases/` - Individual case study content
- `INTERACTIVE_FEATURES.md` - Detailed feature guide for end users

## Deployment

The project is configured for GitHub Pages deployment through GitHub Actions. The Vite build output uses the `/ab_cases/` base path so assets resolve correctly in production.

## Notes

- The app supports both desktop and mobile layouts.
- Search input state is shared between the desktop sidebar and the mobile top bar.
- Theme preference is stored locally so the selected mode persists across visits.
