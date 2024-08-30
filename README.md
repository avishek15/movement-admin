# Movement Admin App Repository

This repository contains the source code for the Movement Admin App, built with [Next.js](https://nextjs.org/). The app currently implements authentication using [Appwrite](https://appwrite.io/). Please ask for the APPWRITE configuration.

## Features to be Implemented

1. **First Registration: Make the User Admin**

   - Upon the first registration, the user should be automatically assigned the Admin role.

2. **Subsequent Registrations: Admin Approval Required**

   - For all subsequent registrations, the Admin needs to approve the user registration before they can access the system.

3. **Login and Registration System (Implemented) [Need to be Improved]**

   - The current login and registration system is functional but requires improvements for better security and user experience.

4. **Email Verification**

   - Implement email verification to ensure that users provide valid email addresses during registration.

5. **... (More Features to be Added)**
   - Additional features will be listed as they are planned and implemented.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
