# Dev Yug - Developer Community Platform

## Overview

Dev Yug is a modern, faith-based developer community platform that prioritizes skills and character over traditional credentials. Built as a full-stack React application, it serves as a landing page and community hub where developers can connect, showcase their abilities, and grow together in a values-driven environment. The platform emphasizes biblical ethical principles while fostering genuine talent recognition and collaborative learning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with minimal bundle size
- **Styling**: Tailwind CSS with shadcn/ui components for consistent, professional design system
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Library**: Radix UI primitives with custom styling for accessibility and consistency

### Backend Architecture  
- **Framework**: Express.js with TypeScript for API development
- **Server Setup**: Custom middleware for logging, JSON parsing, and error handling
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Development Server**: Integrated Vite middleware for seamless full-stack development
- **Build Process**: esbuild for server-side bundling and production deployment

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations for version-controlled database changes
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **User Management**: Basic user schema with username/password authentication structure

### Authentication and Authorization
- **User Schema**: Defined user table with UUID primary keys and unique usernames
- **Password Storage**: Text-based password field (implementation needs security enhancement)
- **Session Management**: Prepared for cookie-based sessions with connect-pg-simple
- **Storage Interface**: Abstract user CRUD operations for flexible authentication implementation

### Design System
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Color Scheme**: Custom tech-inspired color palette with primary blue, electric cyan, and tech teal
- **Typography**: Inter font family with multiple weight variations
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Dark Mode**: Built-in dark mode support with CSS custom properties

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router alternative (Wouter)
- **TypeScript**: Full TypeScript support across frontend and backend
- **Vite**: Development server, HMR, and build tooling
- **Express.js**: Backend HTTP server framework

### Database and ORM
- **PostgreSQL**: Primary database via @neondatabase/serverless for cloud deployment
- **Drizzle ORM**: Type-safe database operations and migrations
- **Drizzle Zod**: Schema validation integration

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Headless component primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component library built on Radix UI

### State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation for forms and API data

### Development and Build Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Tailwind CSS
- **Replit Plugins**: Development environment integration

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx/tailwind-merge**: Conditional CSS class management
- **nanoid**: Unique ID generation
- **class-variance-authority**: Component variant styling system