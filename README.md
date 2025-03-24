```bash
npm install
```

```bash
npx auth secret
```

Create a new app on google cloud

Authorized redirect URIs = http://localhost:3000/api/auth/callback/google 

### Add environment vaiables to 

.env.local
```py
AUTH_SECRET= # Added by `npx auth`. Read more: https://cli.authjs.dev
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

.env
```py
DATABASE_URL=
```

```bash
pnpm exec prisma migrate dev
```

To generate
```bash
pnpm exec prisma generate
```
