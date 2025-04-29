# Project Overview
This project provides a set of template configurations for modern web development. It includes setups for React (Vite) + TypeScript, Next.js, Shadcn-ui, Authjs, and Prisma to help you quickly bootstrap scalable web applications.

# Available Templates
- [React(vite) + TypeScript](https://github.com/ajaykumarn3000/template/tree/react-ts)
- [React(vite) + TypeScript + Shadcn-ui](https://github.com/ajaykumarn3000/template/tree/react-ts-shadcn)
- [Nextjs + TypeScript](https://github.com/ajaykumarn3000/template/tree/next-ts)
- [Nextjs + TypeScript + Shadcn-ui](https://github.com/ajaykumarn3000/template/tree/next-ts-shadcn)
- **[Nextjs + TypeScript + Shadcn-ui + Authjs + Prisma](https://github.com/ajaykumarn3000/template/tree/next-ts-shadcn-authjs-prisma)** *(current branch)*

# Get Started with Nextjs + TS + Shadcn-ui + Authjs + Prisma

```bash
# Clone repository                                                                        
git clone -b next-ts-shadcn-authjs-prisma https://github.com/ajaykumarn3000/template.git
```

```bash
# Install dependencies
npm install
```

```bash
# Generate a secret for authentication
npx auth secret
```

### Create a New App on Google Cloud

1. Go to the Google Cloud Console and create a new app.
2. Set the **Authorized Redirect URIs** to:
  ```
  http://localhost:3000/api/auth/callback/google
  ```

### Add Environment Variables

Create or update the following files with the required environment variables:

#### `.env.local`
```env
AUTH_SECRET= # Automatically added by `npx auth`. Read more: https://cli.authjs.dev
AUTH_GOOGLE_ID= # Your Google Client ID
AUTH_GOOGLE_SECRET= # Your Google Client Secret
```

#### `.env`
```env
DATABASE_URL= # Your database connection string
```

### Database Setup

Run the following commands to set up and generate the database schema:

```bash
# Apply database migrations
pnpm exec prisma migrate dev
```

```bash
# Generate Prisma client
pnpm exec prisma generate
```
