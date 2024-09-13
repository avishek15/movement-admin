# Movement Admin App

Welcome to the Movement Admin App repository! This project is built using [Next.js](https://nextjs.org/) and integrates authentication via [Appwrite](https://appwrite.io/). If you need the Appwrite configuration details, please reach out.

## Features

### Upcoming Features

1. **Subsequent Registrations: Admin Approval Required**

   - For all new registrations, the Admin must approve the user before they can access the system.

2. **Login and Registration System (Implemented) [Need to be Improved]**

   - The current login and registration system is functional but requires enhancements for better security and user experience.

3. **Email Verification**

   - Implement email verification to ensure users provide valid email addresses during registration.

4. **Dashboard for Gym Admin (on login)**

   - Admin can view all trainers and the respective progress of clients at a glance.

5. **Dashboard for Gym Trainers (on login)**

   - Trainers can see an overview of all clients assigned to them upon login.

6. **Client Screen Dashboard**

   - Trainers can access each client's screen to make modifications and track progress.
   - Includes health KPIs, recommended exercises, and progress graphs (weights, times, sets, repetitions, etc.).
   - Data is presented in an editable table format.

7. **Split to Two Apps**
   - The app will be divided into two separate apps: one for Admin (global view) and one for Gym Coaches (Coach App).

## Getting Started

To get started with the project, familiarize yourself with the following key files:

1. **app/(protected)/page.tsx**: The home page where the user's name is fetched from the backend.
2. **auth.js**: Contains client-side logic for authentication.
3. **middleware.js**: Handles redirection logic based on user authentication status.
4. **configs/appwriteConfig.ts**: Configuration file for Appwrite.
5. **configs/axiosinstance.js**: Sets up Axios for API calls, including cookie handling.
6. **app/api/get-name/route.js**: Defines the `/api/get-name` route.

Feel free to explore these files to understand the project structure and functionality.
