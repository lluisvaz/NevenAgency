# Hook Agency - Home Services Marketing Website

## Overview

This is a marketing website for Hook Agency, a home services marketing agency. The application is a React-based single-page application with an Express backend, built for showcasing marketing services to home service businesses (roofing, plumbing, HVAC, etc.). The site features a modern dark theme with blue accent colors and uses the Gabarito font family.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom theme variables
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for interactive icon animations
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful routes prefixed with `/api`
- **Development**: tsx for TypeScript execution, Vite dev server for HMR

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated via drizzle-zod
- **Current Storage**: In-memory storage class (MemStorage) with interface ready for database migration
- **Session Storage**: connect-pg-simple available for PostgreSQL sessions

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/ui/  # shadcn/ui components
│   │   ├── pages/          # Route pages
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data access layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Drizzle migration files
```

### Build System
- Development: Vite dev server with HMR, proxied through Express
- Production: esbuild bundles server, Vite builds client to `dist/public`
- Server dependencies are bundled to reduce cold start times

## External Dependencies

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Drizzle Kit for schema migrations (`npm run db:push`)

### UI/Component Libraries
- Radix UI primitives (dialogs, dropdowns, tooltips, etc.)
- Lucide React for icons
- Embla Carousel for carousels
- cmdk for command palette
- react-day-picker for calendar

### Development Tools
- Replit-specific Vite plugins (cartographer, dev-banner, runtime-error-modal)
- Custom meta-images plugin for OpenGraph tags

### Fonts
- Gabarito (self-hosted in `/client/public/fonts/`)
- Inter and Oswald (Google Fonts, loaded in index.html)