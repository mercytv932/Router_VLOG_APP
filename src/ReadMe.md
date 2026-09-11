# Router Vlog App

A modern, full-featured blogging and vlogging platform built with React, TypeScript, and React Router. This application provides a complete content management experience with authentication and role-based access control.

## Features

- **Responsive Home Page** - A welcoming landing page for new visitors
- **Blog Listing** - Browse all published blog posts and articles
- **Individual Post Pages** - View detailed blog content with URL routing by post slug
- **User Authentication** - Secure login system for content creators
- **Admin Dashboard** - Protected admin area for managing blog content
- **Navigation** - Intuitive navigation bar for seamless browsing
- **Error Handling** - 404 page for non-existent routes
- **Type Safety** - Full TypeScript support for enhanced developer experience

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Routing**: React Router 7
- **Build Tool**: Vite
- **Styling**: CSS
- **Linting**: ESLint with TypeScript support
- **Bundling**: Rolldown with Babel

## Project Structure

```
src/
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── BlogPage.tsx    # Blog listing page
│   ├── BlogPostPage.tsx # Individual post view
│   ├── LoginPage.tsx   # Authentication page
│   ├── AdminPage.tsx   # Protected admin dashboard
│   └── NotFoundPage.tsx # 404 error page
├── components/         # Reusable components
│   ├── NavBar.tsx      # Navigation component
│   └── ProtectedRoute.tsx # Route protection wrapper
├── contexts/          # React context for state management
├── blogData/          # Blog content and data
├── App.tsx            # Root component with routing
└── main.tsx           # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory

   ```bash
   cd router-vlog-app
   ```

3. Install dependencies
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## Available Routes

| Route         | Description                 |
| ------------- | --------------------------- |
| `/`           | Home page                   |
| `/blog`       | Blog listing page           |
| `/blog/:slug` | Individual blog post page   |
| `/login`      | User login page             |
| `/admin`      | Admin dashboard (protected) |
| `*`           | 404 Not Found page          |

## Authentication & Authorization

The application includes a **ProtectedRoute** component that restricts access to the admin dashboard. Only authenticated users can access the admin area.

## Development Features

- **React Compiler** - Enabled for optimized component performance
- **Type Checking** - TypeScript with strict type checking
- **ESLint Rules** - Enforced code quality standards with React hooks rules
- **Hot Module Replacement (HMR)** - Fast refresh during development

## Contributing

When contributing to this project:

1. Follow the existing code structure and TypeScript conventions
2. Run `npm run lint` before committing code
3. Ensure all routes are properly typed with TypeScript
4. Test authentication flows on the protected routes

## License

This project is part of the 2026-RTT-27 training program.

---

**Last Updated**: 2026-09-11
